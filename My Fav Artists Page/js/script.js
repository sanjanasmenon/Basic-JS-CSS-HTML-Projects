const artists = [
    {
        id: 0,
        name: "Sam Fender",
        genre: "Rock",
        favAlbum: "My Favorite Album: People Watching",
        lyric: '"I can\'t live under the notion that there\'s no reason at all for all this beauty in motion."',
        img: "https://i.pinimg.com/736x/c2/91/56/c2915627d19c06ad88164a17fa533957.jpg",
        desc: "If you're looking for music that can properly balance feelings of brightness, positivity, moodiness, and relatability, it doesn't get better than this! \
        Sam Fender's music peels back insights into reality that hit you emotionally and I just can't get over the clever, almost addictive instrumentation."
    },
    {
        id: 1,
        name: "Noah Kahan",
        genre: "Folk",
        favAlbum: "My Favorite Album: Stick Season (We'll All Be Here Forever)",
        lyric: '"You know I think about you all the time and my deep misunderstanding of your life."',
        img: "https://i.pinimg.com/736x/2b/a8/98/2ba89862e70e1c22c35bf6880d044052.jpg",
        desc: "Noah Kahan's music found me at a pivotal moment of my life and (not to be dramatic) I think it genuinely changed the trajectory of it. He paints \
        stories in his music that are rich in their understanding of the human experience. They're the kind of songs you just HAVE to scream at the top of your lungs \
        on a car ride."
    },
    {
        id: 2,
        name: "RAYE",
        genre: "R&B",
        favAlbum: "My Favorite Album: THIS MUSIC MAY CONTAIN HOPE.",
        lyric: '"...close your eyes and let this music get to working."',
        img: "https://i.pinimg.com/736x/f9/67/14/f9671465968e170825ea74b130cb3717.jpg",
        desc: "RAYE is one of the greatest voices of this generation! Not only is she a powerhouse vocally, her lyrics are incredibly well written, and her \
        music is such a fusion of genres you simply cannot put her in a box. Listening to her music feels like levitating. Every. Single. Time!"
    },
    {
        id: 3,
        name: "Gregory Alan Isakov",
        genre: "Folk",
        favAlbum: "My Favorite Album: This Empty Northern Hemisphere",
        lyric: '"I sold all this land to buy me some dreams."',
        img: "https://i.pinimg.com/1200x/ff/e0/77/ffe0771b3acad0a2d7e46dc3e0b46a17.jpg",
        desc: "There is something so comforting about Gregory Alan Isakov's music. It's got such a range from simple acoustic songs to swelling symphony numbers and \
        they carry such a vivid picture of the stories contained in each. This right here is quintessential folk music to me—atmospheric, calm, and beautiful."
    },
    {
        id: 4,
        name: "Olivia Dean",
        genre: "Pop",
        favAlbum: "My Favorite Album: The Art of Loving",
        lyric: '"The more you look, the more you find. It\'s all around you, all the time."',
        img: "https://i.pinimg.com/736x/2c/80/3a/2c803abd872666fb18fef3e0da479783.jpg",
        desc: "Olivia Dean's music is woven with such care, love, and passion that you can't help but feel a warmth spread through your chest whenever it comes on. A \
        warmth that is just as smooth as her vocals whenever it starts playing. It's the kind I can always turn to on hard days, that reminds me there is love in every \
        crevice of the world."
    }
];

//Artist elements
const img = document.getElementById("artist-photo");
const artistName = document.getElementById("artist-name");
const genre = document.getElementById("artist-genre");
const album = document.getElementById("artist-album");
const lyric = document.getElementById("artist-lyric");
const desc = document.getElementById("artist-desc");

//Buttons
const backBtn = document.querySelector(".back");
const forwardBtn = document.querySelector(".forward");

let currId = 0;

function setCurrent()
{
    img.src = artists[currId].img;
    artistName.textContent = artists[currId].name;
    genre.textContent = artists[currId].genre;
    album.textContent = artists[currId].favAlbum;
    lyric.textContent = artists[currId].lyric;
    desc.textContent = artists[currId].desc;
}

function moveBackwards()
{
    if(currId == 0)
    {
        currId = artists.length - 1;
    }
    else 
    {
        currId--;
    }
    setCurrent();
}

function moveForwards()
{
    if(currId == artists.length - 1)
    {
        currId = 0;
    }
    else 
    {
        currId++;
    }
    setCurrent();
}

window.addEventListener("DOMContentLoaded", setCurrent); //sets the window to automatically open to artist 1

backBtn.addEventListener("click", moveBackwards);
forwardBtn.addEventListener("click", moveForwards);
