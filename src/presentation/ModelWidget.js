import React, { Component } from 'react';
import { Media } from 'react-bootstrap';

class ModelWidget extends Component {
  render() {
    return (
      <Media>
        <Media.Left>
          <img width={250} height={140} src={ "/" + this.props.name + ".jpg"} alt="250x140"/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>{ this.props.name }: { this.props.value }</Media.Heading>
        </Media.Body>
      </Media>
    )
  }
}

export default ModelWidget;
