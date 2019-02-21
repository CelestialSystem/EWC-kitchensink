# Celestial EWA

Celestial EWA Web-Application is a tailor made intranet, company inside management product for any size organization.
It is a collaborative platform which ties up every end of an organization and helps to set up an interface between the company and their employees.
Celestial EWA is powered by Moxtra, a team communication and collaboration tool, that lets you create a workspace with your team. This workspace enables you to have persistent chat, share files, annotate, create clips, assign tasks, prioritise them and have real time meetings.

## Getting Started

To download the project, simply run the following command in your command-line interface tool:
```sh
git clone https://github.com/CelestialSystem/ewa_webapp.git
```
or you can download the zip folder.

### Prerequisites

1. Ensure that you have Node.js v8.9.1. or later installed and activated through [nvm](https://github.com/creationix/nvm):

    ```sh
    nvm install v8.9.1
    nvm use v8.9.1
    ```

2. Install dependencies.

    ```sh
    npm install
    ```

3. Install Gulp globally.

    ```sh
    sudo npm install gulp -g
    ```

4. To check the options to run the project with different environments and configurations run

    ```sh
    gulp or gulp help
    ```

### Choices to Run the Server

1. To start the dev server, run
    ```sh
    gulp start
    ```

    Load the app in your browser: [http://localhost:4500](http://localhost:4500/).

2. To start the Prod server, run
    ```sh
    gulp start:prod
    ```
    Load the app in your browser: [http://localhost:5400](http://localhost:5400/).

3. To start both the servers, run
    ```sh
    gulp start:all
    ```
    Load the app in your browser: For Prod Server [http://localhost:5400](http://localhost:5400/).

    Load the app in your browser: For Dev Server [http://localhost:4500](http://localhost:4500/).


### Choices to run the Unit Test Cases

1. To run the code in testing environment, run
    ```sh
    gulp jest
    ```

2. To run the test environment with code coverage, run
    ```sh
    gulp jest:cc
    ```

## Deployment
For deployment on external servers. Follow the "Getting Started" steps and run "gulp start:prod".

## Technologies Stack and High Level Architecture
![HLA](https://image.ibb.co/cMNwpm/EWA_Web_App_Page_1_3.png)

## Version
The initial target of the project is to work with the White Labelling of the project and consuming Moxtra Chat SDK.
