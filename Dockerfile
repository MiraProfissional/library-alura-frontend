# Usa a imagem base node
FROM node:22

# Define o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copia o package.json e o package-lock.json
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia os arquivos da aplicação
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
