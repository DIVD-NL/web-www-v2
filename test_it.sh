#!/bin/bash

rm -rf public/*
hugo
docker pull cyb3rjak3/html5validator
docker run \
	--volume="$PWD/public:/public:delegated" \
	--entrypoint /bin/sh \
	-ti cyb3rjak3/html5validator \
	-c "
		html5validator --root /public --also-check-css --log INFO
"
