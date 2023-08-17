import {listCities} from "../data-files/list-cities";

function isValidAddress(address) {
    const addressPattern = /^[0-9A-Za-z\s.,-]+$/;
    return addressPattern.test(address);
}

function isValidDate(dateString) {
    return !isNaN(Date.parse(dateString));
}

function isValidCity(city) {
    return listCities.includes(city);
}

function isValidTelephone(telephone) {
    const telephonePattern = /^[0-9]{10}$/;
    return telephonePattern.test(telephone);
}

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function isValidSalary(salary) {
    const numericSalary = parseFloat(salary);
    return !isNaN(numericSalary) && numericSalary >= 0;
}

export const formValidationsUtils = (formData) => {
    const {address, hireDate, birthDate, location, email, telephone, salary} = formData;
    if (!isValidAddress(address)) return {id: 'address', result: false};
    if (!isValidDate(hireDate)) return {id: 'hireDate', result: false};
    if (!isValidDate(birthDate)) return {id: 'birthDate', result: false};
    if (!isValidCity(location)) return {id: 'location', result: false};
    if (!isValidEmail(email)) return {id: 'email', result: false}
    if (!isValidTelephone(telephone)) return {id: 'telephone', result: false};
    if (!isValidSalary(salary)) return {id: 'salary', result: false};
    return {result: true}
}
