import { useEffect, useState } from "react";
import network from "../network/network-client";
import Movie from "../components/movie/Movie";

const Movies = (props) => {   
    
    const [movies, setMovies] = useState([]);

    const loadMovies = () => {
        network.get(
            'discover/movie',
            {
                year: 2020,
                page: 1,
            },
            (response) => {
                setMovies(response.results);
            },
            (error) => {
                console.log(error);
            }
        )
    }

    useEffect(() =>{
        loadMovies();
    },[]);

    const getMovies = () => {
        const movieList = movies.map(movie => {
            return <Movie  
                key={movie.id}
                title={movie.title}
                overview={movie.overview}
                poster_path={movie.poster_path}
            />
        })
        return movieList;
    }

    return <>
    <div className='container'>
        <div className='row'>
            {getMovies()}
        </div>
    </div>
    </>
}

export default Movies;