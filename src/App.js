import logo from './logo.svg';
import './App.css';

// function App(props) {
//   return <div>
//     Hello from app.js {props.name} and age {props.age}
//   </div>
// }
function App({name,age}) {
  //let users = {name:"sohail",age:"26"};
  //let{name,age}=users; //equailant to let name =users.name ; let age =users.age;
  return <div>
    Hello from app.js {name} and age {age-20}   
  </div>
}

export default App;
