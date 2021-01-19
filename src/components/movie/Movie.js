import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';

  import constants from '../../constants';

  function Movie (props) {

    const getMovieImage = () => {
      
      if(!props.poster_path){
        return null;
      }
      return <CardImg 
        top 
        width="100%" 
        src={constants.posterBase + props.poster_path} 
        alt="Card image cap"
      />
    }

    return (
      <div className='col-md-4'>
        <Card className='mb-3'>
          {getMovieImage()}
          <CardBody>
            <CardTitle tag="h5">{props.title}</CardTitle>
            <CardText>{props.overview}</CardText>
            <Button>Movie details</Button>
          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default Movie;