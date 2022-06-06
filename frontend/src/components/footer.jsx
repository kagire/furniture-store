import React from "react";

class Footer extends React.Component{

    render(){
        return(
            <React.Fragment>
                <div className="subscribe-form">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="section-heading">
                          <div className="line-dec"></div>
                          <h1>Order phone call now!</h1>
                        </div>
                      </div>
                      <div className="col-md-8 offset-md-2">
                        <div className="main-content">
                          <p>Leave ur phone number here so we can call you back if you have questions about service</p>
                          <div className="container">
                            <form id="subscribe" action="" method="get">
                              <div className="row">
                                <div className="col-md-7">
                                  <fieldset>
                                    <input name="phone" type="text" className="form-control" id="phone" placeholder="your phone..." required=""/>
                                  </fieldset>
                                </div>
                                <div className="col-md-5">
                                  <fieldset>
                                    <button type="submit" id="form-submit" className="button">Order phone call</button>
                                  </fieldset>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="footer">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="logo">
                        <img src="assets/images/header-logo.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="footer-menu">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="index.html">About us</a></li>
                            <li><a href="index.html">Contact Us</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="social-icons">
                        <ul>
                            <li><a href="index.html"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="index.html"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="index.html"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="index.html"><i className="fa fa-rss"></i></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="sub-footer">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="copyright-text">
                        <p>Copyright &copy; 2022 Furniture</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                
            </React.Fragment>
        )
    }
}

export default Footer;