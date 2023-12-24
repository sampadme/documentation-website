document.querySelector('.main_head_logo').style.cssText = "width: 100px;";

document.querySelector('.next_header_info input').placeholder = "    Have a question?";

let coll = document.getElementsByClassName("collapsible");


for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
window.onscroll = function() {myFunction()};

let header = document.getElementById("main_headerz");
let sticky = header.offsetTop;
let aab = document.querySelectorAll('.clor_a')
    for(let i =0; i<aab.length; i++){
        aab[i].style.color = "white";
    }
    document.querySelector('.responsive_nav').style.backgroundColor = "none";
    
    let count = 0;
        function nav_cliick(){
            count++;
            if(count % 2 === 1){
            document.querySelector('.mobile_nav').style.display = "block";
            
            }else{
            document.querySelector('.mobile_nav').style.display = "none";
            }
            
        console.log(count);
    }

function nav_cliick_support(){
    count++
    document.querySelector('.mobile_nav').style.display = "none";
}



function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");

   

    document.getElementById('main_nav').classList.add('nav_bar_sticky');
    document.querySelector('.responsive_nav').classList.add("responsive_navs");
    let aab = document.querySelectorAll('.clor_a')
    for(let i =0; i<aab.length; i++){
        aab[i].style.color = "black";
    }
    document.querySelector('.responsive_nav').style.backgroundColor = "white";
    document.querySelector('#search_id').classList.add('search_hide2');
    document.querySelector('.responsive_nav').style.color = "black";
    
    
   

  } else {
    header.classList.remove("sticky");
    document.getElementById('main_nav').classList.remove('nav_bar_sticky');
    document.querySelector('.responsive_nav').classList.remove("responsive_navs");
    let aab = document.querySelectorAll('.clor_a')
    for(let i =0; i<aab.length; i++){
        aab[i].style.color = "white";
    }
    document.querySelector('#search_id').classList.remove('search_hide2');
  
    document.querySelector('.responsive_nav').style.backgroundColor = "rgba(255, 255, 255, 0)";
    document.querySelector('.responsive_nav').style.color = "white";
    
  }
}
