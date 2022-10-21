CREATE TABLE goods (
	id INTEGER primary key,
    title VARCHAR(20),
    quantity INTEGER CHECK (quantity > 0),
    price FLOAT(6,2),
    in_stock CHAR(1) CHECK (in_stock IN ('Y', 'N')
    );