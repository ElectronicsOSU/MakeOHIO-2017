window.onload=function(){
var x = null;
//Make element draggable
$(".drag").draggable({
    helper: 'clone',
    cursor: 'move',
    tolerance: 'fit',
    revert: true
});

$("#droppable").droppable({
    accept: '.drag',
    activeClass: "drop-area",
    drop: function (e, ui) {
        if ($(ui.draggable)[0].id != "") {

            x = ui.helper.clone();
            ui.helper.remove();
            x.draggable({
                helper: 'original',
                cursor: 'move',
                //containment: '#droppable',
                tolerance: 'fit',
                drop: function (event, ui) {
                    $(ui.draggable).remove();
                }
            });
            
            x.addClass('remove');
            var el = $("<span><a href='Javascript:void(0)' class=\"xicon delete\" title=\"Remove\">X</a></span>");
            $(el).insertAfter($(x.find('img')));
            x.appendTo('#droppable');
            $('.delete').on('click', function () {
                $(this).parent().parent('span').remove();
            });
            $('.delete').parent().parent('span').dblclick(function () {
                $(this).remove();
            });
        }
    }
});

$("#remove-drag").droppable({
    drop: function (event, ui) {
        $(ui.draggable).remove();
    },
    hoverClass: "remove-drag-hover",
    accept: '.remove'
});
}