import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    
    const [vitrineProducts,setVitrineProducts] = useState([]);

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/J0SUKE/react-boutique-data/main/vitrine.json")
        .then(resp=>resp.json())
        .then(data=>setVitrineProducts(data));
    },[])
  
    return (
    <div>
        {/* <h1>Our products</h1>
        {
            vitrineProducts?.map(product=>(<ProductVitrine key={product.id} product={product}/>))
        } */}
    </div>

  )
}


function ProductVitrine({product:{id,name,desc,price,category}}) {
    
    return(
      <section>
        <h1>{name}</h1>
        <h2>{price}</h2>
        <p>{desc}</p>
        <button>
            <Link to={`/${category}/${id}`}>Acheter</Link>
        </button>
      </section>
    ) 
}

export default Home