// Write your classes here
class Tree {
    constructor(species) {
        this.species = species;
    }

    static definition() {
        let shor_definition = "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
        return (shor_definition);
    }
}

class Deciduous extends Tree {
    constructor(species, name) {
        super(species);
        this.name = name;
    }

    static definition() {
        return `${super.definition()} Deciduous trees shed their leaves annually.`
    }

}

class Evergreen extends Tree {
    constructor(species, name) {
        super(species)
        this.name = name
    }

    static definition() {
        return `${super.definition()} Evergreens keep their leaves all year round.`
    }
} 
