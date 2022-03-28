//* 1)   Take all the sections which we have in our page and stored it in to variable mysections
//* 2)   Take all the nav items and stored it in to variable mynav
//* 3)   Add Scroll Event
//* 4)   Current variable is used to get the current id of the corresponding section (in html the nav  //*      list has same classes used which are the actual id's in the section )
//* 5)   offset is used to get the current co ordinates of the mentioned element offsetTop gives the //*      position of the current section from  top in pixels
//* 6)   clientHeight,offsetHeight,ScrollHeight is used to get the height of the Current section 
//*   a) clientHeight is used to get The height of the element with verticall padding
//*   b) offsetHeight is used to get the height of the element with vertical padding with border top
//*      border bottom  and horizontal scroll if avsailable.
//*   c) ScrollHeight gives the elements content height if available including vertical padding.
//*  7)  clientHeight is used to get the current height of the section including vertical padding.
//*  8)  pageYOffset returns the value that how much user scrolls from top
var mysections=document.querySelectorAll("section");
var mynav=document.querySelectorAll(".wraper ul li");

window.addEventListener('scroll',() => {
    var current="";
    mysections.forEach((section)=>{
     var sectop=section.offsetTop;
     const sectionHeight = section.clientHeight;
        
     if(pageYOffset >= sectop - sectionHeight / 2){
         console.log(pageYOffset);
         current=section.getAttribute("id");
         console.log(current);
     }
           });
    mynav.forEach((item)=>{
        item.classList.remove("active");
        if(item.classList.contains(current)){
          item.classList.add("active");  
        }
    });     
});


