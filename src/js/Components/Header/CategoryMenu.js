import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SmartWatches from '../../pages/Products/SmartWatches';
import {HeaderContext} from '../Header';


const CategoryMenu = () => {
  
  const {menu,setMenu} = useContext(HeaderContext);
  
  const [menuTop,setMenuTop] = useState(60);
  const [category,setCategory] = useState(null);
  const [laptops,setlaptops] = useState([]);
  const [smartphones,setsmartphones] = useState([]);
  const [tablettes,setTablettes] = useState([]);
  const [smartWatches,setsmartWatches] = useState([]);


  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/J0SUKE/react-boutique-data/main/laptops.json")
    .then(resp=>resp.json())
    .then(data=>setlaptops([data[5],data[1],data[2]]))
    
    fetch("https://raw.githubusercontent.com/J0SUKE/react-boutique-data/main/smartphone.json")
    .then(resp=>resp.json())
    .then(data=>setsmartphones([data[1],data[2],data[0]]))
    
    fetch("https://raw.githubusercontent.com/J0SUKE/react-boutique-data/main/tablettes.json")
    .then(resp=>resp.json())
    .then(data=>setTablettes([data[0],data[1],data[3]]))
    
    fetch("https://raw.githubusercontent.com/J0SUKE/react-boutique-data/main/smartwatches.json")
    .then(resp=>resp.json())
    .then(data=>setsmartWatches([data[1],data[3],data[5]]))
    
  },[]);

  const LaptopsMenuNode = useRef();
  const smartPhoneMenuNode = useRef();
  const TablettesMenuNode = useRef();
  const SmartWatchesMenuNode = useRef();


  function openMenu(e,menu)
  {
      
      let listItems = [...document.querySelectorAll(".categories-menu > ul > li")];

      for (let i = 0; i < listItems.length; i++) 
      {
        listItems[i].style.animation = `none`;  
      } 

      let top = e.target.parentNode.getBoundingClientRect().top;
      let height = e.target.parentNode.getBoundingClientRect().height;

      setMenuTop(top+height);
      
      
      for (let i = 0; i < listItems.length; i++) 
      {
        if (Number(e.target.parentNode.getAttribute("index")) < i) 
        {
          if (category==e.target.textContent) {
            listItems[i].style.animation = `transitionTop .4s forwards`;  
          }
          else
          {
            listItems[i].style.animation = `transitionBottom .4s forwards`;
          }
          
        }
      } 

      if (category==e.target.textContent)
      {
        setCategory(null);
        menu.current.style.zIndex = 1;
      }
      else{
        setCategory(e.target.textContent);
        setTimeout(() => {
          if (menu.current!=undefined) menu.current.style.zIndex = 4;
        }, 400);
      };

  }

  return (
    <section className='categories-menu'>
      <ul className='categories-menu__items'>
        <li className="products" index="0">
          <p onClick={(e)=>{openMenu(e,LaptopsMenuNode)}}>Ordinateurs</p>
          <Menu menuNode={LaptopsMenuNode} setMenu={setMenu} category={"laptops"} products={laptops}/>
        </li>
        <li className="products" index="1">
          <p onClick={(e)=>{openMenu(e,LaptopsMenuNode)}}>Smartphones</p>
          <Menu menuNode={smartPhoneMenuNode} setMenu={setMenu} category={"smartphones"} products={smartphones}/>
        </li>
        <li className="products" index="2">
          <p onClick={(e)=>{openMenu(e,TablettesMenuNode)}}>Tablettes</p>
          <Menu menuNode={TablettesMenuNode} setMenu={setMenu} category={"tablettes"} products={tablettes}/>
        </li>
        <li className="products" index="3">
          <p onClick={(e)=>{openMenu(e,SmartWatchesMenuNode)}}>SmartWatches</p>
          <Menu menuNode={SmartWatchesMenuNode} setMenu={setMenu} category={"smartWatches"} products={smartWatches}/>
        </li>
        <>
        <li><p>Assistance</p></li>
        <li><p>Magasins</p></li>
        <li><p>Entreprises</p></li>
        <li><p>Community</p></li>
        <li><p>Store</p></li>
        <li><p>Mon compte</p></li>
        <li><p>Mes commandes</p></li>
        <li><p>Connexion</p></li>
        </>
      </ul>
    </section>
  )
}

function Menu({category,menuNode,setMenu,products}) {

  return  (
    <>
      {products.length ? 
          <menu ref={menuNode}>
          <ul>
              <li>
                <Link to={`/${category}/${products[0].id}`} onClick={()=>{setMenu(null)}}>
                  <div><img src={`/images/products/${category}/menuImages/${products[0].id}.png`} alt="" /></div>
                  <p>{products[0].name}</p>
                </Link>
              </li>
              <li>
                <Link to={`/${category}/${products[1].id}`} onClick={()=>{setMenu(null)}}>
                  <div><img src={`/images/products/${category}/menuImages/${products[1].id}.png`} alt="" /></div>
                  <p>{products[1].name}</p>
                </Link>
              </li>
              <li>
                <Link to={`/${category}/${products[2].id}`} onClick={()=>{setMenu(null)}}>
                  <div><img src={`/images/products/${category}/menuImages/${products[2].id}.png`} alt="" /></div>
                  <p>{products[2].name}</p>
                </Link>
              </li>
          </ul>
          <div className='allProducts' onClick={()=>{setMenu(null)}}>
            <Link to={`/${category}/`}>Tous les {category}</Link>
          </div>
        </menu> 
        : 
        null}
    </>
  )
}


export default CategoryMenu