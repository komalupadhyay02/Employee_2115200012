// function validatePincode(pincode) {
//     let pinRegex = /^[1-9][0-9]{5}$/;
//     return pinRegex.test(pincode);
// }

// // ✅ Test Cases
// console.log(validatePincode("400088")); // true
// console.log(validatePincode("000088")); // false (cannot start with 0)
// console.log(validatePincode("12345"));  // false (only 5 digits)
// console.log(validatePincode("4000888")); // false (7 digits)
// console.log(validatePincode("40A088"));  // false (contains letter)
//UC2
function validatePincode(pincode) {
    let pinRegex = /^[1-9][0-9]{5}$/;  // Ensures 6-digit PIN without letters/special chars
    return pinRegex.test(pincode);
}

// ✅ Test Cases
console.log(validatePincode("400088"));  // true (Valid PIN)
console.log(validatePincode("A400088")); // false (Starts with a letter)
console.log(validatePincode("@400088")); // false (Starts with special character)
console.log(validatePincode("40008A"));  // false (Ends with a letter)
console.log(validatePincode("40-088"));  // false (Contains special character)
console.log(validatePincode("400088 ")); // false (Extra space)
