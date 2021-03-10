import { v4 as uuidv4 } from "uuid";

function MusicList () {
    return [
        {
          name: "Deceiver",
          artist: "Disturbed",
          cover: "https://lastfm.freetls.fastly.net/i/u/ar0/4fe09361eb8a41e18eb06279bb8bceb6.jpg",
          id: uuidv4(),
          active: true,
          color: ['#D5AB5F', '#1E0E0C'],
          audio: '//downloader.disk.yandex.ru/disk/e9dd55496ef5ce867e1a14205a2ff7695e9dcc55bc252b2cd580a2c4800d4858/6048b340/LBoLoXX70Oc796ZkjEH1I_qVLtU_RwkithbeYrEMs8_URiAkYnRoJ7GQfB2hzz1rEjRGD0JBzpaauz3-KsFmAw%3D%3D?uid=328273838&filename=03%20-%20Deceiver.mp3&disposition=inline&hash=&limit=0&content_type=audio%2Fmpeg&owner_uid=328273838&fsize=9228725&hid=885811aae6d0238dbfd493e053c0fff7&media_type=audio&tknv=v2&etag=537e13f1533794e1414b4f24ba03575b'
        },
        {
            name: "Eve",
            artist: "Asking Alexandria",
            cover: "https://avatars.yandex.net/get-music-content/2266607/6a1d48c3.a.9520999-1/m1000x1000",
            id: uuidv4(),
            active: false,
            color: ['#A8ADB0', '#CD1615'],
            audio: '//downloader.disk.yandex.ru/disk/5d1be95466810fce51302c6d55d29b3e32bfb279d74d2335d3e1a3fb80d6be0a/6048b38f/fKqInKw3d7bLFOeFnMGnhL_hfY57WYDTB-SqN6XSIkp6sTRAFR-H-F-GV3rlWe8eiTlecTFsUMweABoTJpd1wQ6d5UTUDrgE8-jDt5zbuOir8npumZHI4midPdWhecNq?uid=328273838&filename=09.%20Eve.mp3&disposition=inline&hash=&limit=0&content_type=audio%2Fmp3&owner_uid=328273838&fsize=9588639&hid=83f704f76ed47d07aa0a0ac8b5a9297b&media_type=audio&tknv=v2&etag=c8e86fa0cd8958bb401183a482b84798'
        },
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
              name: "Longing",
              artist: "Makzo",
              cover: "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
              id: uuidv4(),
              active: false,
              color: ['#536AA3', '#F38334'],
              audio: 'https://mp3.chillhop.com/serve.php/?mp3=11777'
          },
          
    ]
}

export default MusicList;