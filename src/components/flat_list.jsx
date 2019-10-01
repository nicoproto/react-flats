import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  const { flats } = props;

  const renderList = () => {
    return flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.imageUrl}
          index={index}
          selected={flat.name === props.defaultFlat.name}
          selectFlat={props.selectFlat}
        />
      );
    });
  };

  return (
    <div className="flat-list">
      {renderList()}
    </div>
  );
};

export default FlatList;
