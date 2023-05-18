function validateFormValues(formValues) {
    let allValidInputs = true;
    Object.values(formValues).forEach(value => {
        if(typeof value === 'string' && value.trim().length === 0) {
            allValidInputs = false;
        } 
        if (typeof value === 'number' && parseInt(value) === 0) {
            allValidInputs = false;
        }
    });
    return allValidInputs;
}

export default validateFormValues;