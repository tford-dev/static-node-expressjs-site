const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const {projects} = require("./data/data.json");
const app = express();
const morgan = require("morgan");
const favicon = require("serve-favicon");

//Setup for view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: false}));
app.use('/static', express.static('public/'));
app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(morgan('dev'));

//route for home page
app.get("/", (req, res)=>{
    res.render("index.pug", { projects });
});

//route for about page, learn more button activates opens this
app.get("/about", (req, res)=>{
    res.render("about.pug");
});

//route for project pages
app.get("/projects/:id", (req, res, next) =>{
    const projectId = req.params.id;
    const project = projects.find( ({id}) => id === +projectId);
    if(project){
        res.render("project.pug", { project });
    } else {
        const err = new Error();
        err.status = 404;
        next(err);
    }
});

//Simple listener to open not-found.pug when a route does not exist
app.use((req, res, next) => {
    console.log("Error has occured, page not found.")
    res.status(404).render('not-found');
});

// {
//             "id" :,
//             "project_name": "",
//             "description": "",
//             "technologies": [],
//             "live_link": "",
//             "github_link": "",
//             "image_url": []
//         }

//Global error handler for the app.
app.use((err, req, res, next) => {
  if (err) {
    console.log('Global error handler called', err);
  };
  if(err.status === 404){
    console.log("Error has occured, page not found.")
    res.status(404).render('not-found', { err });
  } else {
    err.message = err.message || `Uh-oh, there was an error with the server. Refresh page or try again later.`
    res.status(err.status || 500).render('error', { err });
  }
});

//Added node app.js to package.json so that server can be started with "npm start"
// app.listen(3000, ()=>{
//     console.log("Running on port 3000");
// });

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Static node site is now online.")
});
