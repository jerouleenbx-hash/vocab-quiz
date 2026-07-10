FROM node:20-alpine

WORKDIR /usr/src/app

# Copie les fichiers de configuration et installe les dépendances
COPY package*.json ./
RUN npm install

# Copie le reste du code
COPY . .

# Désactive la question d'analytics
ENV NG_CLI_ANALYTICS=false

# Expose le port d'Angular
EXPOSE 4200

# Lance Angular en mode développement
CMD ["npm", "start"]