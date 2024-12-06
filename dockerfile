FROM node:18-alpine
COPY . /app
WORKDIR /app

EXPOSE 8083
CMD sh -c "npm i && npm run dev"

# docker run -p 8083:8083 -it --name github-blog -d -v /home/anderson/Projects/github_blog:/app  github-blog 