<p align="center"><img src="https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/01/3f/dd/013fdd51-7835-35da-1c00-6971eba5ef1c/ProductionAppIcon-1x_U007emarketing-0-7-0-0-0-0-85-220.png/1200x630wa.png" width="400"></p>

# Twitter App

## Usage

To get started, make sure you have [Docker installed](https://docs.docker.com/docker-for-mac/install/) on your system, and then clone this repository.

Then follow these steps:
1. First enter your twitter api keys in `api/src/configuration/index.js`

2. Add site name `twitter-app.local` & `twitter-app.com` to hosts.
    `nano /etc/hosts`
    
     * `127.0.0.1 twitter-app.com`
     * `127.0.0.1 twitter-app.local`
3. Then run:
     * `sudo docker-compose -f docker-compose.yml -f docker-compose.development.yml up --build` to start app in dev mode
     * `sudo docker-compose up --build` to start app in product mode

Open up your browser of choice to [http://twitter-app.local](http://twitter-app.local) or [http://twitter-app.com](http://twitter-app.com) and you should see twitter-app running as intended.


Containers created and their ports (if used) are as follows:

- **react** - `:3000`
- **node.js** - `:3001`
- **nginx**