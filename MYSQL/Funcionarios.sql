
CREATE TABLE tb_funcionarios(
    id bigint auto_increment,
	nome varchar(255) not null,
	ID int,
	salario decimal not null,
    PRIMARY KEY (id)
);
INSERT INTO tb_funcionarios(nome, ID , salario) 
values ("Cassanda",377, 2000.00);	
INSERT INTO tb_funcionarios(nome, ID , salario) 
values ("Ferdinando",345, 1350.00);
INSERT INTO tb_funcionarios(nome, ID , salario) 
values ("Jose",366, 1500.00);
INSERT INTO tb_funcionarios(nome, ID , salario) 
values ("Monique",364, 1350.00);
INSERT INTO tb_funcionarios(nome, ID , salario) 
values ("Leo",355, 2000.00);
SELECT * FROM tb_funcionarios;
SELECT * FROM tb_funcionarios WHERE salario >= 2000;


