const container = document.querySelectorAll(".flex-container")[0];

document.querySelector("#reset").addEventListener("click", () => {
    location.reload();
});

document.querySelectorAll("button").forEach(
    btn => btn.addEventListener("click", event => {
        container.style[event.target.parentNode.id] = event.target.id;
    })
);