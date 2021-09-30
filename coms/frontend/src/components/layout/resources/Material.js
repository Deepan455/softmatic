import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { getMaterials, addMaterial, deleteMaterial, appendMaterial } from '../../actions/Material';
import { Fragment } from 'react';


export class Material extends Component {
    state = {
        id: '',
        name : '',
        unit : '',
        category : '',
        quantity : ''
    }
    static propTypes = {
        getMaterials: PropTypes.func.isRequired,
        addMaterial: PropTypes.func.isRequired,
        appendMaterial: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.getMaterials();
    }

    onChange = e => this.setState({ [e.target.name] : e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const {name, unit, category, quantity} = this.state;
        const material = {name, unit, category, quantity};
        this.props.addMaterial(material);
        this.setState({
            id: '',
            name : '',
            unit : '',
            category : '',
            quantity : ''
        });
    }

    onAppend = e => {
        e.preventDefault();
        const {id, name, unit, category, quantity} = this.state;
        const material = {id, name, unit, category, quantity};
        this.props.appendMaterial(material);
        this.setState({
            id: '',
            name: '',
            unit: '',
            category: '',
            quantity: ''
        });
    }

    onEdit = (e,material) => {
        e.preventDefault();
        console.log(e);
        console.log(material);
        this.setState({
            id: material.id,
            name : material.name,
            unit: material.category,
            category: material.category,
            quantity: material.quantity
        });
    }


    render() {
        const {id, name, unit, category, quantity} = this.state;
        return (
           <div>
               <div>
                   <form onSubmit = { this.onSubmit }>
                       <fieldset className="formfield">
                        <legend>Material entry</legend>
                        <label htmlFor="id">Id:</label><input type="name" name="id" id="id" className="" placeholder="Automatically added" onChange = {this.onChange} value={id} disabled></input><br/>
                        <label htmlFor="name">Name:</label><input type="name" name="name" id="name" className="shadow" onChange = {this.onChange} value={name} required></input><br/>
                        <label htmlFor="unit">Unit</label><input type="text" name="unit" id="unit" className="shadow" onChange = {this.onChange} value={unit} required></input><br/>
                        <label htmlFor="category">Category:</label><input type="text" name="category" id="category" className="shadow" onChange = {this.onChange} value={category} blank="false"></input><br/>
                        <label htmlFor="quantity">Quantity:</label><input type="number" name="quantity" id="quantity" className="shadow" onChange = {this.onChange} value={quantity} blank="false"></input><br/>
                       </fieldset>
                       <button type="submit" className="submit shadow_out shadow_out_hover">Create</button>
                       <button onClick={this.onAppend} className="submit shadow_out shadow_out_hover">Append</button>
                   </form>
               </div>
               <div>
                    <h2>Materials</h2>
                    <table>
                        <thead>
                            <tr>
                                <th className="shadow">ID</th>
                                <th className="shadow">Name</th>
                                <th className="shadow">Unit</th>
                                <th className="shadow">Category</th>
                                <th className="shadow">Quantity</th>
                            </tr>
                        </thead>
                        <Fragment>
                            <tbody>
                                {this.props.materials.map(material=>(
                                    <tr key = {material.id}>
                                        <td className="shadow">{material.id}</td>
                                        <td className="shadow">{material.name}</td>
                                        <td className="shadow">{material.unit}</td>
                                        <td className="shadow">{material.category}</td>
                                        <td className="shadow">{material.quantity}</td>
                                        <td className="action"><button className="shadow shadow_hover" onClick={this.props.deleteMaterial.bind(this, material.id)}>Delete</button></td>
                                        <td className="action"><button className="shadow shadow_hover" onClick={ (e) => this.onEdit(e, material) } data-id={material.id} >Edit</button></td>
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
    materials : state.materials.materials
});


export default connect(mapStateToProps, {getMaterials, addMaterial, deleteMaterial, appendMaterial})(Material);
