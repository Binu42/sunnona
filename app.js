require('dotenv').config()
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const cors = require('cors')

// Create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.password,
  database: 'sunnona'
});

// Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySql Connected...');
});

const app = express();
app.use(express.json({}))
app.use(cors());

app.post('/register', (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password)
  bcrypt.genSalt(5, (error, salt) => {
    bcrypt.hash(password, salt, (error, hash) => {
      if (error) throw error;
      else {
        let checksql = `select * from user where name=` + mysql.escape(email);
        let query = db.query(checksql, (err, result) => {
          if (err) throw new Error(err);
          if (result[0]) {
            console.log(result)
            res.send('user already exist with same email');
          } else {
            let register = { name: email, password: hash };
            let sql = 'INSERT INTO user SET ?';
            let query = db.query(sql, register, (err, result) => {
              if (err) throw err;
              const payload = {
                user: {
                  email: email
                }
              }

              jwt.sign(
                payload,
                "5646546",
                { expiresIn: 10000 },
                (error, token) => {
                  if (error) throw error;
                  console.log(token)
                  res.json({ user: { token: token, name: email } });
                }
              )
            });
          }
        })
      }
    })
  })
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  let sqlSearch = "select password from user where name=" + mysql.escape(email);
  let query = db.query(sqlSearch, (err, result) => {
    if (err) throw new Error(err);
    // const resultJson = JSON.parse(result)
    // console.log(result[0].password)
    if (result[0]) {
      bcrypt.compare(password, result[0].password, (err, isMatch) => {
        if (err) throw new Error(err);
        if (!isMatch) {
          console.log(result)
          res.send('Hello user')
        } else {
          const payload = {
            user: {
              email: email
            }
          }

          jwt.sign(
            payload,
            "5646546",
            { expiresIn: 10000 },
            (error, token) => {
              if (error) throw error;
              console.log(token)
              res.json({ user: { token: token, name: email } });
            }
          )
        }
      })
    } else {
      res.send('User not found');
    }
  })
})

app.get('/albums', (req, res) => {
  // let sql = "select a.name as albumName, a.id, a.image as albumImage, t.name as trackName, t.audioLink as audio from album a, track t where a.id=t.albumId";
  let sql = "select a.name as artistName, A.image as albumImage, A.id, t.id as trackId, t.name as trackName, A.name as albumName, t.audioLink as audio from artist a, track t, album A, sings s where a.name=s.artistName and s.albumId=t.albumId and s.trackId=t.id and t.albumId=A.id;"
  db.query(sql, (error, results) => {
    if (error) throw new Error(error);

    // res.send(results)
    const albumDetails = []
    if (results) {
      const albumResult = []
      for (result of results) {
        const album = {
          albumId: result.id,
          albumName: result.albumName,
          albumArtwork: result.albumImage,
          songs: []
        }
        for (result1 of results) {
          if (result.id === result1.id) {
            const song = {
              id: result1.trackId,
              name: result1.trackName,
              src: result1.audio,
              artistName: result1.artistName
            }
            album.songs.push(song);
          }
        }
        if (albumResult.length !== 0) {
          var count = 0;
          for (result of albumResult) {
            if (result.albumName === album.albumName) {
              count++;
              break;
            }
          }
          if (count === 0) {
            albumResult.push(album)
          }
        } else {
          albumResult.push(album)
        }

      }
      res.send(albumResult);
    }
  })
})

app.get('/artists', (req, res) => {
  let sql = "select a.name as artistName, a.image as artistImage, t.albumId as albumId, t.id as trackId, t.name as trackName, t.audioLink as audio from artist a, track t, sings s where a.name=s.artistName and s.trackid=t.id and s.albumId=t.albumId";
  db.query(sql, (error, results) => {
    if (error) throw new Error(error);

    // res.send(result);
    const artistsResult = [];
    for (result of results) {
      const artist = {
        albumId: result.albumId,
        albumName: result.artistName,
        albumArtwork: result.artistImage,
        songs: []
      }
      for (artist1 of results) {
        if (artist1.artistName === artist.albumName) {
          const song = {
            id: artist1.trackId,
            name: artist1.trackName,
            src: artist1.audio
          }
          artist.songs.push(song);
        }
      }
      if (artistsResult.length !== 0) {
        var count = 0;
        for (result of artistsResult) {
          if (artist.albumName === result.albumName) {
            count++;
            break;
          }
        }
        if (!count) {
          artistsResult.push(artist)
        }
      } else {
        artistsResult.push(artist);
      }
    }
    res.send(artistsResult)
  })
})

app.get('/genres', (req, res) => {
  let sql = "select t.name as trackName, t.audioLink as audioLink, t.id as trackId, g.name as genreName, g.image as genreImage, t.albumId as albumId from track t, genre g where t.genreId=g.id";
  db.query(sql, (err, results) => {
    if (err) throw new Error(err);

    // res.send(results)
    var genreResult = [];
    for (result of results) {
      var genre = {
        albumId: result.albumId,
        albumName: result.genreName,
        albumArtwork: result.genreImage,
        songs: []
      }

      for (result1 of results) {
        if (result1.genreName === result.genreName) {
          let song = {
            id: result1.trackId,
            name: result1.trackName,
            src: result1.audioLink
          }
          genre.songs.push(song);
        }
      }
      // console.log(genreResult.length)
      if (genreResult.length !== 0) {
        var count = 0;
        for (result of genreResult) {
          if (genre.albumName === result.albumName) {
            // console.log(result.genreName, genre.albumName)
            count++;
            break;
          }
        }
        if (count === 0) {
          genreResult.push(genre)
        }
      } else {
        genreResult.push(genre);
      }
    }
    res.send(genreResult)
  })
})

app.post('/add/favourite', (req, res) => {
  let data = { name: req.body.userId, trackId: req.body.trackId, albumId: req.body.albumId };
  let sql = `insert into favourites set ?`;
  db.query(sql, data, (error, result) => {
    if (error) throw new Error(error);

    res.send(result);
  })
})

app.listen('4000', () => {
  console.log('server is running at 4000');
})