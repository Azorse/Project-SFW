# Safe For Work
## A gamified learning and testing web app
### By Andrew Hardemon, Joji Koons, Daniel Schissler, and Elizabeth Hindash

## Instructions
1. First you're taken to the login in page where you can either log in or click `Haven't recieved your owl` to register
* The Register page saves to our MongoDB database and encrypts the password with bycrypt.js for your security 

2. Once registered and logged in you will be redirected to the `Home page` where you see a description of your house and you can access the other pages

3. The `Lessons page` is where you can go to study the material for the `Quiz page`. You click on the lesson and read the material.

4. Then you got to the `Quiz page` and answer the questions to the best of your ability. Once you submit it, its sent to the database and will be used for the `Standings page`

5. The `Standings page` shows the results from the MongoDB database for every quiz sorted into bar graphs for each house. There you can compare each of the houses and how they perform.

6. Lastly you can go to the `House Info` page and see a more detailed description of your house and famous wizards in that house.