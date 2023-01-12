/******************************************************************************/
//Template Interaction Plugin (TypeScript Edition)
/******************************************************************************/
import $ from "jquery";
import * as tvx from "./lib/tvx-plugin-module.min";
import { ContentController } from "./content-controller";

/******************************************************************************/
//Template Handler
/******************************************************************************/
class TemplateHandler implements tvx.TVXInteractionPluginHandler {
    private contentController: ContentController = new ContentController();
    private logger = new tvx.Logger();

    init() {
        this.contentController.init($(".content-wrapper"));
        this.logger.registerControl($("#log"));
        this.logger.debug("Init");
    }

    ready() {
        this.contentController.validate();
        this.logger.debug("Ready");
        tvx.InteractionPlugin.success("Template handler ready.");
    }

    handleEvent(data: tvx.AnyObject) {
        this.contentController.handleEvent(data);
        this.logger.debug("Handle event: " + tvx.Tools.serialize(data));
    }

    handleData(data: tvx.AnyObject) {
        this.logger.debug("Handle data: " + tvx.Tools.serialize(data));
    }

    handleRequest(dataId: string, data: tvx.AnyObject, callback: (respData?: tvx.AnyObject) => void) {
        this.logger.debug("Handle request: " + dataId);
        this.logger.debug("Request data: " + tvx.Tools.serialize(data));
        if (dataId == "error") {
            throw new Error("An error has occurred");
        }
        if (dataId.indexOf("delayed:") == 0) {
            dataId = dataId.substr(8);
            setTimeout(() => {
                tvx.InteractionPlugin.executeHandler(() => {
                    if (dataId == "error") {
                        throw new Error("An error has occurred");
                    }
                    return null;
                }, callback);
            }, 3000);
        } else {
            callback(null);
        }
    }

    onError(message: string, error: tvx.AnyObject): void {
        this.logger.error(message + ": " + error);
        console.error(error);
    }
}
/******************************************************************************/

/******************************************************************************/
//Setup
/******************************************************************************/
tvx.PluginTools.onReady(() => {
    tvx.InteractionPlugin.setupHandler(new TemplateHandler());
    tvx.InteractionPlugin.init();
});
/******************************************************************************/