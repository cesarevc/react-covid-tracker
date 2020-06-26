import React from 'react';
// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
// import CountryPicker from './components/CountryPicker/CountryPicker'

import { Cards, Chart, CountryPicker } from './components';

//
import { fetchApi } from './api';

import styles from './App.module.css';




class App extends React.Component {

    async componentDidMount () {
        const data = await fetchApi();
        console.log(data);
    }

    render () {

        return (
            <div className={styles.container}>
                <Chart />
                <CountryPicker />
                <Cards /> 
            </div>
        )
    }
}

export default App;