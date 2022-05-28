import React, { useEffect, useRef, useState } from 'react'


export default function SearchMenu() 
{
  const [focus,setFocus] = useState(false);
  const InputNode = useRef();


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

  return(
    <div className="searchZone">
      <form onClick={selectInput} className={focus? "selected" : ""}>
        <input 
          ref={InputNode} 
          type="text" 
          placeholder='Rechercher...' 
          onSelect={()=>{setFocus(true)}}
        />
        <img src="/images/search.svg" alt="" />
      </form>
      {focus? <SearchProps/> : <PopularProducts/>}
    </div>
  )  
}

function PopularProducts()
{
  return(
    <section className="popular-products">
        <h3>Produits populaires</h3>
        <ul>
          <li>
            <div><img src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/admin-image/phones/nova9-se/list/list-blue.png" alt="" /></div>
            <h2>HUAWEI nova 9 SE</h2>
          </li>
          <li>
            <div><img src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p50-pocket-white/list-img/listing-white-en.png" alt="" /></div>
            <h2>HUAWEI P50 Pocket</h2>
          </li>
          <li>
            <div><img src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p50-pro/list/black.png" alt="" /></div>
            <h2>HUAWEI P50 Pro</h2>
          </li>
        </ul>
      </section>
  )
}

function SearchProps()
{
  return(
    <section className='search-props'>
        <h2>Résultats suggérés</h2>
        <ul>
          <li>HUAWEI Matebook 14 2021 Edition </li>
          <li>HUAWEI Matebook 14 2021 Edition</li>
          <li>HUAWEI Matebook 14 2021 Edition</li>
          <li>HUAWEI Matebook 14 2021 Edition</li>
          <li>HUAWEI Matebook 14 2021 Edition</li>
          <li>HUAWEI Matebook 14 2021 Edition</li>
        </ul>
    </section>
  )
}