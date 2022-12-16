/******************************************************************************/
//Observer Example Interaction Plugin (TypeScript Edition)
/******************************************************************************/
import $ from "jquery";
import * as tvx from "./lib/tvx-plugin-module.min";
import { ImmersiveModeController } from "./im-controller";

/******************************************************************************/
//Observer Handler
/******************************************************************************/
class ObserverHandler implements tvx.TVXInteractionPluginHandler {
    private imController: ImmersiveModeController = new ImmersiveModeController();
    private $info: tvx.AnyObject = null;

    private observerData = {
        cache: false,
        flag: null,
        type: "list",
        headline: "Observer Example",
        transparent: true,
        underlay: {
            items: [{
                type: "space",
                layout: "0,0,6,6",
                offset: "-0.75,-1,1.12,1.67",
                color: "msx-black-soft"
            }]
        },
        template: {
            type: "default",
            layout: "0,0,2,1",
            area: "0,0,6,6",
            color: "msx-glass"
        },
        items: this.createObserverItems()
    } as tvx.MSXContentRoot;

    private createObserverItem(index: number) {
        return {
            id: "item" + index,
            label: "Item " + index,
            action: "content:request:interaction:item" + index + ">index:" + index
        } as tvx.MSXContentItem;
    }

    private createObserverItems() {
        var items = [];
        for (let i = 0; i < 64; i++) {
            items.push(this.createObserverItem(i));
        }
        return items as tvx.MSXContentItem[];
    }

    private createLineStart(changed: boolean) {
        if (changed) {
            return "<span class='changed'>";
        } else {
            return "<span>";
        }
    }

    private createLineEnd() {
        return "</span><br/>";
    }

    private createLine(changed: boolean, info: string, value: string) {
        return this.createLineStart(changed) + tvx.Tools.htmlEscape(info) + ": " + tvx.Tools.htmlEscape(value) + this.createLineEnd();
    }

    private createEmptyLine() {
        return this.createLineStart(false) + this.createLineEnd();
    }

    private showContentState(state: tvx.TVXChangedContentState) {
        if (this.$info != null) {
            this.$info.html(
                this.createLine(state.initChanged, "Is init state", state.init ? "Yes" : "No") +
                this.createEmptyLine() +
                this.createLine(state.startChanged, "Is start data", state.start ? "Yes" : "No") +
                this.createLine(state.restoredChanged, "Is restored data", state.restored ? "Yes" : "No") +
                this.createEmptyLine() +
                this.createLine(state.menuIdChanged, "Current menu ID", tvx.Tools.strTruncate(tvx.Tools.strFullCheck(state.menuId, "-"), 32)) +
                this.createLine(state.menuFlagChanged, "Current menu flag", tvx.Tools.strFullCheck(state.menuFlag, "-")) +
                this.createLine(state.menuFocusChanged, "Current menu focus", tvx.Tools.strFullCheck(state.menuFocus, "-")) +
                this.createLine(state.menuIndexChanged, "Current menu index", tvx.Tools.strValue(state.menuIndex)) +
                this.createLine(state.menuSizeChanged, "Current menu size", tvx.Tools.strValue(state.menuSize)) +
                this.createEmptyLine() +
                this.createLine(state.contentIdChanged, "Current content ID", tvx.Tools.strTruncate(tvx.Tools.strFullCheck(state.contentId, "-"), 32)) +
                this.createLine(state.contentFlagChanged, "Current content flag", tvx.Tools.strFullCheck(state.contentFlag, "-")) +
                this.createLine(state.contentFocusChanged, "Current content focus", tvx.Tools.strFullCheck(state.contentFocus, "-")) +
                this.createLine(state.contentIndexChanged, "Current content index", tvx.Tools.strValue(state.contentIndex)) +
                this.createLine(state.contentSizeChanged, "Current content size", tvx.Tools.strValue(state.contentSize)) +
                this.createEmptyLine() +
                this.createLine(state.panelIdChanged, "Current panel ID", tvx.Tools.strTruncate(tvx.Tools.strFullCheck(state.panelId, "-"), 32)) +
                this.createLine(state.panelFlagChanged, "Current panel flag", tvx.Tools.strFullCheck(state.panelFlag, "-")) +
                this.createLine(state.panelFocusChanged, "Current panel focus", tvx.Tools.strFullCheck(state.panelFocus, "-")) +
                this.createLine(state.panelIndexChanged, "Current panel index", tvx.Tools.strValue(state.panelIndex)) +
                this.createLine(state.panelSizeChanged, "Current panel size", tvx.Tools.strValue(state.panelSize)) +
                this.createEmptyLine() +
                this.createLine(state.contentVisibleChanged, "Is content visible", state.contentVisible ? "Yes" : "No") +
                this.createLine(state.panelVisibleChanged, "Is panel visible", state.panelVisible ? "Yes" : "No") +
                this.createLine(state.videoVisibleChanged, "Is video/audio visible", state.videoVisible ? "Yes" : "No") +
                this.createLine(state.videoActiveChanged, "Is video/audio active", state.videoActive ? "Yes" : "No") +
                this.createLine(state.playerVisibleChanged, "Is player visible", state.playerVisible ? "Yes" : "No") +
                this.createLine(state.slideshowVisibleChanged, "Is slideshow visible", state.slideshowVisible ? "Yes" : "No") +
                this.createLine(state.volumeVisibleChanged, "Is volume visible", state.volumeVisible ? "Yes" : "No") +
                this.createLine(state.logVisibleChanged, "Is log visible", state.logVisible ? "Yes" : "No")
            );
        }
    }

