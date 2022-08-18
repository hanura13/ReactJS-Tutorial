import React from "react"

const Button = ({klik, judul, loading})=> {
    if(loading){
        return <button className="btn disable">Loading..</button>
    }
    return(
        <button className="btn" onClick={klik}>{judul}</button>
    )
}

export default Button;