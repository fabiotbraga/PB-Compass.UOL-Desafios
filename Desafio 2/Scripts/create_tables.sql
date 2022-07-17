CREATE SCHEMA cleaner_schema ;

USE cleaner_schema;

CREATE TABLE IF NOT EXISTS `HOUSE_OWNER` (
  `id_house_owner` INT NOT NULL AUTO_INCREMENT,
  `cpf_house_owner` VARCHAR(45) NOT NULL,
  `name_house_owner` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_house_owner`));

CREATE TABLE IF NOT EXISTS `CLEANER` (
  `id_cleaner` INT NOT NULL AUTO_INCREMENT,
  `cpf_cleaner` VARCHAR(45) NOT NULL,
  `name_cleaner` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_cleaner`));

CREATE TABLE IF NOT EXISTS `HOUSE` (
  `id_house` INT NOT NULL AUTO_INCREMENT,
  `id_house_owner` INT NOT NULL,
  `size` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_house`),
  INDEX `id_house_owner_idx` (`id_house_owner` ASC) VISIBLE,
  CONSTRAINT `id_house_owner`
    FOREIGN KEY (`id_house_owner`)
    REFERENCES `HOUSE_OWNER` (`id_house_owner`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT);

CREATE TABLE IF NOT EXISTS `ADDRESS` (
  `id_address` INT NOT NULL AUTO_INCREMENT,
  `id_house` INT NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `neighborhood` VARCHAR(45) NOT NULL,
  `street` VARCHAR(45) NOT NULL,
  `number` INT NOT NULL,
  `complement` VARCHAR(5) NULL,
  INDEX `id_house_idx` (`id_house` ASC) VISIBLE,
  PRIMARY KEY (`id_address`),
  CONSTRAINT `id_house`
    FOREIGN KEY (`id_house`)
    REFERENCES `HOUSE` (`id_house`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT);

CREATE TABLE IF NOT EXISTS `CLEANING` (
  `id_cleaning` INT NOT NULL AUTO_INCREMENT,
  `id_house` INT NOT NULL,
  `data_cleaning` DATE NOT NULL,
  PRIMARY KEY (`id_cleaning`),
  INDEX `id_house_idx` (`id_house` ASC) VISIBLE,
  CONSTRAINT `id_house_`
    FOREIGN KEY (`id_house`)
    REFERENCES `mydb`.`HOUSE` (`id_house`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT);

CREATE TABLE IF NOT EXISTS `TABLE_CLEANERS_DAY` (
  `id_cleaner` INT NOT NULL,
  `id_cleaning` INT NOT NULL,
  PRIMARY KEY (`id_cleaner`, `id_cleaning`),
  INDEX `id_cleaning_idx` (`id_cleaning` ASC) VISIBLE,
  CONSTRAINT `id_cleaner`
    FOREIGN KEY (`id_cleaner`)
    REFERENCES `CLEANER` (`id_cleaner`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_cleaning`
    FOREIGN KEY (`id_cleaning`)
    REFERENCES `CLEANING_` (`id_cleaning`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE IF NOT EXISTS `FEEDBACK` (
  `id_feedback` INT NOT NULL AUTO_INCREMENT,
  `id_cleaning` INT NOT NULL,
  `score` INT NOT NULL,
  `comments` VARCHAR(300) NOT NULL,
  `cleaner_miss` BIT(1) NOT NULL,
  PRIMARY KEY (`id_feedback`),
  INDEX `id_cleaning_idx` (`id_cleaning` ASC) VISIBLE,
  CONSTRAINT `id_cleaning_`
    FOREIGN KEY (`id_cleaning`)
    REFERENCES `mydb`.`CLEANING_` (`id_cleaning`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT);

CREATE TABLE IF NOT EXISTS `PAYMENT` (
  `id_payment` INT NOT NULL AUTO_INCREMENT,
  `id_feedback` INT NOT NULL,
  `payment_be_made` BIT(1) NOT NULL,
  `price` FLOAT NOT NULL,
  `id_cleaner` INT NOT NULL,
  PRIMARY KEY (`id_payment`, `id_feedback`),
  INDEX `id_cleaner_idx` (`id_cleaner` ASC) VISIBLE,
  CONSTRAINT `id_feedback_`
    FOREIGN KEY (`id_feedback`)
    REFERENCES `mydb`.`FEEDBACK` (`id_feedback`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `id_cleaner_`
    FOREIGN KEY (`id_cleaner`)
    REFERENCES `CLEANER` (`id_cleaner`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT);
