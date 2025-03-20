// function validateEmail(email) {
//     let emailRegex = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
    
//     if (emailRegex.test(email)) {
//         console.log(`✅ Valid Email: ${email}`);
//     } else {
//         console.error(`❌ Invalid Email: ${email}`);
//     }
// }

// // ✅ **Test Cases**
// validateEmail("abc@bridgelabz.co");            
// validateEmail("abc.xyz@bridgelabz.co");        
// validateEmail("abc@bridgelabz.co.in");         
// validateEmail("abc.xyz@bridgelabz.co.in");     

// validateEmail("xyz@bridgelabz.co");          
// validateEmail("abc@xyz.co");                  
// validateEmail("abc@bridgelabz.in");    
//UC2        
// function validateEmail(email) {
//     let emailRegex = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
    
//     if (emailRegex.test(email)) {
//         console.log(`✅ Valid Email: ${email}`);
//     } else {
//         console.error(`❌ Invalid Email: ${email}`);
//     }
// }

// // ✅ **Test Cases**
// validateEmail("abc@bridgelabz.co");           
// validateEmail("abc.xyz@bridgelabz.co");        
// validateEmail("abc@bridgelabz.co.in");         
// validateEmail("abc.xyz@bridgelabz.co.in");    

// validateEmail("xyz@bridgelabz.co");            
// validateEmail("abc@xyz.co");                   
// validateEmail("abc@bridgelabz.in");            
// validateEmail("abc@bridgelabzcom");            
// validateEmail("abc.bridgelabz.co");   

//UC3
// function validateEmail(email) {
//     let emailRegex = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
    
//     if (emailRegex.test(email)) {
//         console.log(`✅ Valid Email: ${email}`);
//     } else {
//         console.error(`❌ Invalid Email: ${email}`);
//     }
// }

// // ✅ **Test Cases**
// validateEmail("abc@bridgelabz.co");          
// validateEmail("abc.xyz@bridgelabz.co");        
// validateEmail("abc@bridgelabz.co.in");         
// validateEmail("abc.xyz@bridgelabz.co.in");     

// // ❌ **Invalid Cases**
// validateEmail("abc@bridgelabz");               
// validateEmail("abc@bridgelabzcom");            
// validateEmail("abc@xyz.co");                   
// validateEmail("xyz@bridgelabz.co");            
// validateEmail("abc@bridgelabz.in");            
//UC4
// function validateEmail(email) {
//     let emailRegex = /^abc([._+,-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
    
//     if (emailRegex.test(email)) {
//         console.log(`✅ Valid Email: ${email}`);
//     } else {
//         console.error(`❌ Invalid Email: ${email}`);
//     }
// }

// // ✅ **Valid Test Cases**
// validateEmail("abc@bridgelabz.co");              
// validateEmail("abc.xyz@bridgelabz.co");          
// validateEmail("abc-xyz@bridgelabz.co.in");       
// validateEmail("abc_xyz@bridgelabz.co.uk");      
// validateEmail("abc+xyz@bridgelabz.co.us");      
// validateEmail("abc,xyz@bridgelabz.co.au");       

// // ❌ **Invalid Test Cases**
// validateEmail("abc#xyz@bridgelabz.co");         
// validateEmail("abc@bridgelabz");                 
// validateEmail("abc@bridgelabzcom");              
// validateEmail("abc@xyz.co");                     
// validateEmail("xyz@bridgelabz.co");             
// validateEmail("abc@@bridgelabz.co");             
//UC5
function validateEmail(email) {
    let emailRegex = /^abc([._+,-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;
    
    if (emailRegex.test(email)) {
        console.log(`✅ Valid Email: ${email}`);
    } else {
        console.log(`❌ Invalid Email: ${email}`);
    }
}

// ✅ **Valid Test Cases**
validateEmail("abc@bridgelabz.co");              
validateEmail("abc.xyz@bridgelabz.co");         
validateEmail("abc-xyz@bridgelabz.co.in");       
validateEmail("abc_xyz@bridgelabz.co.uk");       
validateEmail("abc+xyz@bridgelabz.co.us");       
validateEmail("abc,xyz@bridgelabz.co.au");       

// ❌ **Invalid Test Cases**
validateEmail("abc#xyz@bridgelabz.co");          
validateEmail("abc@bridgelabz");                 
validateEmail("abc@bridgelabz.com");             
validateEmail("abc@bridgelabz.co.ind");          
validateEmail("abc@xyz.co");                     
validateEmail("xyz@bridgelabz.co");             
validateEmail("abc@@bridgelabz.co");             
