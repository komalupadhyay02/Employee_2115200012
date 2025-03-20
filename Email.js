function validateEmail(email) {
    let emailRegex = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
    
    if (emailRegex.test(email)) {
        console.log(`✅ Valid Email: ${email}`);
    } else {
        console.error(`❌ Invalid Email: ${email}`);
    }
}

// ✅ **Test Cases**
validateEmail("abc@bridgelabz.co");            
validateEmail("abc.xyz@bridgelabz.co");        
validateEmail("abc@bridgelabz.co.in");         
validateEmail("abc.xyz@bridgelabz.co.in");     

validateEmail("xyz@bridgelabz.co");          
validateEmail("abc@xyz.co");                  
validateEmail("abc@bridgelabz.in");            
validateEmail("abc@bridgelabzcom");            
