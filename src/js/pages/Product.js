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
          <button className='buy-btn'><Link to={`/${category}/${id}/buy/`}>Acheter</Link></button>
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
          <div>
            <ul>
              <li><Link to={`/`}>Accueil</Link></li>
              <li><Link to={`/${category}/`}>{category}</Link></li>
              <li><Link to={`/${category}/${id}/buy`}>buy HUAWEI {data.name}</Link></li>
            </ul>
            <button className='buy-btn'><Link to={`/${category}/${id}/buy/`}>Acheter</Link></button>
          </div>
          
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

function SmartphoneSpecs() {
  return(
    <section className="specs">
          <div className="spec-category">
          <h1>DIMENSIONS</h1>
            <ul>
              <li>
                <h2>Largeur</h2>
                <p>72,5 mm</p>
              </li>
              <li>
                <h2>Epaisseur</h2>
                <p>8,5 mm</p>
              </li>
              <li>
                <h2>Hauteur</h2>                
                <p>158,8 mm</p>
              </li>
            </ul>
            <ul>
              <li>
                <h2>Poids</h2>
                <p>Env. 195 g (batterie incluse)</p>
                <span>*La taille et le poids du produit ainsi que les spécifications associées sont des valeurs théoriques fournies uniquement à titre indicatif. Les dimensions réelles dépendent de la configuration du produit. Toutes les caractéristiques dépendent du produit spécifique.</span>
              </li>
            </ul>
          </div>
          <div className="spec-category">
          <h1>ECRAN</h1>
            <ul>              
              <li>
                <h2>Taille</h2>
                <p>6,6 pouces</p>
                <span>*Avec une conception à coins arrondis sur l’écran, la diagonale de l’écran extérieur est de 6,6 pouces lorsqu’elle est mesurée selon le rectangle standard (la zone visible réelle est légèrement plus petite).</span>
              </li>
              <li>
                <h2>Type</h2>
                <p>OLED</p>
                <p>taux de rafraîchissement jusqu’à 120 Hz</p>
                <p>Gradation PWM haute fréquence de 1440 Hz</p>
                <p>Taux d’échantillonnage tactile de 300 Hz</p>
              </li>              

              <li>
                <h2>PPI :</h2>
                <p>450 ppi</p>
              </li>
            </ul>
            <ul>
              <li>
                <h2>Couleur</h2>
                <p>1,07 milliard de couleurs</p>
              </li>
              <li>
                <h2>Résolution</h2>
                <p>2700 x 1228 pixels</p>
                <span>*La résolution étant mesurée suivant un rectangle standard, avec un design aux coins arrondis, les pixels effectifs sont légèrement inférieurs.</span>
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
            <h1>Résistance aux éclaboussures, eau et poussière</h1>
            <ul>
              <li>
                <p>IP68</p>
                <span>*Ce produit est classé IP68 pour la résistance aux éclaboussures, à l’eau et à la poussière selon la norme CEI 60529 et a été testé dans des conditions de laboratoire contrôlées.</span>
                <span>**La résistance aux éclaboussures, à l’eau et à la poussière n’est pas permanente et peut diminuer avec le temps dans le cadre d’une utilisation normale. Ne chargez pas le téléphone lorsqu’il est mouillé ou dans un environnement humide. Reportez-vous au manuel pour les instructions de nettoyage et de séchage. L’immersion dans un liquide et les dommages qui en résultent ne sont pas couverts par la garantie.</span>
                <span>***La norme IP68 signifie que, sur la base de certaines conditions de test définies, l’appareil est protégé contre la pénétration d’eau statique jusqu’à 1,5 mètre, pendant 30 minutes, lorsque l’écart de température entre l’eau et l’appareil ne dépasse pas 5°C.</span>
              </li>
              
            </ul>
          </div>
          <div className="spec-category">
            <h1>Processeur</h1>
            <ul>              
              <li>
                <p>Snapdragon 888 4G</p>
              </li>
              <li>
                <h2>CPU</h2>
                <p>Octa-core, 1 Cortex-X1@2,84 GHz + 3 Cortex-A78@2,42 GHz + 4 Cortex-A55@1,8 GHz</p>
              </li>
              <li>
                <h2>GPU</h2>
                <p>Adreno 660</p>
              </li>
            </ul>
          </div>
          <div className="spec-category">
            <h1>MÉMOIRE</h1>
            <ul>
              <li>
                <h2>RAM + ROM</h2>
                <p>8 Go de RAM + 256 Go de ROM</p>
                <span>* Peut varier selon les marchés. Dépend du produit réel.</span>
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
                <p>1 téléphone (batterie intégrée)</p>
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
function TablettesSpecs() {
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
function SmartWatches() {
  return(
    <section className="specs">
          <div className="spec-category">
          <h1>DIMENSIONS</h1>
            <ul>
              <li>
                <p>46,6 mm x 46,6 mm x 10,9 mm</p>
                <span>*La taille et le poids du produit ainsi que les spécifications associées sont des valeurs théoriques fournies uniquement à titre indicatif. Les dimensions réelles dépendent de la configuration du produit. Toutes les caractéristiques dépendent du produit spécifique.</span>
              </li>
            </ul>
          </div>
          <div className="spec-category">
          <h1>Dimensions du boîtier</h1>
            <ul>              
              <li>
                <p>46,6 mm</p>
              </li>
            </ul>
          </div>
          <div className="spec-category">
            <h1>Taille du poignet</h1>
            <ul>
              <li>
                <p>De 140 à 210 mm</p>
                </li>
            </ul>
          </div>
          <div className="spec-category">
            <h1>Poids</h1>
            <ul>
              <li>
                <p>Environ 54 g (sans le bracelet)</p>
                <span>*La taille et le poids du produit ainsi que les spécifications associées sont des valeurs théoriques fournies uniquement à titre indicatif. Les dimensions réelles dépendent de la configuration du produit. Toutes les caractéristiques dépendent du produit spécifique.</span>
              </li>
            </ul>
          </div>
          <div className="spec-category">
            <h1>Boîtier de la montre</h1>
            <ul>              
              <h2>Matériau :</h2>
              <p>Titane + verre saphir</p>
            </ul>
          </div>
          <div className="spec-category">
            <h1>Bracelet de la montre</h1>
            <ul>
              <li>
                <p>Bracelet en fluoroélastomère noir,</p>
                <p>Bracelet en cuir gris</p>
              </li>
            </ul>
          </div>
          <div className="spec-category">
            <h1>Écran</h1>
            <ul>
              <li>
                <p>Écran couleur AMOLED de 1,43 pouce</p>
                <p>L’écran tactile AMOLED prend en charge les commandes par glissement et par toucher.</p>
              </li>
            </ul>
          </div>
          <div className="spec-category">
            <h1>Capteurs</h1>
            <ul>
              <li>
                  <p>Accéléromètre</p>

                  <p>Capteur gyroscope</p>

                  <p>Capteur magnétométrique</p>

                  <p>Capteur optique de fréquence cardiaque</p>

                  <p>Capteur barométrique</p>

                  <p>Capteur de température</p>
              </li>
            </ul>
          </div>
          <div className="spec-category">
            <h1>Boutons</h1>
            <ul>
              <li>
                <p>Bouton d’alimentation, bouton de fonction, prise en charge d’opérations telles que la pression et le maintien et rotation de la couronne de la montre</p>
              </li>
            </ul>
          </div>
          <div className="spec-category">
            <h1>DANS LA BOÎTE</h1>
            <ul>
              <li>                
                <p>1 montre</p>

                <p>1 support de chargement sans fil (câble de chargement inclus)</p>

                <p>1 guide de l’utilisateur, informations sur la sécurité et carte de garantie</p>
              </li>
            </ul>
          </div>
        </section>
  )
}


export default Product