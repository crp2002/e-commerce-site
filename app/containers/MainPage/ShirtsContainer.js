import React from 'react';
import item1 from './Images/item1-casual-short.jpeg';
import item2 from './Images/item2-casual-short.jpeg';
import item3 from './Images/item3-casual-long.jpeg';
import item4 from './Images/item4-casual-long.jpeg';
import item5 from './Images/item5-dress-long.jpeg';
import item6 from './Images/item6-casual-long.jpeg';
import item7 from './Images/item7-casual-long.jpeg';
import item8 from './Images/item8-casual-short.jpeg';
import item9 from './Images/item9-dress-long.jpeg';

// Container for all the displayed shirts
export default class ShirtsContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    // A temp database, ideally this could be obtain from a database by doing a query to a server
    const tempDB = [
      {
        id: 1,
        type: 'casual',
        sleeve: 'short',
        picture: item1,
      },
      {
        id: 2,
        type: 'casual',
        sleeve: 'short',
        picture: item2,
      },
      {
        id: 3,
        type: 'casual',
        sleeve: 'long',
        picture: item3,
      },
      {
        id: 4,
        type: 'casual',
        sleeve: 'long',
        picture: item4,
      },
      {
        id: 5,
        type: 'dress',
        sleeve: 'long',
        picture: item5,
      },
      {
        id: 6,
        type: 'casual',
        sleeve: 'long',
        picture: item6,
      },
      {
        id: 7,
        type: 'casual',
        sleeve: 'long',
        picture: item7,
      },
      {
        id: 8,
        type: 'casual',
        sleeve: 'short',
        picture: item8,
      },
      {
        id: 9,
        type: 'dress',
        sleeve: 'long',
        picture: item9,
      },
    ];

    // render each element in a img tag
    const renderShirts = tempDB.map((shirt, i) => { // eslint-disable-line 
      return (
        <div className="itemContainer" key={`div ${i}`}>
          <img className="shirt" src={shirt.picture} key={i} role="presentation" />
        </div>
      );
    });
    return (
      <div className="shirt-container" >
        {renderShirts}
      </div >
    );
  }
}
// next estep is to conncet to the store from here

