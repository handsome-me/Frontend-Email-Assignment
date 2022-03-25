import logo from './logo.svg';
import './App.css';
import { useEffect ,useState,useContext} from 'react';
import EmailList from './component/EmailList';
 import {fetchBodyDetail} from './Utils/api'
import EmailBody from './component/EmailBody';
import {Context}  from './Context/Context';

function App() {

   const {emailList,filter}=useContext(Context);
    const [expandEmailBody,setExpand]=useState(null);
     console.log("filter","#131",filter);
 
  useEffect(()=>{

    // console.log('useeffect');
    // callAPI();

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
