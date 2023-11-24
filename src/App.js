import logo from './logo.svg';
import './App.css';
import useState from "react-router-dom"
import data from './server/api/index';

function App() {
  const [datas, setData] = useState([]);
  setData(data)
  return (
    <div>
    
      {datas.map((data)=>{
        console.log(data);
      })}

    </div>
  );
}

export default App;
