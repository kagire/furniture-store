import React from "react";

function MessageSuccess(props){
    
    function proceedCredentials(){
        if(props.subject !== "" && props.name !== "")
        return (<React.Fragment><p>Subject: {props.subject}</p><p>Name: {props.name}</p></React.Fragment>);
        else if(props.name !== "")
        return(<p>Name: {props.name}</p>)
        else if (props.subject !== "")
        return (<p>Subject: {props.subject}</p>);
    }

    return ( 
        <div className="subscribe-form">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="section-heading">
                    <div className="line-dec"></div>
                    <h1>Your message succesfully sent!</h1>
                </div>
                </div>
                <div className="col-md-8 offset-md-2">
                <div className="main-content">
                    <p>You now can wait for response letter on your email. Check your credentials listed below.</p> <br />
                    <p>Email: {props.email}</p>
                    {proceedCredentials()}
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MessageSuccess;