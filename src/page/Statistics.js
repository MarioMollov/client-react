import Filters from "../components/filters/Filters";
import InformationCardList from "../components/inforamtionCards/InformationCardList";
import InformationCardGrid from "../components/inforamtionCards/InformationCardGrid";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faList } from "@fortawesome/free-solid-svg-icons";
import { setListView } from '../redux/actions'
import { useEffect } from "react";


const Statistics = (props) => {
    
    const dispatch = useDispatch();

    const statistics = useSelector(state => state.statistics);
    const isListView = useSelector(state => state.isListView);
    const additionalInfo = useSelector(state => state.additionalInfo);
    console.log(statistics);

    
    const getStatistics = () => {
        
        if(!Object.keys(statistics).length == 0){
            
            const cases = statistics.cases;
            const neededStat = [];
            
            if(isListView){
                let index = 0;
                for(const property in cases) {
                    if(index < 4){
                        neededStat.push(
                            <InformationCardList
                                key={index} 
                                title={property} 
                                value={cases[property]}
                            />
                        );
                        index++;
                    }
                }
    
                neededStat.push(<InformationCardList
                    key={index} 
                    title="deaths" 
                    value={statistics.deaths.new}
                />)

                if(additionalInfo["total-cases"]){
                    neededStat.push(<InformationCardList 
                      title="Total cases" 
                      value={statistics.cases.total}
                  />)
                }  
                if(additionalInfo["total-tests"]){
                    neededStat.push(<InformationCardList
                      title="Total cases" 
                      value={statistics.tests.total}
                  />)
                }  
                if(additionalInfo["total-death-cases"]){
                    neededStat.push(<InformationCardList
                      title="Total cases" 
                      value={statistics.deaths.total}
                  />)
                }

            }else {
                let index = 0;
                for(const property in cases) {
                    if(index < 4){
                        neededStat.push(
                            <InformationCardGrid
                                key={index} 
                                title={property} 
                                value={cases[property]}
                            />
                        );
                        index++;
                    }
                }
    
                neededStat.push(<InformationCardGrid
                    key={index} 
                    title="deaths" 
                    value={statistics.deaths.new}
                />)

                if(additionalInfo["total-cases"]){
                    neededStat.push(<InformationCardGrid
                      title="Total cases" 
                      value={statistics.cases.total}
                  />)
                }  
                if(additionalInfo["total-tests"]){
                    neededStat.push(<InformationCardGrid
                      title="Total cases" 
                      value={statistics.tests.total}
                  />)
                }  
                if(additionalInfo["total-death-cases"]){
                    neededStat.push(<InformationCardGrid
                      title="Total cases" 
                      value={statistics.deaths.total}
                  />)
                }
            }

            const result = neededStat.map( (item) => {                
                return item
            })

            return result;

        }else {
            return <Alert color="secondary">
                There are no stаtistics
            </Alert>
        }
    }

    const getAdditionalInfo = () => {
        // debugger
        if(additionalInfo["total-cases"]){
            return (<InformationCardGrid 
              title="Total cases" 
              value={statistics.cases.total}
          />)
        }  
        if(additionalInfo["total-tests"]){
            return (<InformationCardGrid 
              title="Total cases" 
              value={statistics.tests.total}
          />)
        }  
        if(additionalInfo["total-death-cases"]){
            return (<InformationCardGrid 
              title="Total cases" 
              value={statistics.deaths.total}
          />)
        }
    }
    useEffect(() => {
        console.log(additionalInfo["total-cases"]);
        getAdditionalInfo();
    })

    const toglleClick = () => {
        dispatch(setListView(!isListView));
    }

    const getlistIcon = () => {
        if(isListView){
            return faTh
        }
        return faList;
    }
    
    return (
        <div className='container'>

            <Filters />
            <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-end pb-1">
                        <Button color="light" onClick={toglleClick}>
                            <FontAwesomeIcon icon={getlistIcon()} />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="row">
                {getStatistics()}
            </div>

        </div>
    );
}

export default Statistics;