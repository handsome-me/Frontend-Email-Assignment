import React from 'react';
import Email from '../Email';
import './index.css'

const EmailList=(props)=>{
const {list,onClick}=props;

console.log("list",list);
console.log("list",list.list);

  return(
      <div className='email-list-container'>
    { list.total && list.list.map((email,index)=>{
        console.log('dataemail list',email);
        return (
         
            <Email
            onClick={onClick}
            read={index%2==0?true:false}
          {...email}
          ></Email>

        )
      })}
      </div>
  )


}


export default  EmailList;