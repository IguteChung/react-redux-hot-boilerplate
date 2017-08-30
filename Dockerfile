FROM xaviiic/alpine-node-gcsfuse:6.9.1
RUN apk add --update --no-cache libc6-compat python alpine-sdk && \
    python -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip install --upgrade pip setuptools && \
    rm -rf /var/cache/apk/* /tmp/* && \
    rm -r /root/.cache
WORKDIR /totspace/
COPY ["package.json", ".babelrc", "server.js", "html.js", "favicon.ico", "/totspace/"]
RUN npm install
COPY src /totspace/src
RUN npm run build
ENTRYPOINT npm run start
