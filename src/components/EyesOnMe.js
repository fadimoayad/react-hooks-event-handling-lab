import React from "react";
function EyesOnMe (){
    function focus(){
        console.log('Good!');}
    function Blur(){
        console.log('Hey! Eyes on me!') }

    return (
        <div>
            <button onFocus={focus} onBlur={Blur}>Eyes on me</button>
        </div>
    )
}
export default EyesOnMe;