import {Link} from "react-router-dom";
import React from "react";

const Card =({date,title,img,text,id,category})=>{

  const  Rtext = `${text.substring(0, 150)}...`
  
  const formalizedDate = new Date(date).toLocaleDateString();
  

  
  
    return (
      <Link onClick={window.scrollTo(0, 0)} to={`/posts/${id}`}>
      <div className="card">
        <h3>{title}</h3>
        <img alt="anime" src={img}></img>
        <div dangerouslySetInnerHTML={{__html:Rtext}}></div>
        <div className="labels">
          {category.map((item,i)=><label key={i} style={{border:`1px solid ${item.color}`, color:item.color}}>{item.theme}</label>)}
        </div>
        <div style={{textAlign:"right", color:"rgb(160, 181, 182)", marginTop:"7px"}}><small>{formalizedDate}</small></div> 
      </div>
     
      </Link>
    )
}




export default Card;