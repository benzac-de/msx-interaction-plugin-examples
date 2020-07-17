/******************************************************************************/
//Template Interaction Plugin (TypeScript Edition)
/******************************************************************************/
import $ from "jquery";
import * as tvx from "./lib/tvx-plugin-module.min";

/******************************************************************************/
//Template Handler
/******************************************************************************/
class TemplateHandler implements tvx.TVXInteractionPluginHander {
    private logger = new tvx.Logger();

    init() {
        this.logger.registerControl($("#log"));
        this.logger.debug("Init");
    }

    ready() {
        this.logger.debug("Ready");
        tvx.InteractionPlugin.success("Template handler ready.");
    }

    handleEvent(data: tvx.AnyObject) {
        this.logger.debug("Handle event: " + tvx.Tools.serialize(data));
    }

    handleData(data: tvx.AnyObject) {
        this.logger.debug("Handle data: " + tvx.Tools.serialize(data));
    }

    handleRequest(dataId: string, data: tvx.AnyObject, callback: (respData?: tvx.AnyObject) => void) {
        this.logger.debug("Handle request: " + dataId);
        this.logger.debug("Request data: " + tvx.Tools.serialize(data));
        callback(null);
    }
}
/******************************************************************************/

/******************************************************************************/
//Setup
/******************************************************************************/
tvx.InteractionPlugin.setupHandler(new TemplateHandler());
tvx.InteractionPlugin.init();
/******************************************************************************/