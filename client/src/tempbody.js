import React, { useEffect, useState } from "react";

const Temp = () => {
    const [reset,setReset] = useState(true)
    useEffect(() => {
        const tick = setTimeout(() => {
            if(reset===true){
                console.log('aa')
                setReset(false);
                document.getElementById("tempbody").style.width = "200px";
            }
            if(reset===false){
                console.log('bb')
                setReset(true);
                document.getElementById("tempbody").style.width = "160px";
            }
        }, 1500);
        return () => clearTimeout(tick);
    }, [reset]);

    return (
        <div className="tempbody">
            <div id="tempbody">
                <span>use</span>
                <span>less</span>
            </div>
            <span>let's go</span>
        </div>
    )
}

export default Temp;