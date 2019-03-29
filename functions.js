/* Variables */
inputs = document.querySelectorAll('input');
emails = getSpecifiedInput(inputs, ['text','email'], ['email']);
phoneNumbers = getSpecifiedInput(inputs, ['text','tel'], ['telephone','cellphone','phone']);
firstName = getSpecifiedInput(inputs, ['text'], ['firstname', 'first name', 'first', 'fname', 'first_name']);
lastName = getSpecifiedInput(inputs, ['text'], ['lastname', 'last name', 'lname', 'last_name']);
city = getSpecifiedInput(inputs, ['text'], ['city', 'location']);


/*
Functions:
inputs: should be a list of inputs from the webpage
types: list of input types you want to match
names: list of input names you want to match
*/
function getSpecifiedInput(inputs, types, names)
{ 
    matchedInputs = [];
    inputs.forEach(helper);

    function helper(input){

       if (types.includes(input.type)) {
            if(names.includes((input.id).toLowerCase()) || names.includes(input.name.toLowerCase())){
                matchedInputs.push(input);
            }
        }
    }
    return matchedInputs;
}


// Target any email input fields
function getEmails(input) 
{ 
    let emails = [];
    if (input.type == 'email')
    {
    	emails.push(input);
    }

    // If the input is a type text, check for email labels
    else if (['text'].includes(input.type)) {
    	if (input.id.includes('email') || input.name.includes('email')){
			emails.push(input);
		}
    }
}

inputs.forEach(getEmails);
