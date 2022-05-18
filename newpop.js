const tabs=document.querySelectorAll('[data-target]'),
      tabContent=document.querySelectorAll('[data-content]')
           
      tabs.forEach(tab => { 
           tab.addEventListener("click", () =>{
               const target=document.querySelector (tab.dataset.target)
                tabContent.forEach(tabContents =>{
                    tabContents.classList.remove('skills__active')
                
                })
               target.classList.add('skills__active')

                tabs.forEach(tab => {
                  tab.classlist.remove('skills__active')
    })
             tab.classList.add('skills__active')
})

})



// popup

let  mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

const linkWork= document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(L=> l.classList.remove('active__work'))
     this.classlist.add('active__work')
}
linkWork.forEach(L=> l.addEventListener("click", activeWork))



document.addEventListener("click", (e) => {
    if(e.target.classlist.contains("work__button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement)
        
    }
})
function togglePortfolioPopup(){
    document.querySelector(".portfolio__popup").classList.toggle("open");
}
document.querySelector(".portfolio__popup-close").addEventListener("click",togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
   document.querySelector(".pp__thumbnail img").src=portfolioItem.querySelector(".work__img").src;
   document.querySelector(".portfolio__popup-subtitle span").innertHTML=portfolioItem.querySelector(".work__title").innerHTML;
   document.querySelector(".portfolio__popup-body").innerHTML=portfolioItem.querySelector(".portfolio_item-details").innerHTML;
                                                             
}

// animation

const inputs=document.querySelectorAll(".input");

function focusFunc(){
    let parent=this.parentNode;
    parent.classlist.add("focus");
}
function blurFunc(){
    let parent=this.parentNode;
    if(this.value==""){
        parent.classlist.remove("focus");
    }
}

inputs.forEach((input) =>{
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur",blurFunc);
})




                         