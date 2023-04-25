/******************************************************************************/
//Settings Example Interaction Plugin (TypeScript Edition)
/******************************************************************************/
import * as tvx from "./lib/tvx-plugin-module.min";
import { polyfix } from "./parcel-polyfix";

polyfix();

/******************************************************************************/
//Settings Constants
/******************************************************************************/
const RADIO_BUTTON_UNCHECKED = "msx-white-soft:radio-button-unchecked";
const RADIO_BUTTON_CHECKED = "msx-white:radio-button-checked";
const CHECK_BOX_UNCHECKED = "msx-white-soft:check-box-outline-blank";
const CHECK_BOX_CHECKED = "msx-white:check-box";
const SWITCH_UNCHECKED = "msx-glass:cancel";
const SWITCH_CHECKED = "msx-white:check-circle";
const SELECTION_CONTROL_UNCHECKED = "blank";
const SELECTION_CONTROL_CHECKED = "check";
const SPECIAL_CONTROL_CHECKED = "msx-white:adb";
const SPECIAL_CONTROL_UNCHECKED = "msx-glass:adb";
const SPECIAL_CONTROL_HEADLINE = "Special Control {txt:msx-white-soft:({ITEMS})}";
/******************************************************************************/

/******************************************************************************/
//Settings Handler
/******************************************************************************/
class SettingsHandler implements tvx.TVXInteractionPluginHandler {

    private specialControlPanel = {
        cache: false,
        headline: SPECIAL_CONTROL_HEADLINE.replace("{ITEMS}", "0"),
        template: {
            type: "button",
            enumerate: false,
            layout: "0,0,1,1",
            action: "interaction:commit",
            data: {
                action: "settings:item:{context:id}"
            }
        },
        items: this.createSpecialControls(48)
    } as tvx.MSXContentRoot;

    private settings = {
        cache: false,
        type: "pages",
        headline: "Settings Example",
        pages: [{
            headline: "Radio Buttons",
            items: [{
                type: "space",
                layout: "0,0,6,1",
                offset: "0,0.5,-0.25,0",
                headline: "{txt:msx-white-soft:Radio Button Group 0}"
            },
            this.createRadioButton("0-0", 0, 1, true),
            this.createRadioButton("0-1", 0, 2, false),
            this.createRadioButton("0-2", 0, 3, false),
            this.createRadioButton("0-3", 0, 4, false),
            this.createRadioButton("0-4", 0, 5, false), {
                type: "space",
                layout: "6,0,6,1",
                offset: "0.25,0.5,-0.25,0",
                headline: "{txt:msx-white-soft:Radio Button Group 1}"
            },
            this.createRadioButton("1-0", 6, 1, true),
            this.createRadioButton("1-1", 6, 2, false),
            this.createRadioButton("1-2", 6, 3, false),
            this.createRadioButton("1-3", 6, 4, false),
            this.createRadioButton("1-4", 6, 5, false)]
        }, {
            headline: "Check Boxes",
            items: [{
                type: "space",
                layout: "0,0,6,1",
                offset: "0,0.5,-0.25,0",
                headline: "{txt:msx-white-soft:Check Box Group 0}"
            },
            this.createCheckBox("0-0", 0, 1, false),
            this.createCheckBox("0-1", 0, 2, false),
            this.createCheckBox("0-2", 0, 3, false),
            this.createCheckBox("0-3", 0, 4, false),
            this.createCheckBox("0-4", 0, 5, false), {
                type: "space",
                layout: "6,0,6,1",
                offset: "0.25,0.5,-0.25,0",
                headline: "{txt:msx-white-soft:Check Box Group 1}"
            },
            this.createCheckBox("1-0", 6, 1, false),
            this.createCheckBox("1-1", 6, 2, false),
            this.createCheckBox("1-2", 6, 3, false),
            this.createCheckBox("1-3", 6, 4, false),
            this.createCheckBox("1-4", 6, 5, false)]
        }, {
            headline: "Switches",
            items: [
                this.createSwitch("0", 0, 0, false),
                this.createSwitch("1", 0, 1, false),
                this.createSwitch("2", 0, 2, false),
                this.createSwitch("3", 0, 3, false),
                this.createSwitch("4", 0, 4, false),
                this.createSwitch("5", 0, 5, false),
                this.createSwitch("6", 6, 0, false),
                this.createSwitch("7", 6, 1, false),
                this.createSwitch("8", 6, 2, false),
                this.createSwitch("9", 6, 3, false),
                this.createSwitch("10", 6, 4, false),
                this.createSwitch("11", 6, 5, false)
            ]
        }, {
            headline: "Selection Controls",
            items: [
                this.createSelectionControl("0", 0, 0, this.createSelectionLabel(0), this.createSelectionLabels()),
                this.createSelectionControl("1", 0, 1, this.createSelectionLabel(1), this.createSelectionLabels()),
                this.createSelectionControl("2", 0, 2, this.createSelectionLabel(2), this.createSelectionLabels()),
                this.createSelectionControl("3", 0, 3, this.createSelectionLabel(3), this.createSelectionLabels()),
                this.createSelectionControl("4", 0, 4, this.createSelectionLabel(4), this.createSelectionLabels()),
                this.createSelectionControl("5", 0, 5, this.createSelectionLabel(5), this.createSelectionLabels()),
                this.createSelectionControl("6", 6, 0, this.createStarsLabel(0), this.createStarsLabels()),
                this.createSelectionControl("7", 6, 1, this.createStarsLabel(0), this.createStarsLabels()),
                this.createSelectionControl("8", 6, 2, this.createStarsLabel(0), this.createStarsLabels()),
                this.createSelectionControl("9", 6, 3, this.createStarsLabel(0), this.createStarsLabels()),
                this.createSelectionControl("10", 6, 4, this.createStarsLabel(0), this.createStarsLabels()),
                this.createSelectionControl("11", 6, 5, this.createStarsLabel(0), this.createStarsLabels())
            ]
        }, {
            headline: "Special Control",
            items: [{
                id: "special_control",
                type: "button",
                layout: "0,0,12,6",
                badge: "0",
                icon: "adb",
                iconSize: "large",
                label: "Special Control",
                action: "panel:request:interaction:special"
            }]
        }]
    } as tvx.MSXContentRoot;

