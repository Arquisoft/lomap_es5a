FROM node:18.13.0
LABEL org.opencontainers.image.source https://github.com/arquisoft/lomap_es5a
COPY . /app
WORKDIR /app
#Install the dependencies
RUN npm install --legacy-peer-deps

#Create an optimized version of the webapp
RUN npm run build

#Execute npm run prod to run the server
#CMD [ "npm", "run", "prod" ]
CMD ["npm", "start"]
