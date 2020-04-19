import React from 'react';
import './demonym.css';


//Step #1 - Create a component that accepts 2 props named name and country
//and simply renders the 'A Barbadian comes from Barbados' string

/*import React from 'react';
import './demonym.css';

export default function Demonym(props) {

  return (
    <div className="demonym">
      A {props.name} comes from {props.country}
    </div>
  );
}*/


export default function Demonym(props) {

  return (
    <div className="demonym">
      A {props.name} comes from {props.country}
    </div>
  );
}