import React from 'react';

export default function StateTextFields() {
    const [itemName, setName] = React.useState('');
    const handleChange = (event) => {
        setName(event.target.value);
    };

    console.log(itemName)

    return (
        <div class="input-field">
            <form>
                <label htmlFor="first_name">Search</label>
                <input onChange={handleChange} value={itemName} placeholder="item or listing name" id="first_name" type="text" class="validate"></input>
            </form>
        </div>
    );
}