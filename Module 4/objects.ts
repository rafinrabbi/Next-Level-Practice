class Animal {
  // name: string;
  // species: string;
  // sound: string;

  constructor(public name: string,public species: string,public sound: string) {
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
  }
  makesound(){
    console.log(`${this.name} is ${this.sound}`)
  }
  
}
const cat = new Animal('cat','mamal', 'meaw meaw')
cat.makesound()
