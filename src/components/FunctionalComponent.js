import { useState } from "react";

import { Alert, Button, Input, InputGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const FunctionalComponent = (props) => {

    const [count, setCount] = useState(0);

    function handleChange (event) {
        setCount(event.target.count)
    }

    return <div className='my-2'>
        <Alert color='info'>
            <FontAwesomeIcon icon={faCubes} className='mr-2' />
            {props.title}
        </Alert>
        <InputGroup>
            <Button color='success' onClick={() => setCount(count +1)}>
                <FontAwesomeIcon icon={faPlusCircle} />
            </Button>
            <Input disabled value={count} onChange={handleChange}></Input>
            <Button color='danger' onClick={() => setCount(count - 1)}>
                <FontAwesomeIcon icon={faMinusCircle} />
            </Button>
        </InputGroup>
    </div>
}

export default FunctionalComponent;