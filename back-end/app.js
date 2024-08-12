import express from 'express'
import cors from 'cors'
import { pokemons } from './data-base/dbPokemons.js'
import { successData } from './helper.js'
import { statusCodes } from './helper.js'
const app = express()
const PORT = 3001
app.use(cors());
//Middleware qui écoute toutes les requete sur /pokemon//list/:name
//peut avoir le tableau de requetes de l'utilisateur afin de savoir les pokemon les plus demande
let a = [];
console.log(`affiche la liste du tableaux des lists : ${a}`);

const loggerPokemon = (req, res, next) => {
    a.push(req.url);
    console.log(`URL: ${req.url}`)
    console.log(`voici la liste des URL demandées: ${a}`);
    next()
}
app.use(loggerPokemon);

console.log(successData('oli ligne9', { id: 2 }));
// api rest sur  l'id
app.get('/api/pokemon/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(el => el.id === id)
    res.json(pokemon)

})

//----------Get /list-------------------

app.get('/pokemon', (req, res) => {
    try {
        const nbPokemon = pokemons.length;

        // Condition pour 400 (Bad Request)
        if (!req.query.valid) {
            return res.status(statusCodes.BAD_REQUEST).json(successData('Requête invalide.', null));
        }

        // Condition pour 404 (Not Found)
        if (nbPokemon === 0) {
            return res.status(statusCodes.NOT_FOUND).json(successData('Aucun Pokémon trouvé.', null));
        }

        // Condition pour 200 (OK)
        const allNames = pokemons.map(el => el.name);
        const message = `Le serveur a bien reçu votre requête.`;
        console.log(allNames);
        return res.status(statusCodes.OK).json(successData(message, allNames));

    } catch (error) {
        // Condition pour 500 (Internal Server Error)
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json(successData('Une erreur est survenue.', null));
    }
});

//server ecoute sur : localhost:3001/
app.listen(PORT, () => console.log(`le server ecoute sur le port :${PORT}`))
