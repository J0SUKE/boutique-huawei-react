import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchMenu from './Header/SearchMenu'
import CategoryMenu from './Header/CategoryMenu';

export const HeaderContext = React.createContext();

const Header = () => {
  
  const HeaderNode = useRef();
  const [menu,setMenu] = useState(null);

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
  })

  let actualMenu = (()=>{
    switch (menu) {
      case "search":
        return <SearchMenu/>
        break;
      case "category":
        return <CategoryMenu/>
        break;
      default:
        return null;
        break;
    }
  })();

  function selectMenu(name) {
    if (menu==name) setMenu(null);
    else setMenu(name);
  }

  return (
    <header ref={HeaderNode}>
      <HeaderContext.Provider value={HeaderContextValue}>
        <div className="header">
          <div className="logo">
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
