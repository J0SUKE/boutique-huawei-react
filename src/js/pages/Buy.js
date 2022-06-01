import React, { useContext, useEffect, useRef, useState } from 'react'
import {useLocation} from "react-router-dom"
import { Link } from 'react-router-dom';

const buyContext = React.createContext();

const Buy = () => {
    
    const [data,setData] = useState();
    const [color,setColor] = useState("Noir");
    const [memory,setMemory] = useState(1); // 1 ou 2 ou 3 
    const [proc,setProc] = useState(1); // 1 ou 2
    const [price,setPrice] = useState(0);

    const initialPrice = useRef();

    let buyContextValue = {
        color,
        setColor,
        memory,
        setMemory,
        proc,
        setProc,
        price,
        setPrice
    }
    
    let location = useLocation();
    let category = location.pathname.split("/")[1];
    let id = Number(location.pathname.split("/")[2]);

    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/J0SUKE/react-boutique-data/main/${category}.json`)
        .then(resp=>resp.json())
        .then(resp=>{
            for (let i = 0; i < resp.length; i++) 
            {
                if (resp[i].id == id) 
                {
                    setData(resp[i]);
                    setPrice(resp[i].price);
                    initialPrice.current=resp[i].price;
                    break;
                }    
                if (i==resp.length-1 && resp[i].id != id) 
                {
                    window.location.href = "/indisponible/";
                }
            }
        })
    },[])


    useEffect(()=>{
        if (memory==1 && proc==1) setPrice(initialPrice.current);
        if (memory==1 && proc==2) setPrice(initialPrice.current*1.4);
        
        if (memory==2 && proc==1) setPrice(initialPrice.current*1.2);
        if (memory==2 && proc==2) setPrice(initialPrice.current*1.6);
        
        if (memory==3 && proc==1) setPrice(initialPrice.current*1.6);
        if (memory==3 && proc==2) setPrice(initialPrice.current*1.8);
            
    },[memory,proc])

    return (
    <div className='buy-product'>
        <div className="buy-product-header">
            <h1>HUAWEI {data?.name}</h1>
            <ul>
                <li>
                    <Link to={`/${category}/${id}`}>Fonctionnalités</Link>
                </li>
                <li>
                    <Link to={`/${category}/`}>{category}</Link>
                </li>
            </ul>
            <div>
                <h2>{price?.toFixed(2)} € Ou 4 X {(price/4)?.toFixed(2)} €</h2>
                <button className='addToCart-btn'>Ajouter au panier</button>
            </div>
            
        </div>
        <div className="buy-product-content">
            <div className="buy-product-img">
                <img src={`/images/products/${category}/${id}.png`} alt="" />
            </div>
            <div className="buy-product-details">
                <buyContext.Provider value={buyContextValue}>
                    {
                        category=="laptops" ?
                        <LaptopOptions title={data?.name}/>
                        :
                        category=="smartphones" ?
                        <SmartPhoneOptions title={data?.name}/>
                        :
                        category=="smartwatches" ?
                        <SmartWatches title={data?.name}/>
                        :
                        category=="tablettes" ?
                        <SmartPhoneOptions title={data?.name}/>
                        :
                        null
                    }
                </buyContext.Provider>
                <div className="care">
                        <h2>HUAWEI Care</h2>
                        <span>Vous pouvez annuler la souscription à l’extension de garantie dans les 14 jours suivants la réception du produit. Veuillez consulter les Conditions Particulières pour plus d'informations.
                        HUAWEI Care - Extension de garantie****</span>
                </div>
                <div className="total">
                    <p>Total</p>
                    <div className='total__details'>
                        <p>Total</p>
                        <div className="price">
                            <h2>{price?.toFixed(2)} € Ou 4 X {(price/4)?.toFixed(2)} €</h2>
                            <span>3x ou 4x sans frais*</span>
                        </div>
                    </div>
                    <button>Passer commande</button>
                </div>
            </div>
        </div>
    </div>
  )
}


function LaptopOptions({title}) {
    const {color,setColor,memory,setMemory,proc,setProc,price,setPrice} = useContext(buyContext);
    return(
    <>
        <h1>{title} Windows 10 Home / Intel® Core™ i{proc==1?"5":"7"}-1165G7 / 16 Go / {memory==1 ? "512GO":"1TB"} / Écran FullView 3K / Tactile / Clavier AZERTY</h1>
        <section className="color">
            <h2>Couleurs</h2>
            <ul>
                <li 
                    className={color=="Noir" ? "selected" : ""}
                    onClick={()=>{setColor("Noir")}}
                >
                    <div></div>
                    <p>Noir</p>
                </li>
                <li 
                    className={color=="Blanc" ? "selected" : ""}
                    onClick={()=>{setColor("Blanc")}}
                >
                    <div></div>
                    <p>Blanc</p>
                </li>
                <li 
                    className={color=="Gris" ? "selected" : ""}
                    onClick={()=>{setColor("Gris")}}
                >
                    <div></div>
                    <p>Gris</p>
                </li>
            </ul>
        </section>
        <section className="memory">
            <h2>Mémoire</h2>
            <ul>
                <li 
                    className={memory==1 ? "selected" : ""}
                    onClick={()=>{setMemory(1)}}
                >
                    <p>16Go+512Go</p>
                </li>
                <li 
                    className={memory==2 ? "selected" : ""}
                    onClick={()=>{setMemory(2)}}
                >
                    <p>16Go+1TB</p>
                </li>
            </ul>
        </section>
        <section className="processor">
            <h2>Processeur</h2>
            <ul>
                <li
                    className={proc==1 ? "selected" : ""}
                    onClick={()=>{setProc(1)}}
                >
                    <p>Intel® Core™ i5</p>
                </li>
                <li
                    className={proc==2 ? "selected" : ""}
                    onClick={()=>{setProc(2)}}
                >
                    <p>Intel® Core™ i7</p>
                </li>
            </ul>
        </section>
    </>
 )   
}

function SmartPhoneOptions({title}) {
    const {color,setColor,memory,setMemory} = useContext(buyContext);
    return(
        <>
            <h1>HUAWEI {title} {color} /Dual SIM / 8 Go RAM / {memory==1 ? 32 : memory==2 ? 64 : 128} Go Stockage / AppGallery </h1>
            <section className="color">
                <h2>Couleurs</h2>
                <ul>
                    <li 
                        className={color=="Noir" ? "selected" : ""}
                        onClick={()=>{setColor("Noir")}}
                    >
                        <div></div>
                        <p>Noir</p>
                    </li>
                    <li 
                        className={color=="Blanc" ? "selected" : ""}
                        onClick={()=>{setColor("Blanc")}}
                    >
                        <div></div>
                        <p>Blanc</p>
                    </li>
                    <li 
                        className={color=="Gris" ? "selected" : ""}
                        onClick={()=>{setColor("Gris")}}
                    >
                        <div></div>
                        <p>Gris</p>
                    </li>
                </ul>
            </section>
            <section className="memory">
                <h2>Mémoire</h2>
                <ul>
                    <li
                        className={memory==1 ? "selected" : ""}
                        onClick={()=>{setMemory(1)}}
                    >
                        <p>32Go</p>
                    </li>
                    <li
                        className={memory==2 ? "selected" : ""}
                        onClick={()=>{setMemory(2)}}
                    >
                        <p>64GO</p>
                    </li>
                    <li
                        className={memory==3 ? "selected" : ""}
                        onClick={()=>{setMemory(3)}}
                    >
                        <p>128GO</p>
                    </li>
                </ul>
            </section>
        </>
     )   
}

function SmartWatches({title}) {
    const {color,setColor} = useContext(buyContext);
    return(
        <>
            <h1>HUAWEI {title} 42mm Classic {color} / GPS / Bluetooth 5.1 / Microphone / Charge sans fil</h1>
            <section className="color">
                <h2>Couleurs</h2>
                <ul>
                    <li 
                        className={color=="Noir" ? "selected" : ""}
                        onClick={()=>{setColor("Noir")}}
                    >
                        <div></div>
                        <p>Noir</p>
                    </li>
                    <li 
                        className={color=="Blanc" ? "selected" : ""}
                        onClick={()=>{setColor("Blanc")}}
                    >
                        <div></div>
                        <p>Blanc</p>
                    </li>
                    <li 
                        className={color=="Gris" ? "selected" : ""}
                        onClick={()=>{setColor("Gris")}}
                    >
                        <div></div>
                        <p>Gris</p>
                    </li>
                    <li 
                        className={color=="Marron" ? "selected" : ""}
                        onClick={()=>{setColor("Marron")}}
                    >
                        <div></div>
                        <p>Marron</p>
                    </li>
                </ul>
            </section>
        </>
     )   
}

export default Buy