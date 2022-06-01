import React from 'react'

const Cart = () => {
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
    </>
  )
}
export default Cart