    private createRadioButton(id: string, x: number, y: number, checked: boolean) {
        return {
            id: "radio_button_" + id,
            type: "control",
            layout: x + "," + y + ",6,1",
            offset: x == 6 ? "0.25,0,-0.25,0" : "0,0,-0.25,0",
            icon: "adb",
            label: "Radio Button " + id,
            extensionIcon: checked ? RADIO_BUTTON_CHECKED : RADIO_BUTTON_UNCHECKED,
            checked: checked,
            action: "interaction:commit",
            data: {
                action: "settings:item:radio_button_" + id
            }
        } as tvx.MSXContentItem;
    }

    private createCheckBox(id: string, x: number, y: number, checked: boolean) {
        return {
            id: "check_box_" + id,
            type: "control",
            layout: x + "," + y + ",6,1",
            offset: x == 6 ? "0.25,0,-0.25,0" : "0,0,-0.25,0",
            icon: "adb",
            label: "Check Box " + id,
            extensionIcon: checked ? CHECK_BOX_CHECKED : CHECK_BOX_UNCHECKED,
            checked: checked,
            action: "interaction:commit",
            data: {
                action: "settings:item:check_box_" + id
            }
        } as tvx.MSXContentItem;
    }

    private createSwitch(id: string, x: number, y: number, checked: boolean) {
        return {
            id: "switch_" + id,
            type: "control",
            layout: x + "," + y + ",6,1",
            icon: "adb",
            label: "Switch " + id,
            extensionIcon: checked ? SWITCH_CHECKED : SWITCH_UNCHECKED,
            checked: checked,
            action: "interaction:commit",
            data: {
                action: "settings:item:switch_" + id
            }
        } as tvx.MSXContentItem;
    }

    private createSelectionControl(id: string, x: number, y: number, label: string, subLabels: string[]) {
        let subItems: tvx.MSXContentItem[] = [];
        for (let i in subLabels) {
            subItems.push({
                focus: subLabels[i] === label,
                extensionIcon: subLabels[i] === label ? SELECTION_CONTROL_CHECKED : SELECTION_CONTROL_UNCHECKED,
                label: subLabels[i]
            });
        }
        return {
            id: "selection_control_" + id,
            type: "control",
            layout: x + "," + y + ",6,1",
            icon: "adb",
            label: "Selection Control " + id,
            extensionLabel: label,
            action: "panel:data",
            data: {
                headline: "Selection Control " + id + " Panel",
                template: {
                    type: "control",
                    enumerate: false,
                    layout: "0,0,8,1",
                    action: "[back|interaction:commit]",
                    data: {
                        action: "settings:item:selection_control_" + id,
                        label: "{context:label}"
                    }
                },
                items: subItems
            }
        } as tvx.MSXContentItem;
    }

    private createSelectionLabel(index: number) {
        return "Label " + index;
    }

    private createSelectionLabels() {
        return [
            this.createSelectionLabel(0),
            this.createSelectionLabel(1),
            this.createSelectionLabel(2),
            this.createSelectionLabel(3),
            this.createSelectionLabel(4),
            this.createSelectionLabel(5)
        ];
    }

    private createStarsLabel(stars: number) {
        let label = "";
        for (let s = 0; s < 5; s++) {
            if (stars > 0) {
                stars--;
                label += "{ico:msx-yellow:star}";
            } else {
                label += "{ico:msx-white-soft:star}";
            }
        }
        return label;
    }

    private createStarsLabels() {
        return [
            this.createStarsLabel(1),
            this.createStarsLabel(2),
            this.createStarsLabel(3),
            this.createStarsLabel(4),
            this.createStarsLabel(5)
        ];
    }

    private createSpecialControls(count: number) {
        let items: tvx.MSXContentItem[] = [];
        for (let i = 0; i < count; i++) {
            items.push({
                id: "special_control_" + i,
                icon: SPECIAL_CONTROL_UNCHECKED,
                checked: false
            });
        }
        return items;
    }

