window.onload = function () {
    switchTabMenu();
    switchPortfolioTags();
    borderedPortfolioImage();
}

//---navigation---
const switchTabMenu = () => {
    //add click event to navigation
    const navigation = document.getElementById('navigation').addEventListener('click', (event) => {
        //remove class from active tab
        document.querySelectorAll('a').forEach(el => el.classList.remove("navigation-active"));
        //add class active to selected tab
        event.target.classList.add('navigation-active');
        //smooth transition
        event.preventDefault();
        const findAunchor = event.target.getAttribute('href');      
        document.querySelector(findAunchor).scrollIntoView({behavior: "smooth"});    
    })
} 

//---portfolio---
const switchPortfolioTags = () => {
    //add click event to portfolio tags
    const tags = document.querySelector('.portfolio__tags').addEventListener('click', (event) => {
        //remove class from active tag
        document.querySelectorAll('span').forEach(el => el.classList.remove('portfolio__tags_selected'));
        //add class active to selected tag
        event.target.classList.add('portfolio__tags_selected');
        let selectedTag = event.target;
        //image sort
        sortPortfolioImage(selectedTag);
    })
}

const sortPortfolioImage = (selectedTag) => {
    hiddenAllPortfolioImage();
    if (selectedTag.innerHTML === 'All') {
        document.querySelectorAll('.portfolio__gallery-item').forEach(el => el.classList.remove('portfolio__gallery-item_hidden'));
    }
    if (selectedTag.innerHTML === 'Web Design') {
        document.querySelectorAll('.web').forEach(el => el.classList.remove('portfolio__gallery-item_hidden'));
    }
    if (selectedTag.innerHTML === 'Graphic Design') {
        document.querySelectorAll('.graphic').forEach(el => el.classList.remove('portfolio__gallery-item_hidden'));
    }
    if (selectedTag.innerHTML === 'Artwork') {
        document.querySelectorAll('.artwork').forEach(el => el.classList.remove('portfolio__gallery-item_hidden'));
    }
};

const hiddenAllPortfolioImage = () => {
    document.querySelectorAll('.portfolio__gallery-item').forEach(el => el.classList.add('portfolio__gallery-item_hidden'));
};

const borderedPortfolioImage = () => {
    //add click event to portfolio image
    const img = document.querySelector('.portfolio__gallery').addEventListener('click', (event) => {
        //remove class bordered for another image
        document.querySelectorAll('.portfolio__gallery-item img').forEach(el => el.classList.remove('portfolio__gallery-item_bordered'));
        //add class bordered for selected image
        console.log(event.target);
        event.target.classList.add('portfolio__gallery-item_bordered');
    })
}


