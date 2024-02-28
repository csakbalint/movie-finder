<h1 align="center">Tech Assassment: Movie Finder</h1>

<div align="center">
  🧑🏻‍💻👩🏼‍💻👨🏿‍💻 🎬🍿🧃 🙋🏼‍♀️🙋🏾‍♂️🙋🏼
</div>
<div align="center">
  <strong>This repository contains a movie finder application built using Node.js and React. The app utilizes The Movie Database (TMDb) API to fetch movie data and display it to users.</strong>
</div>
<div align="center">
  Modern, clean UI written with React and Next.js
</div>

<br />

<div align="center">
  <!-- Node version -->
  <a href="https://nodejs.org/dist/latest-v18.x/docs/api/">
    <img src="https://img.shields.io/badge/node-18.x-blue?style=flat-square"
      alt="Node version" />
  </a>
  <!-- Yarn version -->
  <a href="https://yarnpkg.com/">
    <img src="https://img.shields.io/badge/yarn-1.x-blue?style=flat-square"
      alt="Yarn version" />
  </a>
  <!-- Next version -->
  <a href="https://nextjs.org/docs">
    <img src="https://img.shields.io/badge/next-14.1.0-blue?style=flat-square"
      alt="Next version" />
  </a>
  <!-- Material UI -->
  <a href="https://mui.com/material-ui/">
    <img src="https://img.shields.io/badge/Material_UI-5.15.11-blue?style=flat-square"
      alt="Prettier enabled" />
  </a>
  <!-- Prettier -->
  <a href="https://prettier.io/">
    <img src="https://img.shields.io/badge/prettier-enabled-brightgreen?style=flat-square"
      alt="Prettier enabled" />
  </a>
  <!-- Coding -->
  <a href="https://npmjs.org/package/choo">
    <img src="https://img.shields.io/badge/Coding-❤️-pink?style=flat-square"
      alt="Coding awesome" />
  </a>
</div>

## Table of Contents

- [Features](#features)
- [Roadmap](#roadmap)
- [Future improvements](#future-improvements)
- [Installation](#installation)
- [Deployment](#deployment)

## Features

- Search for movies by keyword.
- Paginate through the results.
- View simple information about the movies.
- User-friendly interface with responsive design for seamless browsing on various devices.
- Caching for faster response

## Roadmap

- [x] Query movies from external api
- [x] Make UI responsive
- [x] Cache requests
- [ ] Log requests
- [ ] Write unit tests for back-end functionality
- [ ] Write snapshot tests for front-end components
- [ ] Generate code coverage and static analysis
- [x] Make Docker based production build
- [ ] Create CI/CD pipeline, validate and build the app with it
- [ ] Configure production environment, deploy the application

## Future improvements

- Integrate user management and authentication
- Define and introduce plans and billing
- Scale application with serverless deployment (e.g. with AWS, Azure)

## Installation

The software can be installed by the following steps:

1. **Provide environment <sup>(optional)</sup>**

   The application is powered by the following:

   - Node.js 18.x | Install [manually](https://nodejs.org/dist/latest-v18.x/docs/api/) or with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
   - Yarn 3.x | [Installation Guide](https://classic.yarnpkg.com/lang/en/docs/install/)
   - Docker | [Installation Guide](https://docs.docker.com/get-docker/)

2. **Clone repository**

   Clone the repository

   ```bash
   git clone git@github.com:csakbalint/movie-finder.git
   # or
   git clone https://github.com/csakbalint/movie-finder.git
   ```

3. **Setup environment variable**

   Copy the `.env.example` and create a new file called `.env.local`

   ℹ️ Ask me for the missing credentials if you cannot get them.

4. **Install dependencies**

   Simply execute the following command in order to get the necessary node modules

   ```
   yarn install
   ```

5. **Start the environment**

   The software needs Redis to operate correctly. Execute the following command to start it

   ```
   docker-compose up
   ```

6. **Launch the application**

   In order to launch the application call the following command.

   ```
   yarn dev
   ```

   ℹ️ The application will be hosted on the http://localhost:3000.

   🎉 Done! You are ready to go!
