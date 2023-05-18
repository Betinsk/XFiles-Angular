
# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

COPY package.json .
COPY package-lock.json .

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos para o diretório de trabalho
COPY . .

# Install the application dependencies
RUN npm install

EXPOSE 4200

# Define the entry point for the container
CMD ["start", "main.ts"]