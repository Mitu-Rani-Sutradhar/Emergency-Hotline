

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans:
getElementById and querySelector show single html element (when it matches with the id name in html file) but getElementsByClassName and querySelectorAll show all htmlCollection(when same className is used in different div). 



2. How do you **create and insert a new element into the DOM**?

Ans:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>hello</h1>
    <button id="click-btn">Click</button>


<script>
    const clickBtn = document.getElementById("click-btn")
   
    document.getElementById("click-btn").addEventListener("click",function(){
        const newElement = document.createElement("p");
        newElement.innerText = "I am Mitu Sutradhar";
     
        clickBtn.appendChild(newElement);
    });
</script>


</body>
</html>



3. What is **Event Bubbling** and how does it work?

Ans:

"Event Bubbling" is a DOM event which is working like bubble. 

Bubbles are used to go up. Event bubbling aslo works like the bubble. When we use event bubbling in a function it goes to its parent from parent to find the searching element.




4. What is **Event Delegation** in JavaScript? Why is it useful?
"Event Delegation" is a technique in Javascript which works to find out different children individually. It works like addEventListener. It targets a id Element and works when the id innerText is clicked.

Example:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul id="list">
  <li>Home</li>
  <li>About</li>
  <li>Services</li>
  <li>Contact</li>
</ul>

<script>
  const menu = document.getElementById("list");


  menu.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      console.log("You clicked:", event.target.textContent);
    }
  });
</script>
</body>
</html>




5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans:
preventDefault() stops the browsers default action but stopPropagation() stops event from reaching parent elements.


