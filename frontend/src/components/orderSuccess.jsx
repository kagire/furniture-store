import React from "react";

function OrderSuccess(props){

    return ( 
        <div className="subscribe-form">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="section-heading">
                    <div className="line-dec"></div>
                    <h1>Your order succesfully sent!</h1>
                </div>
                </div>
                <div className="col-md-8 offset-md-2">
                <div className="main-content">
                    <p>Phone: {props.phone}, product: {props.product}</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default OrderSuccess;