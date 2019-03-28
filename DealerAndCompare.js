if (process.argv.length < 3) { console.log('請輸入想要抽幾張牌.'); }

//模式處理
let modeKey;
if (!process.argv[3] || isNaN(process.argv[3]) || process.argv[3] < 0)
  modeKey = 0;
else if (process.argv[3] > 2)
  modeKey = 2;
else
  modeKey = parseInt(process.argv[3]);
const drawKey = ( process.argv[2] && !isNaN(process.argv[2]) ) && process.argv[2] || 2;
const shuffleMode = modeKey;
const suits = ['S', 'H', 'D', 'C'];	//Spade 黑桃 Heart 紅心 Diamond 方塊 Club 梅花
const points = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const cards = [];

//建立牌組
let cardsSuitsIndex; let cardsPointsIndex;
for (cardsSuitsIndex = 3; cardsSuitsIndex >= 0; cardsSuitsIndex--)
  for (cardsPointsIndex = 0; cardsPointsIndex < 13; cardsPointsIndex++)
    cards.push(points[cardsPointsIndex] + suits[cardsSuitsIndex]);
console.log('原始牌組 : \n%s\n',cards);

//洗牌
let shuffledCards = cards.concat();

let shuffledIndex = 0;
switch (shuffleMode) {
  case 0:
    for (shuffledIndex; shuffledIndex < cards.length; shuffledIndex++) {
      const randomIndex = Math.floor(Math.random() * 52);
      const tempCard = shuffledCards[randomIndex];

      shuffledCards[randomIndex] = shuffledCards[shuffledIndex];
      shuffledCards[shuffledIndex] = tempCard;
    }
    break;
  case 1:
    for (shuffledIndex = cards.length - 1; shuffledIndex > 0; shuffledIndex--) {
      const randomIndex = Math.floor(Math.random() * (shuffledIndex + 1));
			
      [shuffledCards[shuffledIndex], shuffledCards[randomIndex]] = [shuffledCards[randomIndex], shuffledCards[shuffledIndex]]
    }
    break;
  case 2:
    shuffledCards.forEach((item,index)=> {
      const randomIndex = Math.floor(Math.random() * shuffledCards.length);

      [shuffledCards[index], shuffledCards[randomIndex]] = [shuffledCards[randomIndex], shuffledCards[index]]
    });
    break;
}
console.log('洗後牌組 : \n%s\n',shuffledCards);

//抽牌後比大小
let drawCards = [];
let sortCards = [];
let drawCount = drawKey;
let drawIndex = 0;
for (drawIndex;drawIndex<drawCount;drawIndex++) 
  drawCards.push(cards[Math.floor(Math.random() * shuffledCards.length)])       
for (let card in drawCards)
  sortCards.push(cards.indexOf(drawCards[card]));
sortCards.sort((a, b) => {return a - b});
for (let card in sortCards) 
  sortCards[card] = cards[sortCards[card]];
console.log(`分別抽到 : \n${drawCards}, \n依升冪排序為 : \n${sortCards}\n總計長度 : ${sortCards.length}；不重複長度 : ${[...(new Set(sortCards))].length}`);