const express = require("express");
// USE THIS FOR ROUTES IN OTHER FILES const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");
const pug = require("pug");
const {projects} = require("./data/data.json");
const app = express();

//reference to data.json
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get("/", (req, res)=>{
    res.render("index.pug", { projects });
});

app.get("/about", (req, res)=>{
    res.render("about.pug");
});

app.get("/projects/:id", (req, res) =>{
    const projectsId = req.params.id;
    const project = projects.find( ({id}) => id === +projectsId);
    if(project){
        res.render("project.pug", { project });
    } else {
        res.sendStatus(404);
    }
});

app.listen(3000, ()=>{
    console.log("Running on port 3000");
});