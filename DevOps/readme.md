# What is DevOps?

DevOps is a set of practices that works to automate and 
integrate the processes between software development and IT 
teams, so they can build, test, and release software faster 
and more reliably. The term DevOps was formed by combining the
words “development” and “operations” and signifies a cultural 
shift that bridges the gap between development and operation 
teams, which historically functioned in siloes.
 
![devops](devops.png)


# The roadmap to become Junior DevOps engineer in Udevs


## #1 - Linux basics

### Commands to learn

 You can choose any distro you want. You can try all of them with vmware or virtualbox. Ubuntu or Pop is good option to start with.

- Version Control
    - git 
      - git add 
      - git commit
      - git pull
      - git fetch
      - git branch
      - git checkout
      - git push
      - git remote
      - git revert
      - git merge
- User permissions and management
    - adduser
    - usermod
    - chown
    - chmod
- Process management
    - ps
    - top / htop
    - lsof
    - kill
    - pkill
- Text manipulation
    - cat
    - grep
    - vim
    - unix pipelining 
    - xarg
    - awk
- File, Dir management
    - rm
    - touch
    - mkdir
    - mv
    - take
    - sed
    - cp
    - ranger
- Disk
    - df
    - du
    - ncdu
- Networking
    - ping
    - netstat
    - nmap
    - ufw
    - iptables
- Folders
    - /etc
    - /var/log
    - /home
    - $PATH
    - aliases ( .zshrc )
- System
    - systemctl
    - service
    - /etc/system/systemd
  
### Shell scripting

- Watch any shell script tutorial on youtube, read articles.
    - You must know to write logical functions with above linux commands.
- Try to do below tasks:
    - 1
    - 2

### Makefiles
- Basic understandig of Makefile

### Books to read

-  Linux Bible last edition

## #2 - Scripting language - Python 3

You should understand Python basics, how it works, manipulation with files, dirs, unix commands and etc.

You must read the book - **Python for Devops from Noah Gift**.

- Complete the tasks below and you can go further, no need to read the whole book in this part of roadmap. Get familiar with Python and continue reading it.
    - 1. 
    - 2. 
 
## #3 - SSH

- Generate pem files
    - Generate ssh key-pair
    - Copy public key to authorized keys
    - Save private key as .pem file
- Generate keys 
- Key file permissions 
- Private and public keys 
    - Understand how they work
- COPY files by ssh `scp`  and `rsync`
- Run remote shell script 
- Connect to database ssh 
- SSH tunneling

## #4 - Networking basics

- TCP / IP
- OSI Model
- Domains
    - DNS
    - DNS Record types
- HTTP / HTTPS 
    - SSL certificates
    - Generate certificate with certbot and cert-manager
- FTP
- Mailing protocols
  - POP
  - IMAP
  - SMTP
- TCP / UDP
  - Diffirences between them

Watch the playlist below from youtube.

- [Networking fundamentals](https://www.youtube.com/watch?v=cNwEVYkx2Kk&list=PLDQaRcbiSnqF5U8ffMgZzS7fq1rHUI3Q8) from Network Direction channel

## #4 - Web server

- Web server base concepts 
- Nginx
  - Config files / logfiles
  - Reverse proxy
  - SSL certificates
- Understading of load balancing 
- Deploy simple frontend project with nginx (`frontend_sample` directory in repository)
  - Run project (read Readme.md)
  - Proxy a port of the service to the domain (test.roadmap.udevs.io)
  - Generate ssl certificate for this domain
  - Track the access logs
  - Delete certificate and stop your web server

##  #5 - Containerinzation

### Docker
  - Understanding the main concept of Docker
    - Images
    - Containers
    - Docker daemon
  - Commands to learn
    - docker build
    - docker tag
    - docker push
    - docker run
    - docker pull
    - docker exec
    - docker logs
    - docker volumes
    - docker inspect
  - Container registries
    - Login / Logout
    - dockerhub
    - self-hosted registries
    - Gitlab container registry
  - Dockerfile
    - Understanding of Dockerfile
    - Syntax
##### Tasks to do:
  - Create Dockerfiles for sample Go (`go_sample`) and Node.js (`node_sample`) projects, build images and push them to your dockerhub account with `roadmap` tag.
  - Track the logs by running your image in detached mode.

## Deployment of microservices with docker-compose and docker swarm

- Read about 12 factors - https://12factor.net/
- Epub version - https://12factor.net/12factor.epub

### docker-compose

- Understanding the usage of docker-compose
- docker-compose up / down
- Port-forwarding
- Environment variables
- Networking between containers
- Build the containers from context and image
##### Read the docs and try to do below tasks:
  - Deploy microservices and database with docker-compose:
    - Try to write docker-compose for simple microservices, database (PSQL) and API gateway in `micro_sample`
    - Up the docker-compse from images
    - Connect services to API gateway with Env variables. Check out the config files in microservices.
    - Expose the API gateway port and check the result from your browser.

### Docker swarm

- Understanding usage of docker swarm 
  - worker and manager nodes
  - services and replication
  - docker stack
  - docker service

##### Tasks to do:
  - Initialize manager node and join 2 worker nodes.
    - You can do it with vmware or virtualbox
    - If you can not do it, just work with manager node
  - Deploy `micro_sample` to your swarm as roadmap stack.
  - Replicate the services up to 3 (if you have worker nodes)
  - Update one of the services in manager node
    - Service should be updated in all nodes
  - Inspect and rollback that service
  - Track the logs of the service
  - Remove the services and deinitialize your swarm
  

## #6 Cloud services

### DigitalOcean

- Droplets
  - Resizing
  - Taking snapshots
  - Creating one from snapshot
- Kubernetes clusters
- Load balancers
- VPC
- Firewall

## #7 CI / CD

- Gitlab server administration
  - Gitlab Admin area
  - Monitoring the server
  - Gitlab container registry
  - Gitlab API for scripts
- Gitlab CI
  - gitlab runners
  - .gitlab-ci.yml 
  - syntax and concepts
  - pipeline tasks
    - build
    - test
    - migrate
    - analysis
    - deployment to environments
- Deployment types theory-> ( https://github.com/ContainerSolutions/k8s-deployment-strategies )
  - Blue green
  - Canary
- Rollbacks

## #8 Kubernetes

- Understading the main concepts and basics
  - contexts
  - namespaces
  - pods
  - replicasets
  - deployments / statefulsets
  - services (all types)
  - ingresses
  - configmaps
  - secrets
  - service accounts
  - cluster bindings
  - kubectl
  - etc
- Node and pod affinity
- Writing the manifests for microservice architecture 
- Load Balancing with Nginx ingress controller
- Understanding the concepts of a service mesh and istio

### Tasks to do
- Deploy `micro_sample` to minikube cluster with load balancer
  - Write deployment and service manifests for each service
  - Configure env variables with configmaps and secrets
  - Deploy services on `microservices` namespace
  - Deploy your load balancer on `lb` namespace
  - Write ingress manifest for API gateway


## #9 Monitoring and Centralized logging

- Grafana 
- Prometheus
  - PMQL
  - Alertmanager
  - Alerts and rules
  - Forwarding alerts to Telegram groups, email
- Loki
- Fluentd and promtail
  - Scraping container logs


## #10 IaaC

- Understading the IaaC
- Terraform
  - Theory and main usage
- Ansible
  - Theory and main usage
