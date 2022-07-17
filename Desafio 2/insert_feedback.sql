USE cleaner_schema;

INSERT INTO feedback (
id_cleaning,
score,
comments,
cleaner_miss) VALUES 
(1,5,'Muito eficientes, recomendo!',0),
(2,4,'Boa no geral, necessita ser um pouco mais ágil',0),
(3,5,'Recomendo',0),
(4,1,'Esforçadas, porém a diarista Teresa Jordão Paz não apareceu para trabalhar',1),
(5,5,'Excelente',0),
(6,3,'Boa, mas atrasou para o trabalho',0),
(7,5,'Recomendo',0),
(8,5,'Muito prestativa!',0),
(9,5,'Excelentes',0),
(10,2,'Péssimo, a diarista Clara Proença Castro faltou ao trabalho',1);

SELECT * FROM feedback;