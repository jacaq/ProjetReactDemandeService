import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

//un state ne peut pas etre vide donc, initialiser a rien
/*
export default (demandes = [], action) => {
    //selon le type de l'action faire les operation voulu
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...demandes, action.payload];
        //???????????????????????????????????????
        case UPDATE:
            return demandes.map((demande) => (demande._id === action.payload._id ? action.payload : demande));
        case DELETE:
            return demandes.filter((demande) => demande._id !== action.payload);

        default:
            return demandes;
    }
};*/

const demandes = (demandes = [], action) => {
    //selon le type de l'action faire les operation voulu
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...demandes, action.payload];
        //???????????????????????????????????????
        case UPDATE:
            return demandes.map((demande) => (demande._id === action.payload._id ? action.payload : demande));
        case DELETE:
            return demandes.filter((demande) => demande._id !== action.payload);

        default:
            return demandes;
    }
};

export default demandes