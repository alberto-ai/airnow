import React, { Component } from 'react';
import { Row, PageHeader } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

class ModelsWidget extends Component {

  render () {
  	return (
      <Row>
        <PageHeader className="panel_text">
          Flying Airbus: <small>{ this.props.num_aircraft }</small>
        </PageHeader>

        <BarChart width={800} height={500} layout='horizontal' data={this.props.data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Bar dataKey="aircrafts" fill="#3498db" />
        </BarChart>
      </Row>
    );
  }
}

export default ModelsWidget;
