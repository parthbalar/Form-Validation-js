document.getElementById('myForm').addEventListener('submit', function(event) {
        let isValid = true;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
      
        const invalidUname = document.getElementById('invalidUname');
        if (username === '') {
            invalidUname.textContent = 'Username is required';
            isValid = false;
        } else {
            invalidUname.textContent = '';
        }
        
        const invalidPass = document.getElementById('invalidPass');
        if (password === '') {
            invalidPass.textContent = 'Password is required';
            isValid = false;
        } 
        else if ( password.length < 8) {
            invalidPass.textContent = 'Password must be at least 8 characters';
            isValid = false;
        }
        else if (!/\d/.test(password)) {
            invalidPass.textContent = 'Password must contain at least one number';
            isValid = false;
        }
        else {
            invalidPass.textContent = '';
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
