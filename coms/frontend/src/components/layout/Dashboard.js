import React, { Component } from 'react';
import Material from './resources/Material';
import { Fragment } from 'react';

export class Dashboard extends Component {
    render() {
        return (
            <div className="cardbox shadow">
                <div className="card shadow">
                    <div className="card_title">Materials</div>
                    <div className="card_details">On stock: 12</div>
                    <div className="card_warning">3 Short</div>
                </div>
                <div className="card shadow">
                    <div className="card_title">Orders</div>
                    <div className="card_details">Active:3 <br/> Completed:12</div>
                    <div className="card_warning">5 Short</div>
                </div>
                <div className="card shadow">
                    <div className="card_title">Products</div>
                    <div className="card_details">On stock: 5</div>
                    <div className="card_warning">2 Short</div>
                </div>
                <div className="card shadow">
                    <div className="card_title">Employees</div>
                    <div className="card_details">working: 15</div>
                    <div className="card_warning"></div>
                </div>
                <div className="card shadow">
                    <div className="card_title">Companies</div>
                    <div className="card_details">count: 7</div>
                    <div className="card_warning"></div>
                </div>
                <Fragment>
                    <Material/>
                </Fragment>
            </div>
        )
    }
}

export default Dashboard;
