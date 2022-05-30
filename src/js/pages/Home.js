import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import useTranslate from '../Components/customHooks/useTranslate';

const Home = () => {
    
    const [vitrine1Data,setvitrine1Data] = useState([]);

    const img1 = useTranslate();
    const img2 = useTranslate();
    const img3 = useTranslate();
    const img4 = useTranslate();
    const img5 = useTranslate();
    const img6 = useTranslate();

    const imgs = [img1,img2,img3,img4,img5,img6];

    useEffect(()=>{
      let data = [{},{},{},{},{},{}];
      
      fetch("https://raw.githubusercontent.com/J0SUKE/react-boutique-data/main/smartwatches.json")
      .then((resp)=>resp.json())
      .then((resp)=>{
        data[0] = resp[3];
        data[5] = resp[5];
      }).then(()=>{
        return fetch("https://raw.githubusercontent.com/J0SUKE/react-boutique-data/main/laptops.json")
      })
      .then((resp)=>resp.json())
      .then((resp)=>{
        data[1] = resp[5];
      }).then(()=>{
        return fetch("https://raw.githubusercontent.com/J0SUKE/react-boutique-data/main/smartphone.json")
      })
      .then((resp)=>resp.json())
      .then((resp)=>{
        data[2] = resp[0];
        data[3] = resp[1];
        data[4] = resp[2];
      }).then(()=>{
        setvitrine1Data(data);
      })
    },[])
  
    return(
      <div className='content'>
        <div className="banner hero_banner">

        </div>
        <ul className="vitrine_grid vitrine_grid-1">
          {
            vitrine1Data?.map((item,i)=>{
              return(
                <li className='vitrine1-item' key={item.name}>
                  <div className="vitrine1-item__left">
                    <h1>{item.name}</h1>
                    <p>{item.desc}</p>
                    <span>à partir de</span>
                    <h2>{item.price} €</h2>
                    <span>Ou payer en 4 fois</span>
                    <div className="btns">
                      <button>En savoir plus</button>
                      <button>Acheter</button>
                    </div>
                  </div>
                  <div className="vitrine1-item__right">
                    <img src={`images/products/${item.category}/home/${item.id}.png`} alt="" ref={imgs[i]}/>
                  </div>
                </li>
              )
            })
          }
          
        </ul>

        <div className="banner middle-banner">
          <div className="middle-banner__content">
            <p>Trouvez votre produit</p>
            <CarousselMiddle/>
          </div>
        </div>

        <ul className="vitrine_grid vitrine-grid-2">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

      </div>
    )
}

