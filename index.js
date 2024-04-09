import express from "express"
import bodyParser from "body-parser"

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (req, res) => {
    res.render("home.ejs");
});

app.get('/form', (req, res) => {
    res.render("form.ejs");
});

app.post('/download' , (req, res) => {
    res.render("download.ejs", {
        name: req.body["fullName"],
        phone: req.body["phone"],
        address: req.body["address"],
        profile: req.body["profile"],
        email: req.body["email"],
        skills: req.body["skills"],
        linkedin: req.body["linkedin"],
        github: req.body["github"],
        college: req.body["college"],
        degree: req.body["degree"],
        from: req.body["from"],
        to: req.body["to"],
        percentDegree: req.body["percent-degree"],
        school: req.body["school"],
        stream: req.body["stream"],
        start: req.body["start"],
        end: req.body["end"],
        percentSchool:  req.body["percent-school"],
        projectName: req.body["project-name"],
        description: req.body["description"],
        author: req.body["author"],
        cert1: req.body["cert1"],
        desCert1: req.body["des-cert1"],
        cert2: req.body["cert2"],
        desCert2: req.body["des-cert2"],
        lang1: req.body["lang1"],
        proflang1: req.body["prof-lang1"],
        proflang2: req.body["prof-lang2"],
        lang2: req.body["lang2"],
    })
})

app.listen(port , () => {
    console.log(`Server is listening at local host ${port}`)
});
