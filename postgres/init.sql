CREATE TABLE IF NOT EXISTS "User" (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO "User" (email, username, password)
VALUES ('admin@example.com', 'Admin', 'admin')
ON CONFLICT (email) DO NOTHING;
