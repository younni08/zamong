import React,{useState,} from "react";
import { Redirect } from "react-router";

const Map_korea = () => {
    const [goto,setGoto] = useState("")
    const [redirect,setRedirect] = useState(false)
    const handleMap = (e) => {
        let getid = e.currentTarget.getAttribute("id")
        if(getid==="b2_1"||getid==="b2_2") getid = "b2"
        setGoto(getid)
        setRedirect(true)
    }

    return (
        <div className="map_korea_state">
            {
                redirect?<Redirect to={"/shoplist?m="+goto} />:""
            }

            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 595.28 841.89" xmlSpace="preserve">
                <polygon onClick={handleMap} id="b1" className="st0" points="98.19,319.15 98.19,332.16 107.1,344.49 102.64,367.78 100.64,369.94 152.99,406.14 155.73,417.75 
                    140.66,420.94 122.16,413.67 117.37,401.34 98.19,390.38 91.6,395.81 88.6,408.67 64.63,417.75 59.15,406.14 49.56,381.48 
                    49.56,363.67 44.08,347.23 46.82,338.33 44.08,323.95 57.78,323.95 68.85,333.44 85.23,331.22 "/>
                <polygon onClick={handleMap} id="b2" className="st0" points="156.93,703.11 175.68,700.56 190.87,674.84 210.81,680.94 218.53,675.03 229.84,675.03 235.23,663.32 
                    235.23,650.12 245.1,641.4 243.21,630.46 228.85,624.61 241.54,609.25 261.06,609.25 261.06,619.17 267.12,625.57 274.43,640.5 
                    282.74,637.09 285.4,626.26 296.64,621.23 296.64,602.88 288.81,605.32 274.95,602.55 266.72,605.46 259.6,597.7 256.94,584.08 
                    253.32,584.41 246.75,598.37 230.39,595.11 220.76,595.11 207.97,581.83 201.49,573.75 220,566.87 218.09,559.01 205.94,559.01 
                    197.75,569.48 197.51,569.58 177.01,578.16 170.67,572.34 159.15,570.52 146.14,590.38 119.42,576.68 101.62,589.7 105.73,609.56 
                    98.19,632.85 106.41,640.38 112.58,656.14 135.86,636.96 155.04,630.79 152.3,641.75 141.34,644.49 136.55,650.66 144.08,657.51 
                    144.77,682.16 132.44,685.59 146.14,704.08 153.67,697.23 "/>
                <polygon onClick={handleMap} id="b2_1" className="st0" points="59.84,565.04 63.26,580.11 55.73,596.55 63.26,610.25 72.16,596.55 85.18,603.4 89.97,587.64 
                    83.81,572.58 66,565.04 "/>
                <polygon onClick={handleMap} id="b2_2" className="st0" points="33.81,565.04 22.85,568.47 19.85,587.64 26.83,587.64 31.07,597.23 37.92,591.07 41.34,581.14 
                    47.51,571.89 "/>
                <polygon onClick={handleMap} id="b3" className="st0" points="196.73,338.87 196.73,345.47 183.9,348.04 176.73,342.22 171.48,346.16 159.56,344.67 156,340.14 
                    152.69,348.27 147.3,359.53 126.61,359.53 109.43,371.08 125.59,380.37 167.37,412.3 179.01,426 194.77,417.75 199.56,393.27 
                    217.37,381.48 221.85,393.55 229.01,396.55 231.75,378.74 234.71,374.04 234.06,374.8 225.36,367.33 212.93,364.85 212.93,377.12 
                    196.12,377.12 196.12,370.2 204.68,358.09 200.73,352.8 201.24,343.63 206.68,340.01 205.96,335.52 "/>
                <polygon onClick={handleMap} id="b4" className="st0" points="196.44,488.87 194.08,475.32 182.28,462.57 167.57,470.37 164.49,473.97 167.04,480.35 172.2,498.31 
                    172.2,505.91 182.91,509.35 182.06,504.25 190.42,504.25 "/>
                <polygon onClick={handleMap} id="b5" className="st0" points="162.18,473.59 166.46,468.59 169.98,448.64 161.89,436.96 139.97,436.96 130.22,459.4 141.34,475.32 
                    142.79,478.93 164.62,479.67 "/>
                <polygon onClick={handleMap} id="b6" className="st0" points="275.22,541.77 285.26,543 285.26,533.84 296.65,526.9 296.88,517.02 300.89,502.16 309.13,499.41 
                    310.87,484.65 305.41,475.84 297.49,477.66 291.54,470.79 287.23,473 275.5,477.34 271.48,485.59 256.44,493.11 256.44,503.14 
                    247.43,524.29 "/>
                <polygon onClick={handleMap} id="b7" className="st0" points="280.86,343.44 283.85,333.47 293.63,333.47 283,327.81 274.76,320.39 258.36,330.46 242.04,325.8 
                    233.76,328.7 233.76,340.07 243.01,349.33 243.01,363.31 263.26,364.36 268.05,364.89 280.82,348.93 "/>
                <polygon onClick={handleMap} id="b8" className="st0" points="331.68,467.29 329.19,458.8 337.05,456.05 342.18,458.15 345.8,450.52 328.31,438.86 314.7,418.89 
                    301.5,422.1 309.15,434.22 297.85,436.96 291.93,456.29 293.4,469.84 293.37,469.85 298.21,475.44 304.88,473.91 304.88,465.95 
                    329.75,473.46 "/>
                <polygon onClick={handleMap} id="b9" className="st0" points="287.69,398.6 293.47,389.93 270.81,387.99 276.27,400.66 280.38,410.93 272.04,420.71 273.53,432.16 
                    299.93,421.61 299.93,413.13 290.72,412.22 "/>
                <polygon onClick={handleMap} id="b10" className="st0" points="241.88,503.8 254.44,502.06 254.44,491.02 251.62,478.05 244.77,481.48 234.49,473.95 218.02,490.42 
                    218.02,502.06 226.94,510.98 "/>
                <polygon onClick={handleMap} id="b11" className="st0" points="196.49,567.83 204.36,557.79 202.17,549.47 196.42,534.02 189.64,534.02 189.64,528.73 187.71,526.26 
                    183.77,535.74 170.53,529.85 151.38,529.85 151.38,541.89 135.94,541.89 124.32,552.06 151.62,560.93 167.37,555.45 171.57,570.45 
                    177.42,575.82 "/>
                <polygon onClick={handleMap} id="b12" className="st0" points="387.53,620.2 364.06,598.89 367.72,574.59 363.03,573.87 356.44,578.11 343.65,572.99 346.07,557.47 
                    346.07,539.41 324.3,535.49 314.14,546.72 314.14,539.88 309.63,539.13 285.26,545.42 285.26,545.01 274.53,543.7 246.7,526.2 
                    243.17,536 247.06,539.89 250.68,551.21 256.24,553.06 258.95,561.64 269.04,561.64 260.09,573.22 258.76,582.97 261.45,596.76 
                    267.3,603.13 274.8,600.48 288.7,603.26 298.64,600.16 298.64,622.53 287.11,627.68 283.14,643.86 276.2,647.33 284.79,665.37 
                    310.26,668.01 314.35,654.84 333.68,649.78 336.15,631.99 343.68,631.99 343.68,643.19 352.92,644.09 357.24,657.5 365.4,649.35 
                    369.46,657.48 392.9,658.86 396.58,663 402.54,663 402.55,653.68 404.78,636.73 396.06,631.22 396.06,618.07 "/>
                <polygon onClick={handleMap} id="b13" className="st0" points="413.07,184.27 403.98,193.35 401.27,204.65 398.35,213.42 388.13,219.46 383.82,229.38 388.13,238.01 
                    372.7,250.45 366.38,247.93 361.78,276.92 348.3,273.66 346.32,282.75 352.76,288.69 343.87,296.09 341.67,320.26 358.3,323.85 
                    376.22,348.37 385.83,382.23 392.05,383.79 404.06,368.85 412.28,380.73 422.59,399.47 422.59,417.12 429.02,420.11 442.68,414.46 
                    455.99,414.46 459.37,401.36 453.23,394.02 453.72,392.54 449.56,384.22 455.73,378.05 458.47,352.03 457.1,340.38 447.51,344.49 
                    439.29,347.92 435.49,344.01 452.3,328.74 441.34,315.04 448.19,304.08 444.77,290.38 460.52,280.79 461.89,273.26 474.9,273.26 
                    480.38,248.6 484.49,241.75 474.22,230.11 452.99,221.89 446.82,208.19 433.12,208.19 417.37,202.71 "/>
                <polygon onClick={handleMap} id="b14" className="st0" points="196.35,532.02 198.63,523.41 210.75,521.32 218.48,526.26 225.52,512.39 216.02,502.89 216.02,492.42 
                    216,492.44 209.15,483.53 198.01,490.34 191.79,506.25 184.42,506.25 185.05,510.04 185.16,510.07 185.16,519.72 191.64,528.05 
                    191.64,532.02 "/>
                <polygon onClick={handleMap} id="b15" className="st0" points="242.25,247.71 238.5,251.46 240.47,258.95 251.94,258.95 257.03,271.45 271.86,271.45 274.05,277.16 
                    287.62,271.65 292.1,264.39 289.74,252.83 279.81,249.22 273.94,241.39 270.34,222.87 263.01,221.57 257.9,220 253.82,231.33 
                    246.13,231.33 248.19,238.34 242.43,247.77 "/>
                <polygon onClick={handleMap} id="b16" className="st0" points="202.77,352.19 207.15,358.06 198.12,370.84 198.12,375.12 210.93,375.12 210.93,362.41 226.27,365.47 
                    235.25,373.19 237.23,370.05 241.01,364.38 241.01,350.15 231.76,340.9 231.76,327.28 241.98,323.7 258.06,328.29 274.1,318.46 
                    280.35,305.09 280.35,293.07 272.07,277.96 272.2,277.91 270.48,273.45 255.69,273.45 250.6,260.95 238.93,260.95 236.27,250.86 
                    240.23,246.9 222.19,239.68 222.19,248.46 215.63,248.46 212.43,271.79 206.38,293.99 201.06,287.69 195.81,298.6 195.81,304.22 
                    197.91,310.54 210.34,314.84 206.93,328.95 208.85,340.96 203.18,344.74 "/>
                <polygon onClick={handleMap} id="b17" className="st0" points="285.18,727.37 285.26,727.36 285.26,716.06 296.14,712.08 291.37,704.41 293.89,696.01 272.72,696.01 
                    284.77,681.79 270.69,672.25 281.1,672.25 283.05,666.38 273.55,646.42 281.42,642.48 282.15,639.5 274.54,642.62 269.31,648.32 
                    255.15,648.81 246.27,643.03 237.23,651.03 237.23,663.75 231.13,677.03 219.21,677.03 211.2,683.15 191.8,677.22 176.91,702.41 
                    157.1,705.1 157.1,713.67 174.22,719.84 174.22,728.05 178.33,735.59 194.77,743.12 192.71,752.03 200.93,762.3 210.52,749.29 
                    231.75,737.64 244.77,744.49 261.89,740.38 278.33,739.7 275.85,730.74 277.9,723.21 "/>
                <polygon onClick={handleMap} id="b18" className="st0" points="431.9,683.43 439.52,670.17 437.75,656.93 432.55,648.27 417.61,646.4 414.4,637.23 406.73,637.23 
                    404.54,653.88 404.54,665 395.68,665 391.96,660.8 368.19,659.41 364.85,652.73 356.34,661.23 351.42,645.95 341.68,645 
                    341.68,633.99 337.89,633.99 335.48,651.37 315.93,656.49 311.69,670.17 284.83,667.39 282.54,674.25 277.21,674.25 287.74,681.38 
                    277.03,694.01 296.58,694.01 293.55,704.12 299.14,713.11 287.26,717.46 287.26,727.03 297.64,725.32 317.37,738.33 317.37,745.18 
                    329.7,751.34 338.6,749.97 347.51,762.3 359.15,753.4 352.3,743.12 379.7,736.96 382.44,728.05 389.29,728.05 397.51,724.63 
                    399.56,718.47 393.4,710.25 405.04,710.25 417.37,701.34 417.37,687.64 429.7,683.53 "/>
                <polygon onClick={handleMap} id="b19" className="st0" points="242.48,611.25 232.12,623.78 244.99,629.03 247.09,641.18 255.72,646.79 268.4,646.35 272.75,641.61 
                    265.39,626.59 259.06,619.97 259.06,611.25 "/>
                <polygon onClick={handleMap} id="b20" className="st0" points="542.03,531.49 525.6,523.88 512.33,526.43 516.96,508.38 506.05,510.48 496.55,503.69 487.84,509.66 
                    472.81,501.67 447.01,506.83 437.88,491.32 424.91,498.48 404.67,491.11 393.66,500.42 401.39,516.75 410.4,516.75 412.71,530.17 
                    426.79,530.17 433.32,541.37 444.35,543.2 454.75,556.57 445.8,570.23 450,587.96 444.47,593.47 448.56,607.4 443.45,620.36 
                    464.56,619.53 464.56,611.83 472.11,613.57 491.6,635.59 507.78,640.38 521.48,621.21 537.43,597.23 534.49,583.53 540.66,573.95 
                    537.92,557.51 544.77,557.51 "/>
                <polygon onClick={handleMap} id="b21" className="st0" points="471.04,615.38 466.56,614.34 466.56,621.45 440.46,622.48 446.45,607.3 442.21,592.9 447.79,587.33 
                    443.66,569.86 452.29,556.67 443.25,545.05 432.07,543.18 425.64,532.17 412.27,532.17 394.83,548.68 394.66,548.75 377,556 
                    369.8,574.01 366.19,598.13 388.08,618 398.06,615.51 398.06,630.12 406.14,635.23 415.82,635.23 419.09,644.57 433.77,646.4 
                    439.68,656.25 441.61,670.78 434.29,683.32 444.08,682.85 464.63,693.12 461.89,680.79 464.63,673.95 476.27,673.95 478.33,664.36 
                    488.6,661.62 489.26,635.96 "/>
                <polygon onClick={handleMap} id="b22" className="st0" points="575.85,443.81 568.45,430.15 559.84,425.4 550.25,414.36 531.75,411.56 512.58,414.36 501.62,399.97 
                    492.71,396.55 484.49,386.27 476.27,380.11 466.68,391.07 455.49,393.56 455.48,393.59 461.56,400.87 457.54,416.46 443.08,416.46 
                    428.97,422.3 420.59,418.39 420.59,399.98 410.55,381.74 403.94,372.19 392.81,386.04 385.43,384.2 374.42,399.17 372.11,421.31 
                    363.81,432.91 363.81,448.49 372.96,443.5 385.92,449.48 390.76,477.09 380.94,482.44 392.61,498.7 404.26,488.84 424.74,496.29 
                    438.62,488.63 448.01,504.59 473.12,499.57 487.71,507.32 496.58,501.25 506.52,508.35 519.68,505.82 515.05,523.87 525.85,521.79 
                    544.13,530.25 550.25,526.68 550.93,506.14 559.15,502.71 554.36,473.26 544.08,462.99 561.89,443.81 "/>
                <polygon onClick={handleMap} id="b23" className="st0" points="116,347.92 108.98,368.97 126,357.53 146.04,357.53 150.86,347.46 155.45,336.2 160.63,342.78 
                    170.93,344.07 176.78,339.68 184.43,345.89 194.73,343.83 194.73,337.47 205.57,333.53 205.69,333.86 204.9,328.87 207.97,316.14 
                    196.33,312.11 193.81,304.55 193.81,298.14 200.59,284.05 205.45,289.79 210.49,271.32 213.89,246.46 220.19,246.46 220.19,237.94 
                    228.93,222.39 234.2,222.39 240.41,213.73 222.85,207.87 208.28,222.44 194.48,210.54 185.13,211.48 178.41,203.72 181.12,195.14 
                    174,190.71 167.37,200.66 126.27,234.22 111.89,219.84 107.1,233.53 108.47,306.82 107.1,327.37 "/>
                <polygon onClick={handleMap} id="b24" className="st0" points="183.5,194.26 180.66,203.26 185.97,209.39 195.13,208.47 208.18,219.71 222.31,205.58 243.62,212.69 
                    235.23,224.39 230.1,224.39 222.62,237.7 241.6,245.29 246.02,238.06 243.45,229.33 252.42,229.33 256.67,217.53 263.54,219.64 
                    270.17,220.81 270.17,214.2 281.43,212.51 281.43,218.63 292.79,213.7 290.01,209.72 291.9,200.73 289.37,190.6 279.43,190.6 
                    279.43,178.98 291.61,167.91 291.61,178.29 305.37,176.63 311.2,169.54 307.89,162.05 307.89,153.89 301.56,146.86 304.98,130.27 
                    309.84,126.38 313.95,116.41 305.04,112.3 297.85,90.38 291.34,85.59 285.86,93.12 279.01,87.64 282.44,73.21 273.53,73.21 
                    225.85,112.56 222.85,126 216.68,132.16 222.85,142.44 216,142.44 204.36,142.44 201.62,152.03 185.18,163.67 174.84,188.88 "/>
                <polygon onClick={handleMap} id="b25" className="st0" points="218.04,557.01 220.37,544.46 228.44,544.97 236.75,541.91 241.12,535.79 244.97,525.11 244.93,525.08 
                    253.82,504.17 242.31,505.75 227.48,512.94 219.83,528.01 217.92,539 212.56,550.22 204.43,550.22 206.22,557.01 "/>
                <polygon onClick={handleMap} id="b26" className="st0" points="204.78,574.66 209.47,580.51 221.61,593.11 230.68,593.13 245.61,596.1 252,582.52 256.87,582.08 
                    258.18,572.42 264.97,563.64 257.48,563.64 254.64,554.63 249.08,552.78 245.3,540.96 242.14,537.8 238.02,543.57 228.74,546.99 
                    222.01,546.57 219.9,557.98 222.37,568.12 "/>
                <polygon onClick={handleMap} id="b27" className="st0" points="216.06,538.27 217.78,528.18 210.33,523.42 200.24,525.17 198.17,532.97 203.83,548.22 211.3,548.22 
                    "/>
                <polygon onClick={handleMap} id="b28" className="st0" points="310.08,128.75 306.79,131.38 303.72,146.27 309.89,153.12 309.89,161.62 313.53,169.86 306.4,178.52 
                    289.61,180.55 289.61,172.43 281.43,179.86 281.43,188.6 290.93,188.6 293.95,200.69 292.14,209.29 295.83,214.56 279.43,221.67 
                    279.43,214.83 272.17,215.92 272.17,221.91 275.81,240.56 281.05,247.54 291.48,251.34 294.21,264.77 288.98,273.25 274.9,278.97 
                    282.35,292.56 282.35,305.53 276.09,318.9 284.25,326.24 297.53,333.28 303.75,328.32 321.88,331.11 339.64,320.45 341.95,295.09 
                    349.72,288.61 344.12,283.44 346.78,271.24 360.14,274.46 364.8,245.14 372.36,248.16 385.62,237.46 381.61,229.44 386.55,218.07 
                    396.69,212.07 399.35,204.1 402.17,192.34 412.53,181.98 406.41,156.14 400.93,162.3 392.71,149.29 381.75,148.6 375.59,156.14 
                    363.26,161.62 357.78,151.34 348.88,154.08 351.66,144.92 351.62,131.79 348.19,119.15 340.66,115.04 340.66,121.89 329.7,135.59 
                    320.11,143.12 320.11,136.27 "/>
                <polygon onClick={handleMap} id="b29" className="st0" points="375.46,554.47 393.73,546.97 410.79,530.81 408.71,518.75 400.13,518.75 391.57,500.67 378,481.77 
                    388.54,476.02 384.13,450.86 373.03,445.74 363.45,450.96 356.95,458.46 347.47,451.68 343.17,460.71 336.99,458.18 331.64,460.06 
                    333.77,467.31 331.07,475.95 306.88,468.64 306.88,474.42 312.93,484.19 310.97,500.91 302.54,503.71 298.85,517.42 298.63,528.03 
                    287.26,534.97 287.26,542.83 309.54,537.09 316.14,538.19 316.14,541.53 323.56,533.32 348.07,537.74 348.06,557.7 345.87,571.73 
                    356.22,575.87 362.59,571.78 368.19,572.64 "/>
                <polygon onClick={handleMap} id="b30" className="st0" points="135.19,539.89 149.38,539.89 149.38,527.85 170.95,527.85 182.71,533.08 186.3,524.44 183.16,520.4 
                    183.16,511.53 170.2,507.37 170.2,498.45 165.35,481.69 143.6,480.96 145.45,485.59 140.66,491.75 138.6,509.56 117.27,528.42 
                    111.89,539.01 122.9,550.64 "/>
                <polygon onClick={handleMap} id="b" className="st0" points="372.49,398.43 383.93,382.87 374.39,349.26 357.14,325.65 340.77,322.11 322.29,333.2 304.31,330.43 
                    297.99,335.47 285.34,335.47 282.82,343.87 282.82,349.63 269.46,366.32 270.05,385.92 297.01,388.23 289.83,399 292.35,410.37 
                    301.93,411.32 301.93,419.93 315.58,416.62 329.74,437.42 347.63,449.34 356.63,455.77 361.81,449.8 361.81,432.26 370.17,420.58 
                    "/>
                </svg>
        </div>
    )
}

export default Map_korea;