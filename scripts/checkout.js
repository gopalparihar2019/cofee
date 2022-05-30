// On clicking remove button the item should be removed from DOM as well as localstorage.
// Add the coffee to local storage with key "coffee"


var store =JSON.parse(localStorage.getItem("bucket")) || [];

var sum=0;
for(i=0;i<store.length;i++)
{
    sum=sum+store[i].price;
}
console.log(Number(sum));


   
    function alertbox(){
        event.preventDefault();
        alert("Your order is accepted");
        setTimeout(() => {
            alert("Your order is being Prepared ")
        }, 3000);

        setTimeout(() => {
            alert("Your order is being packed  ")
        }, 5000);

        setTimeout(() => {
            alert("Your order is out for delivery")
        }, 2000);

        setTimeout(() => {
            alert("Order delivered")
        }, 2000);

        
    }