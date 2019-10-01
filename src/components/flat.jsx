import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    const { selectFlat, index } = this.props;
    selectFlat(index);
  }

  render() {
    const { flat, selected } = this.props;
    const {
      imageUrl,
      name,
      price,
      priceCurrency
    } = flat;

    return (
      <div
        className={`card${selected ? ' active' : ''}`}
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})` }}
      >
        <div className="card-category">{price} {priceCurrency}</div>
        <div className="card-description">{name}</div>
        <a href="#" className="card-link" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Flat;
