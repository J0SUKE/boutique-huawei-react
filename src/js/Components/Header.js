import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SearchMenu from './Header/SearchMenu'
import CategoryMenu from './Header/CategoryMenu';
import { AppContext } from '../AppContext';

export const HeaderContext = React.createContext();

const Header = () => {
  
  const {cart} = useContext(AppContext);
  const HeaderNode = useRef();
  const [menu,setMenu] = useState(null);
  const menuRef = useRef();

  let HeaderContextValue = {
    menu,
    setMenu
  }

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      const{scrollTop} = document.documentElement;
      if (scrollTop>0) HeaderNode.current.classList.add("scroll"); 
      else HeaderNode.current.classList.remove("scroll"); 
    })
  },[])

  useEffect(()=>{
    if(menu==null){
      HeaderNode.current.classList.remove("selected")
    }
    else{
      HeaderNode.current.classList.add("selected");
    }
  },[menu])

  let actualMenu = (()=>{
    switch (menu) {
      case "search":
        return <SearchMenu menuRef={menuRef}/>
      case "category":
        return <CategoryMenu menuRef={menuRef}/>
      default:
        return null;
    }
  })();

  function selectMenu(name) {
    if (menu==name)
    {
      menuRef.current?.classList.add("inactive");
      setTimeout(() => {
        menuRef.current?.classList.remove("inactive");
        setMenu(null);
      }, 500);
    } 
    else{
      setMenu(name);
    };
  }

  return (
    <header ref={HeaderNode}>
      <HeaderContext.Provider value={HeaderContextValue}>
        <div className="header">
          <div className="logo" onClick={()=>{setMenu(null)}}>
            <Link to={'/'}>
              <img src="/images/logo.svg" alt="" />
            </Link>
          </div>

          <div className="header__right">
            <button className='search' onClick={()=>{selectMenu("search")}}>
              <img src="/images/search.svg" alt="" />
            </button>
            <button className='cart'>
              <Link to={'/shop/cart'}>
                <img src="/images/shopping-cart-alt.svg" alt="" />
                {cart.length==0 ? null : <span>{cart.length}</span>}
              </Link>
            </button>
            <button className='hamburger' onClick={()=>{selectMenu("category")}}>
              <span></span>
              <span></span>
            </button>
          </div>
        
        </div>
        {actualMenu}
      </HeaderContext.Provider>
    </header>
  )
}

export default Header;
