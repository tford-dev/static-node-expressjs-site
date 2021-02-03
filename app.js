const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const {projects} = require("./data/data.json");
const app = express();

//Setup for view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//reference to data.json
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/static', express.static('public/'));


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
  console.log('404 error handler called');
  res.status(404).render('not-found');
});

app.use((err, req, res, next) => {
    if (err) {
    console.log('Global error handler called', err);
    } 
    if(err.status === 404){
    res.status(404).render('not-found', { err });
    res.status(err.status || 500).render('error', { err });
  }
});

app.listen(3000, ()=>{
    console.log("Running on port 3000");
});