import React, { Fragment, useContext, useEffect, useState } from 'react'
import {AppContext} from '../AppContext';
import {Link} from 'react-router-dom';

const Cart = () => {
  
  const {cart,setCart} = useContext(AppContext);
  
  return (
    <>
      <div className='cart-header'>
        <h1>Mon panier</h1>
        <div>
          <ul className='progression-indicator'>
            <li className='active'>
              <div className="outside">
                <div className="inside"></div>
              </div>
              <p>Mon Panier</p>
              <div className="line-outside"></div>
            </li>
            <li>
              <div className="outside">
                <div className="inside"></div>
              </div>
              <div className="line-outside"></div>
              <p>Passer la commande</p>
            </li>
            
            <li>
              <div className="outside">
                  <div className="inside"></div>
              </div>
              <p>Valider la commande et payer</p>
            </li>

            <div className="line-inside"></div>
          </ul>
        </div>
        
      </div>
      <div className="cart-content">
        {
          cart.length==0 ?
          <div className="cart-empty">
            <div className="icon"></div>
            <h2>Votre panier ne contient aucun article, commencez votre shopping maintenant.</h2>
            <button><Link to={'/smartphones/'}>Acheter</Link></button>
          </div>
          :
          <CartContent cart={cart} setCart={setCart}/>
        }
      </div>
      
    </>
  )
}

function CartContent({cart,setCart}) 
{
  const [total,setTotal] = useState(()=>{
    let tot = 0;
    cart.forEach(element => {
      tot+=element.total*element.qty;
    });
    return tot;
  })


  useEffect(()=>{
    setTotal(()=>{
      let tot = 0;
      cart.forEach(element => {
        tot+=element.total*element.qty;
      });
      return tot;
    })
  },[cart])
  
  return(
      <div className="cart-content-container">
        <div className="cart_products">
          <div className="cart_products__top">
            {cart.length} Article{cart.length>1?"s":""}
          </div>
          {
            cart.map(product=>{
              return(
                <Fragment key={product.name}>
                  <ProductRecap product={product}/>
                </Fragment> 
              )
            })
          }
          
        </div>
        <div className="cart_total">
          <div className="cart_total__content">
            <h2>Total</h2>
            <section>
              <span>Sous-total (TVA incluse) </span>
              <span>{(total).toFixed(2)} €</span>
            </section>
            <section>
              <p>Total</p>
              <div>
                <p>{(total).toFixed(2)} €</p>
                <span>{(total*0.15).toFixed(2)} € de TVA incluse</span>
              </div>
            </section>
            <button>
              <Link to={'/'}>Acheter cet article</Link>
            </button>
          </div>
        </div>
      </div>
  )
}

function QuantitySetter({qty,setQty,product}) {
  
  const {cart,setCart} = useContext(AppContext);
  
  function add() 
  {
    if (qty<10)
    {
      setQty(qty=>qty+1);
      setCart(cart=>{
        return(
          cart.map(item=>{
            if (item.desc == product.desc && item.id == product.id) 
            {
              return{
                ...item,
                qty:item.qty+1
              }  
            }
            else return item
          })
        )
      })
    }
  }

  function dec() 
  {
    if (qty==1) return;
    setQty(qty=>qty-1)
    setCart(cart=>{
      return(
        cart.map(item=>{
          if (item.desc == product.desc && item.id == product.id) 
          {
            return{
              ...item,
              qty:item.qty-1
            }  
          }
          else return item
        })
      )
    })
  }
  
  return(
    <div className="quantity">
      <p>Quantité : </p>
      <div>
        <button 
          className={qty==1 ? "inactive" : ""}
          onClick={dec}
        >-</button>
        
        <p>{qty}</p>
        
        <button
          className={qty==10 ? "inactive" : ""}
          onClick={add}
        >+</button>
      </div>
    </div>
  )
}

function ProductRecap({product}) {
  
  const {cart,setCart} = useContext(AppContext);
  const [qty,setQty] = useState(product.qty);
  
  function deleteItem() {
    
 
    for (let i = 0; i < cart.length; i++) 
    {
      if (cart[i].desc == product.desc && cart[i].id == product.id) 
      {
          let cartCpy = [...cart]
          cartCpy.splice(i,1);
          setCart(cartCpy);
      }
    }
  }


  return(
    <div className="cart_products__main">
      <div className="cart_products__main__left">
        <img src={`/images/products/${product.category}/${product.id}.png`} />
      </div>
      <div className="cart_products__main__right">
        <section>
          <div className="recap">
            <h2><Link to={`/${product.category}/${product.id}`}>{product.recap}</Link></h2>
          </div>
          <div className="price-zone">
            <div className="price">{(product.total).toFixed(2)} €</div>
          </div>
        </section>
        <section>
          <div>
            <p>dont remunération copie privée :</p>
            <p>{(product.total*0.02).toFixed(2)} €</p>
          </div>
          <div>
            <p>dont éco-participation :</p>
            <p>{(product.total*0.002).toFixed(2)} €</p>
          </div>
        
        </section>
        <section>
          <button 
            className='delete-btn'
            onClick={deleteItem}
          >Retirer</button>
          <QuantitySetter qty={qty} setQty={setQty} product={product}/>
        </section>
        <div className="care">
          <h3>HUAWEI Care</h3>
          <p>Vous pouvez annuler la souscription à l’extension de garantie dans les 14 jours suivants la réception du produit. Veuillez consulter les Conditions Particulières pour plus d'informations.</p>
        </div>
        <div className="total">
          <span>Total</span>
          <p>{(product.total*qty).toFixed(2)} €</p>
        </div>
      </div>
    </div>
  )
}



export default Cart