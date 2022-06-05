# cord Coding Challenge (Front-end)

## Table of Contents
- [cord Coding Challenge (Front-end)](#cord-coding-challenge-front-end)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [How to run](#how-to-run)
  - [Results](#results)
    - [Mockups](#mockups)
  - [Contribution guide and next steps](#contribution-guide-and-next-steps)
  - [Original challenge](#original-challenge)
  - [Licence](#licence)

## Introduction
Welcome! This coding challenge was designed by the great folks at [cord.co](https://cord.co "cord's website") (DM me for a private invite link 😉) to explore my React & SCSS Front-end skills.

I had to create a simple SPA based on the [provided mockups](#Mockups) and make a few API calls to a public web API ([TMDB](https://www.themoviedb.org/)).

I took this challenge with nearly 0 React knowledge (just a basic course that went over the fundamentals), so I had to search several different documentation and Stack Overflow pages to find ways to solve the problems. I invested ~5 hours total in trying to solve as many problems as possible.

In the end I managed to implement:

1. Fetching to API,
2. Showing the results in the Discover page,
3. Searching by movie title and year (although not working 100% correctly, it loads the previous letter's search when you input a new one, due to changing `state` in a background thread would be my guess),
4. `AccordionFilters`,
5. `MovieItem`
6. `Checkbox`

*Over the code you'll find comments of how I would do things or potential improvements that I **would not** otherwise add to a real codebase. These are meant to show my potential and current skills, as well as previous knowledge of SWE and Full-Stack Development.*

*I also commited everything to main, when in real-life scenarios I would've created a branch for each feature and its subsequent PR*

## How to run

In order to test the website locally, you need [Node.js](https://nodejs.org/en/ "Node.js' homepage") and the built-in [npm](https://www.npmjs.com/ "NPM's homepage") (I personally recommend `nvm` as the tool to manage node. There's a version for [Windows](https://github.com/coreybutler/nvm-windows "nvm for Windows") and for [Linux](https://github.com/nvm-sh/nvm "The nvm")).

You'll need to create a `.env` file in the root folder, and write the following in it:
```
REACT_APP_MOVIES_DB_API_KEY = "<Your API key from TMDB>"
REACT_APP_MOVIES_DB_BASE_URL = "https://api.themoviedb.org/3"
```

Make sure to get that API Key or they calls to the DB will fail, thus not loading the movies correctly. [You can get it here](https://www.themoviedb.org/settings/api). Simply follow the instructions (requires you to create an account).

With that, simply go to the folder where you've cloned the repo (`cd whatever/route/to/Cord-FE-Challenge`) and run:

```
npm install; npm start
```

With that, all dependencies should be installed (you should see a *nice* `node_modules` folder appear) and the project will be opened on a tab on your default browser, pointing to `localhost:3000`. With that, you should be able to go to the Discover page where all the features are currently implemented!

## Results

The final result is this one (keep in mind I'm using a higher resolution display):

![Final result](frontend-test-mockups/Final%20result.png)

### Mockups
![Expected result](frontend-test-mockups/FE-test-mockup-annotaded.png)
![Provided wireframe](frontend-test-mockups/Wireframe.png)

## Contribution guide and next steps

Feel free to add any contributions to the remaining *TO-DO*s or improving on the existing features.

Ideally you'd fork this repo, open a PR and make it clear what is it you've changed, added or improved. There's no PR template at the time.

Everything emanates from the `App.js` file, and goes from there. I would suggest using that as a starting point to get acquainted with the code.

There's several things left to do, you can find them as comments in the code as well as in the original challenge below.

- The main one is definitely fixing the search function.

- Secondly (but not by far), testing, which I was nowhere near close to even starting and would be the most crucial aspect once the basics are done.

- After that, mobile adaptation so the website is mroe accessible.

- Finally, anything left or improvements one may want to add.

## Original challenge

You can find the original challenge text [here](Original%20README.md).

## Licence

For now, *Copyright Bosco Domingo, 2022*. You are free to use this software, redistribute it and modify it, but not use it for financial purposes. You must give credit to cord and me, and link to this original repo, as well as preserve this licence.
