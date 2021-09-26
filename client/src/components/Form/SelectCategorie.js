
import React, { useState } from "react";

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import useStyles from './styles';

function SelectCategorie({ selectedType }) {

    const [categorie, setCategorie] = useState({
        name: '',
    });




    const handleChange = (event) => {
        const name = event.target.name;
        setCategorie({
            ...categorie,
            [name]: event.target.value,
        });
    };

    const classes = useStyles();
    return (
        <FormControl variant="outlined" fullWidth className={classes.formControl}>
            <InputLabel htmlFor="categorie-selector">Catégorie</InputLabel>
            <Select
                native
                value={categorie.name}
                onChange={selectedType}
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

export default SelectCategorie;