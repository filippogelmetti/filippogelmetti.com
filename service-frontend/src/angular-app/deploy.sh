#!/bin/bash

REMOTE_HOST="gefickoc@filippogelmetti.com"
REMOTE_PORT="17177"
REMOTE_KEY="~/.ssh/id_rsa"

LOCAL_DIST="dist/angular-app/browser"
REMOTE_PATH="/home/gefickoc/public_html"

# Use rsync with:
# -a : archive mode (preserves permissions, symlinks, timestamps, etc.)
# -v : verbose
# -z : compresses data during transfer
# -e : specifies the SSH options
# --delete : removes files from the remote server that are no longer in the local build
# --progress : shows file transfer progress
rsync -avz --delete -e "ssh -p $REMOTE_PORT -i $REMOTE_KEY" "$LOCAL_DIST/" "$REMOTE_HOST:$REMOTE_PATH"

echo "Deployment to $REMOTE_HOST completed successfully."