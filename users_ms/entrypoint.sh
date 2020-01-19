#!/bin/sh

# Wait for MySQL
until nc -z -v -w30 $DB_HOST $DB_PORT; do
 echo 'Waiting for MySQL...'
 sleep 1
done
echo "MySQL running"

# Create and seed database
bundle exec rails db:migrate 2>/dev/null || bundle exec rails db:create db:migrate db:seed
echo "Database tasks created"

# Start the server
bundle exec rails server -b 0.0.0.0
echo "Users ms running"