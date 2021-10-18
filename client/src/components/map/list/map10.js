import React,{useState,useEffect} from "react";
import {Redirect} from "react";

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
                <g>
                    <polygon onClick={handleMap} id="j1" className="st0" points="427.8,345.1 400.85,334.84 395.45,350.38 374.18,347.64 369.34,360.09 347.53,353.76 330.68,359.38 
                        340.22,371.46 342.91,384.88 371.34,397.45 388.29,384.57 429.7,387.28 434.1,375.34 425.22,354.15 	"/>
                    <polygon onClick={handleMap} id="j2" className="st0" points="379.94,287.02 379.31,290.56 376.59,308.27 376.59,322.9 369.85,332.33 374.28,345.64 394.09,348.19 
                        399.64,332.23 430.23,343.89 427.33,354.02 436.25,375.29 431.56,388.02 462.73,414.63 462.82,414.86 463.27,416 472.16,420.94 
                        475.59,438.33 484.29,446.71 490.46,440.53 494.29,428.4 483.23,419.41 491.64,403.29 488.16,391.45 503.89,376.44 527.9,372.32 
                        543.1,359.88 544.46,360.07 554.36,352.03 554.36,336.27 529.01,308.19 529.7,297.23 537.23,295.18 537.23,284.22 516,284.22 
                        516,270.52 490.66,273.95 490.66,262.3 455.73,267.78 455.73,261.62 436.55,253.4 386.55,273.26 	"/>
                    <polygon onClick={handleMap} id="j3" className="st0" points="543.69,361.98 543.69,361.98 528.76,374.2 504.83,378.3 490.42,392.06 493.79,403.5 485.76,418.89 
                        496.61,427.71 492.22,441.6 485.73,448.09 494.08,456.14 487.92,463.67 489.29,470.52 500.93,476 511.89,462.99 520.79,468.47 
                        534.49,452.71 529.7,420.94 544.77,408.19 544.08,397.23 550.93,387.64 	"/>
                    <polygon onClick={handleMap} id="j4" className="st0" points="426.96,486.27 429.24,478.85 428.78,477.76 420.19,461.25 397.98,461.25 372.13,450.07 354.41,416.17 
                        314.67,412.5 322.07,389.55 340.86,384.85 338.35,372.32 327.35,358.38 347.49,351.67 368.14,357.66 372.47,346.52 367.63,332 
                        374.59,322.25 374.6,308.04 377.34,290.23 377.45,289.59 363.95,277.37 347.51,284.9 335.18,274.63 339.97,252.71 339.97,233.53 
                        317.37,234.22 305.45,219.84 259.84,211.62 238.6,218.47 221.48,206.82 205.04,219.15 200.25,210.93 170.11,228.05 142.71,241.07 
                        132.44,272.58 151.62,289.01 132.44,292.44 118.05,284.22 102.99,305.45 83.81,299.97 59.84,310.93 64.63,325.32 82.44,328.05 
                        85.18,347.23 55.73,372.58 46.14,376.68 33.81,383.53 45.45,397.23 64.63,401.34 59.84,420.94 77.64,420.94 102.3,415.23 
                        119.42,408.19 119.42,426.68 148.19,452.03 178.33,453.4 176.96,462.3 199.56,495.18 221.48,518.47 255.04,519.15 272.16,506.82 
                        274.9,530.79 290.66,536.27 279.7,570.52 339.97,567.1 355.73,593.12 359.84,615.04 392.71,631.48 403.67,608.19 418.74,597.92 
                        440.66,600.66 440.66,581.48 423.53,568.47 441.34,554.08 445.45,547.92 435.18,528.05 446.82,524.63 449.56,512.99 435.86,507.51 
                            "/>
                    <polygon onClick={handleMap} id="j5" className="st0" points="444.08,448.6 448.19,440.38 469.42,447.23 466,434.22 457.1,426.68 461.34,416.54 461.05,415.83 
                        429.99,389.3 388.91,386.61 371.62,399.76 341.94,386.64 323.63,391.22 317.33,410.74 355.67,414.28 373.57,448.51 398.4,459.25 
                        421.4,459.25 430.59,476.91 431.91,479.99 440.66,490.38 453.67,475.32 468.05,478.74 471.48,463.67 456.41,452.03 	"/>
                </g>
                </svg>
        </div>
    )
}

export default Map_korea;