import React from "react";
import icon1 from "../../public/images/icon1.png";
import icon2 from "../../public/images/icon2.png";
import icon3 from "../../public/images/icon3.png";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div className="page-container">
        <div className="content-container">
            <h1 className="home-title">Manage All Your Transfers in One Place!</h1>

            <div className="container">
                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2>1</h2>
                            <h3>Select a Customer</h3>
                            <img src={icon1} />
                            <Link className="card-button" to="/customers">View All Customers</Link>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2>2</h2>
                            <h3>Create a Transfer</h3>
                            <img src={icon2} />
                            <p>Choose the receiver and provide the amount</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2>3</h2>
                            <h3>View Transfers History</h3>
                            <img src={icon3} />
                            <Link className="card-button" to="/all-transfers">Transfers History</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage