import { useEffect, useState } from "react";
import network from "../network/network-client";
import Movie from "../components/movie/Movie";

const Movies = (props) => {   
    
    const [movie, setMovie] = useState({});

    const loadMovies = () => {
        network.get(
            'movie/76341',
            {},
            (response) => {
                setMovie(response);
            },
            (error) => {
                console.log(error);
            }
        )
    }

    useEffect(() =>{
        loadMovies();
    },[]);

    return <>
    <div className='container'>
        <div className='row'>
            <Movie  
                title={movie.title}
                overview={movie.overview}
                poster_path={movie.poster_path}

            />
        </div>
    </div>
    </>
}

export default Movies;