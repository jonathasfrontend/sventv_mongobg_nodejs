const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const mongoose = require('mongoose')
const Filme = require('./models/filmes')
const Desenhos = require('./models/desenhos')
const Variedades = require('./models/variedades')
const Esportes = require('./models/esports')
// const uuid = require('uuid');
// const linkify = require('linkifyjs');
// const Noticias = require('./models/noticias')

function formatDate(dateString) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', options); // Altere 'pt-BR' para a localização desejada
}

const port = 3000;
const app = express();
require('dotenv').config();
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({extended: true})); 
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/pages'));

app.get('/',async (req, res) => {

  const movies = await axios.get(process.env.LINK_MOVIES_BANNERS);
  const listMovies = movies.data.results.map(val => ({
      id: val._id,
      adult: val.adult,
      backdrop_path: val.backdrop_path,
      overview: val.overview,
      title: val.title,
      poster_path: val.poster_path,
      release_date: formatDate(val.release_date),
  }));

  const filmes = await Filme.find()
  const desenhos = await Desenhos.find()
  const variedades = await Variedades.find()
  const espotes = await Esportes.find()

  res.render('home', { listMovies, filmes, desenhos, variedades, espotes })
})

app.get('/filmes/:id', async (req, res) => {
  const slug = req.params.id;
  const filmes = await Filme.find({ _id: slug })
  if (filmes) {
    res.render('filmes', { filmes })
  } else {
    res.status(404).render('404');
  }
});
app.get('/desenho/:id', async (req, res) => {
  const slug = req.params.id;
  const desenho = await Desenhos.find({ _id: slug })
  if (desenho) {
    res.render('desenho', { desenho })
  } else {
    res.status(404).render('404');
  }
});
app.get('/variedades/:id', async (req, res) => {
  const slug = req.params.id;
  const variedade = await Variedades.find({ _id: slug })
  if (variedade) {
    res.render('variedades', { variedade })
  } else {
    res.status(404).render('404');
  }
});
app.get('/esportes/:id', async (req, res) => {
  const slug = req.params.id;
  const esportes = await Esportes.find({ _id: slug })
  if (esportes) {
    res.render('esportes', { esportes })
  } else {
    res.status(404).render('404');
  }
});

mongoose.connect('mongodb+srv://root:dFrPbwloK4qEAnKy@cluster0.xvdlp.mongodb.net/tvchannels?retryWrites=true&w=majority')
.then(()=>{console.log("Banco de dados conectado!")})
.catch(()=>{console.log("Falha ao conectar com o banco!")});

app.listen(process.env.PORT || port,()=>{
    console.log(`Aplicação rodando, porta:${port}`);
})
