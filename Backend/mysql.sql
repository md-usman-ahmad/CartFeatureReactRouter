create database ECommAddtoCart_2;
use ECommAddtoCart_2;

create table users(
	userId int primary key auto_increment,
    firstname varchar(100),
    age int,
    gender enum("Male","Female"),
    username varchar(100),
    email varchar(100),
    password varchar(100),
    provider varchar(100)
);

create table Products(
	productId int primary key auto_increment,
    imgsrc text,
	title varchar(50),
    slogan varchar(300),
    price varchar(50),
    category varchar(50)
);

select * from Products;
-- delete from Products where productId in(17,18,19,20);
insert into Products(imgsrc,title,slogan,price,category) values
("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWrQ_1b8KOyrDBoie2e45eHAiokF2PD0fxA&s","Vivo x200 Pro","A flagship that turns every click into art.","99999","electronics"),
("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXVo9M5kSG9N_8qLkIhoe79Ntjzu2gQwclQ&s","Oppo FindX8 Pro","Redefining smartphone photography, one shot at a time.","99999","electronics"),
("https://www.autovista.in/assets/img/new_cars_colour_variants/ciaz-colour-metallic-premium-silver.jpg","Ciaz","Drive with Style, Arrive with Confidence.","900000","electronics"),
("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvejmrc3ZZKDjdFvNpnSDoBv07eDTqK_yDLw&s","Iphone XR","Turns every game into a smooth masterpiece.","86000","electronics");

create table CartItems(
    imgsrc text,
	title varchar(50),
    slogan varchar(300),
    price varchar(50),
    category varchar(50),
    quantity int,
    pId int,
    cartBy int,
    foreign key (cartBy) references Products(productId)
);

select * from CartItems;	
select * from CartItems where pId = 3 AND cartBy = 3;
-- truncate table CartItems;
-- drop table CartItems;

