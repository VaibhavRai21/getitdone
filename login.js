function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {  // Simple validation
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";  // Redirect to Task Remainder
    } else {
        alert("Invalid Username or Password");
    }
}

// Check login status and prevent unauthorized access
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("index.html")) {
        const isLoggedIn = localStorage.getItem("loggedIn");
        if (!isLoggedIn) {
            window.location.href = "login.html";  // Redirect if not logged in
        }
    }
});
