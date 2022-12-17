/******************************************************************************/
//Content Controller (TypeScript Edition)
/******************************************************************************/
import * as tvx from "./lib/tvx-plugin-module.min";

export class ContentController {
    private contentWrapper: tvx.AnyObject = null;
    private immersiveMode: number = -1;

    private setupWrapper() {
        if (this.contentWrapper != null && this.contentWrapper.length > 0) {
            if (this.immersiveMode == 0) {
                //Reset wrapper
                this.contentWrapper.css({
                    left: "",
                    top: "",
                    width: "",
                    height: "",
                    marginLeft: "",
                    marginTop: "",
                    transform: ""
                });
            } else if (this.immersiveMode == 1) {
                //Center wrapper in main frame
                this.contentWrapper.css({
                    left: "50%",
                    top: "50%",
                    width: tvx.Settings.SCREEN_WIDTH + "px",
                    height: tvx.Settings.SCREEN_HEIGHT + "px",
                    marginLeft: -Math.floor(tvx.Settings.SCREEN_WIDTH / 2) + "px",
                    marginTop: -Math.floor(tvx.Settings.SCREEN_HEIGHT / 2) + "px",
                    transform: tvx.Settings.ZOOM_FACTOR != 1 ? "scale(" + tvx.Settings.ZOOM_FACTOR + ")" : ""
                });
            }
        }
    }

    init(wrapper: tvx.AnyObject) {
        this.contentWrapper = wrapper;
    }

    validate() {
        tvx.InteractionPlugin.onValidatedSettings((data: tvx.AnyObject) => {
            if (data != null &&
                data.info != null &&
                data.info.application != null &&
                data.info.application.settings != null) {
                this.immersiveMode = tvx.Tools.strToNum(data.info.application.settings.immersiveMode, -1);
                this.setupWrapper();
            }
        });
    }

    handleEvent(data: tvx.AnyObject) {
        if (data != null) {
            if (data.event == "app:resize") {
                //Zoom factor may have changed -> Validate settings and setup wrapper
                tvx.InteractionPlugin.validateSettings(this.setupWrapper);
            } else if (data.event == "settings:immersive_mode") {
                //Immersive mode has been changed -> Apply value and setup wrapper
                this.immersiveMode = tvx.Tools.strToNum(data.value, -1);
                this.setupWrapper();
            }
        }
    }
}
/******************************************************************************/