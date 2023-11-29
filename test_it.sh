#!/bin/bash

hugo
docker pull cyb3rjak3/html5validator
docker run \
	--volume="$PWD/public:/root/project:delegated" \
	--entrypoint /bin/sh \
	-ti cyb3rjak3/html5validator \
	-c "
		html5validator --root /root/project --also-check-css --log INFO
"
