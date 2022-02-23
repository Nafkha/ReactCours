import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/navbar/navbar';
function App() {
  const table = [{title:'About Us'},{title : 'Career'},{title : 'Derpartments',dropdown_elements :['dropdown 1 ','dropdown 2']}]
  const card = [{url:'https://www.docplanner.com/images/warsaw.png',name:'Warsasw'},{url:'https://www.docplanner.com/images/warsaw.png',name:'Warsasw'},{url:'https://www.docplanner.com/images/barcelona.png',name:'Barcelona'},{url:'https://www.docplanner.com/images/munich.png',name:'Munich'},{url:'https://www.docplanner.com/images/istanbul.png',name:'Istanbul'}]
  return (
    <div>
       <Navbar navItems = {table}/>
      <div className='list'>
      {card.map((cr)=><Card title={cr.name} url={cr.url}/>)};
      </div>
       

    </div>
  );
}

export default App;
