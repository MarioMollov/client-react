import React from 'react';
import { useDispatch } from 'react-redux';
import { FormGroup, Label, Input } from 'reactstrap';
import {setSelectedGenres} from '../../redux/actions'

const SelectGenres = (props) => {

  const dispatch = useDispatch();
  let selectedGenres = [];
  const inputOnChange = event => {
    const isChecked = event.target.checked;
    const genreId = event.target.value;

    if(isChecked){
      selectedGenres.push(genreId);
    }else {
      
      selectedGenres = selectedGenres.filter(element => element !== genreId);
    }
    dispatch(setSelectedGenres(selectedGenres));
  }

    return (
      <div>
        <FormGroup check inline>
          <Label check>
            <Input type="checkbox" value='28' onClick={inputOnChange} /> Action
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input type="checkbox" value='12' onClick={inputOnChange} /> Adventure
          </Label>
        </FormGroup>
      </div>
    );
}

export default SelectGenres;