let uploadedDataArray; //holds results from user uploaded data

const randomizer = document.getElementById("randomize-btn"); //Randomize button on first page
const secondRandomizer = document.getElementById("randomize-btn-2"); //Randomize button on second page
const homePage = document.getElementById("home-page"); //Initial page
const randomizerPage = document.getElementById("randomizer-page"); //Randomized Album page
let randomNum = 0;

//Changeable album details
const albumTitle = document.getElementById("album-name");
const albumCover = document.getElementById("album-cover");
const albumArtist = document.getElementById("artist-name");
const albumType = document.getElementById("album-type");


const csvFile = document.getElementById("csvFile");

csvFile.addEventListener("change", function () {
   if (csvFile.files && csvFile.files.length > 0) { //Checks to see if the files inputted and if the array of those files is greater than 0
    processFile(csvFile.files[0]);
    randomizer.style.display = "block"; // Randomize button shows up
   } 
});

function processFile (file)
{ 
    if (!file) {
        return;
    }
    const parsed = Papa.parse(file, {
        delimeter: "",
        newline: "",
        header: true,
        complete: function(results, file) {
            uploadedDataArray = results; //Maybe make a new variable and put the papa parse results into that? Then call the randomizeAlbum func when user clocks on a randomize button
        }
    });
}

function randomizeAlbum (res) { //randomly picks an album from the uploaded spreadsheet
    let curr = Math.floor(Math.random() * res.data.length);
    // curr will hold current random index, then we will check if that index has already been picked to avoid randomizing the same album twice in a row
    while (randomNum == curr && res.data.length > 1)
    {
        curr = Math.floor(Math.random() * res.data.length);
    }
    randomNum = curr;
    return res.data[randomNum];
}

function updatePageDetails (album)
{
    albumTitle.textContent = album.Album;
    albumArtist.textContent = album.Artist;
    if (album.Image) {
        albumCover.src = album.Image;
    }
    if (album.Type) {
        albumType.textContent = album.Type;
    }
}

randomizer.addEventListener("click", function() {
    let A = randomizeAlbum(uploadedDataArray);
    homePage.style.display = "none";
    randomizerPage.style.display = "flex";
    updatePageDetails(A);
});

secondRandomizer.addEventListener("click", function () {
    let B = randomizeAlbum(uploadedDataArray);
    updatePageDetails(B);
});