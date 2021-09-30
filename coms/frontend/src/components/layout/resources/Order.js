import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { getOrders, addOrder, deleteOrder, appendOrder } from '../../actions/Order';
import { Fragment } from 'react';


export class Order extends Component {
    state = {
        id: '',
        customer : '',
        receiver : '',
        products : '',
        order_date : '',
        submission_date : '',
        status : ''
    }
    static propTypes = {
        getOrders: PropTypes.func.isRequired,
        addOrder: PropTypes.func.isRequired,
        appendOrder: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.getOrders();
    }

    onChange = e => this.setState({ [e.target.name] : e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const {customer, receiver, products, order_date, submission_date, status} = this.state;
        const order = {customer, receiver, products, order_date, submission_date, status};
        this.props.addOrder(order);
        this.setState({
            id: '',
            customer : '',
            receiver : '',
            products : '',
            order_date : '',
            submission_date : '',
            status : ''
        });
    }

    onAppend = e => {
        e.preventDefault();
        const {id, customer, receiver, products, order_date, submission_date, status} = this.state;
        const order = {id, customer, receiver, products, order_date, submission_date, status};
        this.props.appendOrder(order);
        this.setState({
            id: '',
            customer : '',
            receiver : '',
            products : '',
            order_date : '',
            submission_date : '',
            status : ''
        });
    }

    onEdit = (e,order) => {
        e.preventDefault();
        console.log(e);
        console.log(order);
        this.setState({
            id: order.id,
            customer : order.customser,
            receiver : order.receiver,
            products : order.products,
            order_date : order.order_date,
            submission_date : order.submission_date,
            status : order.status            
        });
    }


    render() {
        const {id, customer, receiver, products, order_date, submission_date, status} = this.state;
        return (
           <div>
               <div>
                   <form onSubmit = { this.onSubmit }>
                       <fieldset className="formfield">
                        <legend>order entry</legend>
                        <label htmlFor="id">Id:</label><input type="name" name="id" id="id" className="" placeholder="Automatically added" onChange = {this.onChange} value={id} disabled></input><br/>
                        <label htmlFor="customer">Customer:</label><input type="number" name="customer" id="customer" className="shadow" onChange = {this.onChange} value={customer} required></input><br/>
                        <label htmlFor="receiver">Receiver</label><input type="number" name="receiver" id="receiver" className="shadow" onChange = {this.onChange} value={receiver} required></input><br/>
                        <label htmlFor="products">Products:</label><input type="number" name="products" id="products" className="shadow" onChange = {this.onChange} value={products} blank="false"></input><br/>
                        <label htmlFor="order_date">Order_date:</label><input type="date" name="order_date" id="order_date" className="shadow" onChange = {this.onChange} value={order_date} blank="false"></input><br/>
                        <label htmlFor="submission_date">Submission_date:</label><input type="date" name="submission_date" id="submission_date" className="shadow" onChange = {this.onChange} value={submission_date} blank="false"></input><br/>
                        <label htmlFor="status">Status:</label><input type="text" name="status" id="status" className="shadow" onChange = {this.onChange} value={status} blank="false"></input><br/>
                       </fieldset>
                       <button type="submit" className="submit shadow_out shadow_out_hover">Create</button>
                       <button onClick={this.onAppend} className="submit shadow_out shadow_out_hover">Append</button>
                   </form>
               </div>
               <div>
                    <h2>Orders</h2>
                    <table>
                        <thead>
                            <tr>
                                <th className="shadow">ID</th>
                                <th className="shadow">Customer</th>
                                <th className="shadow">Receiver</th>
                                <th className="shadow">Products</th>
                                <th className="shadow">Order Date</th>
                                <th className="shadow">Submission Date</th>
                                <th className="shadow">Status</th>
                            </tr>
                        </thead>
                            <tbody>
                                {this.props.orders.map(order=>(
                                    <tr key = {order.id}>
                                        <td className="shadow">{order.id}</td>
                                        <td className="shadow">{order.customer}</td>
                                        <td className="shadow">{order.receiver}</td>
                                        <td className="shadow">{order.products}</td>
                                        <td className="shadow">{order.order_date}</td>
                                        <td className="shadow">{order.submission_date}</td>
                                        <td className="shadow">{order.status}</td>
                                        <td className="action"><button className="shadow shadow_hover" onClick={this.props.deleteOrder.bind(this, order.id)}>Delete</button></td>
                                        <td className="action"><button className="shadow shadow_hover" onClick={ (e) => this.onEdit(e, order) } data-id={order.id} >Edit</button></td>
                                    </tr>
                                ))}
                            </tbody>
                    </table>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = state => ({
    orders : state.orders.orders
});


export default connect(mapStateToProps, {getOrders, addOrder, deleteOrder, appendOrder})(Order);
