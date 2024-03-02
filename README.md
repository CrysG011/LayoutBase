# Landing Frontend <img src="./assets/estrellas.gif" width="30">

Utilizo este proyecto para poner en práctica lo aprendido sobre contenedores.

[VER en Gitlab Pages](https://layoutbase-crystinagonz-08fe74406ecbceff0ea6eaa6c57716c32e16cd1.gitlab.io/)

> [!NOTE]
> Dockerizado con imagen base Ngnix

> [!TIP]
> Si estás del lado del backend te sirve para trabajarlo en algún framework

> [!WARNING]
> Debes tener docker instalado, si no lo necesitas puedes clonarte el repositorio y modificarlo según tus necesidades.

> [!IMPORTANT]
> Operar como usuario, NO como root. Chequear grupos del usuario con el comando "id -nG"

- Si tu usuario no está en el grupo "docker" agrégalo:

```bash
sudo usermod -aG docker tu_usuario && newgrp docker
```

- Se necesita tener una cuenta en dockerhub para ingresar con usuario y contraseña:

```bash
docker login
```

- Descarga la imagen:

```bash
docker pull crystinag/layout:latest
```

- Correr el contenedor:

```bash
docker run -d --name static -p 8080:80 crystinag/layout
```

- Accede desde tu navegador al localhost:8080

**Para encontrar la ubicación de la raíz del directorio de Docker en tu sistema, puedes ejecutar el siguiente comando en la terminal:**

```bash
docker system info --format '{{.DockerRootDir}}'
```

**Dentro de esa ruta encontrarás la carpeta image que contiene todas las imágenes descargadas.**

## ⚡ Technologies

![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)
![Git](https://img.shields.io/badge/-Git-black?style=flat-square&logo=git)
![GitLab](https://img.shields.io/badge/-GitLab-orange?style=flat-square&logo=gitlab)
![Docker](https://img.shields.io/badge/-Docker-black?style=flat-square&logo=docker)
![Nginx](https://img.shields.io/badge/-Nginx-black?style=flat-square&logo=nginx)

### Redes

[![Linkedin Badge](https://img.shields.io/badge/-Crystina_G-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/crystina-g-cristina-gonzalez-9337b0233/)

[![Youtube Badge](https://img.shields.io/badge/-Crystina_G-darkred?style=flat-square&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UCk8LWXwUU3iu9NSj6bPn7zA)
