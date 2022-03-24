 import React from 'react';
import "./index.css"
  
/*
 {

"id": "1",
"from": {
"email": "bounced@flipkart.com",
"name": "bounced",
"date": 1582729505000,
"subject": "Lorem Ipsum",
"short_description": "Vestibulum sit amet ipsum aliquet, lacinia nulla malesuada, ullamcorper massa"

}
*/
 const Email = (props) =>{

    const {id,from,subject,short_description,date,read}=props;
    const {email,name}=from;
    console.log("email---->>...",from,subject);
     return (
         <div className="email-container">
             <div className='avatar-container'>imageAvatar</div>
             <div id={id} className='email-information'>
                 {renderHTML("from",email,name)}
                 {renderHTML("subject",subject)}
                 {renderHTML(short_description)}
                 {renderHTML(date)}
             </div>
         </div>
     );
 };
 
 
 export default Email;


 const renderHTML=(title,...rest)=>{
  
  return(
      <>
      {
      title&&rest.length?( <div>{title}:{rest.map((item)=><div style={{display:'inline-block',color:"black",fontWeight:'bold'}}>{item}</div>)}</div>):(<div>{title}</div>)
      }
      </>

  )

 }

/**
 * {
"list": [
{
"id": "1",
"from": {
"email": "bounced@flipkart.com",
"name": "bounced"
},
"date": 1582729505000,
"subject": "Lorem Ipsum",
"short_description": "Vestibulum sit amet ipsum aliquet, lacinia nulla malesuada, ullamcorper massa"
},
 */