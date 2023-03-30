DROP TABLE IF EXISTS UserAccount cascade;
DROP TABLE IF EXISTS events cascade;
DROP TABLE IF EXISTS recyclingObject cascade;
DROP TABLE IF EXISTS UserActivity cascade;
DROP TABLE IF EXISTS jobs cascade;
DROP TABLE IF EXISTS token;

CREATE TABLE userAccount (
  userAccount_id INT GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(30) NOT NULL,
  password VARCHAR(100) NOT NULL,
  PRIMARY KEY (userAccount_id)
);
CREATE TABLE token (
  token_id INT GENERATED ALWAYS AS IDENTITY,
  user_id INT NOT NULL,
  Token CHAR(36) UNIQUE NOT NULL,
  PRIMARY KEY (token_id),
  FOREIGN KEY (user_id) REFERENCES UserAccount(UserAccount_id)
);
CREATE TABLE events (
  events_id INT GENERATED ALWAYS AS IDENTITY,
  event_name VARCHAR(30) NOT NULL,
  event_description VARCHAR(255) NOT NULL,
  event_place VARCHAR (50) NOT NULL,
  event_time VARCHAR(30) NOT NULL,
  PRIMARY KEY (events_id)
);
CREATE TABLE recyclingObject (
  item_id INT GENERATED ALWAYS AS IDENTITY, 
  itemName VARCHAR(30) NOT NULL,
  itemDescription VARCHAR (255) NOT NULL,
  itemCategory VARCHAR(100) NOT NULL,
  PRIMARY KEY (item_id)
);
CREATE TABLE jobs(
  jobs_id INT GENERATED ALWAYS AS IDENTITY,
  job_title VARCHAR(45) NOT NULL,
  job_description VARCHAR(225) NOT NULL,
  job_pay VARCHAR(30),
  job_contactInfo VARCHAR(50) NOT NULL,
  PRIMARY KEY (jobs_id)
);
CREATE TABLE userActivity (
  activity_id INT GENERATED ALWAYS AS IDENTITY,
  userAccount_id INT NOT NULL,
  jobs_id INT,
  item_id INT,
  PRIMARY KEY (activity_id),
  FOREIGN KEY (userAccount_id) REFERENCES userAccount(userAccount_id),
  FOREIGN KEY (jobs_id) REFERENCES jobs(jobs_id),
  FOREIGN KEY (item_id) REFERENCES recyclingObject(item_id)
);
