
const icon = document.getElementById("moon");

icon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        icon.classList = "fa-regular fa-moon fa-2px";
    } else {
        icon.classList = "fa-solid fa-moon";
    }

    localStorage.setItem("theme", document.body.classList);
    localStorage.setItem("icon", icon.classList);
});


if(localStorage.getItem("theme")){
    document.body.classList.add(localStorage.getItem("theme"));
    icon.classList = localStorage.getItem("icon"); 
}