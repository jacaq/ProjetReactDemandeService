import express from "express";

//  ici recuper la logique de la route
import { getDemandes, createDemande, updateDemande, deleteDemande, likeDemande } from '../controllers/demandes.js';

//  importer le middleware pour les authorisation avant action
import auth from '../middleware/auth.js';

const router = express.Router();

//  routes servant a faire les actions sur la Bse de Donnée
//  ici juste get pour recuperer un poste ou tous les pausetes, a verifié
//  et un create pour creer un nouveau poste

//  implementation de la route d'affichage des postes
router.get('/', getDemandes);

//  implementation de la route d'ajout de nouveaux poste
//  uniquement une personne connecté peut creer une demande
//  donc on ajout AUTH
router.post('/', auth, createDemande);

//  implementation de la route de modification d'un poste selectionné
router.patch('/:id', auth, updateDemande);

//  implementation de la route de suppression d'un poste
router.delete('/:id', auth, deleteDemande);

//  implementation de la route pour liker un poste
router.patch('/:id/likeDemande', auth, likeDemande);

export default router;