// Type definitions for TVX Plugin v0.0.63.1 (Module)
// Project: https://msx.benzac.de/info/
// Definitions by: Benjamin Zachey

declare interface AnyObject {
    [key: string]: any;
}

/** MSX - Start Object
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Start_Object}
*/
declare interface MSXStart extends AnyObject {
    name: string;
    version: string;
    parameter: string;
    welcome?: string;
}

/** MSX - Menu Root Object
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Menu_Root_Object}
*/
declare interface MSXMenuRoot extends AnyObject {
    name?: string;
    version?: string;
    reference?: string;
    flag?: string;
    reuse?: boolean;
    cache?: boolean;
    restore?: boolean;
    transparent?: MSXTransparent | boolean;
    style?: MSXMenuRootStyle;
    logo?: string;
    logoSize?: MSXMenuRootLogoSize;
    headline?: string;
    background?: string;
    extension?: string;
    dictionary?: string;
    menu: MSXMenuItem[];
    action?: string;
    data?: AnyObject;
    ready?: MSXReady;
    options?: MSXContentPage | MSXContentRoot;
}

/** MSX - Menu Root Style
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Menu_Root_Object}
*/
declare type MSXMenuRootStyle =
    "default" |
    "flat" |
    "flat-separator" |
    "overlay" |
    "overlay-separator";

/** MSX - Menu Root Logo Size
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Menu_Root_Object}
*/
declare type MSXMenuRootLogoSize =
    "small" |
    "large";

/** MSX - Menu Item Object
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Menu_Item_Object}
*/
declare interface MSXMenuItem extends AnyObject {
    id?: string;
    type?: MSXMenuItemtType;
    display?: boolean;
    enable?: boolean;
    focus?: boolean;
    execute?: boolean;
    transparent?: MSXTransparent | boolean;
    icon?: string;
    image?: string;
    label?: string;
    background?: string;
    extensionIcon?: string;
    extensionLabel?: string;
    lineColor?: string;
    data?: string | MSXContentRoot;
    options?: MSXContentPage | MSXContentRoot;
}

/** MSX - Menu Item Type
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Menu_Item_Object}
*/
declare type MSXMenuItemtType =
    "default" |
    "separator" |
    "settings";

/** MSX - Content Root Object
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Content_Root_Object}
*/
declare interface MSXContentRoot extends AnyObject {
    name?: string;
    version?: string;
    reference?: string;
    flag?: string;
    reuse?: boolean;
    cache?: boolean;
    restore?: boolean;
    imortant?: boolean;
    wrap?: boolean;
    compress?: boolean;
    transparent?: MSXTransparent | boolean;
    type?: MSXContentRootType;
    preload?: MSXContentRootPreload;
    headline?: string;
    background?: string;
    extension?: string;
    dictionary?: string;
    template?: MSXContentItem;
    items?: MSXContentItem[];
    pages?: MSXContentPage[];
    header?: MSXContentPage;
    footer?: MSXContentPage;
    overlay?: MSXContentPage;
    underlay?: MSXContentPage;
    action?: string;
    data?: AnyObject;
    ready?: MSXReady;
    options?: MSXContentPage | MSXContentRoot;
    caption?: string;
}

/** MSX - Content Root Type
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Content_Root_Object}
*/
declare type MSXContentRootType =
    "pages" |
    "list";

/** MSX - Content Root Preload
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Content_Root_Object}
*/
declare type MSXContentRootPreload =
    "none" |
    "next" |
    "prev" |
    "full";

/** MSX - Content Page Object
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Content_Page_Object}
*/
declare interface MSXContentPage extends AnyObject {
    display?: boolean;
    important?: boolean;
    wrap?: boolean;
    compress?: boolean;
    transparent?: MSXTransparent | boolean;
    headline?: string;
    background?: string;
    offset?: string;
    items: MSXContentItem[];
    action?: string;
    data?: AnyObject;
    options?: MSXContentPage | MSXContentRoot;
    caption?: string;
}

/** MSX - Content Item Object
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Content_Item_Object}
*/
declare interface MSXContentItem extends AnyObject {
    id?: string;
    type?: MSXContentItemType;
    key?: string;
    layout?: string;
    area?: string;
    offset?: string;
    display?: boolean;
    enable?: boolean;
    focus?: boolean;
    execute?: boolean;
    enumerate?: boolean;
    compress?: boolean;
    shortcut?: boolean;
    group?: string;
    color?: string;
    title?: string;
    titleHeader?: string;
    titleFooter?: string;
    label?: string;
    icon?: string;
    iconSize?: MSXContentItemIconSize;
    headline?: string;
    text?: string;
    alignment?: string;
    truncation?: string;
    centration?: string;
    tag?: string;
    tagColor?: string;
    badge?: string;
    badgeColor?: string;
    stamp?: string;
    stampColor?: string;
    progress?: number;
    progressColor?: string;
    wrapperColor?: string;
    image?: string;
    imageFiller?: MSXContentItemImageFiller;
    imageWidth?: number;
    imageHeight?: number;
    imageOverlay?: MSXContentItemImageOverlay;
    imagePreload?: boolean;
    imageLabel?: string;
    imageColor?: string;
    imageScreenFiller?: MSXContentItemImageFiller;
    imageBoundary?: boolean;
    playerLabel?: string;
    background?: string;
    extensionIcon?: string;
    extensionLabel?: string;
    action?: string;
    data?: AnyObject;
    properties?: MSXExtendedProperties;
    live?: MSXLive;
    selection?: MSXSelection;
    options?: MSXContentPage | MSXContentRoot;
}

/** MSX - Content Item Type
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Content_Item_Object}
*/
declare type MSXContentItemType =
    "default" |
    "teaser" |
    "button" |
    "separate" |
    "space" |
    "control";

/** MSX - Content Item Icon Size
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Content_Item_Object}
*/
declare type MSXContentItemIconSize =
    "small" |
    "medium" |
    "large" |
    "extra-large";

/** MSX - Content Item Image Filler
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Content_Item_Object}
*/
declare type MSXContentItemImageFiller =
    "default" |
    "width" |
    "width-top" |
    "width-center" |
    "width-bottom" |
    "height" |
    "height-left" |
    "height-center" |
    "height-right" |
    "fit" |
    "cover" |
    "smart";

/** MSX - Content Item Image Overlay
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Content_Item_Object}
*/
declare type MSXContentItemImageOverlay =
    -1 |
    0 |
    1 |
    2 |
    3 |
    4;

//** MSX - Transparent*/
declare type MSXTransparent =
    0 |
    1 |
    2;

//** MSX - Ready*/
declare interface MSXReady {
    action?: string;
    data?: AnyObject;
}

/** MSX - Live Object
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Live_Object}
*/
declare interface MSXLive extends MSXLiveProperties, MSXLiveAction {
    type?: MSXLiveType;
    from?: number;
    to?: number;
    duration?: number;
    delay?: number;
    source?: MSXLiveSource;
    coming?: MSXLiveState;
    running?: MSXLiveStateRunning;
    over?: MSXLiveState;
    execute?: MSXLiveAction;
}

/** MSX - Live Type
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Live_Object}
*/
declare type MSXLiveType =
    "schedule" |
    "lifetime" |
    "airtime" |
    "playback" |
    "setup";

/** MSX - Live Source
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Live_Object}
*/
declare type MSXLiveSource =
    "id" |
    "url" |
    "key" |
    "current" |
    "none";

/** MSX - Live Action
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Live_Object}
*/
declare interface MSXLiveAction {
    action?: string;
    data?: AnyObject;
}

/** MSX - Live Content Properties
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Live_Object}
*/
declare interface MSXLiveProperties {
    color?: string;
    title?: string;
    titleHeader?: string;
    titleFooter?: string;
    label?: string;
    icon?: string;
    headline?: string;
    text?: string;
    tag?: string;
    tagColor?: string;
    badge?: string;
    badgeColor?: string;
    stamp?: string;
    stampColor?: string;
    progress?: number;
    progressColor?: string;
    wrapperColor?: string;
    image?: string;
    extensionIcon?: string;
    extensionLabel?: string;
}

/** MSX - Live State Object
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Live_Object}
*/
declare interface MSXLiveState extends MSXLiveProperties, MSXLiveAction {
    execute?: MSXLiveAction;
}

