// Code Keypad Component Here

function Keypad (){
        function Event(){
            console.log('Entering password...');
        }


    return (
        <div>
            <input type="password" onChange={Event}/>

        </div>
    )
}

export default Keypad;