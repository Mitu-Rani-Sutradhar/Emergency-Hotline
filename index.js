// console.log("hello")

function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

    // increase heart by click heart card heart btn
const cardHeartBtns =document.getElementsByClassName("card-heart-btn");

for(let cardHeartBtn of cardHeartBtns){
    cardHeartBtn.addEventListener("click",function(){
    
        const totalHeart = getElement("total-heart").innerText;
        const currentTotal = Number(totalHeart) + 1;
        getElement("total-heart").innerText = currentTotal;

    });
    }

    const copyButtons = document.getElementsByClassName("copy-button");

for(let copyButton of copyButtons){
    copyButton.addEventListener("click",function(){

        alert(`Copy button clicked`);
    
        const totalCopy = getElement("total-copy").innerText;
        const currentCopy = Number(totalCopy) + 1;
        getElement("total-copy").innerText = currentCopy;

    });
    }


    

getElement("card-container").addEventListener("click", function(e){

    if(e.target.className.includes("call-btn")){
      const callButton = e.target;
      const serviceName = callButton.parentNode.parentNode.children[1].children[0].innerText;
    //   console.log(serviceName);
      const serviceNumber = callButton.parentNode.parentNode.children[2].children[0].innerText;
    //   console.log(serviceNumber);

const coin = getElement("total-coin").innerText;
// console.log(coin);

 if(coin <= 0){
    alert(`You do not have enough coin`);
    return;
 }
const currentCoin = Number(coin) - 20;
getElement("total-coin").innerText = currentCoin;


    alert(`📞Calling... ${serviceName} ${serviceNumber}...`);


 
 

const time = new Date().toLocaleTimeString();


const latestHistory = getElement("latest-history");

    const newCallHistory = document.createElement("div");
    newCallHistory.innerHTML = `
             
    <div class="text-sm bg-gray-200 rounded-xl flex justify-between items-center p-5 w-[300px] ml-2 mb-3">
                  
                  <div class="">
                    <h2 class="font-bold">${serviceName}</h2>
                    <h2 class="">${serviceNumber}</h2>
                  </div>
                  <div id="current-time">
                  <h2 class="">${time}</h2>
                  </div>
            </div>
              
    `;
    latestHistory.append(newCallHistory);

    }

});



document.getElementById("button-clear").addEventListener("click", function () {
  const latestHistory = getElement("latest-history");
  latestHistory.innerHTML = " ";


});