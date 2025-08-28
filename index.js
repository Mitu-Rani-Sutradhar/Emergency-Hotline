// console.log("hello")

function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

const cardHeartBtns =document.getElementsByClassName("card-heart-btns");
// console.log(cardHeartBtns);

for(let cardHeartBtn of cardHeartBtns){
    cardHeartBtn.addEventListener("click",function(){
    
        const totalHeart = getElement("total-heart").innerText;
        const currentTotal = Number(totalHeart) + 1;
        getElement("total-heart").innerText = currentTotal;

    });

}
