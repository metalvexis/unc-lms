FROM node:lts-alpine as CLIENT


# Set working directory
WORKDIR /client
COPY ./client .
RUN npm i
RUN npm run build


FROM node:lts-alpine as SERVER
COPY --from=CLIENT /client/dist ./dist/static
# Add bash to OS tools
RUN apk update && apk add bash

# Set working directory
WORKDIR /obecqi

# Copy server files
COPY ./server .

RUN npm i
RUN npm run build

# Copy frontend files
COPY --from=CLIENT /client/dist ./dist/static

COPY ./wait-for-it.sh .

EXPOSE 3000

CMD ["npm", "start"]