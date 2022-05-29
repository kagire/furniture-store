import "./../bootstrap/bootstrap.min.css"
import "./../assets/css/fontawesome.css";
import "./../assets/css/tooplate-main.css";
import React from "react";
import { Link } from "react-router-dom";

class Homepage extends React.Component{

    state = {
      isLoaded : false,
      products: [],
    };

    async componentDidMount() {
      await fetch('/products/popular')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
            products: json,
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
          <Link key={this.state.products[i].product.id} to={"/product/" + this.state.products[i].product.id}>
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

    render() {
      if (this.state.isLoaded)
      return (
        <React.Fragment>
          {/* NAVBAR */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
              <Link className="navbar-brand" to="/"><img height={26} src={require("./../assets/images/header-logo.png")} alt=""/></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Home
                    <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products">Products</Link>
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

          {/* BIG CENTRAL BANNER */}
          <div className="banner">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="caption">
                    <h2>Design for every room</h2>
                    <div className="line-dec"></div>
                    <p>
                      Our skilled workers will help you to make desicion on every aspect in choosing furniture
                      for your house, apartments or flat. <strong>It will be priceless</strong> if you order something next.
                      Check out or catalogue now! 
                      <br/><br/>
                      If you want to folow us on social networks, <Link rel="nofollow" to="contacts">contact us</Link>.
                    </p>
                    <div className="main-button">
                    <Link to="/products">View catalogue</Link>
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
      );
    }
}

export default Homepage;
