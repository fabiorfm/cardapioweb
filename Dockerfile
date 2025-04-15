# Usar uma imagem base do Node
FROM node:22

# Criar diretório da aplicação dentro do container
WORKDIR /GIT

# Copiar os arquivos de dependência
COPY index.html .

# Instalar dependências
RUN npm install

# Copiar o resto do projeto
COPY . .

# Expõe a porta usada pelo app
EXPOSE 3000

# Comando para rodar o app
CMD ["npm", "start"]
