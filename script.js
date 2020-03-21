window.onload = function () {
    switchTabMenu();
    switchPortfolioTags();
    borderedPortfolioImage();
    openModalForm();
    closeModalForm();    
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
        shuffleImage();
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

const shuffleImage = () => {
    let imageArr = document.querySelectorAll('.portfolio__gallery>div');  
    imageArr.sort();  
    console.log(imageArr);
}

const hiddenAllPortfolioImage = () => {
    document.querySelectorAll('.portfolio__gallery-item').forEach(el => el.classList.add('portfolio__gallery-item_hidden'));
};

const borderedPortfolioImage = () => {
    //add click event to portfolio image
    const img = document.querySelector('.portfolio__gallery').addEventListener('click', (event) => {
        //remove class bordered for another image
        document.querySelectorAll('.portfolio__gallery-item img').forEach(el => el.classList.remove('portfolio__gallery-item_bordered'));
        //add class bordered for selected image        
        event.target.classList.add('portfolio__gallery-item_bordered');
    })
}

//---form---
const openModalForm = () => {
    //add click event for submit button
    const formButton = document.querySelector('.form-button').addEventListener('click', (event) => {
        //block default post from form
        event.preventDefault();
        //open modal form
        document.querySelector('.getaquote__modal-window').classList.remove('getaquote__modal-window_hidden');
        getDataFromForm();
    })
}

const closeModalForm = () => {
    //add click event for modal button
    const formButton = document.querySelector('.getaquote__modal-button').addEventListener('click', (event) => {        
        //close modal form
        document.querySelector('.getaquote__modal-window').classList.add('getaquote__modal-window_hidden');        
        //clean modal windiw 
        let elemP = document.querySelectorAll('.getaquote__modal p').forEach(el => {
            document.querySelector('.getaquote__modal').removeChild(el);  
        });    
        //reset form
        document.querySelector('form').reset();    
             
    })
}

const getDataFromForm = () => {
    //name
    const name = document.querySelector('input[name="name"]')
        let pForName = document.createElement('p');
        let n = document.createTextNode('Имя: ' + name.value);
        pForName.appendChild(n);
        document.querySelector('.getaquote__modal').appendChild(pForName);
    //email
    const email = document.querySelector('input[name="email"]')
        let pForEmail = document.createElement('p');
        let e = document.createTextNode('Email: ' + email.value);
        pForEmail.appendChild(e);
        document.querySelector('.getaquote__modal').appendChild(pForEmail);
    //subject
    const subject = document.querySelector('input[name="subject"]');    
    if (subject.value === 'Singolo' || subject.value === 'singolo') {
        let pForSubject = document.createElement('p');
        let topic = document.createTextNode('Тема: ' + subject.value);
        pForSubject.appendChild(topic);
        document.querySelector('.getaquote__modal').appendChild(pForSubject);           
    } else {
        let pForSubject = document.createElement('p');
        let topicNone = document.createTextNode('Без темы');
        pForSubject.appendChild(topicNone);
        document.querySelector('.getaquote__modal').appendChild(pForSubject);
    } 
    //description
    const description = document.querySelector('textarea[name="description-project"]');    
    if (description.value === 'Portfolio project' || description.value === 'portfolio project') {       
        let pForDescription = document.createElement('p');
        let descriptionProject = document.createTextNode('Описание: ' + description.value);      
        pForDescription.appendChild(descriptionProject);
        document.querySelector('.getaquote__modal').appendChild(pForDescription);                 
    } else if (description.value === '') {        
        let pForDescription = document.createElement('p');
        let descriptionProjectNone = document.createTextNode('Без описания'); 
        pForDescription.appendChild(descriptionProjectNone);     
        document.querySelector('.getaquote__modal').appendChild(pForDescription);
    } else {
        let pForDescription = document.createElement('p');
        let descriptionProjectFull = document.createTextNode('Описание: ' + description.value); 
        pForDescription.appendChild(descriptionProjectFull);     
        document.querySelector('.getaquote__modal').appendChild(pForDescription);
    } 
}

