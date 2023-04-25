/******************************************************************************/
//Interaction Plugin Examples (TypeScript Edition)
/******************************************************************************/
import * as tvx from "./lib/tvx-plugin-module.min";
import { InteractionData, VideoData, AudioData, ImageData, MenuData } from "./data";
import { polyfix } from "./parcel-polyfix";

polyfix();

/******************************************************************************/
//Init Handler
/******************************************************************************/
class InitHandler implements tvx.TVXInteractionPluginHandler {

    handleRequest(dataId: string, data: tvx.AnyObject, callback: (respData?: tvx.AnyObject) => void) {
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
tvx.PluginTools.onReady(() => {
    tvx.InteractionPlugin.setupHandler(new InitHandler());
    tvx.InteractionPlugin.init();
});
/******************************************************************************/