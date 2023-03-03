import React from "react"
import './home.css'
import Image1 from './img1.jpeg'
import Image2 from './img2.jpeg'


function Home(){
    return(
        <div className="blog component__space" id="Blog">
            <div className="heading">
                <h1 className="heading">Portfolio-Genie</h1>              
            </div>

            <div className="container">
                <div className="row">

                     <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="porject__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Image1} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="Blog__meta absolute">
                                <h5 className="project__text">Mary Sue</h5>
                                <h4 className="project__text">Pottery and Arts</h4>
                                <a href="button" className="blog project__btn btn">Know More</a>
                            </div>
                        </div>
                     </div>

                     <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="porject__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Image2} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="Blog__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Getting tickets to the big show</h4>
                                <a href="button" className="blog project__btn btn" >Know More</a>
                            </div>
                        </div>
                     </div>

                     <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="porject__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Image1} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="Blog__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Getting tickets to the big show</h4>
                                <a href="button" className="blog project__btn btn">Read More</a>
                            </div>
                        </div>
                     </div>

                     <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="porject__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Image1} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="Blog__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Getting tickets to the big show</h4>
                                <a href="button" className="blog project__btn btn">Read More</a>
                            </div>
                        </div>
                     </div>

                     <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="porject__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Image2} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="Blog__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Getting tickets to the big show</h4>
                                <a href="button" className="blog project__btn btn">Read More</a>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    )
}
export default Home