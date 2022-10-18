import React from 'react'
import Masonry from "react-masonry-css";
import data from "../data";
import Card from "./Card";



const breakpointColumnsObj = {
  default: 4,
  1320: 3,
  900: 2,
  640: 1
};
 
const BlogList =()=>
    {
      
    return <Masonry breakpointCols={breakpointColumnsObj} 
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">

                {data.map((e)=>{
                  return  <Card key={e.id}  {...e}>  </Card>
                })}

            </Masonry>
    }
  

export default BlogList
