// Smooth animation
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".hero").style.opacity = "1";
});

// Join button effect
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    btn.innerHTML = "Redirecting...";
});

// Floating button
const floating = document.createElement("a");

floating.href = "YOUR_AFFILIATE_LINK";
floating.innerHTML = "🔥 JOIN NOW";
floating.className = "floating-btn";

document.body.appendChild(floating);
