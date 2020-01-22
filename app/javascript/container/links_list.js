import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLinks } from '../actions';

class Links extends React.Component {
  render() {
    return (
      <React.Fragment>
        Links List
        <button className="getLinksBtn" onClick={() => this.props.getLinks()}>getLinks</button>
      </React.Fragment>
    )
  }
}

export default connect(({ links }) => ({ links }), { getLinks })(Links);
