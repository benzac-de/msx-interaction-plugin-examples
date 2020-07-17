/******************************************************************************/
//Interaction Plugin Examples (TypeScript Edition)
/******************************************************************************/
import * as tvx from "./lib/tvx-plugin-module.min";
import { InteractionData, VideoData, AudioData, ImageData, MenuData } from "./data";

/******************************************************************************/
//Init Handler
/******************************************************************************/
class InitHandler implements tvx.TVXInteractionPluginHander {

    handleRequest(dataId: string, data: object, callback: (respData?: object) => void) {
        if (dataId == "init") {
            callback(MenuData);
        } else if (dataId == "interaction") {
            callback(InteractionData);
        } else if (dataId == "video") {
            callback(VideoData);
        } else if (dataId == "audio") {
            callback(AudioData);
        } else if (dataId == "image") {
            callback(ImageData);
        } else {
            callback(null);
        }
    }
}
/******************************************************************************/

/******************************************************************************/
//Setup
/******************************************************************************/
tvx.InteractionPlugin.setupHandler(new InitHandler());
tvx.InteractionPlugin.init();
/******************************************************************************/