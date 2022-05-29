import HeaderLogo from "./../assets/images/header-logo.png";
import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import OrderSuccess from "./orderSuccess";
import ReactDOM from 'react-dom';

class Product extends React.Component{

    state = {
        phone: '',
        isLoaded : false,
        product: [],
        popularity: '',
        products: []
    }

    async componentDidMount(){
        await fetch('/products/' + window.location.pathname.substring(9))
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                product: json
            })
        })
        await fetch('/products/popular')
        .then((res) => res.json())
        .then((json) => {
          this.setState({
              products: json
          })
        })
        await fetch('/products/' + this.state.product.product.id + '/popularity')
        .then((res) => res.json())
        .then((json) => {
          this.setState({
              popularity: json,
              isLoaded: true
          })
        })
    }

    processRelatedProducts(){
        var relatedProducts = [];
        const forBorder = this.state.products.length > 4 ? 4 : this.state.products.length;
        for (var i = 0; i < forBorder; i++){
          const imageNumber = "image-" + (i+1);
          relatedProducts.push(
            <Link onClick={this.forceUpdate} key={this.state.products[i].product.id} to={"/product/" + this.state.products[i].product.id}>
              <div className="featured-item">
                <img src={`data:image/jpeg;base64,${this.state.products[i].images[0]}`} alt={imageNumber}/>
                <div className="featured-item-text">
                <h4>{this.state.products[i].product.name}</h4>
                <h6>{this.state.products[i].product.price + "$"}</h6>
                </div>
              </div>
            </Link>
          );
        }
        return relatedProducts;
      }

    getImagesForProduct(){
        var imagesList = [];
        for (var i = 0; i < this.state.product.images.length; i++){
            imagesList.push(
                 <div>
                    <img src={`data:image/jpeg;base64,${this.state.product.images[i]}`} alt={"img-" + i} />
                </div>
            )
        }
        return imagesList;
    }

    getAttributesForProduct(){
        if (this.state.product.productAttributes.length > 0){
            var attributesList = [];
            for (var i = 0; i < this.state.product.productAttributes.length; i++){
                attributesList.push(<span><p><b>{this.state.product.productAttributes[i].attribute_name + ": "}</b>{this.state.product.productAttributes[i].attribute}</p></span>);
                if (i < this.state.product.productAttributes.length - 1) attributesList.push(", ");
            }
            return(<div className="categories">
                        {attributesList}
                    </div>)
        }
    }

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
        //document.location.href = "/";
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
                <Link className="navbar-brand"  to="/"><img height={26} src={HeaderLogo} alt=""/></Link>
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

                {/* SINGLE PRODUCT */}
                <div className="single-product">
                    <div className="container">

                        <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                            <div className="line-dec"></div>
                            <h1>{this.state.product.product.name}</h1>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="product-slider">
                                <Carousel infiniteLoop autoPlay interval={6000}>
                                    {this.getImagesForProduct()}
                                </Carousel>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-content">
                            <h4>{this.state.product.product.name}</h4>
                            <h6>{this.state.product.product.price + "$"}</h6>
                            <p>{this.state.product.product.info}</p>
                            <span>{this.state.popularity} ordered</span>
                            <form onSubmit={(event) => this.handleSubmit(event)}>
                                <label htmlFor="phone">Phone:</label>
                                <input name="phone" required type="text" className="quantity-text" value={this.state.phone} onChange={(event) => this.handleChange(event)} id="phone" />
                                <input type="submit" className="button" value="Order" />
                            </form>
                            <div id="successPlace" />
                            <div className="down-content">
                                
                                    {this.getAttributesForProduct()}
                                
                                <div className="share">
                                <h6>Share: <span><a href="/product"><i className="fa fa-facebook"></i></a><a href="/product"><i className="fa fa-linkedin"></i></a><a href="/product"><i className="fa fa-twitter"></i></a></span></h6>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>    

                 {/*FAVOTITE ITEMS LIST */}
                <div className="featured-items">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="section-heading">
                            <div className="line-dec"></div>
                            <h1>Featured Items</h1>
                        </div>
                        </div>

                        {this.processRelatedProducts()}

                    </div>
                    </div>
                </div> 
            </React.Fragment>
        )
    }
}

export default Product