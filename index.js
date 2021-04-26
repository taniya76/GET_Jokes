//fetch the object from API
const getjoke = (category) => {
    var url = 'https://api.chucknorris.io/jokes/random?category=' + category;
    fetch(url).then((response) => {
        return (response.json());
    }).then((data) => {
        // console.log(data);
        addjoke(data);
    })
}

//add joke to the html page
const addjoke=(data)=>{
    // console.log(data.value);
    var area=document.getElementsByClassName("jokearea")[0];
    area.style.display='block';

    var category_text=document.getElementsByClassName("category_text")[0];
    var category_name=data.categories[0];
    category_name= category_name.charAt(0).toUpperCase() + category_name.slice(1)
    category_text.innerHTML='Selected category: '+category_name;

    var joke=document.getElementsByClassName("joke")[0];
    joke.innerHTML=data.value;

}

//check if new joke has beem clicked
document.getElementsByClassName("newjoke")[0].addEventListener("click",function(){
    var category=document.getElementsByClassName("category_text")[0].innerHTML.slice(19);
    category= category.charAt(0).toLowerCase() + category.slice(1)
    console.log(category);
    getjoke(category);
});

//get to know which button actually clicked
var numberOfButtons = document.querySelectorAll(".add_margin").length;

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".add_margin")[i].addEventListener("click", function () {
        var category = this.name;
        getjoke(category);
    });
}

