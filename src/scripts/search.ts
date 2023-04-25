/******************************************************************************/
//Search Example Interaction Plugin (TypeScript Edition)
/******************************************************************************/
import * as tvx from "./lib/tvx-plugin-module.min";
import icons from "../data/icons.json";
import { polyfix } from "./parcel-polyfix";

polyfix();

/******************************************************************************/
//Search Constants
/******************************************************************************/
const MAX_INPUT_LENGTH = 32;
const MAX_PAGE_X = 12;
const MAX_PAGE_Y = 6;
const SEARCH_HEADLINE = "{ico:search} {INPUT}";
const RESULTS_HEADLINE = "{ITEMS} found";
/******************************************************************************/

/******************************************************************************/
//Search Handler
/******************************************************************************/
class SearchHandler implements tvx.TVXInteractionPluginHandler {
    private searchInput = tvx.Services.urlParams.getFullStr("input", "");
    private testItems: tvx.AnyObject[] = icons;
    private resultItems: tvx.MSXContentItem[] = null;

    private inputPage = {
        headline: null,
        offset: "0,0,0,0.5",
        items: [
            this.createInputButton("A", "a", 0, 0),
            this.createInputButton("B", "b", 1, 0),
            this.createInputButton("C", "c", 2, 0),
            this.createInputButton("D", "d", 3, 0),
            this.createInputButton("E", "e", 4, 0),
            this.createInputButton("F", "f", 5, 0),
            this.createInputButton("G", "g", 6, 0),
            this.createInputButton("H", "h", 7, 0),
            this.createInputButton("I", "i", 8, 0),
            this.createInputButton("J", "j", 9, 0),
            this.createInputButton("K", "k", 10, 0),
            this.createInputButton("L", "l", 11, 0),
            this.createInputButton("M", "m", 0, 1),
            this.createInputButton("N", "n", 1, 1),
            this.createInputButton("O", "o", 2, 1),
            this.createInputButton("P", "p", 3, 1),
            this.createInputButton("Q", "q", 4, 1),
            this.createInputButton("R", "r", 5, 1),
            this.createInputButton("S", "s", 6, 1),
            this.createInputButton("T", "t", 7, 1),
            this.createInputButton("U", "u", 8, 1),
            this.createInputButton("V", "v", 9, 1),
            this.createInputButton("W", "w", 10, 1),
            this.createInputButton("X", "x", 11, 1),
            this.createInputButton("Y", "y", 0, 2),
            this.createInputButton("Z", "z", 1, 2),
            this.createInputButton("1", "1", 2, 2),
            this.createInputButton("2", "2", 3, 2),
            this.createInputButton("3", "3", 4, 2),
            this.createInputButton("4", "4", 5, 2),
            this.createInputButton("5", "5", 6, 2),
            this.createInputButton("6", "6", 7, 2),
            this.createInputButton("7", "7", 8, 2),
            this.createInputButton("8", "8", 9, 2),
            this.createInputButton("9", "9", 10, 2),
            this.createInputButton("0", "0", 11, 2),
            this.createControlButton("back", "delete", 0, 3),
            this.createControlButton("clear", "home|end", 4, 3),
            this.createControlButton("space", "space|insert", 8, 3)
        ]
    } as tvx.MSXContentPage;

    private search = {
        cache: false,
        type: "list",
        important: true,
        headline: null,
        pages: null
    } as tvx.MSXContentRoot;

    private createInputButton(input: string, key: string, x: number, y: number) {
        return {
            type: "button",
            layout: x + "," + y + ",1,1",
            label: input,
            key: key,
            action: "interaction:commit",
            data: {
                action: "search:input:" + input
            }
        } as tvx.MSXContentItem;
    }

    private createControlButton(control: string, key: string, x: number, y: number) {
        let label: string = null;
        if (control == "back") {
            label = "{ico:backspace}";
        } else if (control == "clear") {
            label = "{ico:clear}";
        } else if (control == "space") {
            label = "{ico:space-bar}";
        }
        return {
            type: "button",
            layout: x + "," + y + ",4,1",
            label: label,
            key: key,
            action: "interaction:commit",
            data: {
                action: "search:control:" + control
            }
        } as tvx.MSXContentItem;
    }

