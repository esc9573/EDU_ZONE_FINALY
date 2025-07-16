document.addEventListener('DOMContentLoaded', function() {
    // Tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => {
                btn.classList.remove('active-tab');
                btn.style = '';
                const icon = btn.querySelector('i');
                if (icon) icon.style.color = '';
            });
            tabContents.forEach(tab => tab.classList.remove('show-tab'));

            button.classList.add('active-tab');
            const icon = button.querySelector('i');
            if (button.dataset.tab === 'info-tab') {
                button.style.backgroundColor = '#116EF0';
                button.style.color = '#fff';
                if (icon) icon.style.color = '#fff';
            } else {
                button.style.backgroundColor = '#F1F7FF';
                if (icon) icon.style.color = '';
            }

            document.getElementById(button.dataset.tab).classList.add('show-tab');
        });
    });

    if (tabButtons.length > 0) {
        tabButtons[0].click(); // Trigger first tab
    }

    // Footer Accordion
    document.querySelectorAll('.footer-btn').forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const arrow = this.querySelector('i');
            const isOpen = content.style.display === 'block';
            content.style.display = isOpen ? 'none' : 'block';
            arrow.classList.toggle('fa-arrow-up', !isOpen);
            arrow.classList.toggle('fa-arrow-down', isOpen);
        });
    });
});

function submitForm() {
    const fields = ['firstName', 'lastName', 'email', 'subject', 'message'];
    const values = fields.map(id => document.getElementById(id).value.trim());

    if (values.some(val => !val)) {
        alert('Please fill in all required fields');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values[2])) {
        alert('Please enter a valid email address');
        return;
    }

    alert('Thank you for your message! We will get back to you soon.');

    fields.forEach(id => document.getElementById(id).value = '');
}