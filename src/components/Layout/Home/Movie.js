import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchMovies} from '../../../actions/searchActions';

export class Movie extends Component {

    componentDidMount() {
        this.props.fetchMovies(this.props.match.params.id)
    }

    render() {
        const {movie}= this.props;
        return (
            <React.Fragment>
                <div className="row">
                <div className="col-md-4 card card-body">
                    <img src={movie.Poster} className="thumbnail" alt="Poster" />
                </div>
                <div className="col-md-8">
                    <h2 className="mb-4">{movie.Title}</h2>
                    <ul className="list-group">
                    <li className="list-group-item">
                        <b>Genre:</b> {movie.Genre}
                    </li>
                    <li className="list-group-item">
                        <b>Released:</b> {movie.Released}
                    </li>
                    <li className="list-group-item">
                        <b>Rated:</b> {movie.Rated}
                    </li>
                    <li className="list-group-item">
                        <b>IMDB Rating:</b> {movie.imdbRating}
                    </li>
                    <li className="list-group-item">
                        <b>Director:</b> {movie.Director}
                    </li>
                    <li className="list-group-item">
                        <b>Writer:</b> {movie.Writer}
                    </li>
                    <li className="list-group-item">
                        <b>Actors:</b> {movie.Actors}
                    </li>
                    </ul>
                </div>
                </div>
                <div className="row">
                <div className="card card-body bg-dark my-5 text-light">
                    <div className="col-md-12">
                    <h2> About </h2>
                    {movie.Plot}
                    <hr />
                    <a
                        href={'https://www.imdb.com/title/' + movie.imdbID}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                         IMDB LINK
                    </a>
                    <Link to="/" className="btn btn-default text-light">
                         Back To Search Screen
                    </Link>
                    </div>
                </div>
                </div>
            </React.Fragment>
      );
    }
}

const mapStateToProps= state => ({
    movie: state.movies.movie
});

export default connect(mapStateToProps, {fetchMovies})(Movie);