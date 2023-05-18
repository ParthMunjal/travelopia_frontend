import React, {useEffect, useState} from 'react';
import '../styles.css';
import validateFormValues from '../helpers/formValidations';


function Form() {
    // form state variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [destination, setDestination] = useState('India');
    const [travelers, setTravelers] = useState(0);
    const [budget, setBudget] = useState(0);

    // invalid form inputs state variable
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const resetStateVariables = () => {
        setName('');
        setEmail('');
        setDestination('India');
        setTravelers(0);
        setBudget(0);
    }

    const handleSubmit= (event) => {
        event.preventDefault();

        const formValues = {
            name,
            email,
            destination,
            travelers,
            budget
        }

        if(validateFormValues(formValues) === false) {
            setShowError(true);
            setShowSuccess(false);
        } else {
            fetch('http://localhost:5000/submissions/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValues)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Submission Successful:', data);
                setShowError(false);
                setShowSuccess(true);
            })
            .catch(error => {
                console.error('Error submitting form:', error);
            })
            
        }
        resetStateVariables();  
    }

    useEffect(() => {
        setShowError(false);
        setShowSuccess(false);
    }, []);

    return (
        <>
        <h1>Travelopia Form</h1>
        {showSuccess && <div className='Success'>
            Successful Submission!
            </div>}
        {showError && <div className='Error'>
                Some input values are invalid or empty. 
            </div>}
        <form className = "TravelForm">
            <label htmlFor = "name">Name: </label>
            <input 
                id = "name"
                type = "text" 
                value = {name}
                onChange={(event) => setName(event.target.value)}
                required/><br/>

            <label htmlFor ="email">Email: </label>
            <input
                id = "email"
                type = "email" 
                value = {email} 
                onChange={(event) => setEmail(event.target.value)}
                required/><br/>

            <label htmlFor = "destination">Where do you want to go? </label>
            <select 
                id= "destination" 
                name = "destination"
                value = {destination} 
                onChange={(event) => setDestination(event.target.value)}
                required>
                <option value = "India">India</option>
                <option value = "Africa">Africa</option>
                <option value = "Europe">Europe</option>
            </select>
            <br/>

            <label htmlFor = "travelers">Number of travelers (should not be 0): </label>
            <input 
                id = "travelers" 
                type = "number" 
                value = {travelers} 
                onChange={(event) => setTravelers(event.target.value)}
                required/><br/>

            <label htmlFor = "budget">Budget per person (in dollars): </label>
            <input 
                id = "budget" 
                type = "number" 
                value = {budget} 
                onChange={(event) => setBudget(event.target.value)}
                required/><br/>

            <button 
                className = "Submit"
                type = "submit"
                onClick={handleSubmit}>Submit</button>
        </form>
        </>
    )
}

export default Form