document.querySelectorAll(".btn-cart").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.textContent = "Добавлено ✓";
        btn.disabled = true;
        btn.style.backgroundColor = "#3e4a3f";
        btn.style.color = "#e6d8c3";
        btn.style.cursor = "default";
        btn.style.width = "100%";
        btn.style.height = "100%";
        btn.style.borderRadius = "5px";
        btn.style.border = "none";
        btn.style.padding = "10px";
        btn.style.margin = "10px";

    });
});