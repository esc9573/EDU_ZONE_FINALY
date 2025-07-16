





// Navbar scroll effect
        window.addEventListener("scroll", function() {
            const navbar = document.getElementById("navbar");
            if (window.scrollY > 100) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });

// لو المستخدم مسجل دخول، غيّر زر اللوجين
        if (sessionStorage.getItem("loggedIn") === "true") {
            document.getElementById("login-area").innerHTML = `
            <a href="./profile.html">
            <i class="fa-solid fa-user" id="userIcon" style="cursor: pointer;"></i>
        </a>
    `;
        }

