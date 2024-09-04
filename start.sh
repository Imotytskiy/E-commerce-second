#!/bin/bash

# Print a starting message
echo "Starting the application..."

# Kill existing processes for Node.js and npm
echo "Killing existing processes..."
pkill -f 'node index.js' || echo "No existing Node.js processes found"
pkill -f 'npm run dev' || echo "No existing npm processes found"

# Navigate to the backend directory and start the Node.js server
echo "Starting backend..."
cd /Users/macuser/Desktop/Forbestkids/backend || { echo "Failed to change directory to /backend"; exit 1; }
node index.js &

# Navigate to the frontend directory and run the npm development server
echo "Starting frontend..."
cd /Users/macuser/Desktop/Forbestkids/frontend || { echo "Failed to change directory to /frontend"; exit 1; }
npm run dev &

# Navigate to the admin directory and run the npm development server
echo "Starting admin..."
cd /Users/macuser/Desktop/Forbestkids/admin || { echo "Failed to change directory to /admin"; exit 1; }
npm run dev &

# Wait for all background processes to complete
wait

echo "All components are up and running."
