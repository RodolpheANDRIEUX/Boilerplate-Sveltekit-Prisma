#!/bin/sh

echo "Waiting for the database to be ready..."
sleep 30

echo "Applying Prisma migrations..."
npx prisma migrate deploy
echo "Prisma migrations applied successfully."

echo "Starting the application..."
node build

rm -rf start.sh
