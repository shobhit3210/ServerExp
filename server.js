const express=require('express');
const hbs=require('hbs');

const port=process.env.PORT||3000;

var app=express();

//setting view engine in express
app.set('view engine','hbs');

hbs.registerPartials(__dirname+'/views/partials');

hbs.registerHelper('getCurrentYear',()=>{
    return '2018xx';
});

//For static content
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.send('<h1>Hello express<h1>');
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:'FTitle',
        currentYear:'2018',
        foot:'Suck it'
    });
});

app.get('/projects',(req,res)=>{
    res.render('projects.hbs',{
        projectName:'Bluebird',
        validity:'July 2018'
    });
});

app.listen(port,()=>{
    console.log(`Server is up at port ${port}`);
});