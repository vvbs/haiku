const nouns = ["笑ふがごとき", "昼寝の間に", "名もなき山の","小さなつぼみ","真昼の眠気","故郷の路に","空青きまま","身にまとふもの","横断歩道","隣の庭の","梅の花散る","まだ宵ながら","悲鳴を上げる","見える日の出は","嵐の波間を","ガラスのような","今は亡き父","私の想い","見慣れた君が","ふわりふわりと","太古の時間","手に握られた","喜ぶ母の","夜の留守番","帰路の途中の","すすきの中の","はじけた泡の","遠のく意識","乾いた石に","黒光りする","進む手を止め","でんでんむしが","微笑む私","まるで太陽","かわいい喃語で","色鉛筆で"];
const verbs = ["揺れにけり", "風そよぐ", "夜の坂", "ながれけり", "焚火かな","花開く","陽だまりに","春あけぼの","春の富士","法隆寺","ぼたん雪","雪解けよ","夕空よ","ひとり旅","しゃぼん玉","草の餅","梅の花","ゆうばえて","やまざくら","春のゆめ","揺れやまず","おぼろ月","大自然","かきつばた","牡丹咲く","蜃気楼","静けさよ","影一つ","落ち椿","星のなか",
              "ひるがえり","わかば山","すずしさよ","蝉の声","みどりさす","金魚鉢","四季を知る","大掃除","夢を見る","北枕"];
const adjectives = ["あの山の", "こぼれ落つ", "静かなり", "とりとめし", "なつかしや","のぼりゆく","お月様","黄金色","写し出す","日傘差し","入試前","染まる空","利根川に","だんだんと","流れゆき","光る星"];

// ボタン要素取得
const generateButton = document.getElementById("generateButton");

// 俳句を表示する要素取得
const haikuElement = document.getElementById("haiku");

// ボタンクリック処理
generateButton.addEventListener("click", () => {
    const haiku = generateHaiku();
    haikuElement.textContent = haiku;
});

// 俳句生成
function generateHaiku() {
    const noun = getRandomElement(nouns);
    const verb = getRandomElement(verbs);
    const adjective = getRandomElement(adjectives);
        return `${adjective} ${noun} ${verb}`;
}

// 配列からランダムな要素取得する関数
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