/** MSX - Live State Object (Running)
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Live_Object}
*/
declare interface MSXLiveStateRunning extends MSXLiveState {
    quartile1?: MSXLiveProperties;
    quartile2?: MSXLiveProperties;
    quartile3?: MSXLiveProperties;
    quartile4?: MSXLiveProperties;
}

/** MSX - Selection Object
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Selection_Object}
*/
declare interface MSXSelection {
    important?: boolean;
    headline?: string;
    background?: string;
    action?: string;
    data?: AnyObject;
}

/** MSX - URL Parameters
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=URL_Parameters}
*/
declare interface MSXURLParameters {
    [key: string]: string;
}

/** MSX - Extended Properties
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Extended_Properties}
*/
declare interface MSXExtendedProperties {
    [key: string]: string | number | boolean;
}

/** MSX - Dictionary Properties
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Dictionary_Structure}
*/
declare interface MSXDictionaryProperties {
    [key: string]: string;
}

/** MSX - Attached Data
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedData {
    data?: AnyObject;
    error?: string;
}

/** MSX - Attached Code
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedCode extends MSXAttachedData {
    code?: string;
}

/** MSX - Attached Video
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedVideo extends MSXAttachedData {
    video?: MSXAttachedVideoContainer;
}

/** MSX - Attached Video Container (request-dependent)
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedVideoContainer {
    info?: MSXAttachedVideoInfo;
    data?: MSXAttachedVideoData;
    resume?: MSXAttachedVideoResumeInfo;
    volume?: MSXAttachedVideoVolumeInfo;
    scene?: string;
}

/** MSX - Attached Video Info
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedVideoInfo {
    id: string;
    index: number;
    number: number;
    count: number;
    listIndex: number;
    listSize: number;
    type: string;
    url: string;
    label: string;
    background: string;
    customLabel: string;
    customBackground: string;
    properties: MSXExtendedProperties;
}

/** MSX - Attached Video Data
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedVideoData {
    state: number;
    position: number;
    duration: number;
    speed: number;
    ended: boolean;
}

/** MSX - Attached Video Resume Info
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedVideoResumeInfo {
    key: string;
    count: number;
    resuming: boolean;
    position: string;
    progress: number;
}

/** MSX - Attached Video Volume Info
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedVideoVolumeInfo {
    type: string;
    level: number;
    muted: boolean;
}

/** MSX - Attached Slider
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedSlider extends MSXAttachedData {
    slider?: MSXAttachedSliderContainer;
}

/** MSX - Attached Slider Container
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedSliderContainer {
    state: number;
    id: string;
    index: number;
    number: number;
    count: number;
    listIndex: number;
    listSize: number;
    url: string;
    label: string;
    color: string;
    filler: string;
    rotation: number;
    customLabel: string;
    customColor: string;
    properties: MSXExtendedProperties;
}

/** MSX - Attached Application Menu Button
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedApplicationMenuButton {
    action: number;
    keyCode: number;
}

/** MSX - Attached Application Settings
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedApplicationSettings {
    validateLinks: number;
    randomPlayback: number;
    slideshowInterval: number;
    hoverEffect: number;
    menuButton: MSXAttachedApplicationMenuButton;
}

/** MSX - Attached Application Info
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedApplicationInfo {
    name: string;
    version: string;
    suffix: string;
    settings: MSXAttachedApplicationSettings;
}

/** MSX - Attached Framework Setttings
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedFrameworkSetttings {
    animate: number;
    transform: number;
    input: number;
    remote: number;
    layout: string;
    scale: string;
    zoom: string,
    center: number;
    background: number;
    leave: number;
    exit: number;
    back: number;
    volume: number;
    busy: number;
    speed: number;
    playback: number;
    fullscreen: number;
    suspend: number;
    secure: number;
}

/** MSX - Attached Framework Info
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedFrameworkInfo {
    name: string;
    version: string;
    suffix: string;
    settings: MSXAttachedFrameworkSetttings;
}

/** MSX - Attached Content State
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedContentState {
    start: boolean;
    restored: boolean;
    menuId: string;
    menuFlag: string;
    menuFocus: string;
    menuIndex: number;
    menuSize: number;
    contentId: string;
    contentFlag: string;
    contentFocus: string;
    contentIndex: number;
    contentSize: number;
    contentVisible: boolean;
    panelId: string;
    panelFlag: string;
    panelFocus: string;
    panelIndex: number;
    panelSize: number;
    panelVisible: boolean;
    videoVisible: boolean;
    videoActive: boolean;
    playerVisible: boolean;
    slideshowVisible: boolean;
    volumeVisible: boolean;
    logVisible: boolean;
}

/** MSX - Attached Content Info
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedContentInfo {
    name: string;
    version: string;
    flag: string;
    server: string;
    secure: boolean;
    parameter: string;
    state: MSXAttachedContentState;
    interaction: string;
}

/** MSX - Attached Dictionary Info
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedDictionaryInfo {
    url: string;
    name: string;
    version: string;
    size: number;
}

/** MSX - Attached Screen Info
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedScreenInfo {
    width: number;
    height: number;
    factor: number;
    zoomFactor: number;
}

/** MSX - Attached Time Info
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedTimeInfo {
    timestamp: number;
    now: number;
    zone: number;
    offset: number;
    zoneOffset: number;
}

/** MSX - Attached System Info (platform-dependent)
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedSystemInfo {
    name?: string;
    model?: string;
    manufacturer?: string;
    firmware?: string;
    version?: string;
    country?: string;
    language?: string;
    ipAddress?: string;
    macAddress?: string;
    networkType?: string;
    networkName?: string;
    deviceId?: string;
    deviceFamily?: string;
    deviceVersion?: string;
    vendorName?: string;
    modelName?: string;
    softwareVersion?: string;
    hardwareVersion?: string;
    buildVersion?: string;
    sdkVersion?: string;
    firmwareVersion?: string;
    serialNumber?: string;
}

/** MSX - Attached Info
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedInfo extends MSXAttachedData {
    info?: MSXAttachedInfoContainer;
}

/** MSX - Attached Info Container (request-dependent)
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedInfoContainer {
    host?: string;
    secure?: boolean;
    client?: string;
    platform?: string;
    id?: string;
    player?: string;
    userAgent?: string;
    application?: MSXAttachedApplicationInfo;
    framework?: MSXAttachedFrameworkInfo;
    content?: MSXAttachedContentInfo;
    dictionary?: MSXAttachedDictionaryInfo;
    screen?: MSXAttachedScreenInfo;
    time?: MSXAttachedTimeInfo;
    urlParams?: MSXURLParameters;
    system?: MSXAttachedSystemInfo;
}

/** MSX - Attached Message
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedMessage extends MSXAttachedData {
    message?: string;
}

/** MSX - Attached String
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedString extends MSXAttachedData {
    string?: string;
}

/** MSX - Attached Response
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedResponse extends MSXAttachedData {
    response?: AnyObject;
}

/** MSX - Attached Dictionary
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedDictionary extends MSXAttachedData {
    dictionary?: MSXAttachedDictionaryContainer;
}

/** MSX - Attached Dictionary Container
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedDictionaryContainer {
    name: string;
    version: string;
    size: number;
    properties: MSXDictionaryProperties;
}

/** MSX - Attached Notification
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedNotification extends MSXAttachedData {
    notification?: string;
}

/** MSX - Attached Generic (request-dependent)
 * @see: {@link https://msx.benzac.de/wiki/index.php?title=Attached_Data_Examples}
*/
declare interface MSXAttachedGeneric extends MSXAttachedData {
    code?: string;
    video?: MSXAttachedVideoContainer;
    slider?: MSXAttachedSliderContainer;
    info?: MSXAttachedInfoContainer;
    message?: string;
    string?: string;
    response?: AnyObject;
    dictionary?: MSXAttachedDictionaryContainer;
    notification?: string;
}

declare interface TVXSettings {
    readonly NAME: string;
    readonly SHORTCUT: string;
    readonly VERSION: string;
    readonly SUFFIX: string;
    DUMMY_DATE: Date;
    TIME_OFFSET: number;
    TIME_ZONE_OFFSET: number;
    ANIMATION_DURATION: number;
    ANIMATION_EASE: string;
    AFK_DELAY: number;
    SCREEN_WIDTH: number;
    SCREEN_HEIGHT: number;
    SCREEN_FACTOR: number;
    ZOOM_FACTOR: number;
    PLATFORM: string;
    ID: string;
    ANIMATE: number;
    TRANSFORM: number;
    INPUT: number;
    REMOTE: number;
    LAYOUT: string;
    SCALE: string;
    ZOOM: string;
    CENTER: number;
    BACKGROUND: number;
    LEAVE: number;
    EXIT: number;
    BACK: number;
    VOLUME: number;
    BUSY: number;
    SPEED: number;
    PLAYBACK: number;
    FULLSCREEN: number;
    SUSPEND: number;
    SECURE: number;
    APP: AnyObject;
}

