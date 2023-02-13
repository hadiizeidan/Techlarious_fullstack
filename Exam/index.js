const MonsterHealth = document.getElementById("GB1");
const YourHealth = document.getElementById("GB2");
var clicked = 0;

const randnum = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

function ATTACK() {
    let randnum1 = randnum(1, 15);
    let randnum2 = randnum(1, 15);
    const currentMonsterHealth = parseInt(MonsterHealth.style.width);
    const currentYourHealth = parseInt(YourHealth.style.width);
    MonsterHealth.style.width = ((currentMonsterHealth - randnum1) + "%");
    YourHealth.style.width = ((currentYourHealth - randnum2) + "%");
    document.getElementById("battlelog-attack").innerHTML = "Monster attacks and deals " + randnum1 + "\n" + "You attack and deal " + randnum2 + "\n" + document.getElementById("battlelog-attack").innerHTML;
}

function SPECIALATTACK() {
    const currentYourHealth = parseInt(YourHealth.style.width);
    const currentMonsterHealth = parseInt(MonsterHealth.style.width);
    if (currentYourHealth < (currentMonsterHealth - 20)) {
        let rand = randnum(10,30);
        MonsterHealth.style.width = ((currentMonsterHealth - rand) + "%");
        document.getElementById("battlelog-attack").innerHTML = "You attack and deal " + rand+ "\n" + document.getElementById("battlelog-attack").innerHTML;

    }
}

function HEAL() {
    clicked += 1;
    const currentYourHealth = parseInt(YourHealth.style.width);
    if ((currentYourHealth < 90) && (clicked < 4)) {
        let rand = randnum(5, 10);
        YourHealth.style.width = ((currentYourHealth + rand) + "%");
        document.getElementById("battlelog-attack").innerHTML = "You heal by " + rand + "\n" + document.getElementById("battlelog-attack").innerHTML;
    }
}
function GIVEUP() {
    document.getElementById("battlelog-attack").innerHTML = "You Lose "
    MonsterHealth.style.width = (100 + "%");
    YourHealth.style.width = (100 + "%");
}