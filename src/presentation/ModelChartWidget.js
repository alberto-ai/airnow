import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class ModelChartWidget extends Component {

  render () {
  	return (
    	<BarChart width={800} height={500} layout='horizontal' data={this.props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="aircrafts" fill="#2980b9" />
      </BarChart>
    );
  }
}

export default ModelChartWidget;
