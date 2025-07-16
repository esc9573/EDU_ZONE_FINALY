const p = document.querySelectorAll(".p")

p.forEach(function(elements){
    elements.addEventListener("click",function(){
        p.forEach(function(element){
            element.classList.remove("select");
        })

        elements.classList.add("select");
    })
})

/*====================================================================*/

const box = document.querySelectorAll(".box");

p.forEach(function(elements) {
    elements.addEventListener("click",function(){
        let section = elements.getAttribute("type_section");

        box.forEach(function(boxs){
            boxs.classList.remove("open");

            if(boxs.getAttribute("type_section") === section || boxs.getAttribute("one_section") === section || boxs.getAttribute("tow_section") === section || boxs.getAttribute("three_section") === section || boxs.getAttribute("four_section") === section){
                boxs.classList.add("open");
            }
            else{
                boxs.classList.remove("open");
            }

            p[0].addEventListener("click",function(){
                boxs.classList.add("open");
            })
        })
    })
})


/*====================================================================*/
 const sec1 = document.getElementById("sec1");
 const load = document.querySelector(".load")
 window.addEventListener("load",function(){
    setTimeout(function(){
        header.style.display = "flex";
        sec1.style.display = "block";
        load.style.display = "none"
    },2000)
 })
