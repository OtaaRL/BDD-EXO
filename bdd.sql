CREATE DATABASE eventhub;

use eventhub;

CREATE TABLE users
(us_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
us_username VARCHAR(255) NOT NULL UNIQUE,
us_password TEXT NOT NULL,
us_email VARCHAR(255) NOT NULL UNIQUE)
ENGINE=InnoDB;

CREATE TABLE events (
ev_id INT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
ev_title VARCHAR(255) NOT NULL,
ev_description TEXT,
ev_date DATE,
ev_location VARCHAR(255),
ev_owner INT NOT NULL,
CONSTRAINT ev_owner FOREIGN KEY (ev_owner) REFERENCES users(us_id) )
ENGINE=InnoDB;

CREATE TABLE comments (
co_id INT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
co_comments TEXT NOT NULL,
co_user INT NOT NULL,
co_event INT NOT NULL,
CONSTRAINT co_user FOREIGN KEY (co_user) REFERENCES users(us_id),
CONSTRAINT co_event FOREIGN KEY (co_event) REFERENCES events(ev_id) )
ENGINE=InnoDB;

CREATE TABLE participants (
pa_user INT NOT NULL,
pa_event INT NOT NULL,
PRIMARY KEY (pa_user,pa_event),
CONSTRAINT pa_user FOREIGN KEY (pa_user) REFERENCES users(us_id),
CONSTRAINT pa_event FOREIGN KEY (pa_event) REFERENCES events(ev_id) )
ENGINE=InnoDB;


CREATE USER 'theo'@'%' IDENTIFIED BY 'Banane3945$';
CREATE USER 'theo'@'localhost' IDENTIFIED BY 'Banane3945$';

GRANT SELECT, UPDATE, DELETE, INSERT ON eventhub.* TO 'theo'@'%';
GRANT SELECT, UPDATE, DELETE, INSERT ON eventhub.* TO 'theo'@'localhost';

FLUSH PRIVILEGES;
