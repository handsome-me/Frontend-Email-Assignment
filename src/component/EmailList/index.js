import React from 'react';
import Email from '../Email';


const EmailList=(props)=>{
const {list}=props;

console.log("list",list.list);
console.log("list",list.list);

  return(
      <>
    { list.total && list.list.map((email,index)=>{
        console.log('dataemail list',email);
        return (
         
            <Email
            read={index%2==0?true:false}
          {...email}
          ></Email>

        )
      })}
      </>
  )


}


export default  EmailList;