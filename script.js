// fetching modals 
const profilemodal = document.querySelector("#profile-modal");
const codingprofile = document.querySelector("#follow-modal");

// fetching buttons 

const sharebtn = document.querySelector("#share-btn");
const condingbtn = document.querySelector("#follow-btn");

const profileclose = document.querySelector("#profile-modal-close");
const codingclose = document.querySelector("#follow-modal-close");

const overlay = document.querySelector(".overlay");
const modalclass = document.querySelector(".modal");


const openmodal = (event) =>{
    const elementid = event.target.id;

    if(elementid == 'share-btn'){
        profilemodal.classList.add("active");
        overlay.classList.add("active"); 
    }

    else if(elementid == 'follow-btn'){
        codingprofile.classList.add("active");
        overlay.classList.add("active");
    }
    
};

const closemodal = (event) => {
    const elementid = event.target.id;

    if(elementid == 'profile-modal-close'){
        profilemodal.classList.remove("active");
        overlay.classList.remove("active");
    }

    else if(elementid == 'follow-modal-close'){
        codingprofile.classList.remove("active");
        overlay.classList.remove("active");
    }

    else{
        profilemodal.classList.remove("active");
        codingprofile.classList.remove("active");
        overlay.classList.remove("active");
    }

};

sharebtn.addEventListener('click' , openmodal);

condingbtn.addEventListener('click' , openmodal);

profileclose.addEventListener('click' , closemodal);

codingclose.addEventListener('click' , closemodal);

overlay.addEventListener('click', closemodal);



