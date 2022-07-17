USE cleaner_schema;

INSERT INTO address (
id_house,
city,
neighborhood,
street,
`number`) VALUES
(1, 'Belém', 'Jurunas', 'Rua Dutra', 444);

INSERT INTO address(
id_house,
city,
neighborhood,
street,
`number`,
complement) VALUES
(2,'Belém','Jurunas','Passagem Nossa Senhora de Fátima', 661, 'A'),
(3,'Belém','Pedreira','Travessa Perebebuí',33,'B'),
(4,'Belém','Jurunas','Vila Galileu',654,'D'),
(5,'Belém','Condor','Vila Bernardo Gimarães',12,'B'),
(6,'Belém','Coqueiro','Travessa SN-9',22,'3'),
(7,'Belém','Marambaia','Rua São Vicente',144,'B');

INSERT INTO address (
id_house,
city,
neighborhood,
street,
`number`) VALUES
(8,'Belém','Marco','Avenida Rômulo Maiorana',233),
(9,'Belém','Tapanã','Alameda A',45),
(10,'Belém','Mosqueiro','Rua Havaí',16);

SELECT*FROM address;