    private updateSettingsItem(id: string, data: tvx.AnyObject) {
        if (id != null) {
            let type = "default";
            let prefix: string = null;
            if (id.indexOf("radio_button_0-") == 0) {
                type = "radioButton";
                prefix = "radio_button_0-";
            } else if (id.indexOf("radio_button_1-") == 0) {
                type = "radioButton";
                prefix = "radio_button_1-";
            } else if (id.indexOf("check_box_") == 0) {
                type = "checkBox";
            } else if (id.indexOf("switch_") == 0) {
                type = "switch";
            } else if (id.indexOf("selection_control_") == 0) {
                type = "selection";
            } else if (id.indexOf("special_control_") == 0) {
                type = "special";
            }
            for (let p in this.settings.pages) {
                let page = this.settings.pages[p];
                for (let i in page.items) {
                    let item = page.items[i];
                    if (item.id != null) {
                        if (type == "radioButton") {
                            if (item.id == id) {
                                item.checked = true;
                                item.extensionIcon = RADIO_BUTTON_CHECKED;
                            } else if (item.id.indexOf(prefix) == 0) {
                                item.checked = false;
                                item.extensionIcon = RADIO_BUTTON_UNCHECKED;
                            }
                        } else if (type == "checkBox") {
                            if (item.id == id) {
                                item.checked = !item.checked;
                                if (item.checked) {
                                    item.extensionIcon = CHECK_BOX_CHECKED;
                                } else {
                                    item.extensionIcon = CHECK_BOX_UNCHECKED;
                                }
                            }
                        } else if (type == "switch") {
                            if (item.id == id) {
                                item.checked = !item.checked;
                                if (item.checked) {
                                    item.extensionIcon = SWITCH_CHECKED;
                                } else {
                                    item.extensionIcon = SWITCH_UNCHECKED;
                                }
                            }
                        } else if (type == "selection") {
                            if (item.id == id && data.label != null) {
                                for (let si in item.data.items) {
                                    let subItem = item.data.items[si];
                                    if (data.label == subItem.label) {
                                        subItem.focus = true;
                                        subItem.extensionIcon = SELECTION_CONTROL_CHECKED;
                                    } else {
                                        subItem.focus = false;
                                        subItem.extensionIcon = SELECTION_CONTROL_UNCHECKED;
                                    }
                                }
                                item.extensionLabel = data.label;
                            }
                        } else if (type == "special") {
                            if (item.id == "special_control") {
                                let count = 0;
                                for (let si in this.specialControlPanel.items) {
                                    let specialItem = this.specialControlPanel.items[si];
                                    if (specialItem.id == id) {
                                        specialItem.checked = !specialItem.checked;
                                        if (specialItem.checked) {
                                            specialItem.icon = SPECIAL_CONTROL_CHECKED;
                                        } else {
                                            specialItem.icon = SPECIAL_CONTROL_UNCHECKED;
                                        }
                                    }
                                    if (specialItem.checked) {
                                        count++;
                                    }
                                }
                                item.badge = tvx.Tools.strValue(count);
                                this.specialControlPanel.headline = SPECIAL_CONTROL_HEADLINE.replace("{ITEMS}", tvx.Tools.strValue(count));
                                tvx.InteractionPlugin.executeAction("reload:panel");
                            }
                        }
                    }
                }
            }
        }
    }

    private reloadSettings() {
        tvx.InteractionPlugin.executeAction("reload:content");
    }

    init() {
        //Placeholder
    }

    ready() {
        //Placeholder
    }

    handleData(data: tvx.AnyObject) {
        if (data.data != null && tvx.Tools.isFullStr(data.data.action)) {
            let action = data.data.action;
            if (action.indexOf("settings:") == 0) {
                let settingsAction = action.substr(9);
                if (settingsAction.indexOf("item:") == 0) {
                    this.updateSettingsItem(settingsAction.substr(5), data.data);
                    this.reloadSettings();
                } else if (settingsAction == "reload") {
                    this.reloadSettings();
                } else {
                    tvx.InteractionPlugin.warn(`Unknown settings action: '${settingsAction}'`);
                }
            } else {
                tvx.InteractionPlugin.warn(`Invalid settings action: '${action}'`);
            }
        } else {
            tvx.InteractionPlugin.warn("Unknown settings data");
        }
    }

    handleRequest(dataId: string, data: tvx.AnyObject, callback: (respData?: tvx.AnyObject) => void) {
        if (dataId == "init") {
            callback(this.settings);
        } else if (dataId == "special") {
            callback(this.specialControlPanel);
        } else {
            tvx.InteractionPlugin.warn(`Unknown request data ID: '${dataId}'`);
            callback();
        }
    }
}
/******************************************************************************/

/******************************************************************************/
//Setup
/******************************************************************************/
tvx.PluginTools.onReady(() => {
    tvx.InteractionPlugin.setupHandler(new SettingsHandler());
    tvx.InteractionPlugin.init();
});
/******************************************************************************/
