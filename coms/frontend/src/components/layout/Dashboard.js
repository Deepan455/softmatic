import React, { Component } from 'react';
import Material from './resources/Material';
import Order from './resources/Order';
import Product from './resources/Product';

import { Fragment } from 'react';
import { connect } from 'react-redux';

import { logout, register } from '../actions/auth';
import store from '../../store';

export class Dashboard extends Component {

    onOut = e => {
        e.preventDefault();
        store.dispatch(logout());
    };
    render() {
        return (
            <Fragment>
                <div>
                    <button className="logout" onClick={this.onOut}>Log Out</button>
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
                            <Material/>
                            <Product/>
                            <Order/>
                    </div>
                </div>
           </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logout, register})(Dashboard);
