import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import ModelsWidget from '../presentation/ModelsWidget';

const URL_BASE = 'http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?fTypeS=A3';
const AIRBUS_MODELS = [ 'A300', 'A310', 'A320', 'A330', 'A340', 'A350', 'A380' ];

class ModelsContainer extends Component {
  constructor() {
    super();
    this.state = {
      aircrafts: [],
      models: [ 0, 0, 0, 0, 0, 0, 0]
    }
  }

  componentWillMount() {
    fetchJsonp ( URL_BASE , {
      method: 'GET',
      mode: 'no-cors',
      credentials: 'include',
    })
    .then ( response => response.json() )
    .then ( (json) => {
      this.setState ( { aircrafts: json.acList });
      this.extractModels();
    })
  }

  extractModels () {
    let new_models = [ 0, 0, 0, 0, 0, 0, 0];
    let aircrafts = this.state.aircrafts;
    for (var i=0; i < aircrafts.length; i++) {
      for (var j=0; j < AIRBUS_MODELS.length; j++) {
        let currentModel = aircrafts[i].Mdl;
        if (currentModel.includes(AIRBUS_MODELS[j])) {
          new_models[j] += 1
        }
      }
    }
    this.setState( { models: new_models });
  }

  buildData (names, values) {
    let data = []
    for (var i=0; i < names.length; i++) {
      data.push ( { name: names[i], aircrafts: values[i] });
    }

    return data;
  }

  render() {
    let data = this.buildData (AIRBUS_MODELS, this.state.models);
    let total_aircraft = this.state.aircrafts.length;

    return (
      <ModelsWidget data={ data } num_aircraft={ total_aircraft } />
    )
  }
}

export default ModelsContainer;
