function validateForm(event){
    event.preventDefault(); //sprecava submit forme ako sva polja nisu popunjena

    let fnameInput = document.getElementById('fname');
    let fnameError = document.getElementById('fnameError');
    let emailInput = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    let emailPattern = /^[\w]+[\w.+-]*@[\w-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
    let phoneInput = document.getElementById('phone');
    let phoneError = document.getElementById('phoneError');
    let phonePattern = /^\+(?:[0-9] ?){6,14}[0-9]$/;


    
    if(!fnameInput.checkValidity()){  //provjerava validity podataka prema zadanim parametrima
        fnameError.textContent = 'Please enter a valid name (letters and spaces only)!'
    } else {
        fnameError.textContent = '';
    };

    if(!emailPattern.test(emailInput.value)){  //robustnije rjesenje za provjeru emaila, kad sam stavio pattern u HTML user nije bio primoren staviti .com
        emailError.textContent = 'Enter the correct Email!'
    } else {
        emailError.textContent = '';
    };

    if(!phonePattern.test(phoneInput.value)){  
        phoneError.textContent = 'Enter the correct phone numer!'
    } else {
        phoneError.textContent = '';
    };

    if (fnameInput.checkValidity() && emailPattern.test(emailInput.value) && phonePattern.test(phoneInput.value)) { //provjerava dali su sve validacije tocne te onda submita formu
        document.getElementById('myForm').submit();
    } else {
        alert('Please check your form!');
    };
}
//skripta se pokrece na onsubmit unutar form taga