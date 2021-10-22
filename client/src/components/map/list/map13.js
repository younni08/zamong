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
                <polygon onClick={handleMap} id="m1" className="st0" points="82.44,575.32 50.25,603.4 50.25,633.53 63.26,639.01 96.14,639.01 96.14,617.78 116.68,607.16 
                    102.3,575.32 87.92,567.1 "/>
                <polygon onClick={handleMap} id="m2" className="st0" points="224.22,612.3 201.62,622.58 209.84,645.18 219.42,649.97 244.08,647.23 "/>
                <polygon onClick={handleMap} id="m3" className="st0" points="120.68,463.42 128,466.16 141.48,470.01 155.34,440.31 150.71,425.08 138.69,408.56 150.34,408.56 
                    147.47,397.12 150.99,390.09 136,381.23 139.29,372.67 123.44,369.91 131.73,352.29 124.14,349.87 124.22,349.97 114.63,358.88 
                    115.32,368.47 107.78,368.47 108.47,354.77 102.99,345.18 91.18,345.69 86.51,362.12 86.55,362.3 98.88,365.73 91.34,380.11 
                    83.81,388.33 76.27,384.22 74.22,404.77 86.55,415.04 96.14,403.4 105.73,405.45 103.67,424.63 106.99,433.35 107.26,434.81 
                    123.37,446.89 119.67,456.5 "/>
                <polygon onClick={handleMap} id="m4" className="st0" points="158.22,517.05 165.51,506.46 180.24,507.86 195.28,501.97 197.12,494 189.99,483.25 208.51,469.23 
                    219.45,478.8 233.61,467.21 238.81,447.1 252.34,443.63 257.38,435.22 244.08,435.22 239.3,435.22 233.14,435.22 227.66,421.94 
                    205.41,421.94 205.41,407.28 196.45,399.44 196.45,429.17 178.01,425.45 178.01,406.14 162.89,410.98 162.89,428.16 157.33,440.79 
                    142.57,472.4 127.37,468.06 121.31,465.79 117.63,466.32 102.3,469.84 92.71,479.42 99.34,487.38 121.17,490.11 "/>
                <polygon onClick={handleMap} id="m5" className="st0" points="126.37,368.39 142.03,371.11 138.47,380.36 151.89,388.29 156.25,379.56 161.88,387.29 170.4,375.11 
                    166.35,358.21 170.8,335.96 182.24,343.83 190.34,333.86 190.34,303.89 167.74,286.45 159.05,304.49 133.62,301.05 124.56,314.98 
                    108.68,306.69 100.98,315.03 100.75,315.29 110.52,333.53 126.96,338.33 118.74,342.44 122.15,347.13 134.51,351.08 "/>
                <polygon onClick={handleMap} id="m6" className="st0" points="281.7,274.9 292.7,302.4 305.6,302.4 312.4,312.6 313,312.5 331.6,318.6 328.4,304.9 339,302.5 
                    327,280.5 334.9,274.2 334.9,256.1 334.9,256.1 318,254.8 328.3,229.4 314.6,224.6 322.2,208.9 309.8,190.4 292.7,206.8 
                    297.6,219.8 280.7,218.5 280.7,218.6 280.7,228.4 272,228.4 263,240.5 268.3,251.7 259.2,251.7 255.5,263.4 268.4,277 	"/>
                <polygon onClick={handleMap} id="m7" className="st0" points="363.6,337.6 367,324.6 364.3,314.4 367,298.7 364.9,293.4 354.1,301.6 340.1,304.5 340,304.3 
                    330.8,306.4 334.4,321.7 313,314.6 312.6,314.7 308,327.2 282.7,355.4 278.4,340.5 267.9,347 271.9,356.9 262.5,377 272.9,383.2 
                    265,396.1 267,425.3 262.3,427.3 274.1,428.5 271.3,439.2 288.9,449.9 296.5,433.8 298.7,444.9 314.3,444.9 321.2,439.9 
                    321.2,433.6 333.2,427.5 327.2,412.2 344.7,388.1 351.8,395.9 361,389.1 364.3,375.1 367,355.5 	"/>
                <polygon onClick={handleMap} id="m8" className="st0" points="262.92,395.61 270.1,383.87 259.92,377.76 269.71,356.79 265.99,347.49 258.68,346.89 239.85,359.24 
                    222.04,356.33 216.59,335.22 191.82,335.22 182.63,346.53 172.16,339.33 168.39,358.17 172.56,375.52 161.91,390.74 156.57,383.4 
                    149.59,397.35 152.9,410.56 142.62,410.56 152.52,424.18 156.58,437.51 160.89,427.74 160.89,409.52 180.01,403.4 180.01,423.81 
                    194.45,426.73 194.45,395.03 207.41,406.37 207.41,419.94 229,419.94 234.48,433.22 243.87,433.22 264.95,424 "/>
                <polygon onClick={handleMap} id="m9" className="st0" points="508.95,308.19 503.3,322.09 503.3,331.39 487.16,340.19 476.65,332.77 477.26,351.12 487.42,357.56 
                    492.37,378.06 487.61,397.09 494.21,408.96 501.62,403.4 509.84,420.94 524.9,420.94 522.85,407.51 542.03,401.34 564.63,371.89 
                    555.04,366.41 555.04,353.4 547.51,356.14 547.51,346.55 539.29,346.55 531.75,336.27 535.86,323.95 "/>
                <polygon onClick={handleMap} id="m10" className="st0" points="486.12,431.05 479.53,423.63 494.68,423.63 493.57,411.49 492.52,410.05 485.48,397.37 490.31,378.05 
                    485.67,358.82 475.29,352.25 474.62,331.79 466.25,331.79 442.03,305.61 439.56,322.28 430.33,335.05 417.46,339.79 412.45,353.04 
                    394.77,344.91 384.86,349.48 384.86,339.49 368.63,326.38 365.66,337.68 369.07,355.43 366.31,375.45 363.25,388.3 371.28,386.13 
                    387.13,413.87 376.45,423.63 390.41,423.63 404.94,415.83 417.15,430.48 431.24,430.48 433.57,445.51 442.03,445.86 466.68,443.12 
                    463.26,428.74 472.85,424.63 476.79,445.63 483.61,439.82 "/>
                <path onClick={handleMap} id="m11" className="st0" d="M430.67,260l0.03,0.25v10.01l8.7,15.23l-17.44,5.58l3.04,14.58l16.7-3.34l25.43,27.49h8.78l11.39,8.04l14-7.64
                    v-8.51l0.07-0.18l6.27-15.45l-2.61-28.7l-12.33-22.6l-23.29-21.92l-24.66,3.77l-13.33,18.48C431.58,255.66,430.66,259.98,430.67,260
                    z"/>
                <path onClick={handleMap} id="m12" className="st0" d="M336.86,256.23l0,18.88l-7.26,5.94l11.58,21.22l12.06-2.54l12.51-9.57l3.33,8.34l-2.75,15.82l2.6,9.75
                    l17.93,14.48v7.82l7.9-3.65l16.57,7.62l4.58-12.1l13.16-4.85l8.58-11.88l2.5-16.85l-16.7,3.34l-3.81-18.29l16.81-5.38l-7.74-13.54
                    v-10.41c-0.27-1.05-0.55-2.11-0.83-3.17l-4.34-7.23l-36.99,3.42l-10.96-9.59l-4.79,6.85l-5.48-8.9l-12.33,13.7l-16.12,0.64
                    L336.86,256.23z"/>
                <polygon onClick={handleMap} id="m13" className="st0" points="98.88,293.81 89.97,304.08 99.54,313.65 108.25,304.21 123.88,312.36 132.63,298.9 157.88,302.31 
                    166.12,285.2 165.97,285.08 178.01,269.49 178.01,259.58 186.23,256.16 186.23,248.09 186.08,247.66 166,243.12 171.48,257.51 
                    146.82,256.82 146.82,236.96 130.38,223.26 135.86,210.25 115.32,206.14 106.41,220.52 123.53,236.96 106.41,231.48 98.19,247.92 
                    98.19,263.67 88.6,263.67 83.12,282.16 74.22,273.26 71.48,289.7 83.12,299.97 "/>
                <polygon onClick={handleMap} id="m14" className="st0" points="434.49,498.6 431.07,482.16 436.55,474.63 431.75,465.73 435.1,463.55 429.09,460.37 428.97,460.25 
                    416.6,447.23 405.34,456.56 390.98,466.73 382.75,466.73 382.75,474.46 387.92,482.85 402.99,483.53 411.21,478.74 413.95,497.23 
                    407.1,514.36 397.51,508.19 394.08,490.38 379.7,506.14 376.96,517.1 387.92,526.68 375.59,543.81 366,544.49 369.42,537.64 
                    370.79,520.52 363.26,521.89 357.1,543.12 350.25,540.38 342.03,560.25 346.14,571.21 371.48,570.52 388.6,571.89 394.77,579.42 
                    393.4,587.64 409.15,597.92 430.38,589.01 427.64,578.05 446.82,575.32 450.25,559.56 424.22,559.56 441.34,545.18 452.3,545.86 
                    464.63,549.29 470.11,540.38 465.32,520.52 "/>
                <polygon onClick={handleMap} id="m15" className="st0" points="321.16,523.43 321.16,522.87 311.31,505.77 295.14,505.77 295.14,496.04 310.93,484.37 313.56,446.86 
                    297.02,446.86 295.73,440.14 289.71,452.77 268.95,440.16 271.58,430.3 258.58,428.97 248.86,433.22 260.92,433.22 253.63,445.36 
                    240.45,448.74 235.78,466.78 244.85,466.78 251.21,490.81 265.35,531.79 256.48,531.79 267.17,560.52 252.62,574.37 253.18,602.61 
                    267.37,610.25 261.89,597.92 285.18,597.92 279.7,585.59 297.64,589.01 297.64,575.32 290.66,568.47 301.62,560.25 297.85,554.08 
                    303.67,539.01 297.85,530.79 318.05,526 "/>
                <polygon onClick={handleMap} id="m16" className="st0" points="366,503.4 374.22,487.64 380.75,476.75 380.75,464.73 390.34,464.73 404.12,454.98 416.77,444.5 
                    430.31,458.75 437.02,462.3 445.45,456.82 437.2,450.64 432.21,449.79 429.09,447.99 425.59,445.18 431.53,445.43 429.53,432.48 
                    416.22,432.48 404.45,418.36 390.91,425.63 371.3,425.63 384.6,413.47 370.31,388.47 362.33,390.62 351.48,398.57 344.85,391.28 
                    329.46,412.45 335.76,428.43 323.16,434.83 323.16,440.89 315.59,446.4 312.86,485.43 297.14,497.05 297.14,503.77 312.47,503.77 
                    322.95,521.95 337.92,509.56 345.45,498.6 "/>
                <polygon onClick={handleMap} id="m17" className="st0" points="555.04,430.11 546.14,430.11 529.7,441.75 514.63,452.71 514.63,442.44 495.88,425.63 483.98,425.63 
                    488.34,430.54 485.37,440.95 476.51,448.49 474.9,455.45 486.55,455.45 502.3,480.11 485.86,493.12 484.49,508.88 495.45,523.26 
                    518.74,527.37 509.15,502.71 515.32,491.07 524.9,475.32 537.92,491.07 552.3,482.16 548.88,471.21 560.52,459.56 "/>
                <polygon onClick={handleMap} id="m18" className="st0" points="56.41,371.21 63.26,354.77 71.48,360.93 82.49,354.4 85.57,358.08 89.07,345.78 87.23,342.86 
                    83.12,339.7 90.66,318.04 82.44,328.05 62.58,319.15 57.1,336.96 40.66,330.79 27.64,339.7 31.75,352.71 50.25,354.77 46.82,368.47 
                    "/>
                <polygon onClick={handleMap} id="m19" className="st0" points="194.08,238.33 189.95,244.92 188.23,247.75 188.23,257.49 180.01,260.91 180.01,270.18 168.77,284.72 
                    191.45,302.22 210.56,292.33 228.64,269.72 228.64,285.69 238.64,291.31 266.39,277.76 253.23,263.94 257.68,249.66 265.11,249.66 
                    260.73,240.27 270.97,226.37 278.7,226.37 278.72,218.28 278.05,213.52 274.9,204.08 249.56,183.53 214.63,197.23 223.53,209.56 
                    216,230.79 "/>
                <polygon onClick={handleMap} id="m20" className="st0" points="250.61,573.52 264.83,559.98 253.6,529.79 262.54,529.79 249.3,491.39 243.31,468.78 234.85,468.78 
                    219.4,481.42 208.42,471.81 192.69,483.71 199.26,493.61 197.28,502.22 206.65,507.78 197.74,528.45 192.51,542.18 210.44,559.41 
                    199.25,576.88 202.54,593.35 210.83,602.94 211.21,602.71 219.42,591.75 219.42,584.9 225.59,582.16 226.27,532.16 231.07,525.32 
                    235.86,545.18 233.12,591.07 236.55,602.03 245.56,602.66 251.16,601.52 "/>
                <polygon onClick={handleMap} id="m21" className="st0" points="200.69,594.26 197.13,576.49 207.87,559.71 190.17,542.7 195.89,527.7 204.12,508.6 196.05,503.82 
                    180.53,509.9 166.49,508.56 158.71,519.88 120.41,492.03 101.22,489.63 100.35,492.03 88.6,502.03 80.38,479.42 77.09,477.96 
                    75.94,477.34 74.72,476.91 68.05,473.95 56.41,495.86 56.41,521.89 69.42,526 65.32,539.7 76.96,553.4 99.56,557.51 101.62,565.73 
                    112.58,556.82 120.79,563.67 125.59,579.42 122.85,599.97 125.59,609.56 142.71,602.71 146.82,610.93 135.86,615.04 139.29,626.68 
                    129.7,627.37 125.59,641.07 144.77,636.96 145.45,645.86 141.34,652.71 141.34,665.73 157.1,650.66 171.48,654.77 175.59,636.27 
                    175.59,617.78 189.97,610.25 198.88,610.25 209.1,604 "/>
                <polyline onClick={handleMap} id="m22" className="st0" points="117.81,455.78 95.45,466.41 92.71,451.34 105.94,436.31 120.96,447.58 117.81,455.78 "/>
            </svg>
        </div>
    )
}

export default Map_korea;