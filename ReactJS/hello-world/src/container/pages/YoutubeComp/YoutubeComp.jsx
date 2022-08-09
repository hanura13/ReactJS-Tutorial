import React, { Component, Fragment } from "react";
import YoutubeComponent from "../../../component/YoutubeComponent/YoutubeComponent";

class YoutubeComp extends Component {
    render() {
        return (
            <Fragment>
                <p>Youtube Component</p>
                <hr />
                <YoutubeComponent
                    time="8.10"
                    title="Albaqoroh"
                    desc="Juz 1" />
                <YoutubeComponent
                    time="9.00"
                    title="Ali-Imran"
                    desc="Juz 2" />
                <YoutubeComponent
                    time="3.14"
                    title="Al-bayinah"
                    desc="Juz 30" />
                <YoutubeComponent
                    time="5.00"
                    title="An-Naba"
                    desc="Juz 30" />
                <YoutubeComponent />
            </Fragment>
        )
    }
}

export default YoutubeComp;