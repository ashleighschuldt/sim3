create table Posts (
    id serial primary key,
    title varchar,
    img varchar,
    content text,
    author_id int,
    FOREIGN KEY (author_id) REFERENCES users(id)
)