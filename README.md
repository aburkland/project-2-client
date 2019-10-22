[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# GA SEI05 Project 2 - Memory Saver

- [Link to Front End Repo](https://github.com/aburkland/project-2-client)
- [Link to Front End Deployed Site](https://aburkland.github.io/project-2-client/)
- [Link to API Repo](https://github.com/aburkland/project_2_api)
- [Link to Deployed API](https://desolate-badlands-44499.herokuapp.com)

## Planning and Development Process
For my second project as part of General Assembly's Software Engineering Immersive,
I built a full-stack application single page application that allows a user to sign up, sign in, change password, sign out, create a memory, update a memory, view all of their saved memories, and delete a memory.

I began by reviewing the project requirements and project documentation. I then
created my wireframes and user stories to help guide me in my project schedule.
I started by setting up my API with Rails, scaffolding my Memories resource, using curl scripts to test my endpoints. My resource controller is inheriting from the ProtectedController. I then moved on to developing my front-end, testing along the way in order to identify bugs and incrementally update code to address the errors.

## Technologies Used
- Javascript
- JQuery
- HTML5
- CSS
- SASS
- Bootstrap
- Ruby on Rails
- postgreSQL

## Entity Relationship Diagrams
![memory saver ERD](https://live.staticflickr.com/65535/48938048816_a215765843_k.jpg "MemorySaver ERD")

## Wireframes
![memory saver wireframes](https://live.staticflickr.com/65535/48938237587_50b6c31828_c.jpg "MemorySaver wireframes")
![memory saver wireframes2](https://live.staticflickr.com/65535/48937505218_40458a0e24_c.jpg "MemorySaver wireframes2")

## User Stories
- As a user, when I enter a complete email, password, and password confirmation, I can create an account.
- As a user, after I have successfully created an account, I can then sign-in.
- As a user, after I have successfully signed in, I can change my password and sign-out.
- As a signed-in user, I can create a memory that is only viewable to my account.
- As a signed-in user, by clicking a 'Retrieve' button, I can view a display of all the memories I've created.
- As a signed-in user, after I display all memories, I can update one of my existing memories, targeting it by the memory ID.
- As a signed-in user, after I display all memories, I can delete a memory, targeting it by the memory ID.

## Unsolved Problems for Future Fixes
I would like to transform the JSON date string to be more readable for the client.
I would also like to set a maximum of today's date for the memory input fields, since a memory record should not have a future date.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
