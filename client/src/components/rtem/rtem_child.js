import React,{ useMemo,useState } from "react";
import { getimage } from "../common/getimage";
import parser from "html-react-parser"

const RtemChild = (props) => {
    const [sample,setSample] = useState("")
    const [defaultImage,setDefaultImage] = useState(true)
    useMemo(()=>{
        if(props.rtem_t2_key===undefined) return 0
        if(props.rtem_t2_key==="default") return setDefaultImage(true)
        console.log(props.rtem_t2_key)
        let test = getimage(props.rtem_t2_key,props.rtem_t2_type)
        console.log(test)
    },[props.rtem_t2_key])
    

    return (
        <>
            <img src="./pics/test.png" alt="text" />
            {/* {
                parser()
            } */}
        </>
    )
}

export default RtemChild;