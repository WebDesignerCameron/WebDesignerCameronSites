async function injectHTML() {
    try {
        const response = await fetch("animation.html");
        if (!response.ok) throw new Error("Network response error");
        const htmlContent = await response.text();
        document.getElementById("animation-container").innerHTML = htmlContent;
    } catch (error) {
        console.error("Error loading HTML:", error);
    }
}
document.addEventListener("DOMContentLoaded", injectHTML);