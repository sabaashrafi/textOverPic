# Dockerfile
#FROM node:latest 
FROM node:12.18.2-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
#RUN apk update && apk upgrade
#RUN apk add git
#Run apk add python 
RUN npm install -g npm
RUN npm install --save nuxt

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm install
RUN echo "API_BASE_URL = https://api.himart.ir" > .env
RUN echo "REDIRECT_HOST = https://rstudio.himart.co:3000" >> .env
RUN cat .env
#RUN npm audit fix
RUN npm -v
RUN node -v
RUN npm run build


EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]
