-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2024 at 04:06 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `Book_id` int(10) NOT NULL,
  `Book_name` char(20) NOT NULL,
  `Author_name` char(20) NOT NULL,
  `dept_name` char(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`Book_id`, `Book_name`, `Author_name`, `dept_name`) VALUES
(101, 'Fundamentals of Data', 'Ellis Horowitz', 'CSE'),
(102, 'Analog and Digital E', 'Charles H Roth', 'CSE'),
(104, 'The Art Of Electroni', 'Paul Horowitz', 'ECE'),
(105, 'Computer Organizatio', 'Carl Hamacher', 'CSE'),
(106, 'Electrical Technolog', 'B.L.Theraja', 'EEE'),
(107, 'Electromagnetics', 'Stevan Ellingson', 'EEE');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `Dept_num` int(10) NOT NULL,
  `Dept_name` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`Dept_num`, `Dept_name`) VALUES
(1, 'CSE'),
(2, 'ECE'),
(3, 'AIDS'),
(4, 'Civil'),
(5, 'Mech'),
(6, 'EEE');

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE `faculty` (
  `F_name` varchar(20) NOT NULL,
  `SSN` varchar(10) NOT NULL,
  `Branch` varchar(10) NOT NULL,
  `Password` varchar(10) NOT NULL,
  `Phone_number` int(11) NOT NULL,
  `Email` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`F_name`, `SSN`, `Branch`, `Password`, `Phone_number`, `Email`) VALUES
('Rahul', '1001', 'CSE', 'rahul@11', 87643321, 'rahul@gmail.com'),
('Priya', '1002', 'ECE', 'priya@11', 97654321, 'priya@gmail.com'),
('Chiranjeevi', '1003', 'Mech', 'Chiru@11', 67899432, 'Chiranjeevi@gmail.co'),
('Anita', '1004', 'Civil', 'anita@11', 654322567, 'anita@gmail.com'),
('Chitrashree', '1005', 'AIDS', 'abc@11', 72643782, 'Chitrashree@gmail.co');

-- --------------------------------------------------------

--
-- Table structure for table `issued_books`
--

CREATE TABLE `issued_books` (
  `Book_id` int(10) NOT NULL,
  `USN` varchar(10) NOT NULL,
  `Issue_date` date NOT NULL,
  `Return_date` date NOT NULL,
  `Fine` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `issued_books`
--

INSERT INTO `issued_books` (`Book_id`, `USN`, `Issue_date`, `Return_date`, `Fine`) VALUES
(102, '2BU21CS149', '2024-03-01', '2024-03-28', 0),
(104, '2BU21EC005', '2024-02-05', '2024-03-31', 15),
(101, '2BU21CS162', '2024-01-10', '2024-01-31', 5),
(106, '2BU21EC001', '2023-12-31', '2024-03-27', 30),
(105, '2BU21CS149', '2024-02-12', '2024-03-01', 0);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `USN` varchar(10) NOT NULL,
  `Sname` char(20) NOT NULL,
  `S_email` varchar(20) NOT NULL,
  `Password` varchar(10) NOT NULL,
  `Branch` char(10) NOT NULL,
  `Semister` int(10) NOT NULL,
  `Phone_no` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`USN`, `Sname`, `S_email`, `Password`, `Branch`, `Semister`, `Phone_no`) VALUES
('2BU21CS149', 'Sneha', 'sneha@gmail.com', 'sneha@11', 'CSE', 5, 876426819),
('2BU21CS162', 'Supriya', 'supriya@gmail.com', 'supriya@12', 'CSE', 5, 2053243243),
('2BU21EC001', 'Aditi', 'aditi@gmail.com', 'aditi@12', 'ECE', 5, 123456789),
('2BU21EC005', 'Bhavana', 'bhavana@gmail.com', 'bhavana@12', 'ECE', 5, 346842157);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`Book_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`Dept_num`,`Dept_name`);

--
-- Indexes for table `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`SSN`);

--
-- Indexes for table `issued_books`
--
ALTER TABLE `issued_books`
  ADD KEY `bfk` (`Book_id`),
  ADD KEY `ufk` (`USN`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`USN`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `issued_books`
--
ALTER TABLE `issued_books`
  ADD CONSTRAINT `bfk` FOREIGN KEY (`Book_id`) REFERENCES `books` (`Book_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ufk` FOREIGN KEY (`USN`) REFERENCES `student` (`USN`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
