import HeaderLogo from "./../assets/images/header-logo.png";
import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import OrderSuccess from "./orderSuccess";
import ReactDOM from 'react-dom';

class About extends React.Component{

    state = {
        isLoaded : true
    }

    async componentDidMount(){}

    handleSubmit(event){
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone: this.state.phone, productId: this.state.product.product.id})
        };
        fetch('/order', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }))
            .then(ReactDOM.render(<React.Fragment><br/><OrderSuccess phone={this.state.phone} product={this.state.product.product.name} /></React.Fragment>, document.getElementById('successPlace')));
    }

    handleChange(event){
        this.setState({phone: event.target.value});
    }

    render(){
        if(this.state.isLoaded)
        return(
            <React.Fragment>
                {/* NAVBAR */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <div className="container">
                <Link className="navbar-brand" to="/"><img height={26} src={HeaderLogo} alt=""/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/"> Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products"> Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About Us</Link>  
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contacts">Contact Us</Link>
                    </li>
                    </ul>
                </div>
                </div>
                </nav>

                {/* ABOUT PAGE */}
                <div class="about-page">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="section-heading">
                                    <div class="line-dec"></div>
                                    <h1>About Us</h1>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="left-image">
                                    <img src={require("./../assets/images/about-us.jpg")} alt="" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="right-content">
                                    <h4>About our company</h4>
                                    <p><a href="https://www.pexels.com/photo/group-of-people-raising-right-hand-1059120/">Photo Credit</a> goes to Pexels website. Aliquam erat volutpat. Pellentesque fringilla, ligula consectetur cursus scelerisque, leo elit pellentesque sapien, et pharetra arcu elit vitae sem. Suspendisse erat dui, condimentum in mi ac, varius tempor sapien. Donec in justo sit amet ex aliquet maximus ac quis erat.</p> 
                                    <br />
                                    <p>Donec fermentum tincidunt tellus quis fermentum. Proin eget imperdiet purus. Nulla facilisi. Aliquam tincidunt porttitor dui sed euismod. Duis est libero, rhoncus fermentum turpis id, tempus fringilla ipsum. Nullam venenatis tincidunt neque vel hendrerit. Suspendisse porta pretium porttitor.</p>
                                    <br />
                                    <p>Sed purus quam, ultricies eu leo in, sollicitudin varius quam. Proin dictum urna ac diam fermentum tempus. Pellentesque urna urna, ullamcorper a tincidunt dignissim, venenatis in nisi. Vivamus in volutpat tellus. Etiam fermentum luctus posuere.</p>
                                    <br />
                                    <p><a rel="nofollow" href="https://www.tooplate.com/view/2114-pixie">Pixie HTML Template</a> can be converted into your desired CMS theme. You can use this Bootstrap v4.1.3 layout for any online shop. Please tell your friends about <a rel="nofollow" href="https://www.facebook.com/tooplate/">Tooplate</a>. Thank you.</p>
                                    <div class="share">
                                        <h6>Find us on: <span><a href="http://facebook.com"><i class="fa fa-facebook"></i></a><a href="http://linkedin.com"><i class="fa fa-linkedin"></i></a><a href="http://twitter.com"><i class="fa fa-twitter"></i></a></span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default About