declare interface TVXStyles {
    readonly COMMON: AnyObject;
    readonly LOGGER: AnyObject;
    readonly RENDERER: AnyObject;
    readonly REMOTE: AnyObject;
    APP: AnyObject;
}

declare interface TVXVersion {
    major: number;
    minor: number;
    patch: number;
}

declare interface TVXTools {
    createVersion(version: string): TVXVersion;
    checkVersion(currentVersion: string, minVersion: string): boolean;
    createKey(length?: number, type?: number): string;
    isFullStr(obj: any): boolean;
    isBool(obj: any): boolean;
    isNum(obj: any): boolean;
    isArray(obj: any): boolean;
    isEmpty(obj: any): boolean;
    isValid(obj: any, hasValue?: boolean): boolean;
    isId(id: any): boolean;
    isJson(json: any): boolean;
    isHttpUrl(url: any): boolean;
    strValue(obj: any): string;
    strFullCheck(str: any, defaultValue: string): string;
    strTrim(str: any): string;
    strClear(str: any): string;
    strFlatten(str: any): string;
    strTruncate(str: any, length: number): string;
    strShuffle(str: any): string;
    strReplace(str: any, find: string, replace?: any): string;
    strReplaceMap(str: any, map: AnyObject): string;
    strToBool(str: any, defaultValue: boolean): boolean;
    strToNum(str: any, defaultValue: number): number;
    strToAction(str: any): string;
    strToJsonStr(str: any): string;
    strToUrlStr(str: any): string;
    strContainsToken(str: any, token: string, start?: number, end?: number): boolean;
    strCountToken(str: any, token: string, start?: number, end?: number): number;
    htmlTrim(str: string): string;
    htmlEscape(str: string): string;
    htmlUnescape(str: string): string;
    htmlAttrEscape(str: string): string;
    htmlAttrUnescape(str: string): string;
    htmlTextEscape(str: string): string;
    htmlCharacter(str: string): string;
    base64Encode(str: string): string;
    base64EncodeUrl(str: string): string;
    base64EncodeId(str: string): string;
    base64Decode(str: string): string;
    base64DecodeUrl(str: string): string;
    base64DecodeId(str: string): string;
    utf8Encode(str: string): string;
    utf8Decode(str: string): string;
    createHash(str: string, reverse?: boolean): number;
    serialize(obj: any, name?: string): string;
    deserialize(json: string): any;
    isSecureContext(): boolean;
    secureUrl(url: string): string;
    getPrefixUrl(suffix: string): string;
    getHostUrl(suffix: string): string;
    getPathUrl(suffix: string): string;
    getAbsoluteUrl(url: string): string;
    getRootPath(subPath: string, trim?: boolean): string;
    exprEscape(
        text: string,
        exprStart: string,
        exprEnd: string,
        textCallback: (text: string, state: any) => string,
        exprCallback: (expr: string, state: any) => string,
        completeCallback: (state: any) => string,
        state: any): string;
}

declare interface TVXDateTools {
    applyDictionary(dictionary: TVXDictionary): void;
    getTimestamp(): number;
    getNow(): Date;
    getFormatSeparator(): string;
    getFormattedDateStr(date: Date | number, format: string, y?: number, m?: number, d?: number): string;
    getDayStr(date: Date | number, y?: number, m?: number, d?: number): string;
    getDayLongStr(date: Date | number, y?: number, m?: number, d?: number): string;
    getDayFullStr(date: Date | number, y?: number, m?: number, d?: number): string;
    getDateStr(date: Date | number, y?: number, m?: number, d?: number): string;
    getDateLongStr(date: Date | number, y?: number, m?: number, d?: number): string;
    getFormattedTimeStr(date: Date | number, format: string, y?: number, m?: number, d?: number): string;
    getTimeStr(date: Date | number, h?: number, m?: number, s?: number): string;
    getTimeLongStr(date: Date | number, h?: number, m?: number, s?: number): string;
    getRecordingStr(date: Date | number): string;
    getFormattedDurationStr(timeInMs: number, format: string): string;
    getDurationStr(timeInMs: number, values?: string): string;
    getVideoStr(timeInMs: number, digits?: number): string;
}

declare interface TVXDateFormatter {
    toTimeStr(date: Date | number): string;
    toTimeLongStr(date: Date | number): string;
    toTimeDayStr(date: Date | number): string;
    toTimeDayLongStr(date: Date | number): string;
    toDayStr(date: Date | number): string;
    toDayLongStr(date: Date | number): string;
    toDayFullStr(date: Date | number): string;
    toDateStr(date: Date | number): string;
    toDateLongStr(date: Date | number): string;
    toRecordingStr(date: Date | number): string;
    toDayTimeStr(date: Date | number): string;
    toDayTimeLongStr(date: Date | number): string;
    toDayTimeFullStr(date: Date | number): string;
    toDateTimeStr(date: Date | number): string;
    toDateTimeLongStr(date: Date | number): string;
}

declare interface TVXPropertyTools {
    foreach(data: AnyObject, callback: (key: string, value: any) => void | boolean): void;
    getValue(data: AnyObject, key: string, defaultValue: any): any;
    get(data: AnyObject, key: string, defaultValue: string): string;
    getFullStr(data: AnyObject, key: string, defaultValue: string): string;
    getNum(data: AnyObject, ke: string, defaultValue: number): number;
    getBool(data: AnyObject, key: string, defaultValue: boolean): boolean;
    has(data: AnyObject, key: string, hasValue?: boolean): boolean;
    put(data: AnyObject, key: string, value: any): void;
    remove(data: AnyObject, key: string): void;
    clear(data: AnyObject): void;
    count(data: AnyObject): number;
    extend(data: AnyObject, extension: AnyObject): void;
}

declare interface TVXVideoState {
    readonly STOPPED: number;
    readonly PLAYING: number;
    readonly PAUSED: number;
}

declare interface TVXAction {
    readonly LEFT: number;
    readonly RIGHT: number;
    readonly UP: number;
    readonly DOWN: number;
    readonly EXECUTE: number;
    readonly EXIT: number;
    readonly BACK: number;
    readonly MENU: number;
    readonly GUIDE: number;
    readonly OPTIONS: number;
    readonly INFO: number;
    readonly CLEAR: number;
    readonly CHANNEL_LIST: number;
    readonly SETTINGS: number;
    readonly SEARCH: number;
    readonly PLAY: number;
    readonly PAUSE: number;
    readonly STOP: number;
    readonly NEXT_TRACK: number;
    readonly PREVIOUS_TRACK: number;
    readonly TOGGLE_PLAY_PAUSE: number;
    readonly FORWARD: number;
    readonly REWIND: number;
    readonly RECORD: number;
    readonly RESTART: number;
    readonly MUTE: number;
    readonly UNMUTE: number;
    readonly TOGGLE_MUTE: number;
    readonly CHANNEL_UP: number;
    readonly CHANNEL_DOWN: number;
    readonly VOLUME_UP: number;
    readonly VOLUME_DOWN: number;
    readonly RED: number;
    readonly GREEN: number;
    readonly YELLOW: number;
    readonly BLUE: number;
    readonly KEY_0: number;
    readonly KEY_1: number;
    readonly KEY_2: number;
    readonly KEY_3: number;
    readonly KEY_4: number;
    readonly KEY_5: number;
    readonly KEY_6: number;
    readonly KEY_7: number;
    readonly KEY_8: number;
    readonly KEY_9: number;
    readonly POWER: number;
    readonly SYSTEM: number;
    readonly CURSOR_ON: number;
    readonly CURSOR_OFF: number;
    readonly SCROLL_UP: number;
    readonly SCROLL_DOWN: number;
    readonly SWIPE_LEFT: number;
    readonly SWIPE_RIGHT: number;
    readonly SWIPE_UP: number;
    readonly SWIPE_DOWN: number;
    readonly SLEEP: number;
    readonly WAKE_UP: number;
    readonly CONNECTION_UP: number;
    readonly CONNECTION_DOWN: number;
    readonly DEBUG: number;
    readonly UNKNOWN: number;
    actionToStr(action: number): string;
    strToAction(str: string): number;
    isNavigationAction(action: number): boolean;
    isBaseAction(action: number): boolean;
    isVideoAction(action: number): boolean;
    isChannelAction(action: number): boolean;
    isVolumeAction(action: number): boolean;
    isNumberAction(action: number): boolean;
    isColorAction(action: number): boolean;
    isSystemAction(action: number): boolean;
}

