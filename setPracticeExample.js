import React, {useState} from 'react';

const useOurValue = (initialValue) => {
    const [value, setSomething] = React.useState(initialValue);
    const {name, surname} = value;
    return [name, surname, setSomething];
}

const Practice = () => {
   
    const [name, surname, setCount] = useOurValue({ name: 'Phil', surname: 'Mashiane' });

    return (
        <div>
            <h1>Count is: {`${name} ${surname}`}</h1>

            <input onChange={event => setCount({ name: event.target.value, surname })} />

            <input onChange={event => setCount({ name, surname: event.target.value })} />
        </div>
    )
}

export default Practice;


// useState is a funcion that receives an array of 2 elements, the first being the value and the second one being a function to set that value