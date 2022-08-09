import React from "react";
import './YoutubeComponen.css'


const YoutubeComponent = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/X2YnP50cwNU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxPgfGjDiW4Qp7NWPlxEw6Y3VsRw" alt="" srcSet="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComponent.defaultProps = {
    time: '00.00',
    title: 'Surah',
    desc: 'Juz 1'
}

export default YoutubeComponent;