declare abstract class TVXCookies {
    constructor();
    set(name: string, value: any, expires?: Date | number): void;
    get(name: string, defaultValue: string): string;
    getFullStr(name: string, defaultValue: string): string;
    getNum(name: string, defaultValue: number): number;
    getBool(name: string, defaultValue: boolean): boolean;
    has(name: string, hasValue?: boolean): boolean;
    foreach(callback: (name: string, value: any) => void | boolean): void;
    remove(name: string): void;
    clear(): void;
}

declare abstract class TVXStorage {
    constructor();
    set(name: string, value: any, expires?: Date | number): void;
    get(name: string, defaultValue: string): string;
    getFullStr(name: string, defaultValue: string): string;
    getNum(name: string, defaultValue: number): number;
    getBool(name: string, defaultValue: boolean): boolean;
    has(name: string, hasValue?: boolean): boolean;
    foreach(callback: (name: string, value: any) => void | boolean): void;
    remove(name: string): void;
    clear(): void;
    getType(): string;
    setType(type: string): void;
    isReady(): boolean;
    onReady(handler: () => void): void;
}

declare abstract class TVXUrlParams {
    constructor(url?: string);
    set(name: string, value: any): void;
    get(name: string, defaultValue: string): string;
    getFullStr(name: string, defaultValue: string): string;
    getNum(name: string, defaultValue: number): number;
    getBool(name: string, defaultValue: boolean): boolean;
    has(name: string, hasValue?: boolean): boolean;
    foreach(callback: (name: string, value: any) => void | boolean): void;
    remove(name: string): void;
    clear(): void;
    create(url: string): AnyObject;
    build(encoded?: boolean, separator?: string): string;
}

declare abstract class TVXOptions {
    constructor(options: AnyObject, defaultOptions?: AnyObject);
    getValue(name: string): any;
    get(name: string): string;
    getFullStr(name: string): string;
    getNum(name: string): number;
    getBool(name: string): boolean;
    has(name: string, hasValue?: boolean): boolean;
}

declare abstract class TVXObservers {
    constructor();
    hasObserver(name: string): boolean;
    hasObservers(): boolean;
    addObserver(name: string, handler: (data: AnyObject) => void): void;
    removeObserver(name: string): void;
    onEvent(name: string, handler?: (data: AnyObject) => void): void;
    notifyObserver(name: string, data: AnyObject): void;
    notifyObservers(data: AnyObject): void;
    clear(): void;
}

declare abstract class TVXEventObservers {
    constructor();
    hasObserver(eventName: string, handlerName: string): boolean;
    hasObservers(eventName: string): boolean;
    addObserver(eventName: string, handlerName: string, handler: (data: AnyObject) => void): void;
    removeObserver(eventName: string, handlerName: string): void;
    onEvent(eventName: string, handlerName: string, handler?: (data: AnyObject) => void): void;
    notifyObserver(eventName: string, handlerName: string, data: AnyObject): void;
    notifyObservers(eventName: string, data: AnyObject): void;
    clear(eventName?: string): void;
}

declare abstract class TVXQueue {
    constructor();
    delegate: AnyObject;
    execute(): void;
    process(): void;
    reset(): void;
    push(action: string | (() => void), delay?: number): void;
    isBusy(): boolean;
}

declare abstract class TVXWorker {
    constructor(size?: number, delay?: number);
    size: number;
    delay: number;
    work(): void;
    process(): void;
    reset(): void;
    execute(action: () => void): void;
    isBusy(): boolean;
}

declare abstract class TVXDelay {
    constructor(delay?: number);
    delay: number;
    start(action: () => void): void;
    restart(): void;
    stop(): void;
    finish(): void;
    isBusy(): boolean;
}

declare abstract class TVXClick {
    constructor();
    click(clicked: AnyObject): number;
}

declare interface TVXAjaxOptions {
    dataType?: string;
    isForm?: boolean;
    withCredentials?: boolean;
    accurateHeaders?: boolean;
    headers?: AnyObject;
}

declare interface TVXAjaxCallback {
    success?(data: any): void;
    error?(message: string): void;
}

declare abstract class TVXAjax {
    constructor();
    get(url: string, callback?: TVXAjaxCallback, options?: TVXAjaxOptions): void;
    post(url: string, data: string, callback?: TVXAjaxCallback, options?: TVXAjaxOptions): void;
    put(url: string, data: string, callback?: TVXAjaxCallback, options?: TVXAjaxOptions): void;
    del(url: string, callback?: TVXAjaxCallback, options?: TVXAjaxOptions): void;
}

declare interface TVXLogLevel {
    readonly OFF: number;
    readonly ERROR: number;
    readonly WARN: number;
    readonly INFO: number;
    readonly DEBUG: number;
}

declare abstract class TVXLogger {
    constructor();
    level: number;
    maxLines: number;
    maxDebugLength: number;
    maxInfoLength: number;
    maxWarnLength: number;
    maxErrorLength: number;
    registerControl(control: AnyObject, print?: boolean): void;
    unregisterControl(control: AnyObject): void;
    print(): void;
    clear(): void;
    log(level: number, message: string): void;
    debug(message: string): void;
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
}

declare abstract class TVXDictionary {
    constructor();
    onReady(name: string, handler?: () => void): void;
    init(data: AnyObject): void;
    getName(): string;
    getVersion(): string;
    getSize(): number;
    isInitialized(): boolean;
    getValueForKey(key: string, defaultValue: string): string;
    getValueForExpr(expr: string): string;
    getData(): AnyObject;
}

declare abstract class TVXClock {
    constructor();
    readonly delay: number;
    readonly now: Date;
    format: string;
    isRunning(): boolean;
    hasHook(name: string): boolean;
    hasHooks(): boolean;
    hasControl(): boolean;
    clearHooks(): void;
    addHook(name: string, hook: () => void): void;
    removeHook(name: string): void;
    onTick(name: string, hook?: () => void): void;
    registerControl(control: AnyObject): void;
    unregisterControl(control: AnyObject): void;
    update(): void;
    validate(): void;
    process(): void;
    start(): void;
    stop(): void;
}

declare abstract class TVXDataLoader {
    constructor();
    load(url: string, cacheId: string, callback?: TVXDataLoaderCallback, options?: TVXAjaxOptions): void;
    clearCache(cacheId: string): void;
    clear(): void;
}

declare interface TVXDataLoaderCallback {
    success?(data: any, cached: boolean): void;
    error?(message: string): void;
}

declare interface TVXServices {
    readonly logger: TVXLogger;
    readonly cookies: TVXCookies;
    readonly storage: TVXStorage;
    readonly urlParams: TVXUrlParams;
    readonly ajax: TVXAjax;
    readonly loader: TVXDataLoader;
}

declare abstract class TVXDataService {
    constructor();
    onReady(name: string, handler?: TVXDataServiceEntryCallback): void;
    onError(name: string, handler?: TVXDataServiceEntryCallback): void;
    onCompleted(name: string, handler?: TVXDataServiceEntryCallback): void;
    foreachEntry(callback: (entry: AnyObject) => void | boolean): void;
    foreachError(callback: (error: AnyObject) => void | boolean): void;
    getData(id: string): any;
    getEntry(id: string): AnyObject;
    setEntry(id: string, entry: AnyObject): void;
    getError(id: string): AnyObject;
    setError(id: string, error: AnyObject): void;
    shouldStoreData(id: string): boolean;
    createData(id: string, resp: any): void;
    putData(url: string, data: string, callback?: TVXDataServiceActionCallback, options?: TVXAjaxOptions): void;
    postData(url: string, data: string, callback?: TVXDataServiceActionCallback, options?: TVXAjaxOptions): void;
    deleteData(url: string, callback?: TVXDataServiceActionCallback, options?: TVXAjaxOptions): void;
    loadData(id: string, url: string, callback?: TVXDataServiceEntryCallback, options?: TVXAjaxOptions): void;
    clearData(id: string): void;
    clear(): void;
}

