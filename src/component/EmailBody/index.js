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
     <>
     {
         !loader?(<div>Loading.......</div>):(<div>{data?.body}</div>)
     }
     </>
    )

}


export default EmailBody;