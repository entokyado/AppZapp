import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const "/" = "AppZapp/"
var bool = Boolean(0);
var value;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// "data"
//onde será armazenado os dados a serem passados para o client-side
var data = {
    posts : [],
    index : value,
    light : bool,
};


// "time()"
//retorna as horas
function time() {
    return("| " + new Date().toLocaleDateString() + " | " + new Date().getHours().toString() + ":" + new Date().getMinutes().toString());
}


// "Post()"
//constrói a "var post"
function Post(user, text, time) {
    this.user = user;
    this.text = text;
    this.time = time;
}

// "toggleDarkMode"
//alterna a "var bool" entre true/false
function toggleDarkMode() {
    bool = !bool;
    data.light = bool;
}


// "/"
//exibe index.ejs com "data"
app.get("/", (req, res) => {
    res.render("index.ejs", data);
});


// "/about"
//exibe about.ejs
app.get("/about", (req, res) => {
    res.render("about.ejs", data);
});


// "/editor"
//exibe editor.ejs
app.get("/editor", (req, res) => {
    res.render("editor.ejs", data);
});


// "/clear"
//limpa "data.posts"
//redireciona para "/"
app.get("/clear", (req, res) => {
    data.posts.length = 0;
    res.redirect("/");
});

// "/dark"
//chama "toggleDarkMode()"
//recarrega a página
app.get("/dark", (req, res) => {
    toggleDarkMode();
    res.redirect(req.rawHeaders[25]);
});


// "/create"
//chama "Post()" e coloca a "var post" em "data.posts"
//redireciona para "/"
app.post("/create", (req, res) => {
    data.posts.push(new Post(req.body["user"], req.body["text"], time()));
    res.redirect("/");
});


// "/edit"
//atualiza "data.index" pra o index em "data.posts" do post selecionado
//abre editor.ejs com "data"
app.post("/edit", (req, res) =>{
    let e = Object.entries(req.body)[0][0];
    data.index = e;
    res.render("editor.ejs", data);
});


// "/editDone"
//atualiza o post selecionado de "data.posts" com "data.index" para o novo
//redireciona para "/"
app.post("/editDone", (req, res) => {
    data.posts[data.index] = { user: (req.body.user), text: (req.body.text), time: (time()) };
    data.index = null;
    res.redirect("/");
});


// "/delete"
//deleta o post selecionado de "data.posts"
//redireciona para "/"
app.post("/delete", (req, res) => {
    let d = Object.entries(req.body)[0][0];
    data.posts.splice(d, 1);
    res.redirect("/");
});


//roda o sever
app.listen(port, () => {
    console.log(`app running on port ${port}.`);
});
