DROP DATABASE IF EXISTS wild_circus;
CREATE DATABASE wild_circus;
USE wild_circus;
CREATE TABLE category
(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name_category VARCHAR(150) NOT NULL
);

INSERT INTO category 
(name_category)
VALUES
('Humour'),
('Animaux'),
('Jonglage'),
('Voltige'),
('Magie');