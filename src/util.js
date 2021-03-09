import { v4 as uuidv4 } from "uuid";

function MusicList () {
    return [
        {
          name: "Deceiver",
          artist: "Disturbed",
          cover: "https://avatars.yandex.net/get-music-content/34131/57ab0209.a.18206-2/m1000x1000",
          id: uuidv4(),
          active: true,
          color: ['#D5AB5F', '#1E0E0C'],
          audio: './music/03 - Deceiver.mp3'
        },
        {
            name: "Eve",
            artist: "Asking Alexandria",
            cover: "https://avatars.yandex.net/get-music-content/2266607/6a1d48c3.a.9520999-1/m1000x1000",
            id: uuidv4(),
            active: false,
            color: ['#A8ADB0', '#CD1615'],
            audio: './music/09. Eve.mp3'
        }
    ]
}

export default MusicList;