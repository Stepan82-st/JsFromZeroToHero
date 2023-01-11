function openNav() {
    document.querySelector(".nav").style.width = "100%";
  }
  
  function closeNav() {
    document.querySelector(".nav").style.width = "0%";
    //setTimeout(() => document.querySelector(".nav").style.width = "100%", 10000)
  }

  window.addEventListener('resize',function(){
    if(window.innerWidth > 780){
        document.querySelector(".nav").style.width = "100%";
    } else if (window.innerWidth < 780){
        document.querySelector(".nav").style.width = "0%";
    };
});
