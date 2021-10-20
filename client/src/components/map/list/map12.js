import React,{useState,useEffect} from "react";
import { Redirect } from "react-router";

const Map_korea = () => {
    const [goto,setGoto] = useState("")
    const [redirect,setRedirect] = useState(false)
    const handleMap = (e) => {
        let getid = e.currentTarget.getAttribute("id")
        setGoto(getid)
    }
    useEffect(()=>{
        if(goto==="") return 0
        setRedirect(true)
    },[goto])

    return (
        <div className="map_korea_state">
            {
                redirect?<Redirect to={"/shoplist?m="+goto} />:""
            }

            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 595.28 841.89" xmlSpace="preserve">
                <polygon onClick={handleMap} id="l1" className="st0" points="287.8,503.2 271.4,503.2 271.4,493.8 265.1,498.5 261.9,515 279,533.4 274.6,572.3 267.6,572.3 
                    275.5,606.9 275.8,607.5 283.6,607.7 293.3,560.3 289.8,546 291.6,529.8 "/>
                <polygon onClick={handleMap} id="l2" className="st0" points="299.2,489.8 290.6,502.1 294.5,528.6 314.6,534 315.1,530.3 320.7,526.8 323.4,498 "/>
                <polygon onClick={handleMap} id="l3" className="st0" points="271.4,454.7 280.6,443.9 279.5,438.1 243.2,427.2 223.5,441 223.5,515.4 235.9,526 259,514.4 
                    262.4,496.8 271.4,490.1 "/>
                <polygon onClick={handleMap} id="l4" className="st0" points="341.7,423.4 330.4,428.8 306.7,428.8 309.7,442.6 325,439.4 343.1,439.4 343.1,466.8 354.3,466.8 
                    362.7,443.1 377.4,439.2 376.1,435.4 "/>
                <path onClick={handleMap} id="l5" className="st0" d="M305.4,326.1l-5.2,21l10,19.8l-2.6,14.5h13.7v9.6h21.9v15.9l26.4,3.8l13.9-12.4l-6.9-11.8l13.8-8.8l11.2-17.6
                    l-4.3-14.7h-16.4l9-47.2c-6-3.1-13.2-6.7-20.1-10.3L325,305.6L305.4,326.1L305.4,326.1z"/>
                <polygon onClick={handleMap} id="l6" className="st0" points="365,445.6 356.9,468.2 366.7,489.6 381.7,494.1 380.6,479.2 397.7,484 402.6,478.2 378.6,441.9 "/>
                <polygon onClick={handleMap} id="l7" className="st0" points="340.2,467.9 340.2,442.4 325.2,442.4 307.5,446.1 301.8,420.4 282.4,437.5 283.8,444.8 274.3,455.8 
                    274.3,490.8 274.3,491.5 274.3,500.3 288.3,500.3 298,486.3 323.5,494.9 323.5,483.2 333.4,483.2 "/>
                <polygon onClick={handleMap} id="l8" className="st0" points="384.5,499.3 381.1,497 364.5,492 354.4,469.7 342.6,469.7 335.3,486.1 326.5,486.1 326.5,499 
                    326.3,499 323.8,524.8 328,522.2 338,535.7 347.8,537.3 370,550.3 378.5,543 398.4,544.1 396.7,515.4 "/>
                <polygon onClick={handleMap} id="l9" className="st0" points="340.2,409.4 340.2,393.9 320.6,393.9 304.3,418 306,425.8 329.7,425.8 341.6,420.2 375,431.9 
                    368.9,413.5 "/>
                <polygon onClick={handleMap} id="l10" className="st0" points="469.6,428.8 422.5,431.6 431.3,414.8 419,408 431.5,384.9 416.1,361.7 404,361.7 392.5,379.8 
                    380.6,387.4 387.3,398.8 371.8,412.7 380.6,439.6 404.6,475.9 405.9,474.4 457.2,473.7 466.8,441.6 471.8,442.3 "/>
                <path onClick={handleMap} id="l11" className="st0" d="M558.3,244.7l-13,0.7v-15.7l-3.4-7.5l3.4-10.9l-20.5-23.9l-36.2,5.2l-30.1-2.5l-2.7,26.7l-17.1,11.6l-29.8-11.6
                    h-20.8l13.7,17.1l-13.2,7.6l-1.8,14.3l-13,13.7l-3.2,15.7c7.6,3.8,15.4,7.8,21.6,11l1,0.5l-8.8,45.8h15l4.8,16.4h13.4l17.3,26
                    l-12,22.1l12.3,6.8l-7.7,14.7l44.5-2.7l2.7,17.1l35,5l0.7-20.5l-13-25.3l16.4-21.2l11.6-94.3l4.1-8.2l15.7,8.9l19.8-3.4l7.5-23.9
                    L558.3,244.7z"/>
                <polygon onClick={handleMap} id="l12" className="st0" points="294.4,531.6 292.8,545.8 295.5,556.8 313,546.4 314.2,537 "/>
                <polygon onClick={handleMap} id="l13" className="st0" points="272.5,607.4 263.9,569.3 272,569.3 275.9,534.4 260,517.2 235.5,529.5 222,518 196.9,536.7 
                    196.9,563.2 205,565.3 223.4,553 222,606.3 238.4,627.5 247.3,618.6 246.8,596.8 258.3,607 "/>
                <polygon onClick={handleMap} id="l14" className="st0" points="255.6,418.4 246.3,425 280.5,435.3 301.6,416.7 318.3,391.9 318.3,384.3 304,384.3 307,367.3 
                    297,347.4 302.3,326.1 273.3,326.1 273.3,346.6 255.6,372.6 "/>
                <path onClick={handleMap} id="l15" className="st0" d="M193.9,535.2l26.7-19.8v-75.9l32.1-22.6v-40l-1.3,1.9L237,389.4l-19.7,3l-28.8-0.8l-6.1,14.4l-12.1-11.4l-3,8.3
                    l-25.8,2.3l-14.4,22l12.9,12.9l3.8,15.9l-4.5,11.4l-4.5,21.2l-10.6-9.1l-0.8-13.6l-22.7,2.3l-3.8,10.6l-38.7,1.5l0.8,9.1
                    c0,0,6.1,10.6,10.6,14.4C74,507.7,95.3,516,95.3,516l11.4,22.7l-3.8,6.8l-13.6,2.3L85.4,563c2.3,0-33.4,15.9-33.4,15.9l-7.6,47.8
                    l30.3,54.6l33.4,5.3l19-56.1v-34.9l49.3,2.3l9.1-15.2l8.4-15.7V535.2z"/>
                <polygon onClick={handleMap} id="l16" className="st0" points="298.3,562.2 317.9,551.9 345.1,562.2 363.9,566.7 363.5,580.5 371.8,584.1 356.9,587.3 367,609.1 
                    328.7,594 314.3,592.7 314.3,580.4 "/>
            </svg>
        </div>
    )
}

export default Map_korea;