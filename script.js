document.addEventListener('DOMContentLoaded', function() {
    var next = document.getElementById('next');
    var prev = document.getElementById('prev');
    next.onclick = function () {
        var itemListParent = document.querySelector('.slider');
        var itemList = document.querySelectorAll('.slides');
        itemListParent.insertBefore(itemList[0], null);
        document.getElementById('slider').scrollLeft += 345;
    };
    prev.onclick = function() {
        var itemListParent = document.querySelector('.slider');
        var itemList = document.querySelectorAll('.slides');
        var itemsCount = document.getElementsByClassName('slides').length;
        var lastItem = itemsCount - 1;
        itemListParent.insertBefore(itemList[lastItem], itemList[0]);
        document.getElementById('slider').scrollLeft -= 345;
    };
}, false);