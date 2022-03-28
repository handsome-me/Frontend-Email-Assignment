import React ,{useState,useContext} from 'react';
import { Context } from '../../Context/Context';
const READ="READ";
const UNREAD="UNREAD";
const FAV="FAV";

const Filter=()=>{
   
    const {handleFilterClick}=useContext(Context);

    const onClick=(event)=>{
        event.stopPropagation();
        const id=event.target.id;
       
        handleFilterClick(id);

    }
     
    return(
     <>
      <div onClick={onClick}>
          <button  id={READ}>Read</button>
          <button id={UNREAD}>UnRead</button>
          <button id={FAV}>Fav</button>
         
      </div>
     </>
    )

}


export default Filter;