declare interface TVXDataServiceActionCallback {
    success?(data: any): void;
    error?(message: string, status: number, reason: AnyObject): void;
}

declare interface TVXDataServiceEntryCallback {
    success?(entry: AnyObject): void;
    error?(message: string, status: number, reason: AnyObject): void;
    completed?(entry: AnyObject): void;
}

declare abstract class TVXBlobService {
    constructor();
    onReady(name: string, handler?: TVXBlobServiceCallback): void;
    onError(name: string, handler?: TVXBlobServiceCallback): void;
    onCompleted(name: string, handler?: TVXBlobServiceCallback): void;
    foreachEntry(callback: (entry: AnyObject) => void | boolean): void;
    foreachError(callback: (error: AnyObject) => void | boolean): void;
    getBlob(id: string): AnyObject;
    getUrl(id: string): string;
    getEntry(id: string): AnyObject;
    setEntry(id: string, entry: AnyObject): void;
    getError(id: string): AnyObject;
    setError(id: string, error: AnyObject): void;
    executeBlob(id: string, url: string, data: string, callback?: TVXBlobServiceCallback, options?: TVXAjaxOptions): void;
    loadBlob(id: string, url: string, callback?: TVXBlobServiceCallback, options?: TVXAjaxOptions): void;
    clearBlob(id: string): void;
    clear(): void;
}

declare interface TVXBlobServiceCallback {
    success?(entry: AnyObject): void;
    error?(message: string, status: number, reason: AnyObject): void;
    completed?(entry: AnyObject): void;
}

declare abstract class TVXRequestService {
    constructor(timeout?: number);
    timeout: number;
    startRequest(callback?: TVXRequestServiceCallback): string;
    getRequestsCount(): number;
    isRequestPending(id: string): boolean;
    handleData(id: string, data?: any): void;
    handleError(id: string, message?: string, type?: string): void;
}

declare interface TVXRequestServiceCallback {
    success?(data: any): void;
    error?(message: string, type: string): void;
}

declare abstract class TVXBusyService {
    constructor();
    isBusy(): boolean;
    start(clear?: boolean): void;
    stop(clear?: boolean): void;
    onReady(handler: () => void): void;
}

declare interface TVXPluginTools {
    createCanvas(canvasClass: string, width: number, height: number): string;
    createIFrame(frameClass: string, src: string): string;
    areSettingsValidated(): boolean;
    invalidateSettings(): void;
    validateSettings(data: MSXAttachedInfo): void;
    onValidatedSettings(callback: () => void): void;
    handleSettingsEvent(data: AnyObject): void;
    getFrameworkInfo(data: MSXAttachedInfo): string;
    getApplicationInfo(data: MSXAttachedInfo): string;
    getContentInfo(data: MSXAttachedInfo): string;
    checkFramework(data: MSXAttachedInfo, minVersion: string, requiredName?: string): boolean;
    checkApplication(data: MSXAttachedInfo, minVersion: string, requiredName?: string): boolean;
    checkContent(data: MSXAttachedInfo, minVersion: string, requiredName?: string): boolean;
    isSameContentState(state: MSXAttachedContentState, state2: MSXAttachedContentState): boolean;
    createChangedContentState(currentState: TVXChangedContentState, newState: TVXChangedContentState): TVXChangedContentState;
    isReady(): boolean;
    onReady(handler: () => void): void;
    startInitService(): void;
    stopInitService(): void;
}

declare interface TVXChangedContentState extends MSXAttachedContentState {
    init: boolean;
    initChanged: boolean;
    startChanged: boolean;
    restoredChanged: boolean;
    menuIdChanged: boolean;
    menuFlagChanged: boolean;
    menuFocusChanged: boolean;
    menuIndexChanged: boolean;
    menuSizeChanged: boolean;
    contentIdChanged: boolean;
    contentFlagChanged: boolean;
    contentFocusChanged: boolean;
    contentIndexChanged: boolean;
    contentSizeChanged: boolean;
    contentVisibleChanged: boolean;
    panelIdChanged: boolean;
    panelFlagChanged: boolean;
    panelFocusChanged: boolean;
    panelIndexChanged: boolean;
    panelSizeChanged: boolean;
    panelVisibleChanged: boolean;
    videoVisibleChanged: boolean;
    videoActiveChanged: boolean;
    playerVisibleChanged: boolean;
    slideshowVisibleChanged: boolean;
    volumeVisibleChanged: boolean;
    logVisibleChanged: boolean;
}

declare interface TVXDeviceId {
    deviceId?: string;
    error?: string;
}

declare interface TVXPlayerButtonData {
    icon?: string;
    action?: string;
    enable?: boolean;
}

declare interface TVXVideoUpdateData {
    state?: number;
    position?: number;
    duration?: number;
    speed?: number;
    ended?: boolean;
    volume?: number;
    muted?: boolean;
}

