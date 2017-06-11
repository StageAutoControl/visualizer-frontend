proto:
	./node_modules/.bin/pbjs \
	  --target static-module \
		--out app/websocket/transport/transport.js \
		--wrap commonjs \
		--es6 \
		--no-create \
		--no-encode \
		--no-verify \
		app/websocket/transport/transport.proto
