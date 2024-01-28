FROM node:20
LABEL authors="koomin"
RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3001
CMD ["npm", "run", "start:prod"]