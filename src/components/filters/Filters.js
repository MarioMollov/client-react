import { FormGroup, Label, Input, Button } from 'reactstrap';
import { useEffect, useRef } from 'react';
import { getStatistics, setAdditionalInfo } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

let selectedCountry = 'Bulgaria';
let selectedDay ="";
let selectedMonth = "";
let selectedYear = "";

const Filters = () => {

    const dispatch = useDispatch();

    const additionalInfo = useSelector(state => state.additionalInfo);

    const handleFiltersSelect = (e) => {
        let id = e.target.id;
        switch(id){
            case 'select-country': 
                let country = e.target.value;
                selectedCountry =  country;
                break;
            case 'select-day': 
                let day = e.target.value;
                if(!day.charAt(1)){
                    day = `0${day}`;
                }
                selectedDay = day;
                break;
            case 'select-month': 
                let month = e.target.value;
                if(!month.charAt(1)){
                    month = `0${month}`;
                }
                selectedMonth = month;
                break;
            case 'select-year': 
                let year = e.target.value;
                selectedYear = year;
                break;
            default:
                break;
        }
    }

    const handleOnChange = (event) => {
        let id = event.target.id;
        additionalInfo[id] = event.target.checked;

        dispatch(setAdditionalInfo(additionalInfo));
        
    }
    
    const loadStatistics = () => {
        const selectedDate = `${selectedYear}-${selectedMonth}-${selectedDay}`;
        dispatch(getStatistics({
            country: selectedCountry,
            day: selectedDate
        }));
    }

    useEffect(() => {
        loadStatistics();
    },[]);

    return (    
        <div className='row mt-3'>
            <div className='col-3'>
                <FormGroup>
                    <Label for="select-country">Select county</Label>
                    <Input type="select" name="select" id="select-country" onChange={handleFiltersSelect}>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Germany">Germany</option>
                        <option value="Greece">Greece</option>
                        <option value="North-Macedonia">North-Macedonia</option>
                        <option value="Romania">Romania</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="UK">UK</option>
                    </Input>
                </FormGroup>
            </div>
            <div className='col-6'>
                <Label for="select-date">Select date</Label>
                <div className='d-flex' id="select-date">
                    <Input 
                        type="number" 
                        min='1' 
                        max='31' 
                        name="select" 
                        id="select-day" 
                        className='mx-1' 
                        placeholder='Day'
                        onChange={handleFiltersSelect}
                    />
                    <Input 
                        type="number"  
                        min='1' 
                        max='12'
                         name="select" 
                         id="select-month" 
                         className='mx-1' 
                         placeholder='Month' 
                         onChange={handleFiltersSelect}
                    />
                    <Input 
                        type="number" 
                        min='2020' 
                        name="select" 
                        id="select-year" 
                        className='mx-1' 
                        placeholder='Year'
                        onChange={handleFiltersSelect}
                    />
                    <Button color='primary' className='mx-1' onClick={loadStatistics}>Check</Button>
                </div>
            </div>
            <div className="col-3">
                <Label for="additional-info">Additional information</Label>
                <div className=''>
                    <FormGroup check inline>
                        <Label check> 
                            <Input
                                type='checkbox'
                                id="total-cases"
                                onChange={handleOnChange}
                            />
                            Total cases
                        </Label>
                        <Label check> 
                            <Input
                                type='checkbox'
                                id="total-tests"
                                onChange={handleOnChange}
                            />
                            Total tests
                        </Label>
                        <Label check> 
                            <Input
                                type='checkbox'
                                id="total-death-cases"
                                onChange={handleOnChange}
                            />
                            Total death cases
                        </Label>
                    </FormGroup>
                </div>
            </div>
        </div>
    );
}

export default Filters;