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

  console.log(data.image);
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
                  (category=="tablettes" ?
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
  return(
    <section className="specs">
          <div className="spec-category">
          <h1>DIMENSIONS</h1>
            <ul>
              <li>
                <h2>Largeur</h2>
                <p>286,5 mm</p>
              </li>
              <li>
                <h2>Epaisseur</h2>
                <p>6,7 mm</p>
              </li>
              <li>
                <h2>Hauteur</h2>                
                <p>184,7 mm</p>
              </li>
            </ul>
            <ul>
              <li>
                <h2>Poids</h2>
                <p>Env. 609 g (batterie incluse)</p>
                <span>*Référence au poids du modèle WGR-W09. Le modèle WGR-W19 pèse environ 616 g (batterie incluse). Données issues des laboratoires HUAWEI. Le poids réel du produit spécifique peut varier en fonction de la configuration, du processus de fabrication et de la méthode de mesure.</span>
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
                <p>WQXGA 2560 x 1600***, 240 PPI</p>
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
                <p>HUAWEI Kirin 9000E</p>
              </li>
              <li>
                <h2>CPU :</h2>
                <p>1 Cortex-A77 @3,13 GHz + 3 Cortex-A77 @2,54 GHz + 4 Cortex-A55 @2,05 GHz</p>
              </li>
              <li>
                <h2>GPU :</h2>
                <p>Mali-G78 à 22 cœurs</p>
              </li>
              <li>
                <h2>NPU :</h2>
                <p>1 grand cœur NPU + 1 petit cœur NPU (unité de traitement de réseau neuronal)</p>
              </li>
            </ul>
          </div>
          <div className="spec-category">
            <h1>SYSTÈME D’EXPLOITATION</h1>
            <ul>              
              <p>HarmonyOS 2</p>
            </ul>
          </div>
          <div className="spec-category">
            <h1>MÉMOIRE</h1>
            <ul>
              <li>
                <h2>Mémoire vive :</h2>
                <p>256 Go*</p>
              </li>
              <li>
                <h2>Mémoire étendue :</h2>
                <p>Carte mémoire NM**, prenant en charge les formats exFAT et FAT32 et 256Go au maximum.</p>
              </li>
            </ul>
          </div>
          <div className="spec-category">
            <h1>BATTERIE</h1>
            <ul>
              <li>
                <p>10 050 mAh (type)</p>
                <span>*Valeur type. La valeur nominale de la batterie est de 10 000 mAh. La capacité réelle peut légèrement varier. La batterie est intégrée et ne peut pas être retirée.</span>
              </li>
            </ul>
          </div>
          <div className="spec-category">
            <h1>Appareil photo arrière</h1>
            <ul>
              <li>
                  <p>13 MP (ouverture f/1.8, AF) </p>
                  <p>8 MP (longueur grand-angle, ouverture f/2.4, FF)</p>
                  <p>appareil photo 3D à détection de profondeur</p>
                  <span>*La résolution réelle de l’image peut varier en fonction du mode de prise de vue.</span>
              </li>
              <li>
                <h2>Résolution d’image</h2>
                <p>Jusqu’à 4160 x 3120 pixels</p>
                <span>*La résolution réelle de l’image peut varier en fonction du mode de prise de vue.</span>
              </li>
              <li>
                <h2>Résolution vidéo</h2>
                <p>Jusqu’à 3840 x 2160 pixels</p>
                <span>*La résolution réelle de la vidéo peut varier en fonction du mode de prise de vue.</span>
              </li>
              <li>
                <h2>Flash arrière</h2>
                <p>Flash LED</p>
              </li>
              <li>
                <h2>Mode de capture de la caméra arrière</h2>
                <p>Time-Lapse, Objectif grand-angle, Ouverture, Nuit, Portrait, Pro, Ralenti, Panorama, Monochrome, Light painting, Filtre, Autocollants, Documents, Master AI, Image animée, Capture des sourires, Contrôle audio, Minuteur, Prise de vue en rafale</p>
              </li>
            </ul>
          </div>
          <div className="spec-category">
            <h1>Appareil photo avant</h1>
            <ul>
              <li>
                <p>Appareil photo selfie de 8 MP</p>
                <p>ouverture f/2.0</p>
                <p>Focale fixe</p>
                <span>*Le nombre de pixels peut être légèrement différent entre différents modes photo. Veuillez tenir compte de la situation réelle.</span>
              </li>
              <li>
                <h2>Résolution d’image</h2>
                <p>Jusqu’à 3264 x 2448 pixels</p>
                <span>*La résolution réelle de l’image peut varier en fonction du mode de prise de vue.</span>
              </li>
              <li>
                <h2>Résolution vidéo</h2>
                <p>Jusqu’à 1920 x 1080 pixels</p>
                <span>*La résolution réelle de la vidéo peut varier en fonction du mode de prise de vue.</span>
              </li>
              <li>
                <h2>Mode de capture de l’appareil photo avant</h2>
                <p>Portrait, Time-Lapse, Image animée, Filtre, Autocollants, Capture de sourires, Reflet miroir, Contrôle audio, Minuteur</p>
              </li>
            </ul>
          </div>
          <div className="spec-category">
            <h1>DANS LA BOÎTE</h1>
            <ul>
              <li>
                <p>1 tablette (batterie intégrée) </p>
                <p>1 chargeur </p>
                <p>1 câble USB Type-C</p>
                <p>1 guide de démarrage rapide </p>
                <p>1 outil d’éjection </p>
                <p>1 carte de garantie (selon le marché)</p>
                <span>*Peut varier selon les marchés. Dépend du produit réel.</span>
              </li>
            </ul>
          </div>
        </section>
  )
}
function SmartWatches({data}) {
  return <div>smartwatches</div>
}


export default Product