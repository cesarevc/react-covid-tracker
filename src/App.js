import React from 'react';
// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
// import CountryPicker from './components/CountryPicker/CountryPicker'

import { Cards, Chart, CountryPicker } from './components';

//
import { fetchApi } from './api';

import styles from './App.module.css';




class App extends React.Component {

    state = {
        data: {},
    }

    async componentDidMount () {
        const fetchedData = await fetchApi();
        console.log(fetchedData);
        this.setState({ data: fetchedData })
    }

    render () {
        const { data } = this.state;
        console.log('data',data);

        return (
            <div className={styles.container}>
                <Cards data={data} /> 
                <Chart />
                <CountryPicker />
            </div>
        )
    }
}

export default App;