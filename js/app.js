var myNavbar = document.getElementById("myNavbar");
var myLi = myNavbar.getElementsByTagName("li");
console.log(myLi);
for(i=0;i<myLi.length;i++)
    {
        
        console.log(myLi[i]);
        if(i!=3){
        myLi[i].addEventListener("click",function(){
            $(".collapse").toggleClass("in");
        });
        }
    }