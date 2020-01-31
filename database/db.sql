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
('John', 'Gacy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget mauris risus. Aenean ut nisl in erat feugiat egestas euismod varius justo. Suspendisse consequat elit et arcu blandit convallis. Ut sodales sem vitae nibh auctor gravida. Phasellus cursus libero vitae justo cursus bibendum.', 'https://randomuser.me/api/portraits/men/23.jpg', 1),
('Tony', 'Python', 'Cras diam justo, faucibus vel faucibus vitae, aliquet id nunc. Integer dapibus fermentum magna quis convallis. Cras ut massa nec risus scelerisque laoreet. Donec rutrum leo a sapien pharetra, id fermentum ipsum mattis. Quisque risus mi, faucibus ac dignissim eu, ullamcorper a dui.', 'https://randomuser.me/api/portraits/men/75.jpg', 2),
('Igor', 'Gone', "Donec ullamcorper tristique orci, fermentum hendrerit metus euismod nec. Maecenas et iaculis felis. Nullam eget porttitor nibh. Donec lectus ex, interdum id ipsum ac, condimentum mollis leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean nibh nisi, sollicitudin sed est a, sagittis feugiat ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.", 'https://randomuser.me/api/portraits/men/74.jpg', 3),
('Terrence', 'Stoot', 'Quisque leo enim, pharetra sit amet dolor non, ullamcorper pulvinar est. Aliquam vitae luctus tellus, eget convallis turpis. Cras maximus leo ante, id consequat libero feugiat congue. Nullam id nisl gravida, interdum nibh sed, molestie magna. Nulla elit mi, congue eget elementum quis, semper ut nibh.', 'https://randomuser.me/api/portraits/men/5.jpg', 4),
('Philippe', 'Argyle', 'In hac habitasse platea dictumst. Duis congue ex quis mauris tincidunt, ac molestie enim hendrerit. Aliquam sapien arcu, consequat et venenatis vel, mollis in nibh. Nunc egestas quam quis mauris egestas, nec sagittis massa blandit.', 'https://randomuser.me/api/portraits/men/45.jpg', 4),
('Jeffrey', 'Lebowski', 'Ut sagittis a nisi et tempus. Curabitur et turpis in turpis ornare scelerisque. Vivamus nulla felis, aliquet id rhoncus pellentesque, consectetur ac mauris. Aenean mauris risus, faucibus sit amet massa pellentesque, hendrerit feugiat nulla. Sed porttitor elementum mauris sit amet consequat.', 'https://randomuser.me/api/portraits/men/1.jpg', 5);