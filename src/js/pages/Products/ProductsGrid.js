import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Footer from '../../Components/Footer';

function ProductsGrid()
{
  const category = useLocation().pathname.split("/")[1];
  const links = useMemo(()=>{
    return {
      "smartphones":"https://raw.githubusercontent.com/J0SUKE/react-boutique-data/main/smartphones.json",
      "smartwatches":"https://raw.githubusercontent.com/J0SUKE/react-boutique-data/main/smartwatches.json",
      "tablettes":"https://raw.githubusercontent.com/J0SUKE/react-boutique-data/main/tablettes.json"
    }
  },[])
  const [url,setUrl] = useState(links[category]);

  useEffect(()=>{
    setUrl(links[category]);
  },[category])


  return <ProductsGridContent category={category} url={url}/>

}

function ProductsGridContent({url,category}) {
  const [data,setData] = useData(url);
  const productGrid = useRef();
  const banner = useRef();

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      const {scrollTop,clientHeight} = document.documentElement;
      let percentage = scrollTop/clientHeight;
      if (productGrid.current && percentage <= 1 ) 
      {
          banner.current.style.filter = `brightness(${1-(percentage*2)})`
          banner.current.style.background= `rgba(0, 0, 0, ${percentage*1.5})`;
          
          productGrid.current.style.transform = `translateY(${-percentage*100}vh)`;
      } 
    })
  },[])


  useEffect(()=>{
    fetch(url)
    .then((resp)=>resp.json())
    .then((data)=>setData(data))
  },[url])

  return (
    <div className="smartphones-content">
      <div className="hero-banner" ref={banner}>
        <div className="hero-banner__left"> 
          <div>
            <h1><strong>HUAWEI</strong> {data[0]?.name}</h1>
            <p className='price'><strong>à partir de {data[0]?.price} €</strong> Ou payer en 4 fois</p>
          </div>
          <Description desc={data.length ? data[0].desc : ""}/>
          <div className="btns">
            <button><Link to={`/${category}/${data[0]?.id}`}>En savoir plus</Link></button>
            <button><Link to={`/${category}/${data[0]?.id}/buy/`}>Acheter</Link></button>
          </div>
        </div>
        <div className="hero-banner__img">
          <img src={`/images/products/${category}/${data[0]?.id}.png`} alt="" />
        </div>
        <div className={`hero-banner__bg hero-banner__bg-${category}`}>

        </div>
      </div>
      <div className="products-grid" ref={productGrid}>
          <div className="products-grid__content">
            <h1>{category} <span>({data.length})</span></h1>
            <ul>
              {
                data?.slice(1).map(item=>{
                  return(
                    <li key={item.id}>
                      <section>
                        <Link to={`/${category}/${item.id}`}>
                          <div><img src={`/images/products/${category}/${item.id}.png`} alt="" /></div>
                        </Link>
                        <h2><strong>HUAWEI</strong> {item.name}</h2>
                        <Description desc={item.desc}/>
                      </section>
                      <section>
                        <p className="price">
                          <strong>à partir de {item.price} €</strong> Ou payer en 4 fois
                        </p>
                        <div className="btns">
                          <button><Link to={`/${category}/${item.id}`}>En savoir plus</Link></button>
                          <button><Link to={`/${category}/${item.id}/buy/`}>Acheter</Link></button>
                        </div>
                      </section>
                    </li>
                  )
                  
                })
              }
            </ul>
          </div>
          <Footer/>
      </div>
    </div>
  )
}


function Description({desc}) {
  let content = desc.split("\n")
  return <>{content.map((item)=><p key={item} className='desc'>{item}<br/></p>)}</>
}

function useData(url) {
  const [data,setData] = useState([]);

  useEffect(()=>{
    fetch(url)
    .then((resp)=>resp.json())
    .then((data)=>setData(data))
  },[])

  return [data,setData];
}

export default ProductsGrid;