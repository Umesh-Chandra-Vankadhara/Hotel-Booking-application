 function myFunction() {
        var x = document.getElementById("metro");
        if (x.style.display != "none") {
             x.style.display = "none";
        } 
        else {
            x.style.display = "flex";
            x.style.justifyContent="space-evenly";
            
        }
}


// var img=document.getElementById("img2");
// img.addEventListener("click",()=>{

//     let xhr=new XMLHttpRequest();
//     xhr.open("GET",)
// })





var img=document.getElementById("img2").value;
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://tripadvisor1.p.rapidapi.com/answers/list?limit=10&question_id=5283833");
xhr.setRequestHeader("x-rapidapi-host", "tripadvisor1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "277ceb128emsh43581ac52719c61p1f3239jsn59de60aaf25c");

xhr.send(img);


xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        console.log(this.responseText);
    
	}
});

// xhr.open("GET", "https://tripadvisor1.p.rapidapi.com/answers/list?limit=10&question_id=5283833");
// xhr.setRequestHeader("x-rapidapi-host", "tripadvisor1.p.rapidapi.com");
// xhr.setRequestHeader("x-rapidapi-key", "277ceb128emsh43581ac52719c61p1f3239jsn59de60aaf25c");

// xhr.send(img);







