const nouns = ["青い空", "白い雲", "秋の風", "紅葉の葉", "小さなつぼみ"];
const verbs = ["揺れる", "歌う", "流れる", "咲く", "響く"];
const adjectives = ["静かな", "明るい", "深い", "新しい", "遠い"];

// ボタン要素を取得
const generateButton = document.getElementById("generateButton");

// 俳句を表示する要素を取得
const haikuElement = document.getElementById("haiku");

// ボタンがクリックされたときの処理
generateButton.addEventListener("click", () => {
    const haiku = generateHaiku();
    haikuElement.textContent = haiku;
});

// ランダムな俳句を生成する関数
function generateHaiku() {
    const noun = getRandomElement(nouns);
    const verb = getRandomElement(verbs);
    const adjective = getRandomElement(adjectives);
    
    return `${adjective} ${noun}が ${verb}`;
}

// 配列からランダムな要素を取得する関数
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
