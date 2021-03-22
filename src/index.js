console.log('%c HI', 'color: firebrick')

// challenge 1 
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
let dogList = document.querySelector("div#dog-image-container")

fetch(imgUrl)
    .then(res => res.json())
    .then(function(dogResponse){
       let dogArray = [] 
       dogResponse.message.forEach(function(link){
          dogArray.push(link)
          
       })
       
        dogArray.forEach(function(e ,i ){
            let blankLi = document.createElement("li")
            let blankImg = document.createElement("img")
                blankImg.src = dogArray[i]
                blankImg.alt = "dog"
            
                blankLi.append(blankImg)
            
                dogList.append(blankLi)
        })
    })

// challenge 2 
