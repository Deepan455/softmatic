import React from 'react';
import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';


const PrivateRoute = ({component:Component, auth, ...rest}) => {
    console.log(Component);
    console.log(auth);
    return (
        <Route
            {...rest}
            render={props => {
                if(auth.isLoading){
                    return <h2>Loading...</h2>
                }
                else if(!auth.isAuthenticated){
                    return <Redirect to="/login"/>;
                }
                else
                {
                    console.log("Heoolo!");
                    return <Component {...props}/>;
                }
            }}
        />
    )
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);