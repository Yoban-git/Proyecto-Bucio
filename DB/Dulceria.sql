create database dulceria;
use dulceria;


create table empleado(
   rfc varchar(20) primary key,
   nombre varchar(50),
   paterno varchar(50),
   materno varchar(50),
   fechaNacimiento date,
   sexo varchar(10),
   direccion varchar(100),
   celular bigint(20),
   imagen varchar(50));

create table proveedor(
	nombre varchar(50) primary key,
	producto varchar(50),
	telefono bigint(20));

create table recargas(
       compania varchar(50) primary key,
       celular bigint(20),
       monto int);

create table producto(
    codigo int primary key auto_increment,
    nombre varchar(100),
    precio double,
    cantidad int,
    distribuidor varchar(50),
    foreign key(distribuidor) references proveedor(nombre) on delete cascade on update cascade,
    imagen varchar(50));

create table factura(
     folio int primary key auto_increment,
     fechaemi date,
     horaemi time,
     total double,
     codigo int,
     rfc varchar(20),
     foreign key(codigo)references producto(codigo) on delete cascade on update cascade,
     foreign key(rfc)references empleado(rfc) on delete cascade on update cascade);




jdbc:mysql://localhost:3306/mysql