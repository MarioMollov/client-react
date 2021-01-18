import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';

  function Example (props) {
    return (
      <div className='col-md-4'>
        <Card className='mb-3'>
          <CardImg 
          top 
          width="100%" 
          src={props.image} 
          alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">{props.title}</CardTitle>
            <CardText>{props.description}</CardText>
            <Button>See more</Button>
          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default Example;