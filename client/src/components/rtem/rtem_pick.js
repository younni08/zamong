import React from "react";

const RtemPick = () => {
    const rtemPickShift = (e) => {
        for(let i=0;i<document.getElementById("rtem_pick_wrapper").childNodes.length;i++){
            document.getElementById("rtem_pick_wrapper").childNodes[i].className = ""
        }
        if(e.currentTarget.getAttribute("id")==="rtem_pick_id1"){
            document.getElementById("rtem_pick_id1").className="on"
            document.getElementById("rtem_pick").style.transform = "translateX(0px)";
            
        }
        if(e.currentTarget.getAttribute("id")==="rtem_pick_id2"){
            document.getElementById("rtem_pick_id2").className="on"
            let width = window.innerWidth
            if(window.innerWidth>1200) width=500
            document.getElementById("rtem_pick").style.transform = `translateX(-${width}px)`;

        }
        if(e.currentTarget.getAttribute("id")==="rtem_pick_id3"){
            document.getElementById("rtem_pick_id3").className="on"
            let width = window.innerWidth
            if(window.innerWidth>1200) width=500
            document.getElementById("rtem_pick").style.transform = `translateX(-${Number(width*2)}px)`;

        }
        if(e.currentTarget.getAttribute("id")==="rtem_pick_id4"){
            document.getElementById("rtem_pick_id4").className="on"
            let width = window.innerWidth
            if(window.innerWidth>1200) width=500
            document.getElementById("rtem_pick").style.transform = `translateX(-${Number(width*3)}px)`;

        }
    }
    
    return (
        <div className="rtem_level2">
            <div>
                <div id="rtem_pick">
                    <div>
                        <img src="./pics/rtem-banner1.png" alt="banner1" />
                    </div>
                    <div>
                        <img src="./pics/rtem-banner2.png" alt="banner2" />
                    </div>
                    <div>
                        <img src="./pics/rtem-banner1.png" alt="banner1" />
                    </div>
                    <div>
                        <img src="./pics/rtem-banner2.png" alt="banner2" />
                    </div>
                </div>
            </div>
            <div id="rtem_pick_wrapper">
                <span onClick={rtemPickShift} id="rtem_pick_id1" className="on"></span>
                <span onClick={rtemPickShift} id="rtem_pick_id2"></span>
                <span onClick={rtemPickShift} id="rtem_pick_id3"></span>
                <span onClick={rtemPickShift} id="rtem_pick_id4"></span>
            </div>
        </div>
    )
}

export default RtemPick