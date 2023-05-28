-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-05-2023 a las 19:42:28
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_entrenamiento`
--
CREATE DATABASE IF NOT EXISTS `db_entrenamiento` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `db_entrenamiento`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dias`
--

CREATE TABLE `dias` (
  `id_dia` int(255) NOT NULL,
  `id_microciclo` int(255) NOT NULL,
  `nombre_dia` varchar(255) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ejercicios`
--

CREATE TABLE `ejercicios` (
  `id_ejercicio` int(255) NOT NULL,
  `id_dia` int(255) NOT NULL,
  `nombre_ejercicio` varchar(255) NOT NULL,
  `series_ejercicio` varchar(255) NOT NULL,
  `rir_ejercicio` varchar(255) NOT NULL,
  `descanso_ejercicio` varchar(255) NOT NULL,
  `intensidad_ejercicio` varchar(255) NOT NULL,
  `observacion_ejercicio` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entrenadores`
--

CREATE TABLE `entrenadores` (
  `id_entrenador` varchar(255) NOT NULL,
  `nombre_entrenador` varchar(255) NOT NULL,
  `apellido_entrenador` varchar(255) NOT NULL,
  `edad_entrenador` varchar(255) NOT NULL,
  `especialidad_entrenador` varchar(255) NOT NULL,
  `experiencia_entrenador` varchar(255) NOT NULL,
  `telefono_entrenador` varchar(255) NOT NULL,
  `email_entrenador` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `entrenadores`
--

INSERT INTO `entrenadores` (`id_entrenador`, `nombre_entrenador`, `apellido_entrenador`, `edad_entrenador`, `especialidad_entrenador`, `experiencia_entrenador`, `telefono_entrenador`, `email_entrenador`) VALUES
('a1', 'yaco', 'recroa', '18', 'hacer toros', 'mucha', '24944883218', 'yaco@gmail.com'),
('a4', 'elpepdfssde', 'ete123shech', '692', 'nose', 'nula', '897213897389', 'si@gmail.ru');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mesociclos`
--

CREATE TABLE `mesociclos` (
  `id_mesociclo` int(255) NOT NULL,
  `id_rutina` int(255) NOT NULL,
  `nombre_mesociclo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `microciclos`
--

CREATE TABLE `microciclos` (
  `id_microciclo` int(255) NOT NULL,
  `id_mesociclo` int(255) NOT NULL,
  `nombre_microciclo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rutina`
--

CREATE TABLE `rutina` (
  `id_rutina` int(255) NOT NULL,
  `id_usuario` varchar(255) NOT NULL,
  `id_entrenador` varchar(255) NOT NULL,
  `nombre_rutina` varchar(255) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` varchar(255) NOT NULL,
  `nombre_usuario` varchar(255) NOT NULL,
  `apellido_usuario` varchar(255) NOT NULL,
  `edad_usuario` varchar(255) NOT NULL,
  `genero_usuario` varchar(255) NOT NULL,
  `direccion_usuario` varchar(255) NOT NULL,
  `email_usuario` varchar(255) NOT NULL,
  `telefono_usuario` varchar(255) NOT NULL,
  `id_entrenador` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `apellido_usuario`, `edad_usuario`, `genero_usuario`, `direccion_usuario`, `email_usuario`, `telefono_usuario`, `id_entrenador`) VALUES
('a1', 'nico', 'prensa', '18', 'gay', 'casa nico', 'nicoprensa123@gmial.com', '23483242', 'a1'),
('a2', 'adad', 'ada', 'dad', 'dad', 'ada', 'dawd', 'adad', NULL),
('a3', 'nico', 'eteshech', '69', 'indefinido', 'miami', 'elpepeeteshech@gmail.com', '2494696969', NULL),
('a4', 'elpepdfssde', 'ete123shech', '692', 'indefinidos', 'miamibescb', 'elpepeeteshecasdah@gmail.com', '249469693269', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `dias`
--
ALTER TABLE `dias`
  ADD PRIMARY KEY (`id_dia`),
  ADD KEY `id_microciclo` (`id_microciclo`);

--
-- Indices de la tabla `ejercicios`
--
ALTER TABLE `ejercicios`
  ADD PRIMARY KEY (`id_ejercicio`),
  ADD KEY `id_dia` (`id_dia`);

--
-- Indices de la tabla `entrenadores`
--
ALTER TABLE `entrenadores`
  ADD PRIMARY KEY (`id_entrenador`);

--
-- Indices de la tabla `mesociclos`
--
ALTER TABLE `mesociclos`
  ADD PRIMARY KEY (`id_mesociclo`),
  ADD KEY `id_rutina` (`id_rutina`);

--
-- Indices de la tabla `microciclos`
--
ALTER TABLE `microciclos`
  ADD PRIMARY KEY (`id_microciclo`),
  ADD KEY `id_mesociclo` (`id_mesociclo`);

--
-- Indices de la tabla `rutina`
--
ALTER TABLE `rutina`
  ADD PRIMARY KEY (`id_rutina`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_entrenador` (`id_entrenador`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `id_usuario` (`id_entrenador`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `dias`
--
ALTER TABLE `dias`
  MODIFY `id_dia` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ejercicios`
--
ALTER TABLE `ejercicios`
  MODIFY `id_ejercicio` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mesociclos`
--
ALTER TABLE `mesociclos`
  MODIFY `id_mesociclo` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `microciclos`
--
ALTER TABLE `microciclos`
  MODIFY `id_microciclo` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rutina`
--
ALTER TABLE `rutina`
  MODIFY `id_rutina` int(255) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `dias`
--
ALTER TABLE `dias`
  ADD CONSTRAINT `dias_ibfk_1` FOREIGN KEY (`id_microciclo`) REFERENCES `microciclos` (`id_microciclo`);

--
-- Filtros para la tabla `ejercicios`
--
ALTER TABLE `ejercicios`
  ADD CONSTRAINT `ejercicios_ibfk_1` FOREIGN KEY (`id_dia`) REFERENCES `dias` (`id_dia`);

--
-- Filtros para la tabla `mesociclos`
--
ALTER TABLE `mesociclos`
  ADD CONSTRAINT `mesociclos_ibfk_1` FOREIGN KEY (`id_rutina`) REFERENCES `rutina` (`id_rutina`);

--
-- Filtros para la tabla `microciclos`
--
ALTER TABLE `microciclos`
  ADD CONSTRAINT `microciclos_ibfk_1` FOREIGN KEY (`id_mesociclo`) REFERENCES `mesociclos` (`id_mesociclo`);

--
-- Filtros para la tabla `rutina`
--
ALTER TABLE `rutina`
  ADD CONSTRAINT `rutina_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `rutina_ibfk_2` FOREIGN KEY (`id_entrenador`) REFERENCES `entrenadores` (`id_entrenador`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `id_usuario` FOREIGN KEY (`id_entrenador`) REFERENCES `entrenadores` (`id_entrenador`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
