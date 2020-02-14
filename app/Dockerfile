#START FROM UBUNTU IMAGE
FROM ubuntu:16.04

# INSTALL DEPENDENCIES
RUN apt-get update && apt-get -y install \
    curl \
    wget \
    apt-utils && \
    apt-get autoremove -y


ENV TZ 'America/Sao_Paulo'
RUN echo $TZ > /etc/timezone && \
    apt-get update && apt-get install -y tzdata && \
    rm /etc/localtime && \
    ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
    dpkg-reconfigure -f noninteractive tzdata && \
    apt-get clean

# INSTALL NODEJS
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
    apt-get install --yes nodejs

# INSTALL PM2
RUN npm install -g pm2

WORKDIR /usr/app

COPY package.json .
RUN npm install --quiet

COPY . .

CMD ["pm2-docker", "process.yml"]
