const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const {projects} = require("./data/data.json");
const app = express();
const morgan = require("morgan");
const { read } = require("fs");

//Setup for view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//reference to data.json
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/static', express.static('public/'));
app.use(morgan('dev'));


app.get("/", (req, res)=>{
    res.render("index.pug", { projects });
});

app.get("/about", (req, res)=>{
    res.render("about.pug");
});

app.get("/projects/:id", (req, res, next) =>{
    const projectId = req.params.id;
    const project = projects.find( ({id}) => id === +projectId);
    if(project){
        res.render("project.pug", { project });
        next();
    } else {
        res.sendStatus(404);
    }
});

app.use((req, res, next) => {
    console.log("Error has occured, page not found.")
    res.status(404).render('not-found');
});

app.listen(3000, ()=>{
    console.log("Running on port 3000");
});