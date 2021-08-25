import React, { useState,useEffect } from "react";
import {Link} from "react-router-dom"

const Rtem_pick = (props) => {
    const [titile,setTitle] = useState("")
    const [array,setArray] = useState([])
    useEffect(()=>{
        init()
    },[props])

    const init = () => {
        if(props.data===undefined) return 0
        setArray(props.data)
        setTitle(props.data[0].rtem_t1_name)
    }
    
    return (
        <div className="rtem_level4">
            <span>{titile}</span>
            <div>
                {
                    array?array.map(c=>{
                        return(
                            <Link to={"/items?c="+titile} key={c.rtem_t2_pk}>
                                <img src="./pics/test.png" alt="text" />
                            </Link>
                        )
                    }):""
                }
            </div>
        </div>
    )
}

export default Rtem_pick