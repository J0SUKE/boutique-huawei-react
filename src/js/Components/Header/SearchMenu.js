import React, { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import {HeaderContext} from '../Header';

export default function SearchMenu({menuRef}) 
{
  const [focus,setFocus] = useState(false);
  const InputNode = useRef();
  const [value,setValue] = useState("");
  const {menu,setMenu} = useContext(HeaderContext);

  useEffect(()=>{
    window.addEventListener("click",(e)=>{
      e.stopPropagation();
      setFocus(false);
    })
  },[])

  function selectInput(e) {
    e.stopPropagation();
    InputNode.current.focus();
    setFocus(true)
  }

  function handleInput(e) {
    setValue(e.target.value);
  }

  return(
    <div className={menu=="search" ? "searchZone active" : "searchZone"} ref={menuRef}>
      <form onClick={selectInput} className={focus? "selected" : ""}>
        <input 
          ref={InputNode} 
          type="text" 
          placeholder='Rechercher...' 
          onSelect={()=>{setFocus(true)}}
          value={value}
          onChange={handleInput}
        />
        <img src="/images/search.svg" alt="" />
      </form>
      {focus? <SearchProps input={value}/> : <PopularProducts/>}
    </div>
  )  
}

function PopularProducts()
{
  const {menu,setMenu} = useContext(HeaderContext);
  return(
    <section className="popular-products">
        <h3>Produits populaires</h3>
        <ul>
            <li>
              <Link 
                to={'/smartphones/0'}
                onClick={()=>{setMenu(null)}}
              > 
                <div><img src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/admin-image/phones/nova9-se/list/list-blue.png" alt="" /></div>
                <h2>HUAWEI nova 9 SE</h2>
              </Link>
            </li>
          
            <li>
              <Link 
                to={'/smartphones/1'}
                onClick={()=>{setMenu(null)}}
              >
                <div><img src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p50-pocket-white/list-img/listing-white-en.png" alt="" /></div>
                <h2>HUAWEI P50 Pocket</h2>
              </Link>
            </li>
          
            <li>
              <Link 
                to={'/smartphones/2'}
                onClick={()=>{setMenu(null)}}
                >
                <div><img src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p50-pro/list/black.png" alt="" /></div>
                <h2>HUAWEI P50 Pro</h2>
              </Link>
            </li>
          
        </ul>
      </section>
  )
}

function SearchProps({input})
{
  
  const[results,setResults] = useState([]);// les produits correspondants au input
  const data = useRef({}); // tout les produits 
  const max = useRef(6);
  const {menu,setMenu} = useContext(HeaderContext);

  useEffect(()=>{
    let categories = ["laptops","smartphones","smartwatches","tablettes"];
    categories.forEach(element => {
      fetch(`https://raw.githubusercontent.com/J0SUKE/react-boutique-data/main/${element}.json`)
      .then(resp=>resp.json())
      .then(resp=>{
        data.current[`${element}`] = resp;
      })  
    });
  },[])

  useEffect(()=>{
    let i=0;
    setResults([]);
    for (const key in data.current) 
    {
      if (i==max.current) break;
      for (let j = 0; j < data.current[key].length; j++) 
      {
          if (i==max.current) break; 
          let element = data.current[key][j];
          let completeName = `HUAWEI ${element.name}`;
          if (
            completeName.toLowerCase().includes(input.toLowerCase()) 
            || 
            element.name.toLowerCase().includes(input.toLowerCase())) 
          {
            setResults((results)=>[...results,element]);    
            i++
          }    
      }
      
    }
    
  },[input])

  return(
    <section className='search-props'>
        <h2>Résultats suggérés</h2>
        <ul>
          {
            results?.map(item=>{
              return <li 
                      key={item.name}                       
                      >
                        <Link 
                          to={`/${item.category}/${item.id}`}
                          onClick={()=>{setMenu(null)}}
                        >
                        HUAWEI {item.name}
                        </Link>
                      </li>
            })
          }
        </ul>
    </section>
  )
}