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
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
let breedList = document.querySelector("ul#dog-breeds")

fetch(breedUrl)
    .then(res => res.json())
    .then(function(breedResponse){
        
        let breedArray = []
        let breedKey = []
        
console.log(breedResponse)
    breedResponse.message.forEach(function(breed){
    breedArray.push(breed)
    breedKey = Object.keys(breedArray)
    })
    breedKey.forEach(function(e, i){
        let blankLi = document.createElement("li")
        
        blankLi.append(breedKey[i])
        breedList.append(blankLi)
    })
})

