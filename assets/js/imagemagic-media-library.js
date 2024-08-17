(function($) {
    $(document).ready(function() {
        function addButton() {
            var name = $('.attachment-actions');
            if (name.length) {
                if ($('#newbtn').length === 0) { // Check if the button already exists
                    let man = document.createElement('button');
                    man.id = 'newbtn';
                    man.innerHTML = 'Edit whit ImageMagic'; // Set button text
                    name.append(man);
                }
            } 
        }

        // Use MutationObserver to watch for changes in the DOM
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length) {
                    addButton(); // Try to add the button when changes are detected
                }
            });
        });

        // Start observing the document body for changes
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Initial button addition attempt
        addButton();

        // Handle media modal close event
        $(document).on("click", ".media-modal-close", function () {
            var mediaFrameContent = $('.media-frame-content');
            let title = document.getElementsByClassName('media-frame-title')[1].firstChild;
            title.innerHTML = "Attachment Details";
            
            if (mediaFrameContent.length) {
                mediaFrameContent.find('div').not('.image_magic').not('.media-sidebar').not('.uploader-inline').show();
                mediaFrameContent.find('.image_magic').remove();
            } 
        });
    });
    

    // 
})(jQuery);

