# Kwidzy - Back
Dbeaver, MySQL.
--

## SQL Creation

SQL pour créer la base de données :
```sql
CREATE DATABASE kwidzy;
```


```bash
npx tsc - pour compiler le typescript  
node dist/app.js
```

```bash
drop table if exists answer;
drop table if exists question;
drop table if exists category;
drop table if exists user;

CREATE TABLE category
(
    id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name CHAR(30) NOT NULL,
     level CHAR(15) NOT NULL,
     questions_nbr INTEGER NOT NULL,
     PRIMARY KEY (id)
);

CREATE TABLE question
(
    id MEDIUMINT NOT NULL AUTO_INCREMENT,
     category_id MEDIUMINT NOT NULL,
     question_text CHAR(200) not null,
     PRIMARY KEY (id),
     FOREIGN KEY (category_id) REFERENCES category(id)
);

CREATE TABLE answer
(
    id MEDIUMINT NOT NULL AUTO_INCREMENT,
     question_id MEDIUMINT NOT NULL,
     answer_text CHAR(30),
     is_correct BOOLEAN,
     PRIMARY KEY (id),
     FOREIGN KEY (question_id) REFERENCES question(id)
);

CREATE TABLE user
(
    id MEDIUMINT NOT NULL AUTO_INCREMENT,
     question_id MEDIUMINT NOT NULL,
     name CHAR(50),
     email CHAR(100),
     password CHAR(100),
     PRIMARY KEY (id)
);

INSERT INTO category (name, level, questions_nbr)
 VALUES
    ('Numérique', 'Facile', 10),
    ('Sport', 'Moyen', 10),
    ('Humour', 'Difficile', 15);

INSERT INTO question (category_id, question_text )
 VALUES
    (1, 'Qui est le créateur de Facebook ?'),
    (2, 'Qui a gagné la coupe du monde en 2018 ?'),
    (3, 'Mr et Madame Croche ont une fille, comment sappelle t\'elle ?');

INSERT INTO answer (question_id, answer_text, is_correct)
 values
 #Q1
 (1, 'Pas lui', false),
 (1, 'Lui', true),
 (1, 'Pas lui', false),
 (1, 'Pas lui', false),
 #Q2
 (2, 'Allemagne', false),
 (2, 'Portugal', false),
 (2, 'Espagne', false),
 (2, 'France', true),
 #Q3
 (3, 'Sarah', true),
 (3, 'Caroline', false),
 (3, 'Thomas', false),
 (3, 'La réponse D', true);
```