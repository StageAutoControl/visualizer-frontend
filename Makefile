proto:
	./node_modules/.bin/pbjs \
		--target json \
		--out app/websocket/transport/dmx.json \
		--wrap commonjs \
		--es6 \
		--no-create \
		--no-encode \
		--no-verify \
		app/websocket/transport/dmx.proto
