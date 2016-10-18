import React from 'react';
import {connect} from 'react-redux';
import HeaderStripe from './header_stripe';

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderStripe />


        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default App;
