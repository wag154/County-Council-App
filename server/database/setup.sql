DROP TABLE IF EXISTS UserAccount;
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS recyclingObjects;
DROP TABLE IF EXISTS UserActivity;
DROP TABLE IF EXISTS jobs;

CREATE TABLE UserAccount (
  UserAccount_id INT GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(30) NOT NULL,
  password VARCHAR(100) NOT NULL,
  PRIMARY KEY (UserAccount_id)
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
  Item_id INT GENERATED ALWAYS AS IDENTITY, 
  ItemName VARCHAR(30) NOT NULL,
  category VARCHAR(30) NOT NULL,
  ItemDescription VARChar (255) NOT NULL,
  PRIMARY KEY (Item_id)
);
CREATE TABLE jobs(
  jobs_id INT GENERATED ALWAYS AS IDENTITY,
  job_title VARCHAR(45) NOT NULL,
  job_description VARCHAR(225) NOT NULL,
  job_contactInfo VARCHAR(50) NOT NULL,
  PRIMARY KEY (jobs_id)
);
CREATE TABLE UserActivity (
  Activity_id INT GENERATED ALWAYS AS IDENTITY,
  UserAccount_id INT NOT NULL,
  jobs_id INT,
  Item_id INT,
  PRIMARY KEY (Activity_id),
  FOREIGN KEY (UserAccount_id) REFERENCES UserAccount(UserAccount_id),
  FOREIGN KEY (jobs_id) REFERENCES jobs(jobs_id),
  FOREIGN KEY (Item_id) REFERENCES recyclingObject(Item_id)
);
