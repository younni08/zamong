import React from "react";
import {Link} from "react-router-dom"

const rtem_pick = (props) => {
    
    return (
        <div className="rtem_level4">
            <span>부엌</span>
            <div>
                <Link to="/items?c=부엌">
                    <img src="./pics/test.png" alt="text" />
                </Link>
                <Link to="/items?c=부엌">
                    <img src="./pics/test.png" alt="text" />
                </Link>
                <Link to="/items?c=부엌">
                    <img src="./pics/test.png" alt="text" />
                </Link>
                <Link to="/items?c=부엌">
                    <img src="./pics/test.png" alt="text" />
                </Link>
            </div>
        </div>
    )
}

export default rtem_pick