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

CREATE TABLE performance
(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name_performance VARCHAR(150) NOT NULL,
  description_performance VARCHAR(400) NULL,
  photo_performance VARCHAR(250) NULL,
  category_id INT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES category(id)
);

INSERT INTO performance 
(name_performance, description_performance, photo_performance, category_id)
VALUES
('Spectacle de Bozo le clown', 'Un spectacle de clown', 'https://zupimages.net/up/20/05/ws1s.jpg', 1),
("L'antre des fauves", 'Un spectacle de fauve', 'https://zupimages.net/up/20/05/ws1s.jpg', 2),
('Quilles ou tronçonneuses ?', 'Un spectacle de jonglage entre Max Pinder et Mr Bricolage', 'https://zupimages.net/up/20/05/ws1s.jpg', 3),
("Le saut de l'ange", 'Un spectacle de trapézistes', 'https://zupimages.net/up/20/05/ws1s.jpg', 4),
('Where is the money Lebowsky ?', 'Un spectacle de magie inspiré du CAC40', 'https://zupimages.net/up/20/05/ws1s.jpg', 5);

CREATE TABLE artist
(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(150) NOT NULL,
  lastname VARCHAR(150) NOT NULL,
  description_artist VARCHAR(400) NULL,
  photo_artist VARCHAR(250) NULL,
  performance_id INT NOT NULL,
  FOREIGN KEY (performance_id) REFERENCES performance(id)
);

INSERT INTO artist
(firstname, lastname, description_artist, photo_artist, performance_id)
VALUES
('John', 'Gacy', 'Un clown exceptionnel', 'https://zupimages.net/up/20/05/xq8o.jpg', 1),
('Tony', 'Python', 'Un dresseur de fauve', 'https://zupimages.net/up/20/05/xq8o.jpg', 2),
('Igor', 'Gone', "Ancien chef de rayon à Mr Bricolage, Igor est capable de jongler avec n'importe quoi", 'https://zupimages.net/up/20/05/xq8o.jpg', 3),
('Terrence', 'Stoot', 'Trapeziste mélomane', 'https://zupimages.net/up/20/05/xq8o.jpg', 4),
('Philippe', 'Argyle', 'Trapéziste mélomane', 'https://zupimages.net/up/20/05/xq8o.jpg', 4),
('Jeffrey', 'Lebowski', 'Prestigitateur de renom et ancien trader', 'https://zupimages.net/up/20/05/xq8o.jpg', 5);