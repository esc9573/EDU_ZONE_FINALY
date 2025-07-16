
        document.addEventListener("DOMContentLoaded", () => {
            const menuIcon = document.querySelector('.menu-icon');
            const navbarMenu = document.querySelector('.navbar-menu');
            const closeBtn = document.querySelector('.close-btn');

            // فتح المينيو
            menuIcon.addEventListener('click', () => {
                navbarMenu.classList.add('active');
            });

            // إغلاق المينيو
            closeBtn.addEventListener('click', () => {
                navbarMenu.classList.remove('active');
            });

            // اختيار عنصر من القائمة يُغلق المينيو تلقائيًا
            const navLinks = navbarMenu.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navbarMenu.classList.remove('active');
                });
            });

            // إغلاق عند الضغط خارج المينيو
            document.addEventListener('click', (e) => {
                if (!navbarMenu.contains(e.target) && !menuIcon.contains(e.target)) {
                    navbarMenu.classList.remove('active');
                }
            });
        });

        // scripts/footer-toggle.js

        document.addEventListener("DOMContentLoaded", function() {
            const buttons = document.querySelectorAll(".footer .footer-btn");

            buttons.forEach(function(btn) {
                btn.addEventListener("click", function() {
                    const list = btn.nextElementSibling; // الـ ol اللي تحت العنوان
                    const icon = btn.querySelector("i");

                    // لو القائمة مفتوحة، اقفلها
                    if (list.style.display === "block") {
                        list.style.display = "none";
                        icon.classList.remove("fa-rotate-180");
                    } else {
                        // اقفل كل القوائم أولاً
                        document.querySelectorAll(".footer .item ol").forEach(function(otherList) {
                            otherList.style.display = "none";
                        });

                        document.querySelectorAll(".footer .footer-btn i").forEach(function(otherIcon) {
                            otherIcon.classList.remove("fa-rotate-180");
                        });

                        // افتح القائمة الحالية
                        list.style.display = "block";
                        icon.classList.add("fa-rotate-180");
                    }
                });
            });
        });
