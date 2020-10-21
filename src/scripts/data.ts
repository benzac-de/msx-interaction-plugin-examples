import { MSXMenuRoot, MSXContentRoot, Tools } from "./lib/tvx-plugin-module.min";
import startData from "../msx/start.json";

/******************************************************************************/
//Interaction Data
/******************************************************************************/
export const InteractionData: MSXContentRoot = {
    type: "list",
    template: {
        type: "separate",
        layout: "0,0,2,4",
        icon: "msx-white-soft:gamepad",
        color: "msx-glass"
    },
    items: [{
        title: "Template",
        action: "interaction:load:" + Tools.getAbsoluteUrl("template.html")
    }, {
        title: "Search Example",
        action: "content:request:interaction:init@" + Tools.getAbsoluteUrl("search.html")
    }, {
        title: "Settings Example",
        action: "content:request:interaction:init@" + Tools.getAbsoluteUrl("settings.html")
    }, {
        title: "Observer Example",
        action: "content:request:interaction:init@" + Tools.getAbsoluteUrl("observer.html")
    }, {
        enumerate: false,
        type: "button",
        offset: "0,0,0,-1",
        icon: "refresh",
        label: "Reload",
        action: "interaction:reload"
    }, {
        enumerate: false,
        type: "button",
        offset: "0,0,0,-1",
        icon: "highlight-off",
        label: "Unload",
        action: "interaction:unload"
    }]
};
/******************************************************************************/

/******************************************************************************/
//Video Data
/******************************************************************************/
export const VideoData: MSXContentRoot = {
    type: "pages",
    template: {
        tag: "Web",
        type: "separate",
        layout: "0,0,2,4",
        icon: "msx-white-soft:movie",
        color: "msx-glass"
    },
    items: [{
        title: "Video 1",
        playerLabel: "Video 1",
        action: "video:http://msx.benzac.de/media/video1.mp4"
    }, {
        title: "Video 2",
        playerLabel: "Video 2",
        action: "video:http://msx.benzac.de/media/video2.mp4"
    }, {
        title: "Video 3",
        playerLabel: "Video 3",
        action: "video:http://msx.benzac.de/media/video3.mp4"
    }]
};
/******************************************************************************/

/******************************************************************************/
//Audio Data
/******************************************************************************/
export const AudioData: MSXContentRoot = {
    type: "pages",
    template: {
        tag: "Web",
        type: "separate",
        layout: "0,0,2,3",
        icon: "msx-white-soft:music-note",
        color: "msx-glass"
    },
    items: [{
        background: "http://msx.benzac.de/img/bg1.jpg",
        title: "Audio 1",
        playerLabel: "Audio 1",
        action: "audio:http://msx.benzac.de/media/audio1.mp3"
    }, {
        background: "http://msx.benzac.de/img/bg2.jpg",
        title: "Audio 2",
        playerLabel: "Audio 2",
        action: "audio:http://msx.benzac.de/media/audio2.mp3"
    }, {
        background: "http://msx.benzac.de/img/bg3.jpg",
        title: "Audio 3",
        playerLabel: "Audio 3",
        action: "audio:http://msx.benzac.de/media/audio3.mp3"
    }]
};
/******************************************************************************/

/******************************************************************************/
//Image Data
/******************************************************************************/
export const ImageData: MSXContentRoot = {
    type: "pages",
    template: {
        type: "default",
        layout: "0,0,3,2",
        color: "msx-glass",
        imageFiller: "cover",
        action: "image:context"
    },
    items: [{
        titleFooter: "Image 1",
        image: "http://msx.benzac.de/img/bg1.jpg",
        imageLabel: "Image 1"
    }, {
        titleFooter: "Image 2",
        image: "http://msx.benzac.de/img/bg2.jpg",
        imageLabel: "Image 2"
    }, {
        titleFooter: "Image 3",
        image: "http://msx.benzac.de/img/bg3.jpg",
        imageLabel: "Image 3"
    }, {
        titleFooter: "Image 4",
        image: "http://msx.benzac.de/img/test.jpg",
        imageLabel: "Image 4"
    }]
};
/******************************************************************************/

/******************************************************************************/
//Menu Data
/******************************************************************************/
export const MenuData: MSXMenuRoot = {
    name: startData.name,
    version: startData.version,
    headline: "Interaction Plugin Test",
    menu: [{
        icon: "gamepad",
        label: "Interaction",
        data: InteractionData
    }, {
        type: "separator"
    }, {
        icon: "video-library",
        label: "Videos",
        data: VideoData
    }, {
        icon: "library-music",
        label: "Audios",
        data: AudioData
    }, {
        icon: "photo-library",
        label: "Images",
        data: ImageData
    }]
};
/******************************************************************************/