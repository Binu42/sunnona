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
-- Table structure for table `sings`
--

DROP TABLE IF EXISTS `sings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sings` (
  `artistName` varchar(20) NOT NULL,
  `trackId` int(11) NOT NULL,
  `albumId` int(11) NOT NULL,
  PRIMARY KEY (`artistName`,`trackId`,`albumId`),
  KEY `FK_sings1` (`trackId`),
  KEY `FK_sings2` (`albumId`),
  CONSTRAINT `FK_sings` FOREIGN KEY (`artistName`) REFERENCES `artist` (`name`) ON DELETE CASCADE,
  CONSTRAINT `FK_sings1` FOREIGN KEY (`trackId`) REFERENCES `track` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_sings2` FOREIGN KEY (`albumId`) REFERENCES `album` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sings`
--

LOCK TABLES `sings` WRITE;
/*!40000 ALTER TABLE `sings` DISABLE KEYS */;
INSERT INTO `sings` VALUES ('ananya Bhat',1,106),('ananya bhat',1,107),('arjit',1,100),('arjit',1,104),('arjit',1,105),('armaan malik',1,102),('jubin',1,103),('vijay prakash',1,108),('armaan malik',2,104),('shankar mahadeva',2,103),('sonu Nigam',2,100),('sonu nigam',2,102),('sonu Nigam',2,105),('sonu nigam',2,108),('vijay prakash',2,106),('vijay prakash',2,107),('jubin',3,104),('Neha Kakkar',3,100),('neha Kakkar',3,105),('sanjith Hegde',3,106),('shreya Ghosal',3,103),('shreya ghosal',3,104),('sonu nigam',3,107),('udit narayan',3,102),('A.r. rahman',4,103),('arjit',4,103),('jubin',4,100),('sanjith hegde',4,107),('sonu Nigam',4,106),('udit Narayan',4,105),('armaan malik',5,100),('Shreya Ghosal',5,103),('sonu Nigam',5,104),('udit narayan',6,104);
/*!40000 ALTER TABLE `sings` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-09 23:44:41
