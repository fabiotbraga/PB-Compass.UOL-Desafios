-- Dependendo do Tamanho da Residência, a Faxina tem um preço

SELECT X.id_house, X.id_feedback,X.price, H.size  FROM
(SELECT C.id_house, P.id_feedback, P.price FROM cleaning C
INNER JOIN feedback F
ON C.id_cleaning = F.id_cleaning
INNER JOIN
payment P
ON P.id_feedback = F.id_feedback) X
INNER JOIN house H
ON X.id_house = H.id_house;

-- Faxinas agendadas e não-realizadas (por qualquer motivo) não devem ser pagas; 
SELECT X.id_feedback, X.id_cleaner, CL.name_cleaner,
CASE 
    WHEN (X.payment_be_made) = 0 THEN 'Não'
    ELSE 'Sim' 
END AS faxineira_deve_paga FROM
(SELECT F.id_feedback,P.payment_be_made, P.id_cleaner
FROM feedback F
INNER JOIN payment P
ON F.id_feedback = P.id_feedback) X
INNER JOIN cleaner CL
ON X.id_cleaner = CL.id_cleaner;