/** This is the interface for a video/audio plugin. 
 * @see: {@link http://msx.benzac.de/info/xp/?tab=VideoPlugin}
*/
declare interface TVXVideoPlugin {
    /**
     * Sets up the player object (see TVXVideoPluginPlayer interface).
     * @param player The player object.
     */
    setupPlayer(player: TVXVideoPluginPlayer): void;
    /**
     * Sets the seek delay (in milliseconds).
     * @param delay The delay in milliseconds.
     */
    setSeekDelay(delay: number): void;
    /** Gets the seek delay (in milliseconds). */
    getSeekDelay(): number;
    /**
     * Sets the loading delay (in milliseconds).
     * @param delay The delay in milliseconds.
     */
    setLoadingDelay(delay: number): void;
    /** Gets the loading delay (in milliseconds). */
    getLoadingDelay(): number;
    /**
     * Sets the state (see TVXVideoState interface).
     * @param state The state.
     * @param commit Indicates if the player values should be directly comitted (default: false).
     */
    setState(state: number, commit?: boolean): void;
    /** Gets the state (see TVXVideoState interface). */
    getState(): number;
    /** Calls the play/pause/stop function on the player object. */
    applyState(): void;
    /**
     * Sets the position (in seconds) and stops the seek process.
     * @param position The position in seconds.
     * @param commit Indicates if the player values should be directly comitted (default: false).
     */
    setPosition(position: number, commit?: boolean): void;
    /** Gets the position (in seconds). */
    getPosition(): number;
    /** Calls the setPosition function on the player object. */
    applyPosition(): void;
    /**
     * Sets the duration (in seconds).
     * @param duration The duration in seconds.
     * @param commit Indicates if the player values should be directly comitted (default: false).
     */
    setDuration(duration: number, commit?: boolean): void;
    /** Gets the duration (in seconds). */
    getDuration(): number;
    /**
     * Sets the speed (0.125 .. 8.0).
     * @param speed The speed value from 0.125 to 8.0.
     * @param commit Indicates if the player values should be directly comitted (default: false).
     */
    setSpeed(speed: number, commit?: boolean): void;
    /** Gets the speed (0.125 .. 8.0). */
    getSpeed(): number;
    /** Calls the setSpeed function on the player object. */
    applySpeed(): void;
    /**
     * Sets if the player has ended.
     * @param ended The ended state.
     * @param commit Indicates if the player values should be directly comitted (default: false).
     */
    setEnded(ended: boolean, commit?: boolean): void;
    /** Indicates if the player has ended. */
    hasEnded(): boolean;
    /**
     * Sets the volume (0 .. 100).
     * @param volume The volume level from 0 to 100.
     * @param commit Indicates if the player values should be directly comitted (default: false).
     */
    setVolume(volume: number, commit?: boolean): void;
    /** Gets the volume (0 .. 100). */
    getVolume(): number;
    /**
     * Sets if the player is muted.
     * @param muted  The muted state.
     * @param commit Indicates if the player values should be directly comitted (default: false).
     */
    setMuted(muted: boolean, commit?: boolean): void;
    /** Indicates if the player is muted. */
    isMuted(): boolean;
    /** Calls the setVolume and setMuted function on the player object. */
    applyVolume(): void;
    /** Gets the player width (in pixels). */
    getWidth(): number;
    /** Gets the player height (in pixels). */
    getHeight(): number;
    /** Calls the setSize function on the player object. */
    applySize(): void;
    /**
     * Executes any action.
     * @param action Any action.
     * @param data Any action-related data.
     */
    executeAction(action: string, data?: AnyObject): void;
    /**
     * Logs a debug message.
     * @param message A message.
     * @param log Indicates if the message should be logged (default: true).
     */
    debug(message: string, log?: boolean): void;
    /**
     * Logs (and shows) a success message.
     * @param message A message.
     * @param log Indicates if the message should be logged (default: true).
     * @param show Indicates if the message should be shown (default: true).
     */
    success(message: string, log?: boolean, show?: boolean): void;
    /**
     * Logs (and shows) an info message.
     * @param message A message.
     * @param log Indicates if the message should be logged (default: true).
     * @param show Indicates if the message should be shown (default: true).
     */
    info(message: string, log?: boolean, show?: boolean): void;
    /**
     * Logs (and shows) a warning message.
     * @param message A message.
     * @param log Indicates if the message should be logged (default: true).
     * @param show Indicates if the message should be shown (default: true).
     */
    warn(message: string, log?: boolean, show?: boolean): void;
    /**
     * Logs (and shows) an error message.
     * @param message A message.
     * @param log Indicates if the message should be logged (default: true).
     * @param show Indicates if the message should be shown (default: true).
     */
    error(message: string, log?: boolean, show?: boolean): void;
    /**
     * Shows (or loads) a menu (the data parameter can be a JSON or URL).
     * @param data A JSON or URL.
     */
    showMenu(data: MSXMenuRoot | string): void;
    /**
     * Shows (or loads) a content page (the data parameter can be a JSON or URL).
     * @param data A JSON or URL.
     */
    showContent(data: MSXContentRoot | string): void;
    /**
     * Shows (or loads) a panel (the data parameter can be a JSON or URL).
     * @param data A JSON or URL.
     */
    showPanel(data: MSXContentRoot | string): void;
    /**
     * Shows the player.
     * @param key A remote key that should be applied (e.g. "execute", "left", "right", etc.).
     */
    showPlayer(key?: string): void;
    /** Shows the player action. */
    showAction(): void;
    /** Hides the player. */
    hidePlayer(): void;
    /**
     * Sets up the player content label.
     * @param label The label. If no label is set, the default label is used.
     */
    setupContentLabel(label?: string): void;
    /**
     * Sets up an additional player extension label.
     * @param label The label. If no label is set, the default label is used.
     */
    setupExtensionLabel(label?: string): void;
    /**
     * Sets up the player position label.
     * @param label The label. If no label is set, the default label is used.
     */
    setupPositionLabel(label?: string): void;
    /**
     * Sets up the player duration label.
     * @param label The label. If no label is set, the default label is used.
     */
    setupDurationLabel(label?: string): void;
    /**
    * Sets up the player speed label.
    * @param label The label. If no label is set, the default label is used.
    */
    setupSpeedLabel(label?: string): void;
    /**
     * Sets up a player info text (only available for extended players).
     * @param text The text. If no text is set, the text is removed.
     */
    setupInfoText(text?: string): void;
    /**
     * Sets up a player info image (only available for extended players).
     * @param image The image URL. If no image is set, the image is removed.
     */
    setupInfoImage(image?: string): void;
    /**
    * Sets up the player info overlay (only available for extended players).
    * @param overlay The overlay type. If no overlay is set, the default overlay is used.
    */
    setupInfoOverlay(overlay?: string): void;
    /**
    * Sets up the size of the player info image area (only available for extended players).
    * @param overlay The size of the image area. If no size is set, the default size is used.
    */
    setupInfoSize(overlay?: string): void;
    /**
    * Sets up a custom player control action (replacement for the action that is executed if the OK key is pressed while the video/audio is in foreground).
    * @param action The action. If no action is set, the default action is used.
    */
    setupControlAction(action?: string): void;
    /**
     * Sets up a player button (all buttons except the eject button are supported).
     * @param id The button ID.
     * @param data The button data. If no data is set, the default button is restored.
     */
    setupButton(id: string, data?: TVXPlayerButtonData): void;
    /**
    * Enables a player button (all buttons except the eject button are supported).
    * @param id The button ID.
    */
    enableButton(id: string): void;
    /**
     * Disables a player button (all buttons except the eject button are supported).
     * @param id The button ID.
     */
    disableButton(id: string): void;
    /**
     * Focuses a player button.
     * @param id The button ID.
     */
    focusButton(id: string): void;
    /**
     * Sets up the player progress position.
     * @param position The position. If no position is set, the default position is used.
     */
    setupProgressPosition(position?: number): void;
    /**
    * Sets up the player progress duration.
    * @param duration The duration. If no duration is set, the default duration is used.
    */
    setupProgressDuration(duration?: number): void;
    /**
     * Sets up the player progress color.
     * @param color The color. If no color is set, the default color is used.
     */
    setupProgressColor(color?: string): void;
    /**
     * Sets up the player progress type.
     * @param type The type. If no type is set, the default type is used.
     */
    setupProgressType(type?: string): void;
    /** Enables the player progress marker. */
    enableProgressMarker(): void;
    /** Disables the player progress marker. */
    disableProgressMarker(): void;
    /** Invalidates the player progress marker (marker will be unfocused). */
    invalidateProgressMarker(): void;
    /** Refreshes all player values. */
    refreshPlayer(): void;
    /** Resets custom player values that have been set at runtime. */
    resetPlayer(): void;
    /**
     * Sets up an audio background.
     * @param background The background image.
     */
    setupBackground(background?: string): void;
    /**
     * Sets up a video/audio trigger.
     * @param key The trigger key.
     * @param action The trigger action.
     * @param shot Indicates if the trigger should be removed when it has been executed (default: false).
     */
    setupTrigger(key: string, action: string, shot?: boolean): void;
    /**
     * Clears a video/audio trigger.
     * @param key The trigger key.
     */
    clearTrigger(key: string): void;
    /** Cancels an ongoing resume process. */
    cancelResume(): void;
    /**
     * Requests any data (e.g. "info", "video", "code", etc.).
     * @param dataId The data ID.
     * @param callback The callback that contains the result data. 
     * @param data Any request-related data.
     */
    requestData(dataId: string, callback?: (data: MSXAttachedGeneric) => void, data?: AnyObject): void;
    /**
     * Requests a response from the interaction plugin.
     * @param dataId The data ID.
     * @param callback The callback that contains the result data. 
     * @param data Any request-related data.
     */
    requestInteractionResponse(dataId: string, callback?: (data: MSXAttachedResponse) => void, data?: AnyObject): void;
    /**
     * Validates (or revalidates) the settings (see TVXSettings interface).
     * @param callback The callback that contains the result data with the validated settings.
     */
    validateSettings(callback?: (data: MSXAttachedInfo) => void): void;
    /**
     * Validates the settings if they are not validated (see TVXSettings interface).
     * @param callback The callback that is called after completion.
     */
    onValidatedSettings(callback: () => void): void;
    /**
     * Triggers a custom event (that can be handled by the interaction plugin).
     * @param eventId The event ID.
     * @param data Any event-related data;
     */
    triggerEvent(eventId: string, data?: AnyObject): void;
    /**
     * Sets up a local steam.
     * @param baseSteam The base steam.
     */
    setupSteam(baseSteam: string): void;
    /**
     * Creates a steam.
     * @param scope The scope.
     */
    createSteam(scope?: string): string;
    /**
     * Resolves a token.
     * @param token A token.
     * @param scope The scope.
     */
    resolveToken(token: string, scope?: string): string;
    /**
     * Transforms a string.
     * @param string A string.
     * @param scope The scope.
     */
    transformString(string: string, scope?: string): string;
    /**
     * Normalizes a string.
     * @param string A string.
     * @param scope The scope.
     */
    normalizeString(string: string, scope?: string): string;
    /**
     * Transforms a string asynchronously.
     * @param string A string.
     * @param scope The scope.
     * @param callback The callback that contains the result data with the transformed string.
     */
    transformStringAsync(string: string, scope?: string, callback?: (data: MSXAttachedString) => void): void;
    /**
     * Normalizes a string asynchronously.
     * @param string A string.
     * @param scope The scope.
     * @param callback The callback that contains the result data with the normalized string.
     */
    normalizeStringAsync(string: string, scope?: string, callback?: (data: MSXAttachedString) => void): void;
    /**
     * Creates a hash key.
     * @param string A string.
     * @param scope The scope.
     */
    createHashKey(string: string, scope?: string): string;
    /**
     * Clears the device ID (if it was created).
     */
    clearDeviceId(): void;
    /**
     * Returns (or creates) the device ID.
     * @param data The application info data.
     */
    getDeviceId(data?: MSXAttachedInfo): string;
    /**
     * Requests the device ID.
     * @param callback The callback that contains the result data with the device ID.
     */
    requestDeviceId(callback: (data: TVXDeviceId) => void): void;
    /**
     * Indicates if content observers exist.
     */
    hasContentObservers(): boolean;
    /**
     * Adds a content observer.
     * @param name The handler name.
     * @param handler The handler function.
     */
    addContentObserver(name: string, handler: (state: TVXChangedContentState) => void): void;
    /**
     * Removes a content observer.
     * @param name The handler name.
     */
    removeContentObserver(name: string): void;
    /**
     * Removes all content observers.     
     */
    clearContentObservers(): void;
    /** Initializes the player. */
    init(): void;
    /** Commits all player values. */
    commit(): void;
    /** Indicates if the player is initialized. */
    isInitialized(): boolean;
    /** Indicates if the player is ready. */
    isReady(): boolean;
    /**
     * Starts the playback (calls the play and periodically the getUpdateData function on the player object).
     * @param accelerate Indicates if the start should be accelerated by rapidly polling the getPosition and getDuration function on the player object (default: false).
     */
    startPlayback(accelerate?: boolean): void;
    /** Stops the playback. */
    stopPlayback(): void;
    /** Cancels the playback. */
    cancelPlayback(): void;
    /** 
     * Starts a loading process (shows a busy indicator after the loading delay). 
     * @param restart Indicates if a running loading delay should be restarted (default: true).
     */
    startLoading(restart?: boolean): void;
    /** Stops a loading process. */
    stopLoading(): void;
}

