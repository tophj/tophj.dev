.PHONY: build clean default dev run

BUILD_IMAGE:=tophj-dev-build
CONTAINER_NAME:=tophj-dev
HOST_PORT:=3000

default: clean build run
build:
	docker build -t $(BUILD_IMAGE) -f Dockerfile .
clean:
	docker stop $(CONTAINER_NAME) || true
	docker rm -v $(CONTAINER_NAME) || true

dev:	clean build
	docker run --name $(CONTAINER_NAME) -it -p $(HOST_PORT):80 $(BUILD_IMAGE)
run:
	docker run --name $(CONTAINER_NAME) -d -p $(HOST_PORT):80 $(BUILD_IMAGE)
