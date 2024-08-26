-- public.users definition
CREATE TABLE public.users (
	id bigserial NOT NULL,
	"name" varchar(255) NULL,
	"password" varchar(255) NULL,
	"role" varchar(255) NULL,
	email varchar(255) NULL,
	CONSTRAINT users_pkey PRIMARY KEY (id)
);
------------------------------------------------
CREATE TABLE public.demand_status (
	id bigserial NOT NULL,
	description varchar(255) NULL,
	CONSTRAINT demand_status_pkey PRIMARY KEY (id)
);

-------------------------------------------------------

CREATE TABLE public.category (
	id bigserial NOT NULL,
	description varchar(255) NULL,
	CONSTRAINT category_pkey PRIMARY KEY (id)
);

------------------------------------------------------------------------

-- public.items definition
CREATE TABLE public.items (
	id bigserial NOT NULL,
	description varchar(255) NULL,
	image bytea NULL,
	price float8 NOT NULL,
	category_id int8 NULL,
	CONSTRAINT items_pkey PRIMARY KEY (id)
);

-- public.items foreign keys
ALTER TABLE public.items ADD CONSTRAINT fkmwj262911sqtm7lw9yhmf125 FOREIGN KEY (category_id) REFERENCES public.category(id);
----------------------------------------

CREATE TABLE public.car (
	id bigserial NOT NULL,
	price float8 NULL,
	qtd int8 NULL,
	id_client int8 NULL,
	id_item int8 NULL,
	CONSTRAINT car_pkey PRIMARY KEY (id)
);

-- public.car foreign keys
ALTER TABLE public.car ADD CONSTRAINT fk4f540nob8n9bcvq97x52weaxy FOREIGN KEY (id_item) REFERENCES public.items(id);
ALTER TABLE public.car ADD CONSTRAINT fkkciuk24d6d6d84ie7r1xlnxjf FOREIGN KEY (id_client) REFERENCES public.users(id);

------------------------------------------------------
------------------------------------------------------
CREATE TABLE public.demand (
	id bigserial NOT NULL,
	date_demanded timestamp(6) NULL,
	order_hash varchar(255) NULL,
	price_by_quant float8 NULL,
	qtd_changed int8 NULL,
	client_id int8 NULL,
	item_id int8 NULL,
	status_id int8 NULL,
	date_status_changed timestamp(6) NULL,
	CONSTRAINT demand_pkey PRIMARY KEY (id)
);


-- public.demand foreign keys
ALTER TABLE public.demand ADD CONSTRAINT fk2cwn02j220h5s9u4yoxfj29b7 FOREIGN KEY (status_id) REFERENCES public.demand_status(id);
ALTER TABLE public.demand ADD CONSTRAINT fk5kl3ys07ste43a6dwhtbvx51v FOREIGN KEY (client_id) REFERENCES public.users(id);
ALTER TABLE public.demand ADD CONSTRAINT fknmkj4ergdw2pnmdw1f28jcu3f FOREIGN KEY (item_id) REFERENCES public.items(id);
-----------------------------------------------------------------------


