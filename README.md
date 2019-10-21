[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# GA SEI05 Project 2 - Memory Saver

- [Link to Front End Repo](https://github.com/aburkland/project-2-client)
- [Link to Front End Deployed Site]()
- [Link to API Repo](https://github.com/aburkland/project_2_api)
- [Link to Deployed API](https://desolate-badlands-44499.herokuapp.com)

## Planning and Development Process
For my first project as part of General Assembly's Software Engineering Immersive,
I built a single page application that allows a person to create a user account
in order to play a game of tic-tac-toe.

I began by reviewing the project requirements and project documentation. I then
created my wireframes and user stories to help guide me in my project schedule.
I started by setting up my authentication with the API and then moved on to
developing my game logic. I tried to break problems down into bite-sized pieces,
using pseudocode and comments along the way. I would test features by logging
messages to the console to help me discern where roadblocks and bugs were
occuring.

## Technologies Used
- Javascript
- JQuery
- HTML5
- CSS
- Bootstrap
- Ruby on Rails
- postgreSQL

## Entity Relationship Diagrams
![memory saver ERD](https://flic.kr/p/2hyuhWm "MemorySaver understand")

## Wireframes
![memory saver wireframes](https://flic.kr/p/2hyvg42 "MemorySaver wireframes")
![memory saver wireframes2](https://live.staticflickr.com/65535/48823772213_668a2daf21.jpg "MemorySaver wireframes2")

## User Stories
- As a user, when I enter a complete email, password, and password confirmation, I can create an account.
- As a user, after I have successfully created an account, I can then sign-in.
- As a user, after I have successfully signed in, I can change my password and sign-out.
- As a signed-in user, I can create a memory that is only viewable to my account.
- As a signed-in user, by clicking a 'Retrieve' button, I can view a display of all the memories I've created.
- As a signed-in user, after I display all memories, I can update one of my existing memories, targeting it by the memory ID.
- As a signed-in user, after I display all memories, I can delete a memory, targeting it by the memory ID.

## Unsolved Problems for Future Fixes
I created an error message to appear when there were complications with
updating the API, but I believe this will confuse the user. I hope to better
understand the process for creating error messages that are useful. Additionally,
my 'New Game' button must be clicked in order to play a game; in the future, I
would like the user to be able to start a game by clicking on the game board.
Lastly, I was focused on meeting the project requirements and thus did not
focus on styling; I would like to add a Bootstrap template and add more
formatting.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
