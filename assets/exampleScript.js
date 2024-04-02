document.addEventListener("DOMContentLoaded", function() {
    var exampleTitles = document.querySelectorAll('.example-title');

    exampleTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            var details = this.nextElementSibling;

            // Close all other examples
            var allExamples = document.querySelectorAll('.example-details');
            allExamples.forEach(function(example) {
                if (example !== details && example.style.display === 'block') {
                    example.style.display = 'none';
                    example.previousElementSibling.classList.remove('expanded');
                }
            });

            // Toggle display and expanded class for clicked example
            details.style.display = details.style.display === 'block' ? 'none' : 'block';
            this.classList.toggle('expanded');
        });
    });
});
