import React, { useEffect, useState } from 'react'
import { useParams,useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Product = () => {
  const {id}  = useParams();
  let location = useLocation();
  let category = location.pathname.split("/")[1]
  const [data,setData] = useState({name:""});

  useEffect(()=>{
    fetch(`https://raw.githubusercontent.com/J0SUKE/react-boutique-data/main/${category}.json`)
    .then((resp)=>resp.json())
    .then((resp)=>resp.filter(element=>element.id == Number(id)))
    .then((data)=>setData(data[0]));
  },[id])
  
  return (
    <div className='content-product'>
      <div className="topBanner">
        <div className="topBanner__content">
          <h1><strong>HUAWEI</strong> {data.name}</h1>
          <button><Link to={`/${category}/${id}/buy/`}>Acheter</Link></button>
        </div>
        
      </div>
      <main className='product-main'>
        <h1><strong>HUAWEI</strong> {data.name}</h1>
        <img src={data.image} alt="" />
      </main>
    </div>
  )
}

export default Product