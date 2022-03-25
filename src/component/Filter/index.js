import React ,{useState} from 'react';


const EmailBody=(props)=>{

    const {loader,data}=props;
     console.log("#131","loader",loader);
    return(
     <>
     {
         !loader?(<div>Loading.......</div>):(<div>{data?.body}</div>)
     }
     </>
    )

}


export default EmailBody;