import React, { useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom';

const Laptops = () => {

  const [data,setData] = useState([]);
  const [visible,setVisible] = useState("");
  const x = useRef();
  const matebook = useRef();
  const e = useRef();
  const d = useRef();

  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/J0SUKE/react-boutique-data/main/laptops.json")
    .then(resp=>resp.json())
    .then(data=>{setData(data)});
  },[])

  useEffect(()=>{
  
    let observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(entry.target.getAttribute("id"));  
        }
        
      });
    });
    
    [matebook.current,x.current,d.current,e.current].forEach((item)=>{
        observer.observe(item);  
    })

  },[])
  
  return (
    <div className='laptops-page'>
      <div className="gammes-images">
        <ul>
          <li><img src="/images/products/laptops/gammes/x.png" alt="" /></li>
          <li><img src="/images/products/laptops/gammes/matebook.png" alt="" /></li>
          <li><img src="/images/products/laptops/gammes/e.png" alt="" /></li>
          <li><img src="/images/products/laptops/gammes/d.png" alt="" /></li>
        </ul>
      </div>
      <div className="gammes-links">
        <GammesLinks visible={visible}/>
      </div>
      <div className="hero product x" id='x' ref={x}>
        <img src="/images/blue-logo.jpg" alt="" />
        <h1>Le Pro par excellence</h1>
        <h3>Gamme MateBook X</h3>
          {data.length? <ProductVitrine product={data[0]}/> : null}
      </div>

      <div className="product matebook" id='matebook' ref={matebook}>
        <h1>Vitesse et Puissance</h1>
        <h3>Gamme MateBook</h3>
        {
          data.length?
          <>
            <ProductVitrine product={data[1]}/>
            <ProductVitrine product={data[2]}/>
            <ProductVitrine product={data[3]}/>
          </>
          :
          null
        }
      </div>
      <div className="product e" id='e' ref={e}>
          <h1>Plus de polyvalence et plus de possibilités</h1>
          <h3>Gamme MateBook E</h3>
          {data.length? <ProductVitrine product={data[4]}/> : null}
      </div>
      <div className="product d" id='d' ref={d}>
          <h1>Votre meilleur allié conçu pour tous les jours</h1>
          <h3>Gamme MateBook D</h3>
          {data.length?
          <>
            <ProductVitrine product={data[5]}/>
            <ProductVitrine product={data[6]}/>
            <div className='product-grid'>
              <ProductVitrine product={data[7]}/>
              <ProductVitrine product={data[8]}/>
            </div> 
          </>
          : 
          null}
      </div>
    </div>
  )
}

function ProductVitrine({product:{gamme,size,name,subtitle,desc,price,id}}) {
  return(
      <div className="presentation-product">
        <div className="presentation-product__left">
          <h3>{size} pouces</h3>
          <h1><strong>HUAWEI</strong> {name}</h1>
          <h2>{subtitle}</h2>
          <h4>{desc}</h4>
          <p>à partir de {price} €</p>
          <span>Ou payer en 4 fois</span>
          <div className="btns">
            <button><Link to={`/laptops/${id}`}>En savoir plus</Link></button>
            <button><Link to={`/laptops/${id}`}>Acheter</Link></button>
          </div>
        </div>
        <div className="presentation-product__right">
            <img src={`/images/products/laptops/${id}.jpg`} alt="" />
        </div>
      </div>
    
  )
}


function GammesLinks({visible}) {
  
  const[width,setWidth] = useState(window.innerWidth);
  
  useEffect(()=>{
    window.addEventListener("resize",()=>{
      setWidth(window.innerWidth);
    })
  },[])

  
  let gammeBar = (()=>{
    if (width>650) {
      return(
        <ul>
          <a  href='#x' className={visible=="x" ? "active" : ""}><div><p>Gamme Matebook</p><p>X</p></div></a>
          <a  href='#matebook' className={visible=="matebook" ? "active" : ""}><div><p>Gamme Matebook</p><p></p></div></a>
          <a  href='#e' className={visible=="e" ? "active" : ""}><div><p>Gamme Matebook</p><p>E</p></div></a>
          <a  href='#d' className={visible=="d" ? "active" : ""}><div><p>Gamme Matebook</p><p>D</p></div></a>
        </ul> 
      )
    }
    else
    {
      switch (visible) {
        case "x":
          return <ul><a  href='#x' className="active"><div><p>Gamme Matebook</p><p>X</p></div></a></ul>;
        case "matebook":
          return <ul><a  href='#matebook' className="active"><div><p>Gamme Matebook</p><p></p></div></a></ul>;
        case "e":
          return <ul><a  href='#e' className="active"><div><p>Gamme Matebook</p><p>E</p></div></a></ul>;
        case "d":
          return <ul><a  href='#d' className="active"><div><p>Gamme Matebook</p><p>D</p></div></a></ul>;
        default:
          return <ul><a  href='#x'><div><p>Gamme Matebook</p><p>X</p></div></a></ul>;
      }
    }
  })()


  return <>
    {gammeBar}
  </>
}

export default Laptops