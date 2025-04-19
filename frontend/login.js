document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const loginData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData)
    });

    const result = await response.json();

    // ✅ Correct logic:
    if (response.ok) {
        alert("Login successful!");
        localStorage.setItem("loggedIn", "true");
        window.location.href = "main.html";
    } else {
        alert(result.error);
        
    }
});
