// Add the coffee to local storage with key "coffee"
url="https://masai-mock-api.herokuapp.com/coffee/menu"
getdata()
async function getdata(){
    let data = await fetch(url)
     data = await data.json()
     showdata(data.menu.data)
     console.log(data.menu.data);
}

var store =JSON.parse(localStorage.getItem("bucket")) || [];
var allitem =JSON.parse(localStorage.getItem("cofee")) || [];
var count = store.length;

function showdata(data){
    let cofeediv = document.getElementById("menu");
data.forEach((ele,index)=> {
    allitem.push(ele);
    localStorage.setItem("coffee",JSON.stringify(allitem));
        let img = document.createElement("img");
        img.src = ele.image;
        img.style.width="100%";
        img.style.height="50%"
        img.style.margin="auto";

        let p1 = document.createElement("p");
        p1.innerText =ele.title;

        let button = document.createElement("button");
        button.innerText="bucket";
        button.value = "bucket";
        button.addEventListener("click",function(){
             additem(ele);
             window.location.reload();

        });

        let coffee_count = document.getElementById("coffee_count");
        coffee_count.innerText=count;

        let div = document.createElement("div");
        div.style.textAlign="center";
        div.style.border="solid black 1px";
        div.style.width="80%";
        div.style.padding="10px"
        div.append(img,p1,button);

        cofeediv.append(div);



    });
}

function additem(ele){
   
    
    store.push(ele);
    localStorage.setItem("bucket",JSON.stringify(store));
}