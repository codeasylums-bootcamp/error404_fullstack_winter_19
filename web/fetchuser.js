const cit=document.getElementById('#city').value;
const ser=document.getElementById('#service').value;
const pri=document.getElementById('#price').value;
const button=document.getElementById('#button');



form.addEventListener("submit", e=>{
	e.preventDefault();
	const train_num = document.querySelector("#trnNumInput");
	let url = `https://localhost:3000/`
	getService(url);

});

const getService = async (url)=> {
	const response = await fetch(url);
	const responseJson = await response.json();
	console.log(responseJson);
  document.getElementById('#city').innerHTML = responseJson.city;
  document.getElementById('#service').innerHTML = responseJson.city;
	document.getElementById('#price').innerHTML = responseJson.city;

	let textDiv = "";
	responseJson.route.forEach(ser => {
		textDiv+=`
		<div class="card" style="background-color:grey;padding:5px;margin:15px 0; text-align:center; border-radius:25px">
		<h1>Name:${ser.name}</h1>
			<div>
				<h4>City: ${ser.city}</h4>
        <h4>Price: ${stn.price}</h4>
        <h4>Phone: ${stn.phone}</h4>

			</div>
    	</div>`
    });
	document.getElementById('.service').innerHTML = textDiv;
}