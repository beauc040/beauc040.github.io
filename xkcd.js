var wordList = [
        "the", "of", "to", "and", "a", "in", "is", "it", "you", "that", "he", "was", "for", "on", "are", "with", "as", "i", "his", "they", "be", "at", "one", "have", "this", "from", "or", "had", "by", "hot", "word", "but", "what", "some", "we", "can", "out", "other", "were", "all", "there", "when", "up", "use", "your", "how", "said", "an", "each", "she", "which", "do", "their", "time", "if", "will", "way", "about", "many", "then", "them", "write", "would", "like", "so", "these", "her", "long", "make", "thing", "see", "him", "two", "has", "look", "more", "day", "could", "go", "come", "did", "number", "sound", "no", "most", "people", "my", "over", "know", "water", "than", "call", "first", "who", "may", "down", "side", "been", "now", "find", "any", "new", "work", "part", "take", "get", "place", "made", "live", "where", "after", "back", "little", "only", "round", "man", "year", "came", "show", "every", "good", "me", "give", "our", "under", "name", "very", "through", "just", "form", "sentence", "great", "think", "say", "help", "low", "line", "differ", "turn", "cause", "much", "mean", "before", "move", "right", "boy", "old", "too", "same", "tell", "does", "set", "three", "want", "air", "well", "also", "play", "small", "end", "put", "home", "read", "hand", "port", "large", "spell", "add", "even", "land", "here", "must", "big", "high", "such", "follow", "act", "why", "ask", "men", "change", "went", "light", "kind", "off", "need", "house", "picture", "try", "us", "again", "animal", "point", "mother", "world", "near", "build", "self", "earth", "father", "head", "stand", "own", "page", "should", "country", "found", "answer", "school", "grow", "study", "still", "learn", "plant", "cover", "food", "sun", "four", "between", "state", "keep", "eye", "never", "last", "let", "thought", "city", "tree", "cross", "farm", "hard", "start", "might", "story", "saw", "far", "sea", "draw", "left", "late", "run", "dont", "while", "press", "close", "night", "real", "life", "few", "north", "open", "seem", "together", "next", "white", "children", "begin", "got", "walk", "example", "ease", "paper", "group", "always", "music", "those", "both", "mark", "often", "letter", "until", "mile", "river", "car", "feet", "care", "second", "book", "carry", "took", "science", "eat", "room", "friend", "began", "idea", "fish", "mountain", "stop", "once", "base", "hear", "horse", "cut", "sure", "watch", "color", "face", "wood", "main", "enough", "plain", "girl", "usual", "young", "ready", "above", "ever", "red", "list", "though", "feel", "talk", "bird", "soon", "body", "dog", "family", "direct", "pose", "leave", "song", "measure", "door", "product", "black", "short", "numeral", "class", "wind", "question", "happen", "complete", "ship", "area", "half", "rock", "order", "fire", "south", "problem", "piece", "told", "knew", "pass", "since", "top", "whole", "king", "space", "heard", "best", "hour", "better", "true", "during", "hundred", "five", "remember", "step", "early", "hold", "west", "ground", "interest", "reach", "fast", "verb", "sing", "listen", "six", "table", "travel", "less", "morning", "ten", "simple", "several", "vowel", "toward", "war", "lay", "against", "pattern", "slow", "center", "love", "person", "money", "serve", "appear", "road", "map", "rain", "rule", "govern", "pull", "cold", "notice", "voice", "unit", "power", "town", "fine", "certain", "fly", "fall", "lead", "cry", "dark", "machine", "note", "wait", "plan", "figure", "star", "box", "noun", "field", "rest", "correct", "able", "pound", "done", "beauty", "drive", "stood", "contain", "front", "teach", "week", "final", "gave", "green", "oh", "quick", "develop", "ocean", "warm", "free", "minute", "strong", "special", "mind", "behind", "clear", "tail", "produce", "fact", "street", "inch", "multiply", "nothing", "course", "stay", "wheel", "full", "force", "blue", "object", "decide", "surface", "deep", "moon", "island", "foot", "system", "busy", "test", "record", "boat", "common", "gold", "possible", "plane", "stead", "dry", "wonder", "laugh", "thousand", "ago", "ran", "check", "game", "shape", "equate", "hot", "miss", "brought", "heat", "snow", "tire", "bring", "yes", "distant", "fill", "east", "paint", "language", "among", "grand", "ball", "yet", "wave", "drop", "heart", "am", "present", "heavy", "dance", "engine", "position", "arm", "wide", "sail", "material", "size", "vary", "settle", "speak", "weight", "general", "ice", "matter", "circle", "pair", "include", "divide", "syllable", "felt", "perhaps", "pick", "sudden", "count", "square", "reason", "length", "represent", "art", "subject", "region", "energy", "hunt", "probable", "bed", "brother", "egg", "ride", "cell", "believe", "fraction", "forest", "sit", "race", "window", "store", "summer", "train", "sleep", "prove", "lone", "leg", "exercise", "wall", "catch", "mount", "wish", "sky", "board", "joy", "winter", "sat", "written", "wild", "instrument", "kept", "glass", "grass", "cow", "job", "edge", "sign", "visit", "past", "soft", "fun", "bright", "gas", "weather", "month", "million", "bear", "finish", "happy", "hope", "flower", "clothe", "strange", "gone", "jump", "baby", "eight", "village", "meet", "root", "buy", "raise", "solve", "metal", "whether", "push", "seven", "paragraph", "third", "shall", "held", "hair", "describe", "cook", "floor", "either", "result", "burn", "hill", "safe", "cat", "century", "consider", "type", "law", "bit", "coast", "copy", "phrase", "silent", "tall", "sand", "soil", "roll", "temperature", "finger", "industry", "value", "fight", "lie", "beat", "excite", "natural", "view", "sense", "ear", "else", "quite", "broke", "case", "middle", "kill", "son", "lake", "moment", "scale", "loud", "spring", "observe", "child", "straight", "consonant", "nation", "dictionary", "milk", "speed", "method", "organ", "pay", "age", "section", "dress", "cloud", "surprise", "quiet", "stone", "tiny", "climb", "cool", "design", "poor", "lot", "experiment", "bottom", "key", "iron", "single", "stick", "flat", "twenty", "skin", "smile", "crease", "hole", "trade", "melody", "trip", "office", "receive", "row", "mouth", "exact", "symbol", "die", "least", "trouble", "shout", "except", "wrote", "seed", "tone", "join", "suggest", "clean", "break", "lady", "yard", "rise", "bad", "blow", "oil", "blood", "touch", "grew", "cent", "mix", "team", "wire", "cost", "lost", "brown", "wear", "garden", "equal", "sent", "choose", "fell", "fit", "flow", "fair", "bank", "collect", "save", "control", "decimal", "gentle", "woman", "captain", "practice", "separate", "difficult", "doctor", "please", "protect", "noon", "whose", "locate", "ring", "character", "insect", "caught", "period", "indicate", "radio", "spoke", "atom", "human", "history", "effect", "electric", "expect", "crop", "modern", "element", "hit", "student", "corner", "party", "supply", "bone", "rail", "imagine", "provide", "agree", "thus", "capital", "wont", "chair", "danger", "fruit", "rich", "thick", "soldier", "process", "operate", "guess", "necessary", "sharp", "wing", "create", "neighbor", "wash", "bat", "rather", "crowd", "corn", "compare", "poem", "string", "bell", "depend", "meat", "rub", "tube", "famous", "dollar", "stream", "fear", "sight", "thin", "triangle", "planet", "hurry", "chief", "colony", "clock", "mine", "tie", "enter", "major", "fresh", "search", "send", "yellow", "gun", "allow", "print", "dead", "spot", "desert", "suit", "current", "lift", "rose", "continue", "block", "chart", "hat", "sell", "success", "company", "subtract", "event", "particular", "deal", "swim", "term", "opposite", "wife", "shoe", "shoulder", "spread", "arrange", "camp", "invent", "cotton", "born", "determine", "quart", "nine", "truck", "noise", "level", "chance", "gather", "shop", "stretch", "throw", "shine", "property", "column", "molecule", "select", "wrong", "gray", "repeat", "require", "broad", "prepare", "salt", "nose", "plural", "anger", "claim", "continent", "oxygen", "sugar", "death", "pretty", "skill", "women", "season", "solution", "magnet", "silver", "thank", "branch", "match", "suffix", "especially", "fig", "afraid", "huge", "sister", "steel", "discuss", "forward", "similar", "guide", "experience", "score", "apple", "bought", "led", "pitch", "coat", "mass", "card", "band", "rope", "slip", "win", "dream", "evening", "condition", "feed", "tool", "total", "basic", "smell", "valley", "nor", "double", "seat", "arrive", "master", "track", "parent", "shore", "division", "sheet", "substance", "favor", "connect", "post", "spend", "chord", "fat", "glad", "original", "share", "station", "dad", "bread", "charge", "proper", "bar", "offer", "segment", "slave", "duck", "instant", "market", "degree", "populate", "chick", "dear", "enemy", "reply", "drink", "occur", "support", "speech", "nature", "range", "steam", "motion", "path", "liquid", "log", "meant", "quotient", "teeth", "shell", "neck"
];

