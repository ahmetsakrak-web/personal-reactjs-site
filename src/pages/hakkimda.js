import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import sultansakrak from "../images/sultansakrak.png"
import fatecore from "../images/fatecore.png"

const hakkimda = () => {
    return (
        
           
            
            <div className="hakkımda">
                   <h3 className='large'> Merhaba, Kişisel Web Siteme Hoşgeldin.</h3>

                   <i class="vurgu">Siteyi kurma amacım bir portfolyo sunmak ve felsefi fikirlerimi 
                daha somut bir hale getirip bir yerde tutmak. GitHub hesabıma <a rel="noopener noreferrer" target="_blank" href='https://github.com/ahmetsakrak-web'>Buradan</a> ulaşabilirsiniz.</i>
                
                <article>
                 
                    
                    
                        <h2 className='large'>Bildiğim Yazılım Dilleri ve Frameworkler</h2>
                        <h5>Seviyeleri</h5>
                        <div className='deneyimler'>
                        <div className='deneyim'>
                                <FontAwesomeIcon icon={faCircleDot} /> 
                                <div>
                                    <h4>HTML</h4>
                                <small>İyi</small>
                                </div>
                                
                        </div>
                            <div className='deneyim'>
                                <FontAwesomeIcon icon={faCircleDot} /> 
                                <div>
                                    <h4>CSS</h4>
                                    <small>İleri Düzey</small>
                                </div>
                                
                            </div>

                            <div className='deneyim'>
                                <FontAwesomeIcon icon={faCircleDot} /> 
                                <div>
                                    <h4>JavaScript</h4>
                                    <small>İleri Düzey</small>
                                </div>
                                
                            </div>
                            <div className='deneyim'>
                                <FontAwesomeIcon icon={faCircleDot} /> 
                                <div>
                                    <h4>JQuery</h4>
                                    <small>Orta Düzey</small>
                                </div>
                                
                            </div>

                            <div className='deneyim'>
                                <FontAwesomeIcon icon={faCircleDot} /> 
                                <div>
                                    <h4>ReactJS</h4>
                                <small>Orta Düzey</small>
                                </div>
                                
                            </div>
                            <div className='deneyim'>
                                <FontAwesomeIcon icon={faCircleDot} /> 
                                <div>
                                    <h4>NodeJS</h4>
                                <small>Orta Düzey</small>
                                </div>
                                
                            </div>
                            <div className='deneyim'>
                                <FontAwesomeIcon icon={faCircleDot} /> 
                                <div>
                                    <h4>ExpressJS</h4>
                                    <small>Orta Düzey</small>
                                </div>
                                
                            </div>
                            <div className='deneyim'>
                                <FontAwesomeIcon icon={faCircleDot} /> 
                                <div>
                                    <h4>SQL</h4>
                                    <small>Temel Düzey</small>
                                </div>
                                
                            </div>

                            
                        </div>
            </article>
      
            <div className='projeler'>
            <h3 className='large'>Projelerim</h3>
            <div>
                    <a target="_blank" rel="noopener noreferrer" href="https://sultansakrak.netlify.app">
                    <div className='proje'>
                        <img src={sultansakrak} alt='site'></img>
                        <div className='icerik'>
                            <h3>Sultan Şakrak</h3>
                            
                                <ul className='teknolojiler'>
                                    <li>Gatsby</li>
                                    <li>GraphQL</li>
                                </ul>
                        </div>
                    </div>  
                    </a>


                    <a target="_blank" rel="noopener noreferrer" href="https://fate-condensed.herokuapp.com">
                    <div className='proje'>
                        <img src={fatecore} alt='site'></img>
                        <div className='icerik'>
                            <h3>Fate Condensed</h3>
                            
                                <ul className='teknolojiler'>
                                    <li>ReactJS</li>
                                    <li>Styled Components</li>
                                    <li>NodeJS/ExpressJS</li>
                                    <li>MongoDB</li>
                                </ul>
                        </div>
                    </div>  
                    </a>
                    

                    
                </div> 


            </div>

        <div className='hobbies'>

    
              <h2 className='large'> İçerik tüketmeyi sevdiğim alanlar</h2> 
                <ul>
                    <li>postmodernist toplum ve insan piskolojisi</li>
                    <li>nörofelsefe</li>
                    <li>fizik felsefesi</li>
                    <li>evrimsel antropoloji</li>
                    <li>mantık ve matematik felsefesi</li>
                </ul>
        </div>      
             
                 
              
             
                
            
                



            </div>
        
        
    )
}

export default hakkimda
