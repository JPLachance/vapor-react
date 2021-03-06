#!/usr/bin/env bash

set -e

BRANCH="$1"

DESTINATION=react-vapor/feature
BUCKET=coveo-nqa-jsadmin

echo "Pushing new demo of ${BRANCH} to ${BUCKET}/${DESTINATION}/${BRANCH}."
aws s3 sync ./packages/demo/dist s3://${BUCKET}/${DESTINATION}/${BRANCH}

echo "Branch successfully deployed to https://vaporqa.cloud.coveo.com/feature/${BRANCH}/?dev"