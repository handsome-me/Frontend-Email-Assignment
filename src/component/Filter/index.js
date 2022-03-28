import React ,{useState} from 'react';
import { Context } from '../../Context/Context';
const READ="READ";
const UNREAD="UNREAD";
const FAV="FAV";

const Filter=(props)=>{
   
    //const {}=useContext(Context);
     
    return(
     <>
      <div>
          <button id={READ}>Read</button>
          <button id={UNREAD}>UnRead</button>
          <button id={FAV}>Fav</button>
         
      </div>
     </>
    )

}


export default Filter;