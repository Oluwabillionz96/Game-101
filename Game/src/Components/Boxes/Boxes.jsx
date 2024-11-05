import './Boxes.css'
import { useState } from 'react';
const Boxes = ({value, onSquareClick}) => {

  // const [value, setValue] = useState(null)
  
  // function handleClick() {
  //   setValue(<div className='red'></div>)
  // }

  return (<button className="Boxes" onClick={onSquareClick}>
    {value}
  </button>);
}

export default Boxes