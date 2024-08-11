document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navbarLinks = document.querySelectorAll('.navbar-link');
    function activateSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.add('visible');
                section.classList.remove('active');
            } else {
                section.classList.remove('visible');
                section.classList.add('active');
            }
        });
    }
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSectionId = this.getAttribute('href').substring(1);
            activateSection(targetSectionId);
        });
    });
    if (sections.length > 0) {
        activateSection(sections[0].id);
    }
});
