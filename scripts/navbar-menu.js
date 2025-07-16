
        // scripts/navbar-menu.js

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
