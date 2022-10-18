import React from "react";
import data from "../data";
import Masonry from "react-masonry-css";
import Card from "../components/Card";


 const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const Kategori =({match})=>{

 
const targetCategory =  data.filter(item=> item.category.find(category=>category.theme===match.params.tag));

console.log(match);

return targetCategory.length === 0  ? 
        <h1 style={{fontSize:"2em",textAlign:"center"}}>
            404 Aradığınız Kategori Bulunamadı
        </h1>                    
                                  :
        <Masonry breakpointCols={breakpointColumnsObj} 
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {targetCategory.map((e)=>{
        return  <Card key={e.id}  {...e}>  </Card>
        })}

        </Masonry>
  










           
  
  




  
}




export default Kategori;
