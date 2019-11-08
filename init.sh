#!/bin/bash
set -e

jq ".url=\"https://ghost-glitch.glitch.me/culture\"" config.development.json.base > config.production.json

printf "👻 ghost started"