    private logContentState(state: tvx.TVXChangedContentState) {
        if (!state.init) {
            if (state.contentVisibleChanged) {
                tvx.InteractionPlugin.debug("Content is now " + (state.contentVisible ? "visible" : "hidden"));
            }
            if (state.panelVisibleChanged) {
                tvx.InteractionPlugin.debug("Panel is now " + (state.panelVisible ? "visible" : "hidden"));
            }
            if (state.videoVisibleChanged) {
                tvx.InteractionPlugin.debug("Video/Audio is now " + (state.videoVisible ? "visible" : "hidden"));
            }
            if (state.videoActiveChanged) {
                tvx.InteractionPlugin.debug("Video/Audio is now " + (state.videoActive ? "active" : "inactive"));
            }
            if (state.playerVisibleChanged) {
                tvx.InteractionPlugin.debug("Player is now " + (state.playerVisible ? "visible" : "hidden"));
            }
            if (state.slideshowVisibleChanged) {
                tvx.InteractionPlugin.debug("Slideshow is now " + (state.slideshowVisible ? "visible" : "hidden"));
            }
            if (state.volumeVisibleChanged) {
                tvx.InteractionPlugin.debug("Volume is now " + (state.volumeVisible ? "visible" : "hidden"));
            }
            if (state.logVisibleChanged) {
                tvx.InteractionPlugin.debug("Log is now " + (state.logVisible ? "visible" : "hidden"));
            }
        }
    }

    init() {
        this.imController.init($(".content-wrapper"));
        this.$info = $("#info");        
    }

    ready() {
        this.imController.validate();
        tvx.InteractionPlugin.addContentObserver("observer", (state: tvx.TVXChangedContentState) => {
            this.logContentState(state);
            this.showContentState(state);
        });
    }

    handleEvent(data: tvx.AnyObject) {
        this.imController.handleEvent(data);
    }

    handleRequest(dataId: string, data: tvx.AnyObject, callback: (respData?: tvx.AnyObject) => void) {
        this.observerData.flag = dataId;
        callback(this.observerData);
    }
}
/******************************************************************************/

/******************************************************************************/
//Setup
/******************************************************************************/
tvx.PluginTools.onReady(() => {
    tvx.InteractionPlugin.setupHandler(new ObserverHandler());
    tvx.InteractionPlugin.init();
});
/******************************************************************************/