/** This interface defines the structure of a player object. */
declare interface TVXVideoPluginPlayer {
    /** Initializes the player. */
    init?(): void;
    /** This function is called when the player is ready. */
    ready?(): void;
    /** Plays the player. */
    play?(): void;
    /** Pauses the player. */
    pause?(): void;
    /** Stops the player. */
    stop?(): void;
    /** Gets the duration (in seconds). */
    getDuration?(): number;
    /** Gets the position (in seconds). */
    getPosition?(): number;
    /**
     * Sets the position (in seconds).
     * @param position The position in seconds.
     */
    setPosition?(position: number): void;
    /**
     * Sets the volume (0 .. 100).
     * @param volume The volume level from 0 to 100.
     */
    setVolume?(volume: number): void;
    /** Gets the volume (0 .. 100). */
    getVolume?(): number;
    /**
     * Sets if the player is muted.
     * @param muted The muted state.
     */
    setMuted?(muted: boolean): void;
    /** Indicates if the player is muted. */
    isMuted?(): boolean;
    /** Gets the speed (0.125 .. 8.0). */
    getSpeed?(): number;
    /**
     * Sets the speed (0.125 .. 8.0).
     * @param speed The speed value from 0.125 to 8.0.
     */
    setSpeed?(speed: number): void;
    /**
     * Sets the window size (in pixels).
     * @param width The width in pixels.
     * @param height The height in pixels.
     */
    setSize?(width: number, height: number): void;
    /** Gets the update data (this function will be called each second). */
    getUpdateData?(): TVXVideoUpdateData;
    /**
     * Handles an event. The data.event property can contain following values:
     * - "app:suspend"
     * - "app:resume"
     * - "app:connect"
     * - "app:disconnect"
     * - "app:time" (data.offset and data.zoneOffset properties contain the new time and zone offset)
     * - "app:result" (data.id property contains the request ID, data.code property contains the result code, and data.extra property contains the extra data)
     * - "video:load"* (data.info property contains the loaded video info and data.data property contains the active video data before this event occurred)
     * - "video:play"* (data.data property contains the active video data before this event occurred)
     * - "video:pause"* (data.data property contains the active video data before this event occurred)
     * - "video:stop"* (data.data property contains the active video data before this event occurred)
     * - "video:seek"* (data.position property contains the seeked position in seconds and data.data property contains the active video data before this event occurred)
     * - "video:restart"* (data.data property contains the active video data before this event occurred)
     * - "video:speed"* (data.speed property contains the new speed value and data.data property contains the active video data before this event occurred)
     * - "video:volume"* (data.volume and data.muted properties contain the new volume level and muted state)
     * - "slider:load" (data.info property contains the loaded slider info)
     * - "slider:play"
     * - "slider:pause"
     * - "slider:stop"
     * - "slider:position" (data.index, data.number, and data.listIndex properties contain the new item index, number, and list index)
     * - "settings:animate" (data.value property contains the new settings value)
     * - "settings:transform" (data.value property contains the new settings value)
     * - "settings:input" (data.value property contains the new settings value)
     * - "settings:remote" (data.value property contains the new settings value)
     * - "settings:layout" (data.value property contains the new settings value)
     * - "settings:scale" (data.value property contains the new settings value)
     * - "settings:zoom" (data.value property contains the new settings value)
     * - "settings:validate_links" (data.value property contains the new settings value)
     * - "settings:random_playback" (data.value property contains the new settings value)
     * - "settings:slideshow_interval" (data.value property contains the new settings value)
     * - "settings:hover_effect" (data.value property contains the new settings value)
     * - "settings:menu_button" (data.action and data.keyCode properties contain the new button action and key code)
     * - "custom:{EVENT_ID}" (data.data property optionally contains the event-related data)
     * *Note: Video events are usually not handled by the player, since the corresponding player function is also called (e.g. play() -> "video:play").
     * @param data The event data.
     */
    handleEvent?(data: AnyObject): void;
    /**
     * Handles any data. User-defined data is optionally available in the data.data property.
     * @param data Any data.
     */
    handleData?(data: AnyObject): void;
    /**
     * Handles a request. User-defined data is optionally available in the data.data property.
     * @param dataId The data ID.
     * @param data Any data.
     * @param callback The callback that has to be called with the result data.
     */
    handleRequest?(dataId: string, data: AnyObject, callback: (respData?: AnyObject) => void): void;
}

