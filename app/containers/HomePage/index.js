import React from 'react';
import People from './people.mp4';

export default class HomePage extends React.PureComponent {// eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <video id="vid" playsInline autoPlay muted loop>
          <source src={People} type="video/mp4" />
        </video>
        <div id="sqaure" >
          <h1>Dollar Shirt Club</h1>
          <p>The best shirts online</p>
          <button>SHOP</button>
        </div>
      </div>
    );
  }
}
