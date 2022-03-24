import logo from './logo.svg';
import './App.css';
import { useEffect ,useState} from 'react';
import {makeFetchCall} from './Utils/api/index';
import EmailList from './component/EmailList';
 


function App() {

    const [emailList,setEmailList]=useState([]);

  async function callAPI(){
   
    console.log("called the api");

    //make api call
    const res=await makeFetchCall();
    console.log("api call data",res);
     setEmailList(res);

  }
    
 
  useEffect(()=>{

    console.log('useeffect');
    callAPI();

  },[]);


  console.log("fdfdfdfd");
  return (
    <div className="App">
      <EmailList
      list={emailList}
      />
    </div>
  );
}

export default App;
