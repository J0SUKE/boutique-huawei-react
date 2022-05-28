import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {HeaderContext} from '../Header';


const CategoryMenu = () => {
  
  const {menu,setMenu} = useContext(HeaderContext);
  const [menuTop,setMenuTop] = useState(60);
  const [category,setCategory] = useState(null);

  const ordinateurs = useRef();
  const smartphones = useRef();
  const wearable = useRef();
  const ecrans = useRef();
  const menuNode = useRef();

  function openMenu(e)
  {
      
      const menuHeight = getComputedStyle(menuNode.current.parentNode).getPropertyValue("--height");
      console.log(menuHeight);
    
      let listItems = [...document.querySelectorAll(".categories-menu ul li")];

      for (let i = 0; i < listItems.length; i++) 
      {
        listItems[i].style.animation = `none`;  
      } 

      let top = e.target.getBoundingClientRect().top;
      let height = e.target.getBoundingClientRect().height;

      setMenuTop(top+height);
      
      
      for (let i = 0; i < listItems.length; i++) 
      {
        if (Number(e.target.getAttribute("index")) < i) 
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

      if (category==e.target.textContent) setCategory(null);
      else setCategory(e.target.textContent);

  }


  return (
    <section className='categories-menu'>
      <ul>
        <li onClick={openMenu} className="products" ref={ordinateurs} index="0">
          Ordinateurs
        </li>
        <li onClick={openMenu} className="products" ref={ordinateurs} index="1">
          Smartphones
        </li>
        <li onClick={openMenu} className="products" ref={ordinateurs} index="2">
          Wearable
        </li>
        <li onClick={openMenu} className="products" ref={ordinateurs} index="3">
          Ecrans  
        </li>
        <>
        <li>Assistance</li>
        <li>Magasins</li>
        <li>Entreprises</li>
        <li>Community</li>
        <li>Store</li>
        <li>Mon compte</li>
        <li>Mes commandes</li>
        <li>Connexion</li>
        </>
      </ul>
      <menu style={{top:menuTop + 'px'}} ref={menuNode}>
        {/* <div>
          <img src="/images/products/laptops/1.jpg" alt="" />
          <p>HUAWEI Matebook X</p>
        </div> */}
      </menu>
    </section>
  )
}

export default CategoryMenu