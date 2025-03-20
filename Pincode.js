function validatePincode(pincode) {
    let pinRegex = /^[1-9][0-9]{5}$/;
    return pinRegex.test(pincode);
}

// ✅ Test Cases
console.log(validatePincode("400088")); // true
console.log(validatePincode("000088")); // false (cannot start with 0)
console.log(validatePincode("12345"));  // false (only 5 digits)
console.log(validatePincode("4000888")); // false (7 digits)
console.log(validatePincode("40A088"));  // false (contains letter)
