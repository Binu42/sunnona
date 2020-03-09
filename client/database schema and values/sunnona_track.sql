CREATE DATABASE  IF NOT EXISTS `sunnona` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `sunnona`;
-- MySQL dump 10.13  Distrib 5.7.29, for Linux (x86_64)
--
-- Host: localhost    Database: sunnona
-- ------------------------------------------------------
-- Server version	5.7.29-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `track`
--

DROP TABLE IF EXISTS `track`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `track` (
  `id` int(11) NOT NULL,
  `albumId` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `genreId` int(11) DEFAULT NULL,
  `audioLink` varchar(200) DEFAULT NULL,
  `lang` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`,`albumId`),
  KEY `FK_track` (`albumId`),
  KEY `FK_track1` (`genreId`),
  CONSTRAINT `FK_track` FOREIGN KEY (`albumId`) REFERENCES `album` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_track1` FOREIGN KEY (`genreId`) REFERENCES `genre` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `track`
--

LOCK TABLES `track` WRITE;
/*!40000 ALTER TABLE `track` DISABLE KEYS */;
INSERT INTO `track` VALUES (1,100,'bekhayali',5,1,'/audio/songs/kabir singh/1.mp3','hindi'),(1,102,'chashni-bharat',3,3,'audio/songs/bharat/1.mp3','hindi'),(1,103,'Dabang',0,5,'/audio/songs/dabang3/1.mp3','hindi'),(1,104,'aasa nahi yaha',0,2,'audio/songs/ashiqui2/1.mp3','hindi'),(1,105,'Jogi',0,1,'audio/songs/saadi/1.mp3','hindi'),(1,106,'Dheera Dheera',0,1,'audio/songs/kgf/1.mp3','Kannada'),(1,107,'Belageddu',0,2,'audio/songs/kirik party/1.mp3','kannada'),(1,108,'chanooranu',0,3,'audio/songs/mufti/1.mp3','kannada'),(2,100,'Tujhe kitna Chane Lage Hum',0,2,'audio/songs/kabir singh/2.mp3','hindi'),(2,102,'aytheye aa-bharat',1,2,'audio/songs/bharat/2.mp3','hindi'),(2,103,'Hud Hud',1,4,'audio/songs/dabang3/2.mp3','hindi'),(2,104,'Bhula Dena',0,3,'audio/songs/ashiqui2/2.mp3','hindi'),(2,105,'Main Hoon Saath Tere',0,2,'audio/songs/saadi/2.mp3','hindi'),(2,106,'Garbadhi',0,1,'audio/songs/kgf/2.mp3','Kannada'),(2,107,'kaagadada',0,3,'audio/songs/kirik party/2.mp3','kannada'),(2,108,'Onti Salaga',0,5,'audio/songs/mufti/2.mp3','kannada'),(3,100,'Mere sohneya',4,1,'audio/songs/kabir singh/3.mp3','hindi'),(3,102,'slow motion-bharat',0,4,'audio/songs/bharat/3.mp3','hindi'),(3,103,'Awara',0,2,'audio/songs/dabang3/3.mp3','hindi'),(3,104,'Hum Mar Jayenge',0,1,'audio/songs/ashiqui2/3.mp3','hindi'),(3,105,'Tu Banja Gali Benaras Ki',1,3,'audio/songs/saadi/3.mp3','hindi'),(3,106,'salaam Rocky',0,3,'audio/songs/kgf/3.mp3','Kannada'),(3,107,'katheyonda',0,4,'audio/songs/kirik party/3.mp3','kannada'),(4,100,'tera Ban Jaunga',1,2,'audio/songs/kabir singh/4.mp3','hindi'),(4,103,'naina Lade',0,4,'audio/songs/dabang3/4.mp3','hindi'),(4,104,'Milne hai mujhse aai',0,4,'audio/songs/ashiqui2/4.mp3','hindi'),(4,105,'Mera Intekam Dekhegi',0,1,'audio/songs/saadi/4.mp3','hindi'),(4,106,'Sidila Bharava',0,4,'audio/songs/kgf/4.mp3','Kannada'),(4,107,'last Bench',0,4,'audio/songs/kirik party/4.mp3','kannada'),(5,100,'Tujhe Kitna Chahein aur',8,2,'audio/songs/kabir singh/5.mp3','hindi'),(5,103,'Yu karke',0,3,'audio/songs/dabang3/5.mp3','hindi'),(5,104,'Piya AAye Na',0,5,'audio/songs/ashiqui2/5.mp3','hindi'),(6,104,'Sunn-Raha Hai Na Tu',0,2,'audio/songs/ashiqui2/6.mp3','hindi');
/*!40000 ALTER TABLE `track` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-09 23:44:43
