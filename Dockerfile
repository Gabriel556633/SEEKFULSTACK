# Usar una imagen base específica de Node.js en la versión 14.17.0
FROM node:14.17.0

COPY nginx.conf /etc/nginx/conf.d/default.conf


# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de la aplicación al contenedor
COPY . .

# Instalar las dependencias de la aplicación
RUN npm install

# Compilar la aplicación
RUN npm run build

# Usar una imagen ligera de Nginx para deploy
FROM nginx:alpine

# Copiar la carpeta de salida de la aplicación al contenedor de Nginx
COPY --from=0 /app/dist/test-seek-gabrielbm2 /usr/share/nginx/html

# Exponer el puerto 80 para acceder a la aplicación
EXPOSE 80
