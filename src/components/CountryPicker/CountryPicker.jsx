import React, { useState, useEffect } from 'react';
// material resources
import { NativeSelect, FormControl } from '@material-ui/core';
// fetch api 
import { fetchCountries } from '../../api';
// css styles
import styles from './CountryPicker.module.css';

function CountryPicker ({ handleCountryChange }) {

    const [countries, setCountries ] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries());
        }

        fetchAPI();
    }, [])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={e => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countries.map((country, i) => <option value={country} key={i}>{country}</option> )}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;