
import React, { useState } from 'react'
import Icons from "../images/icons/machine.svg"


const Card = (props) => {
    return (
        <div className='card' >

            <img src={props.image} alt="" />

            < p > {props.info}</p>
        </div >
    )
}

export default Card