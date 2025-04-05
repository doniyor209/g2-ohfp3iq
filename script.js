const send = document.getElementById("send");
const dark = document.getElementById("dark");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const input = document.getElementById("input");
const checkbox = document.getElementById("checkbox");
const ul = document.getElementById("ul");

dark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.length > 0) {
    sun.style.display = "block";
    moon.style.display = "none";
  } else {
    sun.style.display = "none";
    moon.style.display = "block";
  }
});

send.addEventListener("click", () => {
addTodo()
});

function tugadi(e) {
  if (e.checked == true) {
    e.parentNode.parentNode.children[1].style.display = "none";
    e.parentNode.children[1].style =
      "text-decoration: line-through;color:#413bb6";
  } else {
    e.parentNode.parentNode.children[1].style.display = "block";
    e.parentNode.children[1].style = "text-decoration: none;color:var(--qora)";
  }
}

function deleteTodo(e) {
  ul.removeChild(e.parentNode.parentNode);
}

function editTodo(e) {
  // ul.removeChild(e.parentNode.parentNode);
input.value =e.parentNode.parentNode.children[0].textContent;
ul.removeChild(e.parentNode.parentNode);
}


input.addEventListener("keyup",(e)=>{
  if(e.key=="Enter"){
  addTodo();
  }
  
})



function addTodo(){
 
    if (input.value.trim().length < 1) {
      alert("Biror narsa yoz!!");
    } else {
      const li = document.createElement("li");
      li.innerHTML = `
            <div>
                  <input type="checkbox" id="checkbox" onclick='tugadi(this)'>
                  <p>${input.value}</p>
              </div>
              <div class="actions">
                  <button class="edit-btn" onclick='editTodo(this)'><i class="fa-solid fa-pen"></i></button>
                  <button class="delete-btn" onclick='deleteTodo(this)'><i class="fa-solid fa-trash-can"></i></button>
              </div>
          
          `;
      ul.appendChild(li);
      input.value = "";
    }
  
}