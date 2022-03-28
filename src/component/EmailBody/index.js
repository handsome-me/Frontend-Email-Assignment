import React ,{useEffect, useState,useContext} from 'react';
import { Context } from '../../Context/Context';


const EmailBody=(props)=>{

    const {loader,data}=props;
     console.log("#131","loader",loader);
     const {emailClicked}=useContext(Context)
    
     

     useEffect(()=>{
         console.log("#121","First render",data);
           if(data)
         emailClicked(data.id);
        
     },[data])
    return(
     <div>
     {
         !loader?(<div>Loading.......</div>):(<div>{data?.body}</div>)
     }
     <button onClick={()=>{
       emailClicked(data.id,"FAV");
     }}>Fav</button>
     </div>
    )

}


export default EmailBody;