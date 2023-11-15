# Weather-app

## Description
The purpose of this project was to build a weather app, incorporating asynchronous functions and APIs for the first time. After fetching the data, the goal was to create an object containing only the necessary information and display these city-specific details to the user.

## Struggle Points
Initially, this project might have seemed straightforward, but I faced several challenges in deciding on the project's structure. Where should I place the right functions in modules? How many functions do I need to display the data? Is one function enough, or do I need a different function for each section of the project to show the data?

A second difficulty was handling API calls, data fetching, and promises. It felt like I was using data fetching more than necessary, and I encountered some difficulties in handling fetch-related errors. Later, I realized that the forecast fetch also contained data related to the input city, so I could have constructed the object based solely on that call.

The last point where I encountered problems was adding EventListeners to the buttons in the document. Managing a button that invokes a dynamically created asynchronous function was quite complicated. I resolved it by adding the event listener in the same function that creates the button, but event delegation could have also been used.

## Conclusion
This project helped me understand and practice asynchronous functions and promises. Additionally, it was interesting and enjoyable to use API calls for the first time. Unfortunately, I am not yet proficient in building a responsive website, but I will revisit this project to improve it and make it usable on mobile devices.

### Live preview
[Live Preview Here](https://eligio93.github.io/weather-app/)