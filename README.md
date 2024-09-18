# Project Title

What the Park

## Overview

What is your app? Give a brief description in a couple of sentences.

- An app that helps the user understand if they can park where they are or not

### Problem Space

Why is your app needed? Give any background information around any pain points or other reasons.

- Parking signs in the UK can be very confusing, this app would clarify any parking questions.
- By uploading a picture of the parking sign and then getting a response of a simplified sign. (Or could have a text box and type it out but i dont think thatys very user friendly.)

### User Profile

Who will use your app? How will they use it? Add any special considerations that your app must take into account.

- Car drivers

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

- Will be media responsive (to practice styling)
- 2 pages, home and about

- As a user I want to drive into a parking bay and quickly work out what the parking regulations are for that spot. I dont want to waste time working it out in my head.

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

- React
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - express

### APIs

List any external sources of data that will be used in your app.

- ChatGPT API

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

- Main page with upload form - to make a post request to DB which saves the response history and a post to open AI API to simplify the image.
- About page
  (not really needed, but just to pratice)

### Mockups

Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma.

### Data

Describe your data and the relationships between the data points. You can show this visually using diagrams, or write it out.

1 DB table - Responses
columns include; id, response, created_at

(not really needed, just to practice)

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

POST /responses

- Send the image to your backend
- Hit the Chat GPT api
- Wait for the response
- Send it back to the frontend
- Store a new response in the database

GET /responses

- Get ALL of the responses from the database
- Show a list of recent searches on the frontend

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date.

DUE DATE: 29/09/24

- Week 1 - most js
- week 2 - more js and styling

---

## Future Implementations

Your project will be marked based on what you committed to in the above document. Here, you can list any additional features you may complete after the MVP of your application is built, or if you have extra time before the Capstone due date.

- Camera feature rather than just an upload, so you can take the pic on the app - react web cam
