// 俳句のパターン
const haikuPatterns = [
    ["青い空", "白い雲", "夏の日"],
    ["秋の風", "紅葉の葉", "静かな朝"],
    ["花が咲く", "風に揺れる", "春の日"],
    // さらに他のパターンを追加できます
];

// ボタン要素を取得
const generateButton = document.getElementById("generateButton");

// 俳句を表示する要素を取得
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
