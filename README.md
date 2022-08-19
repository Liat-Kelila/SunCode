<!-- # SunCode -->
<!-- A README.md file with a link to your hosted app, explanations of the technologies used, the approach was taken, unsolved problems, user stories, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc. -->


Application link on Heroku:
https://salty-lake-05987.herokuapp.com/suncode

I enjoyed learning how to connect to Mongodb through Atlas. This is a CRUD application formed using express and nodejs, packages which allow communication between my server, my files, and my computer itself. This allows for javascript to be used in the application. I used mongodb and mongoose to connect to the database I've created using a model and schema. I created a pathway to seed the data into my model, created a new route which takes form in a user input form. This allows new data to be submitted into the database through user contribution. The user is able to view the entire database collection, and for each object there is a delete button and an edit button, as well.

The purpose of this app is to receive a user input, which tells the energy level they currently feel between 0-10. I used a database sorting method, paired with javascript to instruct the application to return to the user a sorted playlist. This playlist returns songs which commence at the user's inputted energy level and increment upwards.

I spent too much time trying to deploy my application to Heroku. At one point in time, I had changed the names of the folders in the project, and the computer still stored the initial folder names because I needed an intermediary name to use in the folder-renaming.

I would love to elaborate further on this app with more styling (I did as much as I could yesterday, it still takes me a long time to figure out). The playlist return should be made more functional, at the very least with hyperlinks, or it would be great to learn how to create an actual media player.

I would also eventually like to make this increment based on mood, too. 
