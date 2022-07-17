USE cleaner_schema;

INSERT INTO payment (id_feedback,
payment_be_made,
price,
id_cleaner
) VALUES
(1,1,300.00,1),
(1,1,300.00,2),
(1,1,300.00,4),
(2,1,100.00,2),
(3,1,200.00,3),
(4,1,300.00,2),
(4,1,300.00,4),
(4,0,0.0,6),
(5,1,100.00,5),
(6,1,200.00,6),
(6,1,200.00,9),
(7,1,300.00,1),
(7,1,300.00,7),
(7,1,300.00,8),
(8,1,100.00,8),
(9,1,200.00,9),
(9,1,200.00,10),
(10,0,0.0,1),
(10,1,300.00,6),
(10,1,300.00,10);

SELECT * FROM payment;