var dogs = [
    {
      name: 'Bulldog',
      info: "A happy dog",
      image: "bulldog.jpeg"
   
    },
   
   
    {
      name: "German Shepard",
      info: "A guard dog",
      image: "german-shepard.jpeg"
    },
   
   
    {
       name: "Lab",
      info: "The silly dog",
      image: "lab.jpeg"
    },
   
   
   
    {
       name: "Beagle",
      info: "Hunting dog",
      image: "beagle.jpeg"
    },
   
   
    {
       name: "Poodle",
      info: "Show dog",
      image: "poodle.jpeg"
    },
   
   
    {
       name: "Golden Retriever",
      info: "A nice dog",
      image: "golden-retriever.jpeg"
    },
   
    {
      name: "PitBull",
      info: "The mean dog",
      image:  "pitbull.jpeg"
    },
   
     {
      name: "Pug",
      info: "The cute dog",
      image: "pug.jpeg"
     },
   
     {
      name: "Boxer",
      info:"The proud dog",
      image: "boxer.jpeg"
      },
   
      {
      name: "Dachsund",
      info: "The sad dog",
      image: "dachsund.jpeg"
      }
   
   ]
var main=document.querySelector('main')
for (var i = 0; i<dogs.length; i++){
    var card=document.createElement('div')
    card.className='card'
    let cardBody=`
    <h4 class = 'card-title'>${dogs[i].name}</h4>
    <h5 class = 'card-subtitle'>${dogs[i].info}</h5>
    `
    let item = document.createElement('div')
    item.className= 'card-body'
    item.innerHTML=cardBody
    let dogImg=document.createElement('img')
    card.appendChild(dogImg)
    card.appendChild(item)
    dogImg.src=dogs[i].img
    document.getElementById('card-container').appendChild(card)

}

   
  