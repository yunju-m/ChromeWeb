const quotes = [
{
    quote: " 하루하루를 마지막이라고 생각하라. 그러면 예측할 수 없는 시간은 그대에게 더 많은 시간을 줄 것이다.",
    author: "호레스 ",
},
{
    quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
    author: "괴테",
},
{
    quote: "내일이란 오늘의 다른 이름일 뿐이다.",
    author: "윌리엄 포크너",
},
{
    quote: "화려한 일을 추구하지 말라. 중요한 것은 스스로의 재능이며, 자신의 행동에 쏟아붓는 사랑의 정도이다. ",
    author: "머더 테레사",
},
{
    quote: "마음만을 가지고 있어서는 안 된다. 반드시 실천하여야 한다.",
    author: "이소룡",
},
{
    quote: "건강에 대한 지나친 걱정만큼 건강에 치명적인 것은 없다.",
    author: "벤자민 프랭클린",
},
{
    quote: "오늘이란 신어야 할 신발과 같은 것이다.",
    author: "스티브 올렌",
},
{
    quote: "완벽한 지도는 없다. 중요한 것은 나의 목적지가 어디인지 항상 잊지 않는 것이다.",
    author: "한비야",
},
{
    quote: "오늘이라는 날은 두번다시 오지 않는다는 것을 잊지 마라.",
    author: "알리기에리 단테",
},
{
    quote: "천재란 노력을 계속할 수 있는 재능을 가진 사람이다.",
    author: "토머스 에디슨",
},
{
    quote: "계획 없는 목표는 한낱 꿈에 불과하다.",
    author: "생텍쥐페리",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;