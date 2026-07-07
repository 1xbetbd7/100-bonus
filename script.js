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

floating.href = "https://reffpa.com/L?tag=d_228943m_14249c_&site=228943&ad=14249";
floating.innerHTML = "🔥 JOIN NOW";
floating.className = "floating-btn";

document.body.appendChild(floating);
