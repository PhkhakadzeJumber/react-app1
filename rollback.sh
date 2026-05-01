#!/bin/bash

echo "Starting Rollback..."

ACTIVE=$(cat active_env.txt)

if [ "$ACTIVE" = "green" ]; then
  echo "Rolling back from Green to Blue..."
  echo "blue" > active_env.txt
  echo "Rolled back! Blue is now active."
elif [ "$ACTIVE" = "blue" ]; then
  echo "Rolling back from Blue to Green..."
  echo "green" > active_env.txt
  echo "Rolled back! Green is now active."
else
  echo "No active environment found. Nothing to rollback."
fi