import React, {useState} from 'react';
import '../styles.css';

function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [destination, setDestination] = useState('India');
    const [travelers, setTravelers] = useState(0);
    const [budgetPerPerson, setBudgetPerPerson] = useState(0);

    const handleSubmit= () => {
        const formValues = {
            name,
            email,
            destination,
            travelers,
            budgetPerPerson
        }
        console.log(formValues);
    }

    return (
        <>
        <h1>Travelopia form</h1>
        <form className = "TravelForm">
            <label htmlFor = "name">Name: </label>
            <input 
                id = "name"
                type = "text" 
                value = {name}
                onChange={(event) => setName(event.target.value)}/><br/>

            <label htmlFor ="email">Email: </label>
            <input
                id = "email"
                type = "email" 
                value = {email} 
                onChange={(event) => setEmail(event.target.value)}/><br/>

            <label htmlFor = "destination">Where do you want to go? </label>
            <select 
                id= "destination" 
                name = "destination"
                value = {destination} 
                onChange={(event) => setDestination(event.target.value)}
                >
                <option value = "India">India</option>
                <option value = "Africa">Africa</option>
                <option value = "Europe">Europe</option>
            </select>
            <br/>

            <label htmlFor = "travelers">Number of travelers: </label>
            <input 
                id = "travelers" 
                type = "number" 
                value = {travelers} 
                onChange={(event) => setTravelers(event.target.value)}/><br/>

            <label htmlFor = "budget">Budget per person (in dollars): </label>
            <input 
                id = "budget" 
                type = "number" 
                value = {budgetPerPerson} 
                onChange={(event) => setBudgetPerPerson(event.target.value)}/><br/>

            <button 
                className = "Submit"
                type = "submit"
                onClick={handleSubmit}>Submit</button>
        </form>
        </>
    )
}

export default Form