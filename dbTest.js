const db = require('./models')

db.animal.create({
    species_name: "snail",
    scientific_name: "snaillus",	
    image_url: "url",
    description: "dont put salt on me",
    extinct: true
}).then(rest => {
  console.log('Created: ', rest.description)
})

const findAnimalTest = async () => {
    const foundAnimal = await db.animal.findOne({
        where: {
            species_name: "snail",
            scientific_name: "snaillus",	
            image_url: "url",
            description: "dont put salt on me",
            extinct: true
        }
    })
    console.log('found', foundAnimal.description)
}
findAnimalTest();