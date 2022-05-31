import React, { useEffect, useState } from 'react'
import { useParams,useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Product = () => {
  const {id}  = useParams();
  let location = useLocation();
  let category = location.pathname.split("/")[1]
  const [data,setData] = useState({name:""});

  useEffect(()=>{
    fetch(`https://raw.githubusercontent.com/J0SUKE/react-boutique-data/main/${category}.json`)
    .then((resp)=>resp.json())
    .then((resp)=>resp.filter(element=>element.id == Number(id)))
    .then((data)=>setData(data[0]));
  },[id])
  
  return (
    <div className='content-product'>
      <div className="topBanner">
        <div className="topBanner__content">
          <h1><strong>HUAWEI</strong> {data.name}</h1>
          <button><Link to={`/${category}/${id}/buy/`}>Acheter</Link></button>
        </div>
        
      </div>
      <main className='product-main'>
        <h1><strong>HUAWEI</strong> {data.name}</h1>
        <img src={data.image} alt="" />
          {
            category=="laptops" ? 
              <LaptopSpecs data={data}/> : 
              (category=="smartphones" ? 
                <SmartphoneSpecs data={data}/>
                :
                (category=="smartwatches" ? 
                  <SmartWatches data={data}/>
                  :
                  (category=="smartwatches" ?
                    <TablettesSpecs data={data}/>
                    :
                    null
                  )
                )
              )
          }
          
        <section className='bottom-banner'>
          <p>*Les caractéristiques précédentes sont des valeurs théoriques basées sur la conception du produit. Pour fournir les informations, les caractéristiques et les fonctionnalités exactes du produit, Huawei est susceptible d'ajuster en temps réel les caractéristiques précédentes afin qu'elles correspondent aux performances, aux caractéristiques, aux index et aux composants du produit réel. Les informations sur le produit peuvent faire l'objet de modifications et d'ajustements de cette nature sans avis préalable.</p>
          <ul>
            <li><Link to={`/`}>Accueil</Link></li>
            <li><Link to={`/${category}/`}>{category}</Link></li>
            <li><Link to={`/${category}/${id}/buy`}>buy HUAWEI {data.name}</Link></li>
          </ul>
        </section>
      </main>
    </div>
  )
}

function LaptopSpecs({data}) {
  return(
    <section className="specs">
          <div className="spec-category">
            <h1>SYSTÈME D'EXPLOITATION</h1>
            <ul>
              <li><h2>Windows11 Home 64 bit</h2></li>
              <li><h2>Windows11 Home mode S 64 bit</h2></li>
            </ul>
          </div>
          <div className="spec-category">
            <h1>DIMENSIONS</h1>
            <ul>
              <li>
                <h2>Largeur</h2>
                <p>306 mm</p>
              </li>
              <li>
                <h2>Epaisseur</h2>
                <p>215 mm</p>
              </li>
              <li>
                <h2>Hauteur</h2>                
                <p>146 mm</p>
              </li>
            </ul>
            <ul>
              <li>
                <h2>Poids</h2>
                <p>Environ 709 g (batterie comprise)</p>
                <span>*La taille et le poids du produit ainsi que les spécifications associées sont des valeurs théoriques fournies uniquement à titre indicatif. Les dimensions réelles dépendent de la configuration du produit. Toutes les caractéristiques dépendent du produit spécifique.</span>
              </li>
            </ul>
          </div>
          <div className="spec-category">
            <h1>CARTE GRAPHIQUE</h1>
            <ul>
              <li>
                <p>Puce graphique Intel® UHD</p>
                <p>Puce graphique Intel® Iris® Xe</p>
                </li>
            </ul>
          </div>
          <div className="spec-category">
            <h1>PROCESSEUR</h1>
            <ul>
              <li>
                <p>Processeur Intel® Core™ i3-1110G4 de 11e génération</p>
                <p>Processeur Intel® Core™ i5-1130G7 de 11e génération</p>
              </li>
            </ul>
          </div>
          <div className="spec-category">
            <h1>ECRAN</h1>
            <ul>              
              <li>
                <h2>Taille</h2>
                <p>12,6 pouces</p>
              </li>
              <li>
                <h2>Type</h2>
                <p>OLED</p>
              </li>              
              <li>
                <h2>Rapport écran / châssis</h2>
                <p>90%</p>
              </li>
              <li>
                <h2>Format d’image</h2>
                <p>16 : 10</p>
              </li>
              <li>
                <h2>Résolution</h2>
                <p>2560 x 1600</p>
              </li>
              <li>
                <h2>PPI :</h2>
                <p>240</p>
              </li>
              
              <li>
                <h2>Luminosité maximale</h2>
                <p>Mode normal : 400 nits (type)</p>
                <p>Mode HBM : 600 nits (type)</p>
              </li>
              <li>
                <h2>Gamme de couleurs</h2>
                <p>P3</p>
              </li>
              <li>
                <h2>Rapport de contraste</h2>
                <p>1 000 000 : 1 (type)</p>
              </li>
              <li>
                <h2>Écran tactile</h2>
                <p>Toucher 10 points, Anti-empreinte digitale</p>
              </li>
            </ul>
          </div>
          <div className="spec-category">
            <h1>MÉMOIRE</h1>
            <ul>
              <li><p>LPDDR4x 8 Go / 16 Go</p></li>
            </ul>
          </div>
          <div className="spec-category">
            <h1>STOCKAGE</h1>
            <ul>
              <li>
                <p>SSD PCIe NVMe de 128 Go / 512 Go</p>
                <span>*La capacité réelle après formatage peut être inférieure.</span>
              </li>
            </ul>
          </div>
          <div className="spec-category">
            <h1>AUDIO</h1>
            <ul>
              <li>
                <p>4 haut-parleurs</p>
                <p>4 microphones</p>
              </li>
            </ul>
          </div>
          <div className="spec-category">
            <h1>DANS LE COFFRET</h1>
            <ul>
              <li>
                <p>{data.name}</p>
                <p>HUAWEI Smart Magnetic Keyboard (Dirac-W5651T)</p>
                <p>Adaptateur secteur USB-C </p>
                <p>Câble de chargeur de type C</p>
                <p>Guide d'utilisation rapide </p>
                <p>Carte de garantie </p>
              </li>
            </ul>
          </div>
          <div className="spec-category">
            <h1>CONNECTIVITÉ</h1>
            <ul>
              <li>
                <h2>Wi-Fi</h2>
                <p>Wi-Fi 6 IEEE 802.11a/b/g/n/ac/ax</p>  
              </li>
              <li>
                <h2>Connexion</h2>
                <p>Bluetooth 5.1</p>
              </li>
            </ul>
          </div>
        </section>
  )
}

function SmartphoneSpecs({data}) {
  return <div>smartphones</div>
}
function TablettesSpecs({data}) {
  return <div>tablettes</div>
}
function SmartWatches({data}) {
  return <div>smartwatches</div>
}


export default Product