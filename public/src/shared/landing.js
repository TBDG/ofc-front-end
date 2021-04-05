function Landing() {
    return (
        <div className="Landing">
            <div className="background">
                <div className="container ">
                    <div className="row two-bits">
                        <div className="col-sm-12 col-lg-3 categories">
                            <div className="fish individual">
                                <p>FISH</p>
                                <button> Shop Now</button>
                            </div>
                            <div className="inverts individual">
                                <p>INVERTS</p>
                                <button> Shop Now</button>
                            </div>
                            <div className="plants individual">
                                <p>PLANTS</p>
                                <button> Shop Now</button>
                            </div>
                            <div className="more individual">
                                <p>REVIEWS & FORUMS</p>
                                <button> Show More..</button>
                            </div>
                        </div>
                        <div className="col-sm-10 col-lg-8 featured-breeder">
                            <div className="row breeder-banner"> FEATURED
                                <img alt="Breeder Logo"
                                     src={"https://static.wixstatic.com/media/9f767a_c456fbfeb0694679b91dfbf6e3e01aef~mv2.png/v1/crop/x_266,y_0,w_748,h_720/fill/w_161,h_155,al_c,q_85,usm_0.66_1.00_0.01/Lav's%20Snail%20Sales%20logo.webp"}/> BREEDER
                            </div>
                            <div className="row featured-products">
                                <div className=" featured-card">
                                    <img alt="Product"
                                         src={"https://static.wixstatic.com/media/9f767a_97a7c633fcf64fe6bd00acff83f717c6~mv2.png/v1/fill/w_277,h_277,al_c,q_90,usm_0.66_1.00_0.01/9f767a_97a7c633fcf64fe6bd00acff83f717c6~mv2.webp"}/>
                                    <div>
                                        <div className='details-container'>
                                            <div className="details">
                                                <p>Product
                                                    <br/>
                                                    $9.99</p>
                                            </div>
                                            <div className="view-details">
                                                <p>View Details</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" featured-card">
                                    <img alt="Product"
                                         src={"https://static.wixstatic.com/media/9f767a_97a7c633fcf64fe6bd00acff83f717c6~mv2.png/v1/fill/w_277,h_277,al_c,q_90,usm_0.66_1.00_0.01/9f767a_97a7c633fcf64fe6bd00acff83f717c6~mv2.webp"}/>
                                    <div>
                                        <div className='details-container'>
                                            <div className="details">
                                                <p>Product
                                                    <br/>
                                                    $9.99</p>
                                            </div>
                                            <div className="view-details">
                                                <p>View Details</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
