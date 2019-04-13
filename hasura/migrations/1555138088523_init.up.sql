--
-- SQL edited by https://hasura-edit-pg-dump.now.sh
--

CREATE TABLE public.articles (
    id serial NOT NULL,
    author_id integer NOT NULL,
    title text NOT NULL,
    body text NOT NULL
);

CREATE TABLE public.authors (
    id serial NOT NULL,
    name text NOT NULL
);


ALTER TABLE ONLY public.articles
    ADD CONSTRAINT articles_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.authors
    ADD CONSTRAINT profile_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.articles
    ADD CONSTRAINT articles_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.authors(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

