import logo from './logo.svg';
import './App.css';
import { useEffect ,useState} from 'react';
import {makeFetchCall} from './Utils/api/index';
import EmailList from './component/EmailList';
 import {fetchBodyDetail} from './Utils/api'
import EmailBody from './component/EmailBody';


function App() {

    const [emailList,setEmailList]=useState([]);
    const [expandEmailBody,setExpand]=useState(null);
    
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



  const handleEmailClick=(clickedId)=>{
   console.log("121",clickedId);
    setExpand(true);
    fetchBodyDetail(clickedId).then((res)=>{
     console.log("#121","response of body detail api",res);
      setExpand({
        loader:true,
        data:res
      })

    });
    
  }

  console.log("fdfdfdfd");
  return (
    <div className="App">
      <EmailList
      list={emailList}
      onClick={handleEmailClick}
      />
      {
        expandEmailBody&&(
        <EmailBody
         loader={expandEmailBody.loader}
         data={expandEmailBody.data}
        />)
      }
    </div>
  );
}

export default App;
