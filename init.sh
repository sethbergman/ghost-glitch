#!/bin/bash
set -e

jq ".url=\"http://$PROJECT_DOMAIN.glitch.me/culture\"" config.development.json.base > config.production.json

printf "👻 ghost started"
