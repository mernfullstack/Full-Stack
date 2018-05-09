import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import Header from '../components/header/profileHeader'
import { isUserAlreadyLoggedIn } from '../generic/index'

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={}
     }
     componentDidMount() {
        const { login, history } = this.props;
		!isUserAlreadyLoggedIn() ? history.push('/') : null
     }
    render(){
        const { email, password } = this.state;
        return(
            <div className='login-view container-fluid'>  
                <Header/>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='row'>
                            <div className='col-sm-4'>
                            </div>
                            <div className='col-sm-4'>
                                <h1 className="pageHeading">Profile Page</h1>
                            </div>
                            <div className='col-sm-4'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export function mapStateToProps(state) {
    return {
        login: state.login
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
