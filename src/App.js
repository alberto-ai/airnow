import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import ModelsContainer from './container/ModelsContainer';
import FooterWidget from './presentation/FooterWidget';

const URL_AIRBUS = 'http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?fTypeS=A3';
const AIRBUS_MODELS = [ '300', '310', '320', '330', '340', '350', '380' ];

const URL_BOEING = 'http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?fTypeS=B7';
const BOEING_MODELS = [ '707', '717', '737', '747', '757', '767', '777', '787' ];

class App extends Component {

  render() {

    return (
      <div className="App">
        <Grid>
          <Row>
            <ModelsContainer
              title="Airbus"
              url={URL_AIRBUS}
              model_types={AIRBUS_MODELS} />
          </Row>
          <Row>
            <ModelsContainer
              title="Boeing"
              url={URL_BOEING}
              model_types={BOEING_MODELS} />
          </Row>
        </Grid>
        <FooterWidget message="Flying aicraft data fetched from ADS-B Exchange (www.adsbexchange.com)"/>
      </div>
    );
  }
}

export default App;
