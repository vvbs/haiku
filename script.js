// 俳句のパターン
const haikuPatterns = [
    ["青い空", "白い雲", "夏の朝"],
    ["景色に映える", "遠くの街に", "静かな朝に"],
    ["花が咲く", "雨が降る", "春の風"],
];

// ボタン
const generateButton = document.getElementById("generateButton");

// 俳句を表示する要素
const haikuElement = document.getElementById("haiku");

// ボタンがクリックされたときの処理
generateButton.addEventListener("click", () => {
    const pattern = getRandomPattern(haikuPatterns);
    const haiku = pattern.join("\n");
    haikuElement.textContent = haiku;
});

// ランダムな俳句パターンを選ぶ関数
function getRandomPattern(patterns) {
    const randomIndex = Math.floor(Math.random() * patterns.length);
    return patterns[randomIndex];
}
