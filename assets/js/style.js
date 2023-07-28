window.onload = function() {
    $(document).ready(function() {
        $('#btn-sidebar').click(function(){
        console.log("clicked!!")
        $("#sidebar-right").toggleClass('hide');
        $("#btn-sidebar").toggleClass('hide');
      });
      $('#edit-bookmarks').click(function(){
        $("#saved-links").toggleClass('edit')
      });
    });
}