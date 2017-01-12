import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import ModelsContainer from './container/ModelsContainer';
import FooterWidget from './presentation/FooterWidget';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Grid>
          <ModelsContainer />
        </Grid>
        <FooterWidget message="Flying aicraft data fetched from ADS-B Exchange (www.adsbexchange.com)"/>
      </div>
    );
  }
}

export default App;
