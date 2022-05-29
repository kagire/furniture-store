import HeaderLogo from "./../assets/images/header-logo.png";
import React from "react";
import { Link } from "react-router-dom";

class Products extends React.Component{

    state = {
        isLoaded : false,
        products: [],
      };

    async componentDidMount() {
        await fetch('/products')
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                products: json,
                isLoaded: true
            })
        })
    }

    processProductsList(){
        var productList = [];
        for (var i = 0; i < this.state.products.length; i++){
            productList.push(
                <div id={this.state.products[i].id} class="item high col-md-4">
                    <Link to={"/product/" + this.state.products[i].product.id}>
                        <div class="featured-item">
                            <img src={`data:image/jpeg;base64,${this.state.products[i].images[0]}`} alt={"image-" + this.state.products[i].product.id} />
                            <div className="featured-item-text">
                                <h4>{this.state.products[i].product.name}</h4>
                                <h6>{this.state.products[i].product.price + "$"}</h6>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }
        return productList;
    }

    render() {

        if(this.state.isLoaded)
        return (
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
                        <li className="nav-item active">
                            <Link className="nav-link" to="/products"> Products
                            <span className="sr-only">(current)</span>
                            </Link>
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

                {/*Page Content */}
                <div class="featured-page">
                    <div class="container">
                        <div class="row">
                        <div class="col-md-4 col-sm-12">
                            <div class="section-heading">
                            <div class="line-dec"></div>
                            <h1>Featured Items</h1>
                            </div>
                        </div>
                        <div class="col-md-8 col-sm-12">
                            <div id="filters" class="button-group">
                            <button class="btn btn-primary" data-filter="*">All Products</button>
                            <button class="btn btn-primary" data-filter=".new">Newest</button>
                            <button class="btn btn-primary" data-filter=".low">Low Price</button>
                            <button class="btn btn-primary" data-filter=".high">Hight Price</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="featured container no-gutter">

                <div class="row posts">
                    {this.processProductsList()}
                </div>
            </div>

          </React.Fragment>
        )
    }
}

export default Products;