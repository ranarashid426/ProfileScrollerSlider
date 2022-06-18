const data = [
    {name:'Rana',
    age:38,
    gender:'male',
    lookingFor:'women',
    location:'Gujranwala,Pakistan',
    image:'https://randomuser.me/api/portraits/men/75.jpg'
},
    {name:'Rashid',
    age:38,
    gender:'male',
    lookingFor:'women',
    location:'Gujranwala,Pakistan',
    image:'https://randomuser.me/api/portraits/men/78.jpg'
},
    {name:'alishba',
    age:38,
    gender:'female',
    lookingFor:'men',
    location:'Islamabad,Pakistan',
    image:'https://randomuser.me/api/portraits/women/75.jpg'
}
]
const profiles = profileIterator(data)
nextProfile()

document.getElementById('nextBtn').addEventListener('click',nextProfile)
function nextProfile() {
    const currentProfile = profiles.next().value
    if (currentProfile!= undefined) {
        
    
    document.getElementById('imageDisplay').innerHTML = `
    
    <img src="${currentProfile.image}">
    `
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Gender: ${currentProfile.gender}</li>
    <li class="list-group-item">LookingFor: ${currentProfile.lookingFor}</li>
    <li class="list-group-item">Location: ${currentProfile.location}</li>
</ul>
    `
    
    }else{
        // No more object available so reload the page
        window.location.reload()
    }
    
}

function profileIterator(profiles) {
    let index = 0
    return {
        next: function () {
            return index < profiles.length ?
                { value: profiles[index++], done: false } : { done: true }
        }
    }

}
// const profiles = ['ALI', 'ahmad', 'muneeb']

a = profileIterator(profiles)

