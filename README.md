Welcome to the frontend of Nerding Out, a blogging app built with React, TypeScript, and Bootstrap!

## Overview
----------

The Nerding Out frontend allows users to sign in, read, comment on, and like articles published on the platform. Currently, only one admin can create new articles, but we have plans to open up article creation to all registered users in the future.

## Getting Started
-------------------

### Prerequisites

* Node.js installed on your machine (v14 or higher recommended)
* Will need the backend installed (more instructions [here](https://github.com/TS22082/nerdingout_be))
* MongoDB installed on your computer (v8 or higher)
* yarn package manager installed (or npm)

### Local Development
1. Clone this repository: `git clone https://github.com/TS22082/nerdingout_fe`
2. Install dependencies: `yarn install` (or `npm install`)
3. Start the development server: `yarn start` (or `npm run start`)
4. Open your web browser and navigate to [http://localhost:5173](http://localhost:5173) to see the frontend in action!

### Deployment
The Nerding Out frontend is deployed on a cloud platform, using automated build and deployment scripts.

## Features
------------

* User authentication with sign-in and sign-out functionality
* Article reading and commenting features
* Like button for articles (with upvote/downvote tracking)
* Admin-only article creation feature (currently)

## Roadmap
---------

In the future, we plan to:

* Allow all registered users to create new articles
* Implement a moderation system for comments and likes
* Add more features for authors to manage their own content

## License
---------

This project is licensed under the MIT License. See `LICENSE` for details.