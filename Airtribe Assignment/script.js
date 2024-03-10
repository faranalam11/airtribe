console.log("hello")
let plus = document.querySelectorAll(".plus");
let three = document.querySelectorAll(".three");
const addItem=document.querySelector(".addItem");

const plusIcon=document.getElementById("plus-ns");

const input=document.getElementById("input");

// for (let p of plus) {
//     p.addEventListener("click", () => {
//         let selected = p.getAttribute("id");
//         console.log(selected);
//         console.log("plus clicked");
//         addCardBelow(p.parentNode.parentNode); // Pass the parent div of the plus button
//     })

// }

// function addCardBelow(parentElement) {
//     // Create card element
//     let card = document.createElement('div');
//     card.classList.add('card');
//     card.innerHTML = `
//         <div class="card-body">
//             This is a new card
//         </div>
//     `;

//     // Append card below the parent element
//     // parentElement.insertAdjacentElement('afterend', card);
//     addItem.append(card);
// }

// for( let th of three){
//     th.addEventListener("click",()=>{
//         let selected=th.getAttribute("id");
//         console.log(selected);
//         console.log("threedot clicked");
//     })
// }

const addItemDynamically=(e)=>{
    e.preventDefault();

    const inputValue=input.value.trim();

    const divElement=document.createElement("div");
    divElement.classList.add("addItem");
    divElement.innerHTML=` <li>${inputValue}</li>`;

    addItem.append(divElement);

    console.log(inputValue);

    console.log(e.target);

};


plusIcon.addEventListener("click",(e)=>{
    addItemDynamically(e);
});


