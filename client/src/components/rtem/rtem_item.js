import React, { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import Child from "./rtem_child"

const Rtem_pick = (props) => {
    const [titile,setTitle] = useState("")
    const [array,setArray] = useState([])
    useEffect(()=>{
        init()
    },[props])

    const init = () => {
        if(props.data===undefined) return 0
        console.log(props)
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
                                <Child 
                                    key={c.rtem_t2_pk}
                                    rtem_t2_key={c.rtem_t2_key}
                                    rtem_t2_type={c.rtem_t2_type}
                                />
                            </Link>
                        )
                    }):""
                }
            </div>
        </div>
    )
}

export default Rtem_pick