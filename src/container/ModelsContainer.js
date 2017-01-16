import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import ModelsWidget from '../presentation/ModelsWidget';

class ModelsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aircrafts: [],
      models: new Array(this.props.model_types.length).fill(0),
    }
  }

  componentWillMount() {
    this.setState ( {
      model_types: this.props.model_types,
      title: this.props.title
    });

    fetchJsonp ( this.props.url, {
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
    let new_models = new Array(this.state.model_types.length).fill(0);
    let aircrafts = this.state.aircrafts;
    for (var i=0; i < aircrafts.length; i++) {
      for (var j=0; j < this.state.model_types.length-1; j++) {
        let currentModel = aircrafts[i].Mdl;
        if (currentModel.includes(this.props.model_types[j].substring(0,2))) {
          new_models[j] += 1;
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
    let data = this.buildData (this.state.model_types, this.state.models);
    let total_aircraft = this.state.aircrafts.length;

    return (
      <ModelsWidget
        title={ this.state.title }
        data={ data } num_aircraft={ total_aircraft } />
    )
  }
}

export default ModelsContainer;
