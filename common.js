$(document).ready(function(){
    $('.tabs__controls_link').on('click', function(e){
        e.preventDefault();
        
        var item = $(this),
            removItemClass = $('.tabs__controls_link'),
            contentItem = $('.tabs__item'),
            itemPosition = item.data('class');
        
        removItemClass.removeClass('active');
        item.addClass('active');
        contentItem.filter('.tabs__item_' + itemPosition).addClass('active').siblings().removeClass('active');
    });
});


