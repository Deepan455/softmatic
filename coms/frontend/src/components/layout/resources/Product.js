import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { getProducts, addProduct, deleteProduct, appendProduct } from '../../actions/Product';
import { getMaterials } from '../../actions/Material';
import { Fragment } from 'react';


export class Product extends Component {
    state = {
        id: '',
        name : '',
        item_code : '',
        weight : '',
        dimensions: '',
        materials: '',
        quantity : '',
        materialn: '',
        materialq: '',
        entries: []
    }
    static propTypes = {
        getProducts: PropTypes.func.isRequired,
        addProduct: PropTypes.func.isRequired,
        appendProduct: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.getProducts();
        this.props.getMaterials();
    }

    onChange = e => this.setState({ [e.target.name] : e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const {name, item_code, weight, dimensions, materials, quantity} = this.state;
        const product = {name, item_code, weight, dimensions, materials, quantity};
        this.props.addProduct(product);
        this.setState({
            id: '',
            name : '',
            item_code : '',
            weight : '',
            dimensions: '',
            materials: '',
            quantity : ''
        });
    }

    onAppend = e => {
        e.preventDefault();
        const {id, name, item_code, weight, dimensions, materials, quantity} = this.state;
        const product = {id, name, item_code, weight, dimensions, materials, quantity};
        this.props.appendProduct(product);
        this.setState({
            id: '',
            name : '',
            item_code : '',
            weight : '',
            dimensions: '',
            materials: '',
            quantity : ''
        });
    }

    onEdit = (e,product) => {
        e.preventDefault();
        console.log(e);
        console.log(product);
        this.setState({
            id: product.id,
            name : product.name,
            item_code: product.item_code,
            weight: product.weight,
            dimensions: product.dimensions,
            materials: product.materials,
            quantity: product.quantity
        });
    }

    onAdd = e => {
        e.preventDefault;
        const {entries, materialn, materialq} = this.state;
        const entry = {materialn, materialq};
        entries.push(entry);
        this.setState({entries:entries});
    }


    render() {
        const {id, name, item_code, weight, dimensions, materials, quantity, materialn, materialq} = this.state;
        return (
           <div>
               <div>
                   <form onSubmit = { this.onSubmit }>
                       <fieldset className="formfield">
                            <legend>Product Entry</legend>
                            <label htmlFor="id">Id:</label><input type="number" name="id" id="id" className="" placeholder="Automatically added" onChange = {this.onChange} value={id} disabled></input><br/>
                            <label htmlFor="name">Name:</label><input type="name" name="name" id="name" className="shadow" onChange = {this.onChange} value={name} required></input><br/>
                            <label htmlFor="item_code">Item_code</label><input type="text" name="item_code" id="item_code" className="shadow" onChange = {this.onChange} value={item_code} required></input><br/>
                            <label htmlFor="weight">Weight:</label><input type="text" name="weight" id="weight" className="shadow" onChange = {this.onChange} value={weight} blank="false"></input><br/>
                            <label htmlFor="dimensions">Dimensions:</label><input type="text" name="dimensions" id="dimensions" className="shadow" onChange = {this.onChange} value={dimensions} blank="false"></input><br/>
                            <label htmlFor="quantity">Quantity:</label><input type="number" name="quantity" id="quantity" className="shadow" onChange = {this.onChange} value={quantity} blank="false"></input><br/>
                       </fieldset>

                       <fieldset>
                           <legend>Materials Used</legend>
                           <label >Materials:</label>
                               <br/><label htmlFor="materials">Name:</label>
                               <select id="materialn" name="materialn" className="shadow">
                                   {this.props.materials.map(material => (
                                       <option value={material.name}>{material.name}</option>
                                   ))}
                               </select>
                               <input type="number" id="materialq" name="materialq" className="shadow" placeholder="Quantity"/>
                               <button onClick={ this.onAdd } className = "shadow_out">+</button>
                               <br/>

                       </fieldset>
                       {this.state.entries.map(entry => (
                           <div>Name:<span className="shadow">{entry.materialn}</span>Quantity:<span className="shadow">{entry.materialq}</span></div>
                       ))}
                       <button type="submit" className="submit shadow_out shadow_out_hover">Create</button>
                       <button onClick={this.onAppend} className="submit shadow_out shadow_out_hover">Append</button>
                   </form>
               </div>
               <div>
                    <h2>products</h2>
                    <table>
                        <thead>
                            <tr>
                                <th className="shadow">ID</th>
                                <th className="shadow">Name</th>
                                <th className="shadow">Item Code</th>
                                <th className="shadow">Weight</th>
                                <th className="shadow">Dimensions</th>
                                <th className="shadow">Quantity</th>
                            </tr>
                        </thead>
                        <Fragment>
                            <tbody>
                                {this.props.products.map(product=>(
                                    <tr key = {product.id}>
                                        <td className="shadow">{product.id}</td>
                                        <td className="shadow">{product.name}</td>
                                        <td className="shadow">{product.item_code}</td>
                                        <td className="shadow">{product.weight}</td>
                                        <td className="shadow">{product.dimensions}</td>
                                        <td className="shadow">{product.quantity}</td>
                                        <td className="action"><button className="shadow shadow_hover" onClick={this.props.deleteProduct.bind(this, product.id)}>Delete</button></td>
                                        <td className="action"><button className="shadow shadow_hover" onClick={ (e) => this.onEdit(e, product) } data-id={product.id} >Edit</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Fragment>
                    </table>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = state => ({
    products : state.products.products,
    materials : state.materials.materials
});


export default connect(mapStateToProps, {getProducts, addProduct, deleteProduct, appendProduct, getMaterials})(Product);
