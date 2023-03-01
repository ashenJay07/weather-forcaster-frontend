import React, { Component } from 'react';

class SearchBox extends Component {
  state = {};

  render() {
    const { onSubmit, onChange, latitude, longitude } = this.props;

    return (
      <div className="col-sm-4">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Latitude
            </label>
            <input
              ref={latitude}
              type="text"
              className="form-control"
              onChange={onChange}
              id="latitude"
              name="latitude"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Longitude
            </label>
            <input
              ref={longitude}
              type="text"
              onChange={onChange}
              className="form-control"
              id="longitude"
              name="longitude"
            />
          </div>
          <button type="submit" className="btn btn-primary theme-purple">
            Search for Weather
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBox;
