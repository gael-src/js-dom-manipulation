console.log("---------- QUERYING ----------");
//////////////////////////////////////////////
//                 Querying
//////////////////////////////////////////////

console.log("----- EXERCISE 1 -----");
// Greife auf beliebige ELemente mittels
// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()
// zu Ausgabe in console und in devTools schauen

let iDElement = document.getElementById("active");
console.log(iDElement);

let elByTagName = document.getElementsByTagName("section");
console.log(elByTagName);

for (let i = 0; i < elByTagName.length; i++) {
  console.log(elByTagName[i]);
}

console.log("----- EXERCISE 2 -----");
// greife auf die Section mittels querySelectorAll zu und gebe alle in der console aus

let elQuerySelec = document.querySelector("section");
console.log(elQuerySelec);

let elQuerySelecAll = document.querySelectorAll("section");
console.log(elQuerySelecAll);

for (let i = 0; i < elQuerySelecAll.length; i++) {
  console.log(elQuerySelecAll[i]);
}

console.log("----- EXERCISE 4 -----");
// Ändere die Hintergrundfarbe von body und die Schriftgröße mittels JavaScript

let bodyEl = document.querySelector("body");
bodyEl.style.backgroundColor = "orange";
bodyEl.style.fontSize = "30px";

console.log("---------- MANIPULATING ----------");
//////////////////////////////////////////////////
//                  Manipulating
//////////////////////////////////////////////////
//(mit Niels gemacht)
// ----- Element.classList -----

console.log("----- EXERCISE 5 -----");
// Verwende die vier Funtionen add, remove, toggle und contains an beliebigen Elementen. Erstelle zuvor im css eine Klasse, die du hierfür verwendest

document.querySelector("h1").classList.add("myClass");
document.querySelector("h1").classList.remove("myClass");
document.querySelector("h1").classList.toggle("myClass");
// document.querySelector("h1").classList.toggle("myClass");
console.log(document.querySelector("h1").classList.contains("myClass"));

console.log("----- EXERCISE 6 -----");
// ----- Element.innerText -----
// Ändere den Text der h2 von der ersten Sections via JavaScript und weise ihm dann der Überschrift der zweiten Section zu

let zweiteUeberschrift = document.querySelector(".second-section h2").innerText;
console.log(zweiteUeberschrift);

document.querySelector(".first-section h2").innerText = zweiteUeberschrift;

console.log("----- EXERCISE 7 -----");
// ----- Element.innerHTML -----
// lass dir in der Console das innere Markup von der ersten Section ausgeben

console.log(document.querySelector(".first-section").innerHTML);

console.log("----- EXERCISE 8 -----");
// Füge mittels innerHTML der dritten section eine Liste
// mit einem Element hinzu

document.querySelector(".third-section").innerHTML =
  "<ul> <li>ein element </li> </ul>";

console.log("----- EXERCISE 9 -----");
// ----- Element.appendChild() -----
// Erzeuge ein listen-Element, gebe diesem den Text "List item 4"
// und füge es dann der Liste in Section Zwei hinzu

let meinListElement = document.createElement("li");
meinListElement.innerText = "List item 4";
let zweiteListe = document.querySelector(".second-section ul");
zweiteListe.appendChild(meinListElement);

console.log("----- EXERCISE 10 -----");
// Hänge das ListenElment (section2ListEl) mittels appendChild
// an die dritte Section. Was wird passieren?

let dritteListe = document.querySelector(".third-section ul");
dritteListe.appendChild(meinListElement);

console.log("----- EXERCISE 11 -----");
// ----- NACHTRAG: Element.createElement() -----
// Füge einen Link in die letzte section ein. Der Link soll zu
// https://t3n.de/ verlinken und in einem neuen Tab geöffnet werden

const t3nLinkEl = document.createElement("a");
t3nLinkEl.href = "https://t3n.de/";
t3nLinkEl.target = "_blank";
t3nLinkEl.innerText = "t3n.de";

// Füge das neu erstellte Element der letzten section als children hinzu

const linkT3N = document.querySelector(".third-section").appendChild(t3nLinkEl);
console.log(linkT3N);

console.log("---------- TRAVERSING ----------");
////////////////////////////////////////////////
//                  Traversing
////////////////////////////////////////////////

console.log("----- EXERCISE 12 -----");
// ----- Siblings -----
// Greife von #active auf vorherigen Sibling mittels .previousElementSibling
// und previousSibling zu gebe es in der Console aus und schaue in die DevTools

const activeEl = document.querySelector("#active");
const activeElPrevSibling = activeEl.previousElementSibling;
const activeElPrevSibling2 = activeEl.previousSibling;

console.log(activeElPrevSibling);
console.log(activeElPrevSibling2);

console.log("----- EXERCISE 13 -----");
// ----- nextElementSibling ------

const firstSection = document.querySelector(".first-section");
const firstSectionNextSibling = firstSection.nextElementSibling;

console.log(firstSectionNextSibling);
console.log(firstSection.previousElementSibling);
console.log(document.querySelector("section:nth-child(2)").nextElementSibling);
console.log(document.querySelector("section:nth-child(3)").nextElementSibling);

console.log("---------- PARENTS ----------");
/////////////////////////////////////////////
//               Parents
/////////////////////////////////////////////

console.log("----- EXERCISE 14 -----");
// ----- Parents -----
// Greife auf Parent von h1 mittels .parentNode und .parentElement zu
// gebe die parentNodes in der Console aus und schaue es dir in den DevTools an

const h1Element = document.querySelector("h1");

const h1ParentElement = h1Element.parentElement; //parentElement
const h1ParentNode = h1Element.parentNode; //parentNode

console.log(h1ParentElement);
console.log(h1ParentNode);

console.dir(h1ParentElement);
console.dir(h1ParentNode);

console.dir(h1ParentElement.nodeName);
console.dir(h1ParentNode.nodeName);

console.dir(h1ParentElement.nodeType);
console.dir(h1ParentNode.nodeType);

console.log("----- EXERCISE 15 -----");
// ----- closest() -----
// finde von li#active ausgehend das <main> element

const liToMain = document.getElementById("active");
const liToMainClosest = liToMain.closest("main");
console.log(liToMainClosest);

const liToMain2 = document.querySelector("#active");
const liToMainClosest2 = liToMain2.closest("main");
console.log(liToMainClosest2);

const mainToH1 = document.getElementsByTagName("main")[0].closest("h1");
console.log(mainToH1);

console.log("----- EXERCISE 16 -----");
// ----- matches -----
// Teste es an einem beliebigen ELement aus
// Nachtrag: Probiere verschiedene Wege bzw Selektoren aus, um das Element zu matchen

const isMatching = document.querySelector("#active").matches("section > li");
console.log("isMatching: ", isMatching);

const isMatching2 = document
  .querySelector("#active")
  .matches("section li:first-child");
console.log("isMatching2: ", isMatching2);

const isMatching3 = document
  .querySelector("#active")
  .matches("section li:nth-child(2)");
console.log("isMatching3: ", isMatching3);

const someEl = document.querySelector("ul");
const doesContain = document.querySelector("main").contains(someEl);
console.log("doesContain: ", doesContain);

console.log("----- EXERCISE 17 -----");
// ParentNode.children & ParentNode.querySelector()>
// probiere beide Befehle aus

const mainElChildren = document.querySelector("main").children;
console.log(mainElChildren.item(2));

console.log("----- EXERCISE 18 -----");
// Beachte NACHTRAG: createElements
// siehe oben in entsprechender Rubrik
