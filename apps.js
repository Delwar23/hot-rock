function getLyric(artist, title) {
    console.log("getLyric clicked");
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayLyric(data.lyrics))
    function displayLyric(text) {
        console.log(text);
        const singleLyric = document.getElementById("singleLyric");
        singleLyric.innerText=text;
    }
}

function displaySongs() {
    const searchSongs = document.getElementById('searchSongs').value;

    const url = `https://api.lyrics.ovh/suggest/${searchSongs}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => songslist(data.data))

    function songslist(songs) {
        const songsdisplay = document.getElementById('display');
        songsdisplay.innerHTML = ""
        songs.forEach(song => {
            // console.log(song.artist.name);
            // console.log(song.title);




            const songDiv = document.createElement('div');
            songDiv.className = "search-result col-md-8 mx-auto py-4";
            songDiv.innerHTML = ` 
            <div class="single-result row align-items-center my-3 p-3">
                <div class="col-md-9">
                 <h3 class="lyrics-name">${song.title}</h3>
                    <p class="author lead">Album by <span>${song.artist.name}</span></p>
                    
                    <audio controls>
                    <source src="${song.preview}" type="audio/ogg">
                    </audio>
                 
                 </div>
                <div class="col-md-3 text-md-right text-center">
                    <button  onclick="getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
                </div>
          </div>`;

            songsdisplay.appendChild(songDiv);

        });


    }

}