// import React, {useState} from 'react';

// const useOurValue = (initialValue) => {
//     const [value, setSomething] = React.useState(initialValue);
//     const {name, surname} = value;
//     return [name, surname, setSomething];
// }


// const Practice = () => {
   
//     const [name, surname, setName] = useOurValue({ name: 'd', surname: 's' });

//     return (
//         <div>
//             <h1>Hello, my name is Scola Murote. Whats yours?</h1>

//             <input onChange={event => setName({ name, name: event.target.value })} />
       
//              <input onChange={event => setName({ surname, surname: event.target.value })} /> 

//             <h1>Its so nice to meet you {`${name} ${surname}`} 😊</h1>
//         </div>
//     )
// }

// export default Practice;


// // useState is a funcion that receives an array of 2 elements, the first being the value and the second one being a function to set that value