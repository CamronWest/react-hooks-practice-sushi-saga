import React from 'react';

function SushiWallet({ onAddMoney }) {
    const [value, setValue] = React.useState(0);
    
    function handleSubmit(event){
        event.prevent();
        onAddMoney(value);
        setValue(0);
    }

    function handleChange(event){
        const value = parseInt(event.targert.value, 10);
        setValue(value);
    }
    return (
        <form onSubmit={handleSubmit}>
        <input type="number" value={value} onchange={handleChange} />
        <button type="submit">Add $ to Budget</button>
        </form>
    )
}

export default SushiWallet;