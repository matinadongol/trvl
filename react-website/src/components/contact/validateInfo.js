export default function validateInfo(values) {
    let errors = {};

    if (!values.name.trim()){
        errors.name = 'Name is Required!';
    }

    if (!values.email){
        errors.email = 'Email Required';
    } else if  (!/\S+@\S+\.\S+/.test(values.email))
    {
        errors.email = 'Email address is invalid';
    }

    if (!values.subject){
        errors.subject = 'Subject is required';
    } 

    if (!values.message){
        errors.message = 'Message is required';
    } 

    return errors;
}