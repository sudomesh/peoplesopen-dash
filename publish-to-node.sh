#!/usr/bin/env bash

# Use this script to deploy the dashboard app
# to a home node. You might want to do this to test a new
# version of the dashboard.

set -e

# NODE_IP is 172.30.0.1 by default
NODE_IP=${1:-"172.30.0.1"}
DEST_DIR=/www

echo "Executing npm run build-prod..."
npm run build-prod

echo "Copying build/ to root@$NODE_IP:$DEST_DIR"
read -r -p "Are you sure? This will overwrite the $DEST_DIR folder on your node. [yN] " response

if [[ "$response" == "y" ]]
then
  scp -r build/* root@$NODE_IP:$DEST_DIR
else
  echo "Yeah... maybe you should back that up first. Aborting."
fi

