# Usa a imagem oficial do Nginx como base
FROM nginx:alpine

# Remove o conteúdo padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos do site para a pasta padrão do Nginx
COPY . /usr/share/nginx/html

# Copia uma configuração personalizada do nginx (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expõe a porta padrão do Nginx
EXPOSE 80

# Comando padrão para iniciar o Nginx no modo foreground
CMD ["nginx", "-g", "daemon off;"]
