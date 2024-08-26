INSERT INTO public.demand_status
(id, description)
VALUES(1, 'Solicitado');

INSERT INTO public.demand_status
(id, description)
VALUES(2, 'Em andamento');

INSERT INTO public.demand_status
(id, description)
VALUES(3, 'Disponível para entrega');

INSERT INTO public.demand_status
(id, description)
VALUES(4, 'Entregue');
------------------------------------------------

INSERT INTO public.category
(id, description)
VALUES(2, 'doces');
INSERT INTO public.category
(id, description)
VALUES(1, 'bolos');
INSERT INTO public.category
(id, description)
VALUES(3, 'salgados');


select * from category;