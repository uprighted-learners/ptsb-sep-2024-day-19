function createCharacter() {
    let name = prompt("Enter a name for your character: ");
    let charClass = prompt("Enter a class for your character: ");
    let level = parseInt(prompt("Enter a level for your character: "));

    let character = {
        name: name,
        class: charClass,
        level: level,
        skills: [],
        inventory: [],
    }

    console.log(`Character created: ${character.name}, ${character.class}, level ${character.level}`);
    return character;
}

let myCharacter = createCharacter()

function displayCharacterSkills(character) {
    console.log(`${character.name}'s level: ${character.level}`);
    console.log(`${character.name}'s class: ${character.class}`);
    console.log(`${character.name}'s skills: ${character.skills}`);
    console.log(`${character.name}'s inventory: ${character.inventory}`);
}

function addSkill(character) {
    let skillName = prompt("Enter a skill for your character: ");
    character.skills.push(skillName);
    console.log(`${character.name} learned a new skill: ${skillName}`);
}

function addItem(character) {
    let item = prompt("Enter an item for your character: ");
    character.inventory.push(item);
    console.log(`${character.name} added ${item} to their inventory.`);
}

function levelUp(character) {
    character.level += 1;
    console.log(`${character.name} leveled up to level ${character.level}`);
}

function startApp(character) {
    do {
        action = prompt("What would you like to do? (display, add skill, add item, level up, exit)");
        switch (action) {
            case "display":
                displayCharacterSkills(character);
                break;
            case "add skill":
                addSkill(character);
                break;
            case "add item":
                addItem(character);
                break;
            case "level up":
                levelUp(character);
                break;
            case "exit":
                console.log("Goodbye!");
                break;
            default:
                console.log("Invalid action. Please try again.");
                break;
        }
    } while (action != "exit");
}

startApp(myCharacter);

// OPTIONAL HOMEWORK
// remove skill
// remove an item
// level down
// check for invalid inputs