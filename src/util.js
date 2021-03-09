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
          audio: 'https://s18vla.storage.yandex.net/get-mp3/92ac3217047a5255316aeaebd438bf399443d9b5754baa5c4956a9b45e1dd3ba/0005bd1a4ad296b4//rmusic/U2FsdGVkX18_U13HdpswVRNQc7q9R0DxP9wlc0pRjKag-C8swAcgm5bahhWF1uTEZFWLJvV_VkQb1Xpcfb02EBI1vGHF4CJWbpnpMnizV1I/92ac3217047a5255316aeaebd438bf399443d9b5754baa5c4956a9b45e1dd3ba/35895?track-id=179321&play=false'
        },
        {
            name: "Eve",
            artist: "Asking Alexandria",
            cover: "https://avatars.yandex.net/get-music-content/2266607/6a1d48c3.a.9520999-1/m1000x1000",
            id: uuidv4(),
            active: false,
            color: ['#A8ADB0', '#CD1615'],
            audio: 'https://s138sas.storage.yandex.net/get-mp3/28207050e2a1da4c31c38c3b5b2c06ce7a71f917aa7912b1860ab466a7a01975/0005bd1a36cc4fb2//rmusic/U2FsdGVkX1_7solWCmyd3QUtwF9-G79aORuY3c-Z0J1wKPH5_9dbDomdHryXSohKvlRl60Mp8BXA-nfzd6IP0wSsWvHGpE9kjcihlG4E6rQ/28207050e2a1da4c31c38c3b5b2c06ce7a71f917aa7912b1860ab466a7a01975/37315?track-id=38251902&play=false'
        }
    ]
}

export default MusicList;