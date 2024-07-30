Run with Docker Compose
------------------
The fastest way to run this library locally is to use [Docker](https://docker.com).

 - [Install Docker](https://docs.docker.com/engine/install/)
 - Download and unzip this package to a local directory on your machine.
 - Open up your terminal and navigate to the unzipped folder of this library.
 - Type the following in your terminal
    ```
    docker-compose up -d
    ```

 - Go to the following URL in your browser.
    ```
    http://localhost:3001
    ```
 - Use the following credentials to login.
    - **email**: admin@example.com
    - **password**: CHANGEME
 - To change the admin password.
    - Once you login, click on the **Admin** resource
    - Click **View Data**
    - Click on the **admin@example.com** row
    - Click **Edit Submission**
    - Set the password field
    - Click **Save Submission**
    - Logout

Manual Installation (Node + MongoDB)
-------------------
To get started you will first need the following installed on your machine.

  - Node.js - https://nodejs.org/en/
  - MongoDB - http://docs.mongodb.org/manual/installation/
    - On Mac I recommend using Homebrew `brew install mongodb-community`
    - On Windows, download and install the MSI package @ https://www.mongodb.org/downloads
  - You must then make sure you have MongoDB running by typing `mongod` in your terminal.

Running with Node.js
-------------------
You can then download this repository, navigate to the folder in your Terminal, and then type the following.

```
npm install
npm start
```

This will walk you through the installation process.  When it is done, you will have a running application.

```
http://localhost:3001
```

The installation process will also ask if you would like to download an application. If selected, the application can be found at the following URL.

```
http://localhost:8080
```

You can also see the contents of the application (for modification) within the ```app``` folder which exists inside of the folder where you downloaded this repository.

Development
--------------------
To start server with auto restart capability for development simply run this command:
```
npm run start:dev
```