import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { getMaterials, addMaterial } from '../../actions/Material';
import { Fragment } from 'react';

console.log("Hello ji");

export class Material extends Component {
    state = {
        name : '',
        unit : '',
        category : '',
        quantity : ''
    }
    static propTypes = {
        getMaterials: PropTypes.func.isRequired,
        addMaterial: PropTypes.func.isRequired
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
            name : '',
            unit : '',
            category : '',
            quantity : ''
        });
    }

    render() {
        const {name, unit, category, quantity} = this.state;
        return (
           <div>
               <div>
                   <form onSubmit = { this.onSubmit }>
                       <fieldset className="formfield">
                        <legend>Material entry</legend>
                        <label>Name:</label><br/><input type="name" name="name" onChange = {this.onChange} value={name} ></input><br/>
                        <label>Unit</label><br/><input type="text" name="unit" onChange = {this.onChange} value={unit}></input><br/>
                        <label>Category:</label><br/><input type="text" name="category" onChange = {this.onChange} value={category}></input><br/>
                        <label>Quantity:</label><br/><input type="number" name="quantity" onChange = {this.onChange} value={quantity}></input><br/>
                       </fieldset>
                       <button type="submit" className="submit">Add</button>
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
                                    <tr key = "material.id">
                                        <td className="shadow">{material.id}</td>
                                        <td className="shadow">{material.name}</td>
                                        <td className="shadow">{material.unit}</td>
                                        <td className="shadow">{material.category}</td>
                                        <td className="shadow">{material.quantity}</td>
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


export default connect(mapStateToProps, {getMaterials, addMaterial})(Material);
