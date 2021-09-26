
/*import React, { useState } from "react";
import useStyles from './styles';

function SelectCategorie() {
    const [categorie, setCategorie] = useState("");
    const classes = useStyles();
    return (
        <div className={classes.test}   >
            <select
                className="custom-select"
                value={categorie}
                onChange={(e) => {
                    const categorieChoisit = e.target.value;
                    setCategorie(categorieChoisit);
                }}
            >
                <option value="vide"  >Sélectionnez une catégorie</option>
                <option value="informatique">Informatique</option>
                <option value="aide maison">Aide maison</option>
                <option value="plomberie">Plomberie</option>
                <option value="jardinage">Jardinage</option>
                <option value="meuble">Meuble</option>
                <option value="peinture">Peinture</option>
                <option value="mecanique">Mécanique</option>
            </select>

        </div>
    );
}

export default SelectCategorie;


*/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';


import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SelectCategorie() {
    const classes = useStyles();
    //const [categorie, setCategorie] = React.useState('');

    const [state, setState] = React.useState({
        categorie: '',
        name: 'hai',
    });
    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };


    return (


        <FormControl variant="outlined" fullWidth className={classes.formControl}>
            <InputLabel htmlFor="categorie-selector">Catégorie</InputLabel>
            <Select
                native
                value={state.categorie}
                onChange={handleChange}
                label="Catégorie"
                inputProps={{
                    name: 'categorie',
                    id: 'categorie-selector',
                }}
            >
                <option aria-label="None" value="" />

                <option value="informatique">Informatique</option>
                <option value="aide maison">Aide maison</option>
                <option value="plomberie">Plomberie</option>
                <option value="jardinage">Jardinage</option>
                <option value="meuble">Meuble</option>
                <option value="peinture">Peinture</option>
                <option value="mecanique">Mécanique</option>

            </Select>
        </FormControl>


    );
}



/*
 <FormControl required className={classes.formControl}>
                <InputLabel id="demo-simple-select-required-label">Catégorie</InputLabel>
                <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={categorie}
                    onChange={handleChange}
                    className={classes.selectEmpty}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"informatique"}>Informatique</MenuItem>
                    <MenuItem value={"aide maison"}>Aide maison</MenuItem>
                    <MenuItem value={"plomberie"}>Plomberie</MenuItem>
                    <MenuItem value={"jardinage"}>Jardinage</MenuItem>
                    <MenuItem value={"meuble"}>Meuble</MenuItem>
                    <MenuItem value={"peinture"}>Peinture</MenuItem>
                    <MenuItem value={"mecanique"}>Mécanique</MenuItem>
                </Select>
                <FormHelperText>Required</FormHelperText>
            </FormControl>
*/