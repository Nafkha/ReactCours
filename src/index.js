import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*function Car(props){
  const carInfo = {name: "Ford",model : "Mustang"}
  return <button onClick={()=>props.handleClick(carInfo.model)}>Show Model</button>
}
function Garage(){
  const handleClick = (model) => alert(model)
  return(
    <>
      <h1>Who lives in my garage?</h1>
      <Car handleClick={handleClick}/>
    </>
  )
}*/


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
