const form= document.querySelector("#signin");
form.addEventListener("submit",e =>
{
    e.preventDefault();
    const mail=document.querySelector("#your_email");
    const pass=document.querySelector("#your_pass");
    let url=`rishavlikhdena`;
    getLogin(url);
});
const getLogin = async (url)=>
{
    const response= await fetch(url);
    const responseJson=await response.json();
    console.log(responseJson);

}