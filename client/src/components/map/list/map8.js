import React,{useState,useEffect} from "react";
import {Redirect} from "react";

const Map_korea = () => {
    const [goto,setGoto] = useState("")
    const [redirect,setRedirect] = useState(false)
    const handleMap = (e) => {
        let getid = e.currentTarget.getAttribute("id")
        if(getid==="h2_1") getid = "h2"
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
                <polygon onClick={handleMap} id="h1" className="st0" points="244.09,331.73 225.86,357.16 211.45,357.16 198.9,368.84 229.2,387.03 229.2,401.51 251.48,405.15 
                    273.25,398.67 281.28,383.48 265.62,367.34 272,351.62 273.57,337.27 252.02,328.65 "/>
                <polygon onClick={handleMap} id="h2" className="st0" points="191.78,413.05 218.61,428.8 238.34,428.8 246.03,443.16 249.01,444.33 251.14,433.08 259.38,429.78 
                    264.37,434.33 271.5,427.2 271.5,415.9 276.16,407.99 273.34,400.73 251.61,407.2 228.18,403.37 197.71,407.12 "/>
                <polygon onClick={handleMap} id="h3" className="st0" points="323.1,382.66 311.31,386.8 292.21,382.66 283.16,384.21 275.03,399.57 277.9,406.95 293.84,404.16 
                    302.95,410.97 332.64,418.39 347.2,401 355.34,398.75 355.34,389.37 352.82,382.71 335.84,384.31 "/>
                <polygon onClick={handleMap} id="h4" className="st0" points="434.71,452.62 446.61,446.49 463.28,418.15 463.28,406.67 458.41,395.38 460.19,391.19 459.78,388.21 
                    455.93,372.31 450.79,373.26 443.54,384.36 429.17,382.93 418.34,395.7 419.29,411.8 405.45,425.64 405.45,435.62 400.04,441.46 
                    411.98,452.62 "/>
                <polygon onClick={handleMap} id="h5" className="st0" points="259.53,304.3 267.67,314.84 253.89,327.24 275.72,335.98 273.91,352.25 267.96,366.88 282.86,382.23 
                    292.25,380.62 311.18,384.73 322.89,380.62 335.88,382.3 353.06,380.68 358.68,375.71 358.68,367.95 335.31,363.74 329.14,356.03 
                    329.14,340.37 308.3,346.85 300.26,335.07 310.21,325.29 308.22,304.64 291.86,285.34 273.5,289.42 "/>
                <polygon onClick={handleMap} id="h6" className="st0" points="318.09,468.69 324.48,463.89 325.89,455.02 346.77,437.17 346.77,433.62 334.55,430.33 332.17,420.33 
                    302.08,412.81 293.34,406.28 277.9,408.98 273.5,416.45 273.5,428.02 264.44,437.09 258.96,432.1 252.9,434.53 250.91,445.08 
                    257.57,447.7 260.28,458 274.87,460.6 281.14,467.15 293,467.15 301.21,469.72 "/>
                <polygon onClick={handleMap} id="h7" className="st0" points="376.4,339.85 376.4,352.29 360.68,367.54 360.68,375.2 366.85,375.4 375.85,375.16 386.65,375.16 
                    390.72,391.03 416.9,394.3 427.75,381.51 427.75,360.49 416.52,360.49 411.3,337.53 417.09,337.53 420.66,327.62 402.87,327.62 
                    401.01,335.59 "/>
                <polygon onClick={handleMap} id="h8" className="st0" points="453.75,306.66 444.14,306.66 436.78,301.37 418.96,311.39 423.13,326.67 418.49,339.53 413.8,339.53 
                    418.11,358.49 429.75,358.49 429.75,380.97 442.53,382.25 449.58,371.45 456.19,370.23 463.52,352.82 474.95,344.25 474.95,306.62 
                    455.64,301.23 "/>
                <polygon onClick={handleMap} id="h9" className="st0" points="358.18,427.41 385.27,431.66 397.5,439.08 398.57,440.09 403.45,434.84 403.45,424.81 417.24,411.02 
                    416.36,396.25 389.12,392.85 385.1,377.16 375.87,377.16 366.85,377.4 360.04,377.18 354.66,381.93 357.34,389 357.34,400.26 
                    348.33,402.77 334.09,419.77 336.22,428.7 348.77,432.08 348.77,435.46 "/>
                <polygon onClick={handleMap} id="h10" className="st0" points="291.47,477.15 276.87,477.15 269.9,469.88 254.24,466.72 252.11,466.24 252.11,466.24 231.27,466.24 
                    224.44,484 224.44,491.18 219.8,501.49 202.22,501.49 198.72,510.83 227.68,509.05 235.25,498.96 244.93,508.79 252.73,504.65 
                    270.12,504.65 281.42,505.28 276.91,521.84 280.75,528.63 296.33,530.87 301.63,526.27 299.54,502.14 307.71,499.74 307.71,492.44 
                    295.64,492.44 295.64,478.45 "/>
                <path onClick={handleMap} id="h11" className="st0" d="M120.81,487.8l8.84-14.25l27.19,9.94l3.38-9.41l8.54-4.74l4.23-15.04l10.28-12.61l-4.96-16.68l-17.01-7.82
                    h-14.98v23.57l-10.14,7.35l-17.41,2.56l-2.01-12.33l-5.94-6.15c-4.05,2.02-9.07,4.51-13.79,6.81l0.13,3.5l-2.29,25.93l17.15,14.48
                    v8.92L120.81,487.8z"/>
                <polygon onClick={handleMap} id="h12" className="st0" points="310.15,303.83 310.18,304.14 312.29,326.05 302.86,335.32 309.12,344.5 331.14,337.65 331.14,355.33 
                    336.41,361.91 359.35,366.04 374.4,351.45 374.4,338.17 399.36,333.85 401.28,325.62 420.77,325.62 417.03,311.9 401.86,311.9 
                    390.35,306.74 375.51,311.76 365.51,323.75 358.12,317.42 349.85,311.9 342.06,311.9 319.67,285.23 308.37,285.23 298.89,278.12 
                    293.23,279.69 293.23,283.86 "/>
                <polygon onClick={handleMap} id="h13" className="st0" points="196.81,510.22 200.84,499.49 218.51,499.49 222.44,490.75 222.44,483.63 229.9,464.24 251.7,464.24 
                    250.75,461.07 249.19,455.15 238.95,451.12 232.36,438.8 215.89,438.8 184.48,420.35 180.27,424.56 185.49,442.12 174.81,455.23 
                    170.81,469.45 191.1,478.65 191.1,505.2 "/>
                <polygon onClick={handleMap} id="h14" className="st0" points="437.24,532.15 422.89,535.86 416.26,532.07 409.26,534.54 409.26,544.36 401.76,544.36 380.59,529.59 
                    380.59,523.05 369.07,517.99 361.58,509.49 359.18,488.38 343.27,453.31 335.19,460.22 333.72,469.46 321.69,478.49 299.99,479.81 
                    297.64,479.08 297.64,490.44 309.71,490.44 309.71,501.24 301.68,503.6 303.71,527.11 298.05,532.03 313.83,550.03 322.52,544.31 
                    332.05,549.55 335.38,561.94 353.48,563.37 362.06,550.51 369.2,553.36 365.87,589.57 385.88,597.38 391.12,608.14 413.03,601.95 
                    419.22,582.42 440.18,579.09 446.8,560.7 448.41,556.44 "/>
                <polyline onClick={handleMap} id="h15" className="st0" points="227.72,572.61 222.85,563.89 218.04,563.89 211.14,561.59 215.13,552.13 202.78,538.3 215.3,531.8 
                    215.3,528.39 180.61,518.06 160.45,508.23 165.8,530.98 174.85,541.93 171.52,554.79 194.38,578.61 193.91,591.95 211.06,591.95 
                    227.37,575.6 227.72,572.61 "/>
                <polyline onClick={handleMap} id="h16" className="st0" points="229.87,572.36 234.4,573.37 233.44,585.76 247.26,590.52 275.84,590.52 296.64,574.8 304.42,556.22 
                    312.14,551.14 296.13,532.87 279.5,530.47 274.77,522.11 278.84,507.14 270.07,506.65 253.22,506.65 244.55,511.25 235.45,502.02 
                    228.73,510.99 198.24,512.86 198.24,521.23 217.3,526.9 217.3,533.01 205.99,538.89 217.46,551.74 213.83,560.38 218.36,561.89 
                    224.03,561.89 229.87,572.36 "/>
                <polygon onClick={handleMap} id="h17" className="st0" points="394.02,208.78 388.78,216.88 388.78,229.05 400.65,241.39 403.11,265.99 394.74,275.47 390.23,267.45 
                    383.85,270.64 379.86,283.93 384.27,287.89 391.4,296.74 391.4,305.02 402.28,309.9 417.53,309.9 436.91,299 444.79,304.66 
                    452.33,304.66 454.5,298.43 454.56,292.47 465.9,281.37 463.04,259.62 448.28,255.17 433.03,244.22 433.03,238.5 445.42,235.16 
                    442.56,212.3 448.28,195.15 445.9,188.96 433.51,193.72 425.89,179.91 394.02,194.18 "/>
                <polygon onClick={handleMap} id="h18" className="st0" points="548.79,381.88 548.79,365.21 539.74,354.73 509.73,378.55 481.62,385.69 472.07,388.82 469.29,395.35 
                    473.28,404.61 473.28,420.87 470.87,424.98 483.21,434.35 479.87,449.16 490.76,458.69 504.96,465.79 524.02,441.42 522.59,429.51 
                    554.03,421.42 560.22,405.22 "/>
                <polygon onClick={handleMap} id="h19" className="st0" points="504.53,468.62 503.71,467.39 489.54,460.28 477.66,449.88 480.98,435.16 469.85,426.71 453.76,454.05 
                    437.13,462.62 415.2,462.62 418.69,488.28 449.52,497.36 449.52,503.09 469.28,509.28 469.28,520.87 481.46,527.9 486.75,540.5 
                    495.44,540.5 494.96,530.02 516.87,530.02 519.01,514.3 525.92,510.97 534.97,484.29 507.34,481.44 "/>
                <polygon onClick={handleMap} id="h20" className="st0" points="196.06,512.22 189.1,506.11 189.1,479.94 169.66,471.12 161.85,475.46 158.04,486.05 130.5,475.99 
                    122.19,489.37 110.02,494.9 110.02,483.81 94.42,470.63 84.82,493.35 91.02,499.54 89.11,513.35 84.82,525.26 104.35,530.98 
                    120.07,531.93 128.17,520.5 137.7,524.78 151.51,506.35 155.44,504.65 157.88,504.76 181.41,516.23 196.24,520.64 196.24,512.99 "/>
                <polygon onClick={handleMap} id="h21" className="st0" points="479.88,529.29 467.28,522.03 467.28,510.75 447.52,504.56 447.52,498.86 416.89,489.83 413.18,462.62 
                    408.03,462.62 391.42,447.1 381.77,441.23 361.18,438 344.86,451.96 361.13,487.84 363.49,508.64 370.28,516.34 382.59,521.75 
                    382.59,528.55 402.39,542.36 407.26,542.36 407.26,533.13 416.46,529.88 423.17,533.72 438.36,529.8 450.25,555.67 456.85,552.89 
                    471.62,560.51 484.72,540.85 "/>
                <polygon onClick={handleMap} id="h22" className="st0" points="340.94,219.28 352.79,229.07 341.13,236.67 340.69,252.23 351.77,258.71 378.22,282.45 382.18,269.24 
                    391.04,264.81 395.11,272.03 401.03,265.32 398.73,242.28 386.78,229.85 386.78,216.29 392.02,208.19 392.02,192.85 380.16,184.67 
                    363.96,184.67 363.96,174.67 341.1,170.22 327.7,193.91 "/>
                <polygon onClick={handleMap} id="h23" className="st0" points="299.75,276.26 309.04,283.23 320.61,283.23 342.99,309.9 350.45,309.9 359.37,315.86 365.27,320.92 
                    374.33,310.05 389.4,304.95 389.4,297.44 382.77,289.21 350.51,260.27 338.65,253.35 339.16,235.57 349.42,228.88 339.35,220.56 
                    326.53,195.98 325.38,198.01 306.8,206.25 308.71,219.92 305.85,231.35 296.64,237.55 292.64,252.36 302.85,266.56 "/>
                <polygon onClick={handleMap} id="h24" className="st0" points="189.54,348.51 197.6,367.32 210.66,355.16 224.83,355.16 242.81,330.09 251.49,326.71 264.95,314.59 
                    256.9,304.17 272.46,287.61 291.23,283.43 291.23,280.24 289.61,278.42 270.12,260.41 268.22,249.93 247.26,242.79 230.11,253.74 
                    210.1,258.98 198.19,299.95 189.14,314.71 198.19,337.58 "/>
                <path onClick={handleMap} id="h25" className="st0" d="M95.79,437.34c5.01-2.44,10.48-5.14,14.79-7.29l0.66-0.33l7.4,7.66l1.8,11.01l14.98-2.2l8.92-6.46v-24.55h17.41
                    l17.19,7.9l4.13-4.13l-7.23-9.35l-30.98-16.78l-11.7-24.3l-26.79-12.92l-29.49-30.39l-15.39,4.29l1.43,26.2l-21.44,12.86L39.1,381.9
                    l-14.85,20.48l15.32,18.58l17.62,2.86l4.76,6.67l25.72-3.81L95.79,437.34z"/>
                <polygon onClick={handleMap} id="h2_1" className="st0" points="152.46,385.56 182.45,401.8 190.19,411.81 196.78,405.22 227.2,401.48 227.2,388.16 196.45,369.71 
                    187.52,348.88 172,347.58 161.04,357.11 159.61,367.59 145.72,371.56 "/>
                </svg>

        </div>
    )
}

export default Map_korea;