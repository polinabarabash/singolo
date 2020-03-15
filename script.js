window.onload = function () {
    switchTabMenu();
}

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





