const nouns = ["青い空", "白い雲", "秋の風", "紅葉の葉", "小さなつぼみ","真昼の眠気","故郷の路に","空青きまま","身にまとふもの","横断歩道"];
const verbs = ["揺れにけり", "風そよぐ", "夜の坂", "ながれけり", "焚火かな"];
const adjectives = ["あの山の", "こぼれ落つ", "静かなり", "とりとめし", "なつかしや","のぼりゆく"];

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
        return `${adjective} ${noun} ${verb}`;
}

// 配列からランダムな要素を取得する関数
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
