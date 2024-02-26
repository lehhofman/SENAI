DROP DATABASE IF EXISTS inventario;
CREATE DATABASE inventario CHARSET=UTF8 COLLATE utf8_general_ci;
USE inventario;

CREATE TABLE item(
    id varchar(5) not null primary key,
    nome varchar(50) not null,
    descricao text,
    valor decimal(10,2) not null
);

INSERT INTO item VALUES
('i001','Samsung','Celular A23',100.00),
('i002','Motorola','Moto One Plus',2200.00),
('i003','Xiaomi','Note 7',500.00),
('i004','LG','K11',450.00),
('i005','Apple','Iphone 11',5000.00);

select * from item;