    private createPages(
        items: tvx.AnyObject[],
        filterCallback: (testItem: tvx.AnyObject) => boolean,
        itemCallback: (resultItem: tvx.AnyObject, pageItem: tvx.MSXContentItem, index: number) => void,
        pageCallback: (page: tvx.MSXContentPage) => void) {
        let x = 0;
        let y = 0;
        let w = 1;
        let h = 1;
        let page: tvx.MSXContentPage = null;
        let index = 0;
        //Create icons
        if (items != null && items.length > 0) {
            for (let i in items) {
                let item = items[i];
                if (filterCallback(item)) {
                    let pageItem = {
                        enumerate: true,
                        type: "default",
                        layout: x + "," + y + "," + w + "," + h,
                        color: "msx-glass",
                        iconSize: "small",
                        icon: item.icon,
                        action: "panel:data",
                        data: {
                            pages: [{
                                items: [{
                                    type: "default",
                                    layout: "2,1,4,4",
                                    offset: "0,0,0,-0.33",
                                    color: "msx-glass",
                                    iconSize: "large",
                                    label: item.icon,
                                    icon: item.icon,
                                    action: "back"
                                }]
                            }]
                        }
                    } as tvx.MSXContentItem;
                    itemCallback(item, pageItem, index);
                    if (page == null) {
                        page = {
                            items: []
                        };
                        pageCallback(page);
                    }
                    page.items.push(pageItem);
                    x += w;
                    if (x + w > MAX_PAGE_X) {
                        x = 0;
                        y += h;
                        if (y + h > MAX_PAGE_Y) {
                            y = 0;
                            page = null;
                        }
                    }
                    index++;
                }
            }
        }
    }

    private handleSearchInput(input: string) {
        if (this.searchInput.length < MAX_INPUT_LENGTH) {
            this.searchInput += input;
        }
    }

    private handleSearchControl(control: string) {
        if (control == "back") {
            if (this.searchInput.length > 0) {
                this.searchInput = this.searchInput.substr(0, this.searchInput.length - 1);
            }
        } else if (control == "clear") {
            this.searchInput = "";
        } else if (control == "space") {
            if (this.searchInput.length > 0 && this.searchInput.length < MAX_INPUT_LENGTH && this.searchInput[this.searchInput.length - 1] != " ") {
                this.searchInput += " ";
            }
        } else {
            tvx.InteractionPlugin.warn(`Unknown search control: '${control}'`);
        }
    }

    private updateSearch() {
        this.search.headline = SEARCH_HEADLINE.replace("{INPUT}", this.searchInput);
        this.search.pages = [this.inputPage];
        this.resultItems = [];
        //Filter icons
        if (this.searchInput.length > 0) {
            let searchToken = tvx.Tools.strTrim(this.searchInput.toLowerCase()).split(" ");
            this.createPages(this.testItems, (testItem: tvx.AnyObject) => {
                let hit = 0;
                if (tvx.Tools.isFullStr(testItem.icon)) {
                    for (let i = 0; i < searchToken.length; i++) {
                        if (testItem.icon.indexOf(searchToken[i]) >= 0) {
                            hit++;
                        }
                    }
                }
                return hit == searchToken.length;
            }, (resultItem: tvx.AnyObject, pageItem: tvx.MSXContentItem, index: number) => {
                this.resultItems.push(resultItem);
            }, (page: tvx.MSXContentPage) => {
                this.search.pages.push(page);
            });
            this.inputPage.headline = RESULTS_HEADLINE.replace("{ITEMS}", this.resultItems.length + " " + (this.resultItems.length == 1 ? "Item" : "Items"));
        } else {
            this.inputPage.headline = null;
        }
    }

    private reloadSearch() {
        this.updateSearch();
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
            let action = data.data.action as string;
            if (action.indexOf("search:") == 0) {
                let searchAction = action.substr(7);
                if (searchAction.indexOf("init:") == 0) {
                    this.searchInput = searchAction.substr(5);
                    this.updateSearch();
                } else if (searchAction.indexOf("input:") == 0) {
                    this.handleSearchInput(searchAction.substr(6));
                    this.reloadSearch();
                } else if (searchAction.indexOf("control:") == 0) {
                    this.handleSearchControl(searchAction.substr(8));
                    this.reloadSearch();
                } else if (searchAction == "reload") {
                    this.reloadSearch();
                } else {
                    tvx.InteractionPlugin.warn(`Unknown search action: '${searchAction}'`);
                }
            } else {
                tvx.InteractionPlugin.warn(`Invalid search action: '${action}'`);
            }
        } else {
            tvx.InteractionPlugin.warn("Unknown search data");
        }
    }

    handleRequest(dataId: string, data: tvx.AnyObject, callback: (respData?: tvx.AnyObject) => void) {
        if (dataId == "init") {
            this.updateSearch();
            callback(this.search);
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
    tvx.InteractionPlugin.setupHandler(new SearchHandler());
    tvx.InteractionPlugin.init();
});
/******************************************************************************/
