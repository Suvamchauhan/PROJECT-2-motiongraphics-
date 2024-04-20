$(function () {
    // Hide all tab contents except the first one
    var tabContainers = $('div.tabs > div');
    tabContainers.hide().filter(':first').show();
    
    // Set the first tab to class="selected"
    $('div.tabs ul.tabNavigation a:first').addClass('selected');

    // Add onclick handlers to all tabs
    $('div.tabs ul.tabNavigation a').click(function(){
        // Hide all tabContainers with slide animation
        tabContainers.slideUp(300);
        // Show only the tabContainer with the ID that matches the href for the A that was clicked
        tabContainers.filter(this.hash).delay(300).slideDown(300);
        // Remove class="selected" from all tabs
        $('div.tabs ul.tabNavigation a').removeClass('selected');
        // Set class="selected" on the tab that was just clicked
        $(this).addClass('selected');
        // Stop following links
        return false;
    });
    
    // for the tab Panels
    $('.tab-content').hide();

    // Addding animations for additional tabs
    $('#one').click(function() {
        $('.tab-content').hide();
        $('#th-tab-one').fadeIn('slow');
    });
    
    $('#two').click(function() {
        $('.tab-content').hide();
        $('#th-tab-two').fadeIn('slow');
    });
    
    $('#three').click(function() {
        $('.tab-content').hide();
        $('#th-tab-three').fadeIn('slow');
    });

    // To add highlight effect on tab when clicked
    $('.tabNavigation a').click(function() {
        $('.tabNavigation a').removeClass('highlight');
        $(this).addClass('highlight');
    });
});
