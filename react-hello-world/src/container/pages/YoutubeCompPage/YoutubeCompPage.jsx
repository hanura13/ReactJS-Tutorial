import React, {Component, Fragment} from 'react';
import YouTubeComp from '../../../component/YouTubeComp/YouTubeComp';

class YoutubeCompPage extends Component{
    render(){
        return(
            <Fragment>
                <p>Youtube</p>
                <hr/>
                <YouTubeComp 
                    time="7.12" 
                    title="How to see"
                    desc="2x ditonton"/>
                <YouTubeComp 
                    time="4.00" 
                    title="How to Open"
                    desc="3x ditonton"/>
                <YouTubeComp 
                    time="5.12" 
                    title="How to feel"
                    desc="1x ditonton"/>
                <YouTubeComp 
                    time="3.40" 
                    title="How to smell"
                    desc="2x ditonton"/>
                 <YouTubeComp/>
            </Fragment>
        )
    }
}

export default YoutubeCompPage;