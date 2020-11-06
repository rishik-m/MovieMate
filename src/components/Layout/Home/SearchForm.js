import React, { Component } from 'react';
import {searchMovie, fetchMovie} from '../../../actions/searchActions';
import {connect} from 'react-redux';

export class SearchForm extends Component {

    onChange= e => {
      this.props.searchMovie(e.target.value)
    };

    onSubmit= e => {
      e.preventDefault()
      this.props.fetchMovie(this.props.text)
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
              <div className="container">
                <h1 className="display-4 mb-3">
                 <i className="fa fa-search" /> Search for a movie, Web series, ...
                </h1>
                <form id="searchForm" onSubmit={this.onSubmit}>
                 <input
                  type="text"
                  className="form-control"
                  name="searchText"
                  placeholder="Search Your Favourite"
                  onChange={this.onChange}
                />   
               <button type="submit" className="btn btn-dark btn-bg mt-3">
                 Search
               </button>
               </form>
             </div>
            </div>
        );
    }
}

const mapStateToProps= state => ({
  text: state.movies.text
});

export default connect(mapStateToProps, {searchMovie, fetchMovie})(SearchForm);
