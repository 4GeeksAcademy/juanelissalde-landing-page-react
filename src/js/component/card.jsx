import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Card = () => {
    return (
        <div className="card col-sm-10 col-md-3 m-4">
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ByS9ZYbtouvFYRybSm_6em1Dn_7vlBic-Q&s"} className="card-img-top" />
            <div className="card-body text-center p-1">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Find out more!</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
