/*
  1. Open terminal and npm init -y to create package.json.

  All npm packages contain a file, usually in the project root, called package.json - this file holds various metadata relevant to the project. It 1) Stores a list of dependencies for the project, 2)gives the project a name, and 3) stores metadata about the project. The package.json file is normally located at the root directory of a Node.js project.

  then npm install express. check out all the node_modules that comes with express!
  2. define express; only able to require it because i installed it
  3. create new application instance (app)
  4. add listen()
  5. run file (node app.js) then open localhost:3000. localhost is a domain name - like google.com - that is self referential. refers to your computer. whatever server you have running on your own machine; will be different for everyone's computer.
  6. we see "cannot GET /" - saying we're trying to make a request for route, and there is no route for that
  7. make an app.get route
  8. re-run it - we don't see the changes because we're still running the old version of our server. so quit the process and rerun it.
  9. one way around this is run our express code with nodemon - it reruns the code whenever it detects a file change.
  10. install nodemon and morgan
  11. require morgan and add start script
    "start": "nodemon app.js"
  12. now type npm run start. notice how it restarts due to changes!
  13. check how when you refresh the page, you get a request log from morgan!
*/


const express = require("express"); // STEP 1
const morgan = require("morgan");

const app = express(); // STEP 1

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("<h1>Hello this is my first Express page!</h1>")
})

app.listen(3000); // STEP 1
