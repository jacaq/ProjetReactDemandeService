import express from 'express';
//import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import demandeRoutes from './routes/demandes.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

//dans le tuto utilisation de (bodyParser.jason) et (bodyParser.urlencoded)
//mais vu qu'il sont deprecated, je les ai remplacer par express
//car c'est integrer a partir de la version 4.16
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// CORS vous permet d'accéder à une ressource d'une origine différente.
// lorsque votre client demande une ressource, 
// la réponse contiendra en plus un tampon qui indique à votre navigateur d'autoriser le partage de ressources entre différentes origines.
app.use(cors());

//mettre après le Cors. pour eviter des erreur (je sais pas pourquoi)
//va ajouter le mot posts a toutes les routes qui proviennent du fichier posts de routes
app.use('/demandes', demandeRoutes);
//  routes relatif au comptes utilisateurs
app.use('/user', userRoutes);

/**
    vu que le fichier .env n'est pas transmis au GitHub il est possible de créer un fichier exemple
    .env.example dans lequel on ecrit un exemple de ce qu'il faut mettre dans le fichier pour pouvoir utiliser l'application
 */
const PORT = process.env.PORT || 5000;

//connection a la base de donnée
mongoose
    .connect(
        process.env.SERVICE_DB_CONNECT,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => app.listen(PORT, () => console.log(`Le serveur est operationnel sur le port: ${PORT}`)))
    .catch((error) => console.log(error.message));

//deprecier alors je l'ai mise en commentaire
//mongoose.set('useFindAndModify', false);