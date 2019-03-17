<script> 
inputs = document.querySelectorAll('input');

console.log(inputs);

let emails = [];

function getEmails(input) 
{ 
    if(input.type == 'email')
    {
    	emails.push(input);
    }

    //if the input is a type text, check for email labels
    else if(['text'].includes(input.type)){
    	if(input.id.includes('email') || input.name.includes('email')){
			emails.push(input);
		}
    }

}


inputs.forEach(getEmails);


</script> 