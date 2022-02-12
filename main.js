const d = document;

function slice(){
    const $buttonP = d.querySelector(".buttonP"),
        $menu = d.querySelector(".wrapper"),
        $buttonX = d.querySelector(".buttonX");

    $buttonP.addEventListener("click", (e) => {
        if($buttonP.classList.contains("buttonPx") && $menu.classList.contains("wrapperx")){
            $buttonP.classList.replace("buttonPx", "buttonPd");
            $menu.classList.replace("wrapperx", "wrapperd");

        }else{
            $buttonP.classList.add("buttonPd");
            $menu.classList.add("wrapperd");

        }

        setTimeout(() => {
            buttons();

        }, 1000);

    })

    $buttonX.addEventListener("click", (e) => {
        if($buttonP.classList.contains("buttonPd") && $menu.classList.contains("wrapperd")){
            $menu.classList.replace("wrapperd", "wrapperx");

            setTimeout(() => {
                $buttonP.classList.replace("buttonPd", "buttonPx");

            }, 2000);

        }

    })

}

function buttons(){
    const buttonsS = d.querySelectorAll(".buttonS"),
        $wrapper = d.querySelector(".wrapper"),
        $items = d.querySelectorAll(".itemss");


    for(let j = 0; j < buttonsS.length; j++){
        buttonsS[j].addEventListener("click", (e) => {

            let x;

            const cl = function(clase){
                x = clase;
                return buttonsS[j].classList.contains(clase) ? true : false;

            }

            const bt = function(){
                for(let k = 0; k < $items.length; k++){
                    if($items[k].classList.contains(`${x}Items`)){
                        const $ct = d.querySelectorAll(`.${x}Items .content`);

                        if($items[k].classList.contains("itemssD")){
                            $items[k].classList.replace("itemssD", "itemssDR");

                            for(let m = 0; m < $ct.length; m++){
                                $ct[m].style.display = "none";

                            }
                            

                        }else if($items[k].classList.contains("itemssDR")){
                            $items[k].classList.replace("itemssDR", "itemssD");
                        }
                        
                        else{
                            $items[k].classList.add("itemssD");

                        }

                    }

                }

            }

            if(cl("menu")){
                bt();

            }else if(cl("about")){
                bt();

            }else if(cl("more")){
                bt();

            }else if(cl("photos")){
                bt();

            }
            
        })

    }

}

function showOptions(){
    const $li = d.querySelectorAll(".itemss li:not(li:first-child, .content li)");

    for(let k = 0; k < $li.length; k++){ // Put a class to make reference to the class .content that
        $li[k].classList.add(`sh${k}`); // it's below of the li element

    }

    for(let i = 0; i < $li.length; i++){
        $li[i].addEventListener("click", (e) => {
            if($li[i].classList.contains("openn")){
                $li[i].classList.remove("openn");

                const opt = d.querySelector(`.${$li[i].classList[0]} + ul`);
                opt.style.display = "none";                    

            }else{
                $li[i].classList.add("openn");

                const opt = d.querySelector(`.${$li[i].classList[0]} + ul`);
                opt.style.display = "block";

            }

        })

    }

}

d.addEventListener("DOMContentLoaded", (e) => {
    slice();  
    showOptions();  

})


