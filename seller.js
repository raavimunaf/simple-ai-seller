messages = document.getElementById('messages')
input = document.getElementById('input')
sellerblock = document.getElementById('sellerblock')
buyerblock = document.getElementById('buyerblock')

msgno = 0

products = {
"mobile":{price:12000},
"tomato":{price:30},
"rice":{price:60},
"book":{price:500},
"laptop":{price:25000},
"chair":{price:350}
}


function taketheinput(event) {
	// here is the js code for input processing
	//if they hit the enter key 
	if(event.key === "Enter"){
// create a buyer message block
		messages.innerHTML += buyerblock.outerHTML
		// and change its id
		msgno += 1
		messages.lastChild.id = msgno
		//now changing its text
		messages.lastChild.childNodes[1].textContent = input.value
		// finally process the input 
		processinput(input.value.toLowerCase())
		input.value = ""

	}
}

function processinput(inputval){

	if(inputval!=""){
		messages.innerHTML += sellerblock.outerHTML
		// and change its id
		msgno += 1
		messages.lastChild.id = msgno
		//now changing its text
		messages.lastChild.childNodes[1].textContent = reply(inputval)	
	}

}



function reply(inputval) {
	result = inputval.match(/(how)|(\w+)/g)

	if(result.includes("how")){
		return "fine"
	}
	if(result.includes("price")){
		return recentproduct.price
	}
	
	a="";
	result.forEach(function(product){
		if(products.hasOwnProperty(product)){
			a = "Yes we have " + product
			recentproduct = products[product]
		}
	})
	if(a){
		return a;
	}


	return "Sorry " + inputval + " is not available!"
	// if (inputval === "How are you?") {
	// 	return "I am fine"
	// }
}
