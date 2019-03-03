import React, {Component} from 'react';
import './PostdetailSection.css';
import Typography from '@material-ui/core/Typography';

class PostdetailSection extends Component{
    render(){
        return(
            <div className="postDetail">
                <div className="left">
                    <img className="postedImage" src="" />
                </div>
                <div className="right">
                    <div className="userData">
                        <div>
                            <img className="profileImageIcon" src="" />
                        </div>
                        <div>
                            <Typography variant="h5" component="h5">UserName </Typography>
                        </div>

                    </div>
                    <hr/>

                    <br />

                    <div>
                        <Typography variant="subheading">  {this.state.caption}</Typography>
                    </div>

                    <div>{this.state.tags.map((tag)=>(
                        <span className="hashTag">{"#"+tag+" "}</span>
                    ))}
                    </div>
                </div>
                <br/>

            </div>


        );
    }
}
export default PostdetailSection;