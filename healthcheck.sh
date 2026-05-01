#!/bin/bash

LOG_FILE="healthcheck.log"
URL="http://localhost:3000"

echo "Starting health check monitor..."

while true; do
  TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")
  STATUS=$(curl -o /dev/null -s -w "%{http_code}" $URL)

  if [ "$STATUS" = "200" ]; then
    echo "[$TIMESTAMP] OK - App is running (HTTP $STATUS)" | tee -a $LOG_FILE
  else
    echo "[$TIMESTAMP] FAIL - App is not responding (HTTP $STATUS)" | tee -a $LOG_FILE
  fi

  sleep 30
done