// 1 = left, 2 = right
var hand = {
    'q':1,
    'a':1,
    'z':1,
    'w':1,
    's':1,
    'x':1,
    'e':1,
    'd':1,
    'c':1,
    'r':1,
    'f':1,
    'v':1,
    't':1,
    'g':1,
    'b':1,
    'y':2,
    'h':2,
    'n':2,
    'u':2,
    'j':2,
    'm':2,
    'i':2,
    'k':2,
    'o':2,
    'l':2,
    'p':2,
};

function isEasyToType(word) {
    var lasthand = hand[word[0]];
    var lastchar = word[0];
    for (var j = 1; j < word.length; j++) {
        if (hand[word[j]] == lasthand && word[j] != lastchar)  // Same hand allowed only if same character
            return false;  // Same hand but different character is hard to type
        lasthand = hand[word[j]];
        lastchar = word[j];
    }
    return true;
}

function selectWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}

// Filter words to new max length
function filterWords(words, maxlength) {
    // Filter out words that are too long
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.length > maxwordlength) {
            words.splice(i, 1);  // Remove word
            i--;  // Reset counter to one less (to not skip words)
            continue;
        }
    }
}

function createPassword() {
    var minwordlength = document.getElementById("minwordlength").value;
    var maxwordlength = document.getElementById("maxwordlength").value;
    var maxlength = document.getElementById("maxlength").value;
    var easytotype = document.getElementById("easytotype").checked;
    var numsubs = document.getElementById("numsubs").checked;

    if (maxwordlength < minwordlength) return;
    if (maxlength < minwordlength * 4) return;

    var words = wordList.slice(); // get copy of words

    // Filter out words that are too long, too short, or not easy (if easy specified)
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.length > maxwordlength || word.length < minwordlength || (easytotype && !isEasyToType(word))) {
            words.splice(i, 1);  // Remove word
            i--;  // Reset counter to one less (to not skip words)
            continue;
        }
    }

    var numsubdict = {
        "e": 3,
        "i": 1,
        "o": 0,
    };

    var first = selectWord(words);
    var second = selectWord(words);
    var third = selectWord(words);
    var fourth = selectWord(words);

    var passwords = [first,second,third,fourth];

    var newWords = words.slice()
    while (passwords.join("").length > maxlength) {  // while sum of lengths greater than max allowed
        passwords.sort((a,b)=>a.length-b.length);  // sort by length
        var currentMax = maxlength - passwords.join("").length + passwords[3].length;  // Set current max to max available given other words
        currentMax = currentMax <= minwordlength ? minwordlength : currentMax;  // Ensure currentMax allowed by constraints
        filterWords(newWords, currentMax);  // Filter down to new max
        passwords[3] = selectWord(newWords);  // replace largest word with a new one with one less max length
    }

    // Once all four words are valid and satisfy length/ease constraints, replace with numbers
    // Numbers not subject to "easytotype" calculations because they will make it harder anyway
    if (numsubs) {
        for (var i = 0; i < passwords.length; i++) {
            var w = passwords[i];
            for (var j = 0; j < w.length; j++) {
                if (w[j] in numsubdict) {  // If dict has character
                    passwords[i] = w.substring(0,j) + numsubdict[w[j]] + w.substring(j+1);  // Change char to number
                    w = passwords[i];  // Update current word as well, otherwise it only keeps last conversion
                }
            }
        }
    }

    var table = document.getElementById("passwords");
    table.innerHTML += "<tr><td>" + passwords.join("</td><td>") + "</td>";
}

function listPasswords() {
    var table = document.getElementById("passwords");
    table.innerHTML = "";
    for (var i = 0; i < 10; i++) {
        createPassword();
    }
}

function updateLength() {
    var maxlength = document.getElementById("maxlength").value;
    var lengthval = document.getElementById("lengthval");

    lengthval.innerHTML = maxlength;
}

window.onload = function () { updateLength(); listPasswords(); }
