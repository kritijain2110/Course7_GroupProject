import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import './InformationSection.css';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

const TabContainer = function(props){
    return(
        <Typography component="div" style={{ padding: 0}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}
class InformationSection extends Component {
    render() {
        return (
            <div className="details">

                <div className="containerDetails">
                    {/*<div className="leftDetails">
                        <img className="profileImage" src=""/>
                    </div>*/}
                    <div className="rightDetails">
                        <div>
                            <Typography variant="h5" component="h5"> Username </Typography>
                        </div>
                        <br />
                        <div className="counterContainer">
                            <div><Typography><span className="bold">Posts: </span> Test </Typography></div>
                            <div><Typography><span className="bold">&nbsp;&nbsp;&nbsp;&nbsp;Followed:</span> Test1 </Typography></div>
                            <div><Typography><span className="bold"> &nbsp;&nbsp;&nbsp;&nbsp;Followed By:</span> Test2 </Typography></div>
                        </div>
                        <br/>
                        <div className="editName">
                            <div className="fullName">
                                <Typography variant="subheading">FullName</Typography>
                            </div>
                            <div className="editButton">
                                <Fab color="secondary" aria-label="Edit"><EditIcon/></Fab>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );

    }

}
export default withStyles(styles)(InformationSection);