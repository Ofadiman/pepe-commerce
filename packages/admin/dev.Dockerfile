FROM node:14.16.0-buster

ARG uid=1000
ARG gid=1000
ARG user
ARG project_dir=/pepe-commerce/packages/admin

RUN mkdir -p ${project_dir}

RUN mkdir -p /etc/sudoers.d
RUN mkdir -p /home/${user} && \
    echo "${user}:x:${uid}:${gid}:${user},,,:/home/${user}:/bin/bash" >> /etc/passwd && \
    echo "${user}:x:${uid}:" >> /etc/group && \
    echo "${user} ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/${user} && \
    chmod 0440 /etc/sudoers.d/${user} && \
    chown ${uid}:${gid} -R /home/${user} && \
    chown ${uid}:${gid} -R ${project_dir}

USER ${user}

ENV HOME /home/${user}
ENV TERM xterm

ENV NODE_PATH /usr/local/lib/node_modules:/home/${user}/.config/yarn/global/node_modules
ENV PATH /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/home/${user}/.yarn/bin:${project_dir}/node_modules/.bin

WORKDIR /pepe-commerce/packages/admin