/** This is the interface for an interaction plugin. 
 * @see: {@link http://msx.benzac.de/info/xp/?tab=InteractionPlugin}
*/
declare interface TVXInteractionPlugin {
    /**
     * Sets up the interaction handler (see TVXInteractionPluginHandler interface).
     * @param handler The interaction handler.
     */
    setupHandler(handler: TVXInteractionPluginHandler): void;
    /**
     * Sets the loading delay (in milliseconds).
     * @param delay The delay in milliseconds.
     */
    setLoadingDelay(delay: number): void;
    /** Gets the loading delay (in milliseconds). */
    getLoadingDelay(): number;
    /**
     * Executes any action.
     * @param action Any action.
     * @param data Any action-related data.
     */
    executeAction(action: string, data?: AnyObject): void;
    /**
     * Logs a debug message.
     * @param message A message.
     * @param log Indicates if the message should be logged (default: true).
     */
    debug(message: string, log?: boolean): void;
    /**
     * Logs (and shows) a success message.
     * @param message A message.
     * @param log Indicates if the message should be logged (default: true).
     * @param show Indicates if the message should be shown (default: true).
     */
    success(message: string, log?: boolean, show?: boolean): void;
    /**
     * Logs (and shows) an info message.
     * @param message A message.
     * @param log Indicates if the message should be logged (default: true).
     * @param show Indicates if the message should be shown (default: true).
     */
    info(message: string, log?: boolean, show?: boolean): void;
    /**
     * Logs (and shows) a warning message.
     * @param message A message.
     * @param log Indicates if the message should be logged (default: true).
     * @param show Indicates if the message should be shown (default: true).
     */
    warn(message: string, log?: boolean, show?: boolean): void;
    /**
     * Logs (and shows) an error message.
     * @param message A message.
     * @param log Indicates if the message should be logged (default: true).
     * @param show Indicates if the message should be shown (default: true).
     */
    error(message: string, log?: boolean, show?: boolean): void;
    /**
     * Shows (or loads) a menu (the data parameter can be a JSON or URL).
     * @param data A JSON or URL.
     */
    showMenu(data: MSXMenuRoot | string): void;
    /**
     * Shows (or loads) a content page (the data parameter can be a JSON or URL).
     * @param data A JSON or URL.
     */
    showContent(data: MSXContentRoot | string): void;
    /**
     * Shows (or loads) a panel (the data parameter can be a JSON or URL).
     * @param data A JSON or URL.
     */
    showPanel(data: MSXContentRoot | string): void;
    /**
     * Requests any data (e.g. "info", "video", "code", etc.).
     * @param dataId The data ID.
     * @param callback The callback that contains the result data. 
     * @param data Any request-related data.
     */
    requestData(dataId: string, callback?: (data: MSXAttachedGeneric) => void, data?: AnyObject): void;
    /**
     * Requests a response from the player (handled by the video/audio plugin).
     * @param dataId The data ID.
     * @param callback The callback that contains the result data. 
     * @param data Any request-related data.
     */
    requestPlayerResponse(dataId: string, callback?: (data: MSXAttachedResponse) => void, data?: AnyObject): void;
    /**
     * Validates (or revalidates) the settings (see TVXSettings interface).
     * @param callback The callback that contains the result data with the validated settings.
     */
    validateSettings(callback?: (data: MSXAttachedInfo) => void): void;
    /**
     * Validates the settings if they are not validated (see TVXSettings interface).
     * @param callback The callback that is called after completion.
     */
    onValidatedSettings(callback: () => void): void;
    /**
     * Triggers a custom event (that can be handled by the video/audio plugin).
     * @param eventId The event ID.
     * @param data Any event-related data;
     */
    triggerEvent(eventId: string, data?: AnyObject): void;
    /**
     * Sets up a local steam.
     * @param baseSteam The base steam.
     */
    setupSteam(baseSteam: string): void;
    /**
     * Creates a steam.
     * @param scope The scope.
     */
    createSteam(scope?: string): string;
    /**
     * Resolves a token.
     * @param token A token.
     * @param scope The scope.
     */
    resolveToken(token: string, scope?: string): string;
    /**
     * Transforms a string.
     * @param string A string.
     * @param scope The scope.
     */
    transformString(string: string, scope?: string): string;
    /**
     * Normalizes a string.
     * @param string A string.
     * @param scope The scope.
     */
    normalizeString(string: string, scope?: string): string;
    /**
     * Transforms a string asynchronously.
     * @param string A string.
     * @param scope The scope.
     * @param callback The callback that contains the result data with the transformed string.
     */
    transformStringAsync(string: string, scope?: string, callback?: (data: MSXAttachedString) => void): void;
    /**
     * Normalizes a string asynchronously.
     * @param string A string.
     * @param scope The scope.
     * @param callback The callback that contains the result data with the normalized string.
     */
    normalizeStringAsync(string: string, scope?: string, callback?: (data: MSXAttachedString) => void): void;
    /**
     * Creates a hash key.
     * @param string A string.
     * @param scope The scope.
     */
    createHashKey(string: string, scope?: string): string;
    /**
     * Clears the device ID (if it was created).
     */
    clearDeviceId(): void;
    /**
     * Returns (or creates) the device ID.
     * @param data The application info data.
     */
    getDeviceId(data?: MSXAttachedInfo): string;
    /**
     * Requests the device ID.
     * @param callback The callback that contains the result data with the device ID.
     */
    requestDeviceId(callback: (data: TVXDeviceId) => void): void;
    /**
     * Indicates if content observers exist.
     */
    hasContentObservers(): boolean;
    /**
     * Adds a content observer.
     * @param name The handler name.
     * @param handler The handler function.
     */
    addContentObserver(name: string, handler: (state: TVXChangedContentState) => void): void;
    /**
     * Removes a content observer.
     * @param name The handler name.
     */
    removeContentObserver(name: string): void;
    /**
     * Removes all content observers.     
     */
    clearContentObservers(): void;
    /** Initializes the interaction plugin. */
    init(): void;
    /** Indicates if the interaction plugin is initialized. */
    isInitialized(): boolean;
    /** Indicates if the interaction plugin is ready. */
    isReady(): boolean;
    /** 
     * Starts a loading process (shows a busy indicator after the loading delay). 
     * @param restart Indicates if a running loading delay should be restarted (default: true).
     */
    startLoading(restart?: boolean): void;
    /** Stops a loading process. */
    stopLoading(): void;
}

/** This interface defines the structure of an interaction handler. */
declare interface TVXInteractionPluginHandler {
    /** Initializes the handler. */
    init?(): void;
    /** This function is called when the handler is ready. */
    ready?(): void;
    /**
     * Handles an event. The data.event property can contain following values:
     * - "app:suspend"
     * - "app:resume"
     * - "app:connect"
     * - "app:disconnect"
     * - "app:time" (data.offset and data.zoneOffset properties contain the new time and zone offset)
     * - "app:result" (data.id property contains the request ID, data.code property contains the result code, and data.extra property contains the extra data)
     * - "video:load" (data.info property contains the loaded video info and data.data property contains the active video data before this event occurred)
     * - "video:play" (data.data property contains the active video data before this event occurred)
     * - "video:pause" (data.data property contains the active video data before this event occurred)
     * - "video:stop" (data.data property contains the active video data before this event occurred)
     * - "video:seek" (data.position property contains the seeked position in seconds and data.data property contains the active video data before this event occurred)
     * - "video:restart" (data.data property contains the active video data before this event occurred)
     * - "video:speed" (data.speed property contains the new speed value and data.data property contains the active video data before this event occurred)
     * - "video:volume" (data.volume and data.muted properties contain the new volume level and muted state)
     * - "slider:load" (data.info property contains the loaded slider info)
     * - "slider:play"
     * - "slider:pause"
     * - "slider:stop"
     * - "slider:position" (data.index, data.number, and data.listIndex properties contain the new item index, number, and list index)
     * - "settings:animate" (data.value property contains the new settings value)
     * - "settings:transform" (data.value property contains the new settings value)
     * - "settings:input" (data.value property contains the new settings value)
     * - "settings:remote" (data.value property contains the new settings value)
     * - "settings:layout" (data.value property contains the new settings value)
     * - "settings:scale" (data.value property contains the new settings value)
     * - "settings:zoom" (data.value property contains the new settings value)
     * - "settings:validate_links" (data.value property contains the new settings value)
     * - "settings:random_playback" (data.value property contains the new settings value)
     * - "settings:slideshow_interval" (data.value property contains the new settings value)
     * - "settings:hover_effect" (data.value property contains the new settings value)
     * - "settings:menu_button" (data.action and data.keyCode properties contain the new button action and key code)
     * - "custom:{EVENT_ID}" (data.data property optionally contains the event-related data)
     * @param data The event data.
     */
    handleEvent?(data: AnyObject): void;
    /**
     * Handles any data. User-defined data is optionally available in the data.data property.
     * @param data Any data.
     */
    handleData?(data: AnyObject): void;
    /**
     * Handles a request. User-defined data is optionally available in the data.data property.
     * @param dataId The data ID.
     * @param data Any data.
     * @param callback The callback that has to be called with the result data.
     */
    handleRequest?(dataId: string, data: AnyObject, callback: (respData?: AnyObject) => void): void;
}

export const Settings: TVXSettings;
export const Styles: TVXStyles;
export const Tools: TVXTools;
export const DateTools: TVXDateTools;
export const DateFormatter: TVXDateFormatter;
export const PropertyTools: TVXPropertyTools;
export const VideoState: TVXVideoState;
export const Action: TVXAction;
export class Cookies extends TVXCookies { }
export class Storage extends TVXStorage { }
export class UrlParams extends TVXUrlParams { }
export class Options extends TVXOptions { }
export class Observers extends TVXObservers { }
export class EventObservers extends TVXEventObservers { }
export class Queue extends TVXQueue { }
export class Worker extends TVXWorker { }
export class Delay extends TVXDelay { }
export class Click extends TVXClick { }
export class Ajax extends TVXAjax { }
export const LogLevel: TVXLogLevel;
export class Logger extends TVXLogger { }
export class Dictionary extends TVXDictionary { }
export class Clock extends TVXClock { }
export class DataLoader extends TVXDataLoader { }
export const Services: TVXServices;
export class DataService extends TVXDataService { }
export class BlobService extends TVXBlobService { }
export class RequestService extends TVXRequestService { }
export class BusyService extends TVXBusyService { }
export const PluginTools: TVXPluginTools;
export const VideoPlugin: TVXVideoPlugin;
export const InteractionPlugin: TVXInteractionPlugin;