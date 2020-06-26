import React from 'react';
// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
// import CountryPicker from './components/CountryPicker/CountryPicker'

import { Cards, Chart, CountryPicker } from './components';

//
import { fetchApi } from './api';

import styles from './App.module.css';

import coronaImage from './assets/image.png';




class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount () {
        const fetchedData = await fetchApi();
        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchApi(country);

        this.setState({ data: fetchedData, country })
    }

    render () {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>

                <img className={styles.image} src={coronaImage} alt="COVID-19" />
                <Cards data={data} /> 
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;