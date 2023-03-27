DROP TABLE IF EXISTS UserAccount;
DROP TABLE IF EXISTS recyclingObjects;
DROP TABLE IF EXISTS UserActivity;
DROP TABLE IF EXISTS jobs;

CREATE TABLE UserAccount (
  UserAccount_id INT GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(30) NOT NULL,
  password VARCHAR(100) NOT NULL,
  jobs_id INT,
  PRIMARY KEY UserAccount_id,
  FOREIGN KEY jobs_id REFERENCES jobs(jobs_id)
);
CREATE TABLE UserActivity (
  Activity_id INT GENERATED ALWAYS AS IDENTITY,
  UserAccount_id INT NOT NULL,
  jobs_id INT NOT NULL,
  PRIMARY KEY Activity_id,
  FOREIGN KEY UserAccount_id REFERENCES UserAccount(UserAccount_id),
  FOREIGN KEY jobs_id REFERENCES jobs (jobs_id)
);
CREATE TABLE recyclingObjects (
  Item_id INT GENERATED ALWAYS AS IDENTITY, 
  ItemName VARCHAR(30) NOT NULL,
  ItemDescription VARChar (255) NOT NULL,
  UserAccount_id INT,
  PRIMARY KEY Item_id,
  FOREIGN KEY Item_id REFERENCES UserAccount(UserAccount_id)
);
CREATE TABLE jobs(
  jobs_id INT GENERATED ALWAYS AS IDENTITY,
  job_title VARCHAR(45),
  job_description VARCHAR(225),
  job_contactInfo VARCHAR(50)
  PRIMARY KEY jobs_id
);
