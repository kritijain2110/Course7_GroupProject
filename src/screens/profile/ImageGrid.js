import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import PostdetailSection from './postdetailSection'
import Modal from 'react-modal';

//add the access token below
const ACCESS_TOKEN = "8661035776.d0fcd39.87fd934e04f84253aaf234d8bd4e4c65";


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1000,
        height: 900,
    },
});
class ImageGrid extends Component{

    render(){
        let {classes}= this.props;
        let imagePostsData= this.state.imagePostsData;
        return(
            <div className={classes.root}>
                <GridList cellHeight={400} className={classes.gridList} cols={3}>
                    {imagePostsData.map(post => (
                        <GridListTile key={"grid"+post.id}}>
                            <img src="" />
                        </GridListTile>
                    ))}
                </GridList>
                <Modal ariaHideApp={false}  >

                    <PostdetailSection currentPostData={this.state.currentPost}/>

                </Modal>
            </div>

        );

    }

}
export default withStyles(styles)(ImageGrid);