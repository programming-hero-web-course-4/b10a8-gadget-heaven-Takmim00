import React from "react";
import { Link } from "react-router-dom";

const Categories = ({categories}) => {
  return (
    <div className="w-1/4">
      <div className="card bg-white  ">
        <div className="card-body items-center text-center">
        {/* <Link to={`/category/All`} key={category.id} className="btn w-full  rounded-full bg-purple-600">All products</Link> */}
        {
            categories.map(category=>(
                <Link to={`/category/${category.category}`} key={category.id} className="btn w-full  rounded-full bg-purple-600">{category.category}</Link>
            ))
        }
        </div>
      </div>
    </div>
  );
};

export default Categories;
