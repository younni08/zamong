import React, { useState } from "react"
import Qrcode from "qrcode.react";

const Qrmaster = () => {
    const [input,setInput] = useState("")

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className="qrmaster">
            <div>
                <span>Qrcode master</span>
                <div>
                    <div>
                        <Qrcode value={"https://"+input}
                            size={200}
                            bgColor={"#FFFEF8"}
                        />
                    </div>
                    <div>
                        <div><input type="text" onChange={handleInput}/></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Qrmaster