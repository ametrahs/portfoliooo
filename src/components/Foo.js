import "./FooStyles.css";

import React from 'react';

import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Foo = () =>{
    return(
        <div className="footer">
            <div class ="footer-container">
                <div className="left">
                    <div className="location">
                      <FaHome size={20} style={{color:"#fff",marginRight: "2rem"}

                      }/>
                    
                    <div>
                        <p>143 Housing Community</p>
                        <p>Ethiopia</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                <FaPhone size={20} style={{color:"#fff",marginRight: "2rem"}

                    }/>
                    1432-2676-112</h4>
                    </div>
                    <div className="email">
                    <h4>
                <FaMailBulk size={20} style={{color:"#fff",marginRight: "2rem"}

                    }/>
                    Eneb@gmail.com</h4>
                    </div>
                  </div>
                <div className="right">
                    <h4>About The Community</h4>
                    <p> This is me Eneb Seid.CEO & Founder of Prophet Muhammed(peace upon him) Company. I enjoy solve big problems and design smart solutions to your life.</p>
                    <div className="social">
                
                    
                  <FaFacebook size={30} style={{color:"#fff",marginRight: "1rem"}

                    }/>

                  <FaTwitter size={30} style={{color:"#fff",marginRight: "1rem"}

                  }/>

                 <FaLinkedin size={30} style={{color:"#fff",marginRight: "1rem"}

                  }/>                


                    </div>
                </div>
            </div>
        </div>

    );
};

export default Foo;