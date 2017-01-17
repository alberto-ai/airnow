import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

class ModelsWidget extends Component {

  render () {
  	return (
      <div>
        <PageHeader className="panel_text">
          { this.props.num_aircraft } <small>{this.props.title} flying now</small>
        </PageHeader>

        <BarChart width={720} height={300} layout='horizontal' data={this.props.data}
              margin={{top: 5, right: 5, left: 5, bottom: 5}}>
            <XAxis dataKey="name" />
            <YAxis unit="# aircraft"/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Bar dataKey="aircrafts" fill="#3498db" />
        </BarChart>
      </div>
    );
  }
}

export default ModelsWidget;
