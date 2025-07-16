document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('courseSearch'),
        button = document.getElementById('searchButton'),
        isCoursesPage = window.location.pathname.includes('courses-home.html');

    const handleSearch = () => {
        const query = input.value.trim();
        if (!isCoursesPage && query) {
            localStorage.setItem('courseSearchQuery', query);
            window.location.href = './courses-home.html';
        } else {
            performSearch(query);
        }
    };

    const performSearch = (query) => {
        const boxes = document.querySelectorAll('.box');
        let found = false;

        document.querySelectorAll('.side .p').forEach((btn, i) => {
            btn.classList.toggle('select', i === 0);
        });

        boxes.forEach(box => {
            const title = box.querySelector("h3 a").textContent.toLowerCase() || '',
                desc = box.querySelector("p").textContent.toLowerCase() || '',
                match = title.includes(query.toLowerCase()) || desc.includes(query.toLowerCase());

            box.classList.toggle('open', query === '' || match);
            box.classList.remove('highlighted');

            if (match && query) {
                found = true;
                box.classList.add('highlighted');
                setTimeout(() => box.classList.remove('highlighted'), 3000);
            }
        });

        const first = document.querySelector('.box.highlighted');
        first.scrollIntoView({ behavior: "smooth", block: "center" });

        if (query && !found) {
            alert("لم يتم العثور على دورات تطابق بحثك!");
            boxes.forEach(box => box.classList.add('open'));
        }
    };

    if (input && button) {
        button.addEventListener('click', handleSearch);
        input.addEventListener('keypress', e => e.key === 'Enter' && handleSearch());
    }

    if (isCoursesPage) {
        const saved = localStorage.getItem('courseSearchQuery');
        if (saved && input) {
            input.value = saved;
            setTimeout(() => performSearch(saved), 500);
            localStorage.removeItem('courseSearchQuery');
        }
    }
});