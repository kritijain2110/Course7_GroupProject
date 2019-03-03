import React, { Component } from 'react';
import Header from '../../common/header/Header';
import InformationSection from './InformationSection'

class Profile extends Component {
    render() {
        return (
            <div>
                <Header screen={"Profile"}/>
                <InformationSection/>
            </div>
        )
    }
}
export default Profile;