// function lockedProfile() {
//     const url = "http://localhost:3030/jsonstore/advanced/profiles";
    
//     showProfiles();
    
//     async function showProfiles() {

//         let profiles = await (await (fetch(url))).json();
//         let profile = document.querySelector(".profile");
//         let main = document.querySelector("main");
//         main.innerHTML = "";
//         Object.values(profiles).forEach(p => {
//             let div = document.createElement("div");
//             div.innerHTML = profile.innerHTML;
//             div.querySelector(".user1Username").style.display = "none";
//             div.classList.add("profile");
//             div.querySelector("input[name='user1Username']").value = p.username;
//             div.querySelector("input[name='user1Email']").value = p.email;
//             div.querySelector("input[name='user1Email']").name = p.username;
//             div.querySelector("input[name='user1Age']").value = p.age;
//             div.querySelector("input[name='user1Age']").name = p.username;
//             div.querySelector("input").name = p.username;
//             div.querySelector("input:nth-of-type(2)").name = p.username;
//             div.querySelector("button").addEventListener("click", onClick);
//             main.appendChild(div);
//         });

//     }



//     function onClick(e) {
//         if (e.target.parentElement.querySelector(".profile input:nth-of-type(2)").checked) {

//             if (e.target.parentElement.querySelector(".user1Username").style.display === "none") {
//                 e.target.textContent = "Hide it";
//                 e.target.parentElement.querySelector(".user1Username").style.display = "inline-block";
//             } else {
//                 e.target.textContent = "Show more"
//                 e.target.parentElement.querySelector(".user1Username").style.display = "none";
//             }
//         }
//     }

// }


const issueURL = "http://localhost:3030/jsonstore/advanced/profiles";
const profilesContainer = document.querySelector("#main");
let usersCount = 0;

async function lockedProfile() {
    profilesContainer.innerHTML = "";
    let profilesInfo = await ((await fetch(issueURL)).json());

    Object.values(profilesInfo).forEach(profileObj =>{
        usersCount++;
        profilesContainer.appendChild(createProfileDiv(profileObj));
    });
}

function createProfileDiv(obj){
    const div = document.createElement("div");
    div.classList.add("profile")
    div.innerHTML = 
    `<img src="./iconProfile2.png" class="userIcon" />
    <label>Lock</label>
    <input type="radio" name="user${usersCount}Locked" value="lock" checked>
    <label>Unlock</label>
    <input type="radio" name="user${usersCount}Locked" value="unlock"><br>
    <hr>
    <label>Username</label>
    <input type="text" name="user${usersCount}Username" value="${obj.username}" disabled readonly />`;

    div.appendChild(createExtraInfoDiv(obj));
    div.appendChild(createButton());

    return div;
}

function createExtraInfoDiv(obj){
    const div = document.createElement("div");
    div.style.display = "none";
    div.classList.add(`user${usersCount}Username`);
    div.innerHTML = 
    `<hr>
    <label>Email:</label>
    <input type="email" name="user${usersCount}Email" value="${obj.email}" disabled readonly />
    <label>Age:</label>
    <input type="email" name="user${usersCount}Age" value="${obj.age}" disabled readonly />`;

    return div;
}

function createButton(){
    let button = document.createElement("button");
    button.textContent = "Show more";
    button.addEventListener("click", toggleInfo);

    return button;
}

function toggleInfo(e){
    const button = e.target;
    const hiddenFields = button.parentElement.querySelector("div");
    const lockInput = button.parentElement.querySelector("input[value=lock]");

    let isLocked = lockInput.checked ? true : false;
    const isHidden = button.textContent === "Show more";

    if (!isLocked) {
        button.textContent = isHidden ? "Hide it" : "Show more";
        hiddenFields.style.display = isHidden ? "block" : "none";
    };

}