// On clicking remove button the item should be removed from DOM as well as localstorage.
// Add the coffee to local storage with key "coffee"


var store =JSON.parse(localStorage.getItem("bucket")) || [];

var sum=0;
for(i=0;i<store.length;i++)
{
    sum=sum+store[i].price;
}
console.log(Number(sum));
let total_amount = document.getElementById("total_amount");
        total_amount.innerText=sum;

    let cofeediv = document.getElementById("bucket");

    store.forEach((ele,index)=> {
    
        let img = document.createElement("img");
        img.src = ele.image;
        img.style.width="100%";
        img.style.height="50%"
        img.style.margin="auto";

        let p1 = document.createElement("p");
        p1.innerText =ele.title;

        let button = document.createElement("button");
        button.innerText="Removeitem";
        button.value = "removeitem";
        button.addEventListener("click",function(){
             removeitem(ele,index);
             window.location.reload();

        });

        

        let div = document.createElement("div");
        div.style.textAlign="center";
        div.style.border="solid black 1px";
        div.style.width="80%";
        div.style.padding="10px"
        div.append(img,p1,button);

        cofeediv.append(div);



    });


function removeitem(ele,index){
   
    store.splice(index,1);
    localStorage.setItem("bucket",JSON.stringify(store));
}