CREATE TABLE IF NOT EXISTS "User" (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255)
);

INSERT INTO "User" (email, name)
VALUES ('admin@example.com', 'Admin')
ON CONFLICT (email) DO NOTHING;
