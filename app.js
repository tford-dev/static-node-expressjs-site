const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const {projects} = require("./data/data.json");
const app = express();
const morgan = require("morgan");

//Setup for view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: false}));
app.use('/static', express.static('public/'));
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
        res.sendStatus(404);
    }
});

//Simple listener to open not-found.pug when a route does not exist
app.use((req, res, next) => {
    console.log("Error has occured, page not found.")
    res.status(404).render('not-found');
});

app.listen(3000, ()=>{
    console.log("Running on port 3000");
});