import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

class ModelsWidget extends Component {

  render () {
  	return (
      <div>
        <PageHeader className="panel_text">
          { this.props.num_aircraft } {this.props.title} flying now
        </PageHeader>

        <BarChart width={500} height={300} layout='horizontal' data={this.props.data}
              margin={{top: 5, right: 50, left: 20, bottom: 5}}>
            <XAxis dataKey="name" label="family" />
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
