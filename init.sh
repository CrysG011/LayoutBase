#!/bin/bash

echo "Construyendo la imagen..."
docker build --rm -t layout .
echo "Iniciando servicio..."
docker run -d --name static -p 8080:80 layout
echo "Script de inicialización completado."
