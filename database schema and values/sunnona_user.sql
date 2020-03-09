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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `name` varchar(50) NOT NULL,
  `password` varchar(600) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('binuhrs@gmail.com','$2a$05$c5eNApA35vh0yQJgnBfp9eqqTx3zCkBCEhzCXsaEPuuST8cgwTdmO'),('dfsasfdsa@gmail.com','$2a$05$/NhceKWWYtzShQBgVsgvCOkNPY1g7VE7OO44UC8jxEXZAm1vN4v.y'),('dfsasfdsaa@gmail.com','$2a$05$gq90XZLXL707MvF5kvnqNe9r0PJgIsB2VNXcA6AMIkcf/ySjjmkNa'),('kbinu4000@gmail.com','$2a$05$WJ2isXAjjiZc4n3dFU2HZuLplgRONw3rP.XoMC6dIIHTLNOmr/FD6'),('kbinu40@gmail.com','$2a$05$Q8xjm16t/sI4NkogRXfbCePev/CVPQnkE9OYDDbfjHBybyfD.qrJK'),('kbinu442@gmail.com','$2a$05$xo58QAv1pkEWrSdKvBvunuwAQ4X1OwQwpkK8aWg/Ai/NgRHDhv7TK'),('kbinu44@gmail.com','$2a$05$RB.y6.rP.yId1ePAfZ9GFOjeU.q7pBnIfGUJbeIBN/Y0kp23/HccO'),('kbinu4@gmail.com','$2a$05$.bNNJdadLqXRh.UxbGL5h.pWEg00lLeFoQjQtrPzcD.ZGb3.vaBcm');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-09 23:44:42
