document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navbarLinks = document.querySelectorAll('.navbar-link');
    function activateSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                activateSection(targetSectionId);
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                activateSection(section.id);
            }
        });
    });
    if (sections.length > 0) {
        activateSection(sections[0].id);
    }
});
