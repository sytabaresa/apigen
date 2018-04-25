FROM node:9-alpine

RUN apk --no-cache add musl-dev go git curl
RUN go get github.com/dimfeld/unwebhook \
&& curl -o /usr/bin/gomplate -sSL https://github.com/hairyhenderson/gomplate/releases/download/v2.4.0/gomplate_linux-amd64-slim \
&& chmod 755 /usr/bin/gomplate

WORKDIR /opt/app
ENV UNWEBHOOK_BIN /opt/app
ENV UNWEBHOOK_DATA /opt/data
RUN mkdir -p $UNWEBHOOK_DATA
COPY . .
RUN npm install
ENTRYPOINT ["/root/go/bin/unwebhook", "/opt/app/unwebhook.conf"]

