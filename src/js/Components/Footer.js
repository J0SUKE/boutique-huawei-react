import React from 'react'
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__top">
          <ul>
            <li>
              <img src="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/weu/fr/e-commerce/homepage/icon/0726/icon-secure-pay@2x.png" alt="" />
              <h3>Paiement sécurisé</h3>
              <p>Paiement par CB en x3 ou x4 sans frais pour tout achat de 149 € jusqu' à 2000 €</p>
            </li>
            <li>
              <img src="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/weu/fr/e-commerce/homepage/icon/0726/icon-free-shipping@2x.png" alt="" />
              <h3>Livraison gratuite (à partir de 99 €)</h3>
              <p>Livraison en 1 à 2 jours ouvrés</p>
            </li>
            <li>
              <img src="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/weu/fr/e-commerce/homepage/icon/exclusives.png" alt="" />
              <h3>Offres exclusives</h3>
              <p>Packs, cadeaux et remises avec coupons exclusifs avec HUAWEI ID sur le HUAWEI online store</p>
            </li>
            <li>
              <img src="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/weu/fr/e-commerce/homepage/icon/0726/icon-support@2x.png" alt="" />
              <h3>Service client</h3>
              <p>Chat en ligne ou par téléphone au +33 800 972 285 du Lundi au Samedi, de 9 h à 20 h</p>
            </li>
          </ul>
        </div>
        <div className="footer__middle">
          <ul>
            <li>
              <h2>PRODUITS</h2>
              <ul>
                <li><Link to={'/smartphones'}>Smartphones</Link></li>
                <li><Link to={'/laptops'}>Ordinateurs</Link></li>
                <li><Link to={'/tablettes/'}>Tablettes</Link></li>
                <li><Link to={'/smartwatches/'}>Wearable</Link></li>
              </ul>
            </li>
            <li>
              <h2>BOUTIQUES HUAWEI</h2>
              <ul>
                <li>HUAWEI Store</li>
                <li>Huawei Store en ligne</li>
                <li>HUAWEI Store App</li>
                <li>Conditions générales de vente</li>
                <li>Politique de livraison</li>
                <li>Politique de retour</li>
                <li>FAQ</li>
              </ul>
            </li>
            <li>
              <h2>ASSISTANCE</h2>
              <ul>
                <li>Trouver une agence de réparation</li>
                <li>Politique de garantie</li>
                <li>HiSuite</li>
              </ul>
            </li>
            <li>
                <h2>À PROPOS DE HUAWEI</h2>
                <ul>
                    <li>À propos de nous</li>
                    <li>Presse</li>
                    <li>Contactez-nous</li>
                    <li>Corporate</li>
                    <li>Entreprise</li>
                    <li>Carriers</li>
                    <li>Rejoignez-nous</li>
                </ul>
            </li>
          </ul>
        </div>
        <div className="footer__bottom">
          <p>@2022 Huawei Device Co., Ltd. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer