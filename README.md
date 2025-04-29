# Workshop_Dataprev
Repository for all the code, documentation and presentation for the Workshop at Dataprev

For this example you will need Postgres and Rabbit MQ running on container, below you can find the commands for Docker

##POSTGRES EXECUTING ON DOCKER WITH VOLUME
docker run --name postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -v pgdata:/var/lib/postgresql/data -d postgres

docker run -d --hostname rabbitmq --name rabbit-mq -v rabbitmqdata:/var/lib/rabbitmq/data -p 15672:15672 -p 5672:5672 rabbitmq:3-management

Also, for database creation, follows the script for Postgres

CREATE TABLE public.employees (
    employeenumber int4 GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE) NOT NULL,
    firstname varchar NOT NULL,
    lastname varchar NULL,
    email varchar NULL,
    salary varchar NULL
);


CREATE TABLE public.newtable (
    "name" varchar NOT NULL,
    surname varchar NULL,
    phone varchar NULL
);

CREATE TABLE public.proposal (
    id int4 GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE) NOT NULL,
    description varchar NULL,
    "date" varchar NULL,
    flgok bool NULL
);
