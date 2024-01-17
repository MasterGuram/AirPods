const chooseColor = document.querySelectorAll('.choose__color-btn');
const contentItem = document.querySelectorAll('.content-item');

chooseColor.forEach(function(element){
    element.addEventListener('click', open)
})

function open(evt){
    const target = evt.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);

    // remove all buttons
    chooseColor.forEach(function(item){
        item.classList.remove('choose__color-btn--active')
    })
    
    // add only active button
    target.classList.add('choose__color-btn--active')

    // remove all images
    contentItem.forEach(function(item){
        item.classList.remove('content-item__active')
    });

    // add only active image
    contentActive.forEach(function(item){
        item.classList.add('content-item__active')
    })
}