document.addEventListener("DOMContentLoaded", async() => {
  const playPauseBtn = document.getElementById("pause-play-btn")
  const volBtn = document.getElementById("vol-btn")

  const audioPlayer = document.getElementById("audio-player")

  const albumCoverHolder = document.getElementById("album-cover-img")

  const currentlyPlayingIndicator = document.getElementById("currently-playing")
  const recentlyPlayedBox = document.getElementById("previously-played")

  playState = true
  muteState = false

  audioPlayer.play()

  playPauseBtn.onclick = () => {
    if(playState){
      playPauseBtn.innerHTML = "▶"
      audioPlayer.pause()
    } else {
      playPauseBtn.innerHTML = "⏸"
      audioPlayer.play()
    }
    playState = !playState
  }

  volBtn.onclick = () => {
    if(!muteState){
      volBtn.innerHTML = "🔇"
      audioPlayer.muted = true
    } else {
      volBtn.innerHTML = "🔊"
      audioPlayer.muted = false
    }
    muteState = !muteState
  }

  setInterval(async() => {
    // const rawRes = await fetch("https://api.live365.com/station/a05133")
    const rawRes = await fetch("https://api.live365.com/station/a09646")
    const parsedRes = await rawRes.json()
    
    const recentlyPlayed = parsedRes["last-played"] 

    recentlyPlayedBox.innerHTML = ""

    recentlyPlayed.forEach(element => {
      let d = new Date(element["start"])
      recentlyPlayedBox.innerHTML += `
        <p>[${d.toLocaleTimeString("en-US", {hour:"2-digit", minute:"2-digit"})}] ${element["title"]} - ${element["artist"]}</p>
      `
    })

    if(parsedRes["is_playing"] === false) {
      currentlyPlayingIndicator.innerHTML = "Station offline..."
    } else {
      let current = parsedRes["current-track"]
      currentlyPlayingIndicator.innerHTML = `${current["title"]} - ${parsedRes["current-track"]["artist"]}`
      albumCoverHolder.src = current["art"]
    }

  }, 5000)
})