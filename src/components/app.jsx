import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';
import FlatList from './flat_list';
import flats from '../../data/flats';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listflats: flats,
      defaultFlat: flats[0]
    };
  }

  selectFlat = (index) => {
    this.setState({ defaultFlat: flats[index] });
  }

  center() {
    const { defaultFlat } = this.state;
    const { lat, lng } = defaultFlat;
    return {
      lat,
      lng
    };
  }

  render() {
    const { listflats, defaultFlat } = this.state;
    const { lat, lng } = defaultFlat;

    return (
      <div>
        <FlatList
          flats={listflats}
          defaultFlat={defaultFlat}
          selectFlat={this.selectFlat}
        />
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            <Marker lat={lat} lng={lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
