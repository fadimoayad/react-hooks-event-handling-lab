import React from "react";

function EyesOnMe (){
    function handleFocesed(){
        console.log('Good!');
    }

    function handleBlur(){
        console.log('Hey! Eyes on me!')
    }

    return (
        <div>
            <button onFocus={handleFocesed} onBlur={handleBlur}>Eyes on me</button>
        </div>
    )
}
export default EyesOnMe;