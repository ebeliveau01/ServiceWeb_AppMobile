CREATE TABLE Livre(
    id integer primary key auto_increment,
    uuid varchar(255),
    nom varchar(255),
    description text,
    auteurNom varchar(255),
    nombrePage integer,
    disponible bool,
    image varchar(255),
    imageBase bool
);

CREATE TABLE User(
    id integer primary key auto_increment,
    cle_api varchar(255)
);