CREATE TABLE  Items (
    id int NOT NULL IDENTITY (1,1),
    region varchar(36) NOT NULL,
    district varchar(36) NOT NULL,
	city varchar(36) NOT NULL,
	indexx varchar(36) NOT NULL,
	street varchar(36) NOT NULL,
	houses varchar(400) NOT NULL,
	PRIMARY KEY (id)
);