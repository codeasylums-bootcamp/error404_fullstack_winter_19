const cit=document.getElementById('#city').value;
const ser=document.getElementById('#service').value;
const pri=document.getElementById('#price').value;


const url = 'https://localhost:3000/';
const data = { "city":cit,
                "service":ser, 
                "price":pri};

try {
  const response = await fetch(url, {
    method: 'POST', 
    body: JSON.stringify(data), 
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const json = await response.json();
  console.log('Success:', JSON.stringify(json));
} catch (error) {
  console.error('Error:', error);
}