console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res => res.json())
    .then(data => {
        data.message.forEach( image => {
            let img = document.createElement('img');
            img.src = image;
            let imgLocation = document.getElementById('dog-image-container');
            imgLocation.appendChild(img);
        });
    })
})
let dogKeys;

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://dog.ceo/api/breeds/list/all')
     .then(res => res.json())
     .then(data => {
        let dogs = data.message;
        dogKeys = Object.keys(dogs);
        let dogLocation = document.getElementById('dog-breeds');
        dogKeys.forEach(  (breed) => {
            let li = document.createElement('li');
            li.innerHTML = breed;
            
            dogLocation.appendChild(li);
        })
       
       const li = document.getElementsByTagName('li');
        Array.from(li).forEach( () => addEventListener('click', (ev) => {
            ev.target.style.color = '#A020F0';
            })
        )
        const dropdown = document.querySelector('select');      
        
        dropdown.addEventListener('change', filterBreeds)

        function filterBreeds(event) {
            let letter = event.target.value;
            let filteredBreeds = dogKeys.filter((dog) => {
                return dog[0] === letter;
            })
            dogLocation.innerHTML = '';
            filteredBreeds.forEach((dogs) => {
                let li = document.createElement('li');
                li.innerHTML = dogs;
                dogLocation.appendChild(li);
            })
        }

        
        console.log();
    })
})
