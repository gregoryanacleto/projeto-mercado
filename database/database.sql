CREATE DATABASE mercado;

USE mercado;

CREATE TABLE produtos (
 id INT AUTO_INCREMENT PRIMARY KEY,
 nome VARCHAR(100),
 preco DECIMAL(10,2),
 estoque INT
);
