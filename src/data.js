import { v4 as uuidv4 } from "uuid";

function MusicList () {
    return [
        {
            name: "Bliss",
            artist: "Misha, Jussi Halme",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/5bff1a6f1bd0e2168d29b4c841b811598135e457-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#9E8CAD', '#2A416D'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9248'
        },
        {
            name: "Feel",
            artist: "Misha",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/6194e7e2fd3023b82a31b0043fc34afce3be6551-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#FBEAD6', '#533B42'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=8181'
        },
        {
            name: "Longing",
            artist: "Makzo",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#536AA3', '#F38334'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=11777'
        },
        {
            name: "Brazil",
            artist: "Monma, Misha, Jussi Halme",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/87506c6ad4c74ecfef7f61b52a4b3e0ab0564390-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#7368C6', '#EB8BBB'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=8279'
        },
          
    ]
}

export default MusicList;