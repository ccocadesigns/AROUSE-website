document.addEventListener("DOMContentLoaded", async() => {
  const playPauseBtn = document.getElementById("pause-play-btn")
  const volBtn = document.getElementById("vol-btn")

  const audioPlayer = document.getElementById("audio-player")

  const albumCoverHolder = document.getElementById("album-cover-img")

  const currentlyPlayingIndicator = document.getElementById("currently-playing")
  const recentlyPlayedBox = document.getElementById("previously-played")

  playState = true
  muteState = false

  // NOTE: Chrome policy doesn't allow for immediate autoplay
  // audioPlayer.play()

  function playPauseToggle(){
    if(playState){
      playPauseBtn.innerHTML = "▶"
      audioPlayer.pause()
    } else {
      playPauseBtn.innerHTML = "⏸"
      audioPlayer.play()
    }
    playState = !playState
  }

  function muteToggle(){
    if(!muteState){
      volBtn.innerHTML = "🔇"
      audioPlayer.muted = true
    } else {
      volBtn.innerHTML = "🔊"
      audioPlayer.muted = false
    }
    muteState = !muteState
  }

  document.addEventListener("keypress", (e) => {
    if(e.key === "k"){
      playPauseToggle()
    }

    if(e.key === "m"){
      muteToggle()
    }
  })

  playPauseBtn.onclick = () => {
    playPauseToggle() 
  }

  volBtn.onclick = () => {
    muteToggle()
  }

  async function updateUI() {
    let parsedRes = null
    
    try{
      // This is the actual AROUSE endpoint, the other one is just for testing purposes
      // const rawRes = await fetch("https://api.live365.com/station/a05133") 
      const rawRes = await fetch("https://api.live365.com/station/a09646")
      parsedRes = await rawRes.json()
    } catch{
      // Retry on next setInterval call
      console.error("Live365 API query failed!")
      recentlyPlayedBox.innerHTML = ""
      currentlyPlayingIndicator = "Connecting to station..."
      return
    }
    
    // List out all the recently played tracks
    const recentlyPlayed = parsedRes["last-played"] 
    recentlyPlayedBox.innerHTML = ""
    recentlyPlayed.forEach(element => {
      let d = new Date(element["start"])
      recentlyPlayedBox.innerHTML += `
        <p>[${d.toLocaleTimeString("en-US", {hour:"2-digit", minute:"2-digit"})}] ${element["title"]} - ${element["artist"]}</p>
      `
    })

    // Current track and album art renders
    if(parsedRes["is_playing"] === false) {
      currentlyPlayingIndicator.innerHTML = "Station offline..."
    } else {
      let current = parsedRes["current-track"]
      currentlyPlayingIndicator.innerHTML = `${current["title"]} - ${parsedRes["current-track"]["artist"]}`
      albumCoverHolder.src = current["art"]
    }
  } 

  updateUI()

  setInterval(async() => {
    // Check for UI updates every 3 seconds
    updateUI()
  }, 3000)
})