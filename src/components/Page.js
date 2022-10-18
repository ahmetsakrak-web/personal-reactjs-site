import React from 'react'
import data  from '../data';
import {Link} from "react-router-dom";
const Page = ({match}) => {
   


    const blog = data.find(i=>i.id===Number(match.params.pageId));
    const {img, title, text,category} = blog;

    function MouseOver(event,color) {
        event.target.style.background = color;
        event.target.style.color = "#333";
      }
    function MouseOut(event,color){
        event.target.style.background = "#333";
        event.target.style.color = color;
    }
    
   

    return (
        <article className="onePage">
            <h1 className="large">{title}</h1>
            <img className="L-img" src={img} alt={blog} />
            <div className="text" dangerouslySetInnerHTML={{__html:text}} />
            <div className="labels">
              { category.map( (item,i) =>
              <Link to={`/kategori/${item.theme}`}>
                  <label onClick={window.scrollTo(0, 0)} key={i} onMouseOver={ (e)=> MouseOver(e,item.color)} 
                         onMouseOut={(e)=> MouseOut(e,item.color)} 
                         style={{border:`1px solid ${item.color}`, color:item.color}}>
                    {item.theme}
                  </label>
              </Link>)}
            </div>
        
        </article>
    )
}

export default Page
