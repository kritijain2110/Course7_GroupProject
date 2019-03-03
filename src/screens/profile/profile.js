import React, { Component } from 'react';
import Header from '../../common/header/Header';
import informationSection from './informationSection'

class Profile extends Component {
    render() {
        return (
            <div>
                <Header screen={"Profile"}/>
                <informationSection/>
            </div>
        )
    }
}
export default Profile;