function CarousselMiddle() {
  const [index,setIndex] = useState(0);
  
  const slide1 = useRef();
  const slide2 = useRef();
  const slide3 = useRef();
  const slide4 = useRef();
  const slide5 = useRef();
  const slide6 = useRef();
  
  const slides = [slide1,slide2,slide3,slide4,slide5,slide6];


  function goNext() {
    if (index==slides.length-1) return;

    slides[index].current.classList.add("inactive");

    setTimeout(()=>{
      setIndex((index)=>index+1);
    },500)


  }

  function goPrev() {
    if (index==0) return;

    slides[index].current.classList.add("inactive");

    setTimeout(()=>{
      setIndex((index)=>index-1);
    },500)
  }

  return(
    <>
      <h1 className='text-indicators'>
        <ul>
          <li className={index==0 ? 'active' : ''}>Work</li>
          <li>-</li>
          <li className={index==1 ? 'active' : ''}>Sport</li>
          <li>-</li>
          <li className={index==2 ? 'active' : ''}>fitness</li>
        </ul>
        <ul>
          <li className={index==3 ? 'active' : ''}>Music</li>
          <li>-</li>
          <li className={index==4 ? 'active' : ''}>Fashion</li>
          <li>-</li>
          <li className={index==5 ? 'active' : ''}>Home</li>
        </ul>
      </h1>
      <h1 className='text-indicators'>
      <ul>
          <li className={index==0 ? 'active category' : 'category'} 
              onClick={()=>{
                slides[index].current.classList.add("inactive");
                setTimeout(()=>{
                  setIndex(0);
                },500)
              }}>Work</li>
          <li>-</li>
          <li className={index==1 ? 'active category' : 'category'}
              onClick={()=>{
                slides[index].current.classList.add("inactive");
            
                setTimeout(()=>{
                  setIndex(1);
                },500)
              }}
          >Sport</li>
          <li>-</li>
          <li className={index==2 ? 'active category' : 'category'}
              onClick={()=>{
                slides[index].current.classList.add("inactive");
            
                setTimeout(()=>{
                  setIndex(2);
                },500)
              }}
          >fitness</li>
        </ul>
        <ul>
          <li className={index==3 ? 'active category' : 'category'}
              onClick={()=>{
                slides[index].current.classList.add("inactive");
            
                setTimeout(()=>{
                  setIndex(3);
                },500)
              }}
          >Music</li>
          <li>-</li>
          <li className={index==4 ? 'active category' : 'category'}
              onClick={()=>{
                slides[index].current.classList.add("inactive");
            
                setTimeout(()=>{
                  setIndex(4);
                },500)
              }}
          >Fashion</li>
          <li>-</li>
          <li className={index==5 ? 'active category' : 'category'}
              onClick={()=>{
                slides[index].current.classList.add("inactive");
            
                setTimeout(()=>{
                  setIndex(5);
                },500)
              }}
          >Home</li>
        </ul>
      </h1>

      <div className="caroussel-container">
          <div className={index==0 ? "caroussel-item active" : "caroussel-item invisible"} ref={slide1}>
            <div className="caroussel-item__left">
              <img src="https://consumer-img.huawei.com/content/dam/huawei-cbg-site//weu/fr/mkt/homepage/find-your-product/matebook-16.png" alt="" />
            </div>
            <div className="caroussel-item__right">
              <h1>HUAWEI MATEBOOK 16</h1>
              <p className='desc'>Laissez libre cours à votre créativité sur l’écran FullView 2,5K ultra-large de 16 pouces et laissez-vous surprendre par l’incroyable expérience visuelle qui s’offre à vos yeux.</p>
              <span>à partir de</span>
              <p className='price'>999,99 €</p>
              <span>Ou payer en 4 fois</span>
              <div className="btns">
                <button><Link to={'/'}>En savoir plus</Link></button>
                <button><Link to={'/'}>Acheter</Link></button>
              </div>
            </div>
          </div>
          <div className={index==1 ? "caroussel-item active" : "caroussel-item invisible"} ref={slide2}>
            <div className="caroussel-item__left">
              <img src="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/weu/fr/mkt/homepage/find-your-product/img-0325/watch-gt-runner.png" alt="" />
            </div>
            <div className="caroussel-item__right">
              <h1>HUAWEI WATCH GT Runner</h1>
              <p className='desc'>Positionnement précis | Programme professionel de course à pied | Jusqu'à 2 semaines d'autonomi</p>
              <span>à partir de</span>
              <p className='price'>249,99 €</p>
              <span>Ou payer en 4 fois</span>
              <div className="btns">
                <button><Link to={'/'}>En savoir plus</Link></button>
                <button><Link to={'/'}>Acheter</Link></button>
              </div>
            </div>
          </div>
          <div className={index==2 ? "caroussel-item active" : "caroussel-item  invisible"} ref={slide3}>
            <div className="caroussel-item__left">
              <img src="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/weu/fr/mkt/homepage/find-your-product/img-0325/freebuds-pro.png" alt="" />
            </div>
            <div className="caroussel-item__right">
              <h1>HUAWEI FreeBuds Pro</h1>
              <p className='desc'>Réduction de bruit intelligente | Mode perception pour des conversations clairement entendues | Qualité sonore exceptionnelle, à chaque instant</p>
              <span>à partir de</span>
              <p className='price'>109,99 €</p>
              <span>Ou payer en 4 fois</span>
              <div className="btns">
                <button><Link to={'/'}>En savoir plus</Link></button>
                <button><Link to={'/'}>Acheter</Link></button>
              </div>
            </div>
          </div>
          <div className={index==3 ? "caroussel-item active" : "caroussel-item invisible"} ref={slide4}>
            <div className="caroussel-item__left">
              <img src="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/weu/fr/mkt/homepage/update-1022/findjoy.png" alt="" />
            </div>
            <div className="caroussel-item__right">
              <h1>HUAWEI Sound Joy</h1>
              <p className='desc'>L’enceinte portable HUAWEI Sound Joy se caractérise par un design compact et un tissu 3D éclatant. Son système Devialet à quatre unités restitue un son exceptionnel. Elle dispose d’une longue autonomie de 26 heures et prend également en charge la recharge rapide de 40 W.</p>
              <span>à partir de</span>
              <p className='price'>129,99 €</p>
              <span>Ou payer en 4 fois</span>
              <div className="btns">
                <button><Link to={'/'}>En savoir plus</Link></button>
                <button><Link to={'/'}>Acheter</Link></button>
              </div>
            </div>
          </div>
          <div className={index==4 ? "caroussel-item active" : "caroussel-item invisible"} ref={slide5}>
            <div className="caroussel-item__left">
              <img src="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/weu/fr/mkt/homepage/find-your-product/img-0325/watch-gt3.png" alt="" />
            </div>
            <div className="caroussel-item__right">
              <h1>HUAWEI WATCH GT 3</h1>
              <p className='desc'>Fréquence cardiaque et positionnement précis | Gestion de la santé tout au long de la journée | Jusqu’à 2 semaines d'autonomie</p>
              <span>à partir de</span>
              <p className='price'>999,99 €</p>
              <span>Ou payer en 4 fois</span>
              <div className="btns">
                <button><Link to={'/'}>En savoir plus</Link></button>
                <button><Link to={'/'}>Acheter</Link></button>
              </div>
            </div>
          </div>
          <div className={index==5 ? "caroussel-item active" : "caroussel-item invisible"} ref={slide6}>
            <div className="caroussel-item__left">
              <img src="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/weu/fr/mkt/homepage/find-your-product/img-0325/mesh-7.png" alt="" />
            </div>
            <div className="caroussel-item__right">
              <h1>HUAWEI WiFi Mesh 7</h1>
              <p className='desc'>Connection One-Touch | AX6600 couverture de toute la maison | Diagnostics wifi visualisés</p>
              <span>à partir de</span>
              <p className='price'>199,99 €</p>
              <span>Ou payer en 4 fois</span>
              <div className="btns">
                <button><Link to={'/'}>En savoir plus</Link></button>
                <button><Link to={'/'}>Acheter</Link></button>
              </div>
            </div>
          </div>
      </div>

      <div className="caroussel-btns">
        <button className={index==slides.length-1 ? "inactive" : ""} onClick={goNext}></button>
        <button className={index==0 ? "inactive" : ""} onClick={goPrev}></button>
      </div>
    </>
  )
}




export default Home