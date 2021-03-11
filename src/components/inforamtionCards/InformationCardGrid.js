import {
    Card,
    CardText,
    CardBody,
    CardTitle,
  } from 'reactstrap';

const InformationCardList = (props) => {
  
    const getColor = (title) => {

      let color = '';

      switch(title) {
        case "new":
          color = "danger";
          break;
        case "active":
          color = "primary";
          break
        case "critical":
          color = "warning";
          break
        case "recovered":
          color = "success";
          break
        case "deaths":
          color = "secondary";
          break
        default:
          color = "info";
          break;
      }

      return color;
    }

    return (
      <div className="col mt-3">
        <div className="text-center">
          <Card inverse color={getColor(props.title)}>
            <CardBody>
              <CardTitle tag="h4">{props.title}:</CardTitle>
              <CardText>{props.value}</CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    );
} 

export default InformationCardList;