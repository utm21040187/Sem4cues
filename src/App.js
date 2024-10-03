import './App.css';
import{ Form,Card,Button,Col,Container } from 'react-bootstrap'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UnoFormComponent } from './components/forms';

function App() {

  const [data, setData] = useState({})

  const onChange = (e) => {
      e.preventDefault();
      const obj = data;
      obj[e.target.name] = e.target.value;
      setData(obj)
      console.log(data)
  }

  const onClick = (e) => {
    console.log(data)
  }

  return (
    <Container> 
     <UnoFormComponent onChange={onChange} onClick={onClick}/>
    </Container>

  );
}

export default App;

