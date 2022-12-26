.PHONY: clean

provision:
	npm i -g vscode-langservers-extracted
	./scripts/provision.sh $(APP_NAME)

clean:
	rm -rf node_modules yarn.lock
	yarn cache clean --force

fresh-install: clean
	yarn
