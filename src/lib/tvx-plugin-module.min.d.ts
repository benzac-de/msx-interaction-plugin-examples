// Type definitions for TVX Plugin v0.0.40 (Module)
// Project: http://msx.benzac.de/info/
// Definitions by: Benjamin Zachey

declare interface TVXSettings {
    readonly NAME: string;
    readonly SHORTCUT: string;
    readonly VERSION: string;
    DUMMY_DATE: object;
    TIME_OFFSET: number;
    TIME_ZONE_OFFSET: number;
    ANIMATION_DURATION: number;
    ANIMATION_EASE: string;
    SCREEN_WIDTH: number;
    SCREEN_HEIGHT: number;
    SCREEN_FACTOR: number;
    ZOOM_FACTOR: number;
    PLATFORM: string;
    ANIMATE: number;
    TRANSFORM: number;
    INPUT: number;
    REMOTE: number;
    LAYOUT: string; 
    SCALE: string; 
    ZOOM: string; 
    CENTER: number; 
    BACKGROUND: number; 
    EXIT: number; 
    BACK: number; 
    VOLUME: number; 
    BUSY: number; 
    SPEED: number; 
    PLAYBACK: number; 
    FULLSCREEN: number;  
    APP: object;
}

declare interface TVXStyles {
    readonly COMMON: object;
    readonly LOGGER: object;
    readonly RENDERER: object;
    readonly REMOTE: object;
    APP: object;
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
    strTruncate(str: any, length: number): string;
    strShuffle(str: any): string;
    strReplace(str: any, find: string, replace?: any): string;
    strReplaceMap(str: any, map: object): string;
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
    base64Encode(str: string): string;
    base64EncodeUrl(str: string): string;
    base64EncodeId(str: string): string;
    base64Decode(str: string): string;
    base64DecodeUrl(str: string): string;
    base64DecodeId(str: string): string;
    utf8Encode(str: string): string;
    utf8Decode(str: string): string;
    createHash(str: string): number;
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
    getNow(): object;
    getFormattedDateStr(date: object | number, format: string, y?: number, m?: number, d?: number): string;
    getDayStr(date: object | number, y?: number, m?: number, d?: number): string;
    getDayLongStr(date: object | number, y?: number, m?: number, d?: number): string;
    getDayFullStr(date: object | number, y?: number, m?: number, d?: number): string;
    getDateStr(date: object | number, y?: number, m?: number, d?: number): string;
    getDateLongStr(date: object | number, y?: number, m?: number, d?: number): string;
    getFormattedTimeStr(date: object | number, format: string, y?: number, m?: number, d?: number): string;
    getTimeStr(date: object | number, h?: number, m?: number, s?: number): string;
    getTimeLongStr(date: object | number, h?: number, m?: number, s?: number): string;
    getRecordingStr(date: object | number): string;
    getFormattedDurationStr(timeInMs: number, format: string): string;
    getDurationStr(timeInMs: number, values?: string): string;
    getVideoStr(timeInMs: number, digits?: number): string;
}

declare interface TVXDateFormatter {
    toTimeStr(date: object | number): string;
    toTimeLongStr(date: object | number): string;
    toTimeDayStr(date: object | number): string;
    toTimeDayLongStr(date: object | number): string;
    toDayStr(date: object | number): string;
    toDayLongStr(date: object | number): string;
    toDayFullStr(date: object | number): string;
    toDateStr(date: object | number): string;
    toDateLongStr(date: object | number): string;
    toRecordingStr(date: object | number): string;
    toDayTimeStr(date: object | number): string;
    toDayTimeLongStr(date: object | number): string;
    toDayTimeFullStr(date: object | number): string;
    toDateTimeStr(date: object | number): string;
    toDateTimeLongStr(date: object | number): string;
}

declare interface TVXPropertyTools {
    foreach(data: object, callback: (key: string, value: any) => void | boolean): void;
    getValue(data: object, key: string, defaultValue: any): any;
    get(data: object, key: string, defaultValue: string): string;
    getFullStr(data: object, key: string, defaultValue: string): string;
    getNum(data: object, ke: string, defaultValue: number): number;
    getBool(data: object, key: string, defaultValue: boolean): boolean;
    has(data: object, key: string, hasValue?: boolean): boolean;
    put(data: object, key: string, value: any): void;
    remove(data: object, key: string): void;
    clear(data: object): void;
}

declare interface TVXVideoState {
    readonly STOPPED: number;
    readonly PLAYING: number;
    readonly PAUSED: number;
}

declare interface TVXAction {
    readonly LEFT: string;
    readonly RIGHT: string;
    readonly UP: string;
    readonly DOWN: string;
    readonly EXECUTE: string;
    readonly EXIT: string;
    readonly BACK: string;
    readonly MENU: string;
    readonly GUIDE: string;
    readonly OPTIONS: string;
    readonly INFO: string;
    readonly CLEAR: string;
    readonly CHANNEL_LIST: string;
    readonly SETTINGS: string;
    readonly SEARCH: string;
    readonly PLAY: string;
    readonly PAUSE: string;
    readonly STOP: string;
    readonly NEXT_TRACK: string;
    readonly PREVIOUS_TRACK: string;
    readonly TOGGLE_PLAY_PAUSE: string;
    readonly FORWARD: string;
    readonly REWIND: string;
    readonly RECORD: string;
    readonly RESTART: string;
    readonly MUTE: string;
    readonly UNMUTE: string;
    readonly TOGGLE_MUTE: string;
    readonly CHANNEL_UP: string;
    readonly CHANNEL_DOWN: string;
    readonly VOLUME_UP: string;
    readonly VOLUME_DOWN: string;
    readonly RED: string;
    readonly GREEN: string;
    readonly YELLOW: string;
    readonly BLUE: string;
    readonly KEY_0: string;
    readonly KEY_1: string;
    readonly KEY_2: string;
    readonly KEY_3: string;
    readonly KEY_4: string;
    readonly KEY_5: string;
    readonly KEY_6: string;
    readonly KEY_7: string;
    readonly KEY_8: string;
    readonly KEY_9: string;
    readonly POWER: string;
    readonly SYSTEM: string;
    readonly CURSOR_ON: string;
    readonly CURSOR_OFF: string;
    readonly SCROLL_UP: string;
    readonly SCROLL_DOWN: string;
    readonly SWIPE_LEFT: string;
    readonly SWIPE_RIGHT: string;
    readonly SWIPE_UP: string;
    readonly SWIPE_DOWN: string;
    readonly SLEEP: string;
    readonly WAKE_UP: string;
    readonly DEBUG: string;
    readonly UNKNOWN: string;
    actionToStr(action: number): string;
    strToAction(str: string): number;
    isNavigationAction(action: number): boolean;
    isBaseAction(action: number): boolean;
    isVideoAction(action: number): boolean;
    isChannelAction(action: number): boolean;
    isVolumeAction(action: number): boolean;
    isNumberAction(action: number): boolean;
    isColorAction(action: number): boolean;
}

declare abstract class TVXCookies {
    constructor();
    set(name: string, value: any, expires?: object | number): void;
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
    set(name: string, value: any, expires?: object | number): void;
    get(name: string, defaultValue: string): string;
    getFullStr(name: string, defaultValue: string): string;
    getNum(name: string, defaultValue: number): number;
    getBool(name: string, defaultValue: boolean): boolean;
    has(name: string, hasValue?: boolean): boolean;
    foreach(callback: (name: string, value: any) => void | boolean): void;
    remove(name: string): void;
    clear(): void;
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
    create(url: string): object;
    build(encoded?: boolean, separator?: string): string;
}

declare abstract class TVXOptions {
    constructor(options: object, defaultOptions?: object);
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
    addObserver(name: string, handler: (data: object) => void): void;
    removeObserver(name: string): void;
    onEvent(name: string, handler?: (data: object) => void): void;
    notifyObserver(name: string, data: object): void;
    notifyObservers(data: object): void;
}

declare abstract class TVXEventObservers {
    constructor();
    hasObserver(eventName: string, handlerName: string): boolean;
    hasObservers(eventName: string): boolean;
    addObserver(eventName: string, handlerName: string, handler: (data: object) => void): void;
    removeObserver(eventName: string, handlerName: string): void;
    onEvent(eventName: string, handlerName: string, handler?: (data: object) => void): void;
    notifyObserver(eventName: string, handlerName: string, data: object): void;
    notifyObservers(eventName: string, data: object): void;
}

declare abstract class TVXQueue {
    constructor();
    delegate: object;
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
    click(clicked: object): number;
}

declare interface TVXAjaxOptions {
    dataType?: string;
    isForm?: boolean;
    withCredentials?: boolean;
    accurateHeaders?: boolean;
    headers?: object;
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
    registerControl(control: object, print?: boolean): void;
    unregisterControl(control: object): void;
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
    init(dictionary: object): void;
    getValueForKey(key: string, defaultValue: string): string;
    isValidExpr(expr: string): boolean;
    getValueForExpr(expr: string): string;
}

declare abstract class TVXClock {
    constructor();
    readonly delay: number;
    readonly now: object;
    format: string;
    isRunning(): boolean;
    hasHook(name: string): boolean;
    hasHooks(): boolean;
    hasControl(): boolean;
    clearHooks(): void;
    addHook(name: string, hook: () => void): void;
    removeHook(name: string): void;
    onTick(name: string, hook?: () => void): void;
    registerControl(control: object): void;
    unregisterControl(control: object): void;
    update(): void;
    validate(): void;
    process(): void;
    start(): void;
    stop(): void;
}

declare interface TVXServices {
    readonly logger: TVXLogger;
    readonly cookies: TVXCookies;
    readonly storage: TVXStorage;
    readonly urlParams: TVXUrlParams;
    readonly ajax: TVXAjax;
}

declare interface TVXDataLoaderCallback {
    success?(data: any, cached: boolean): void;
    error?(message: string): void;
}

declare abstract class TVXDataLoader {
    constructor();
    load(url: string, cacheId: string, callback?: TVXDataLoaderCallback, options?: TVXAjaxOptions): void;
    clearCache(cacheId: string): void;
    clear(): void;
}

declare interface TVXDataServiceActionCallback {
    success?(data: any): void;
    error?(message: string, status: number, reason: object): void;
}

declare interface TVXDataServiceEntryCallback {
    success?(entry: object): void;
    error?(message: string, status: number, reason: object): void;
    completed?(entry: object): void;
}

declare abstract class TVXDataService {
    constructor();
    onReady(name: string, handler?: TVXDataServiceEntryCallback): void;
    onError(name: string, handler?: TVXDataServiceEntryCallback): void;
    onCompleted(name: string, handler?: TVXDataServiceEntryCallback): void;
    foreachEntry(callback: (entry: object) => void | boolean): void;
    foreachError(callback: (error: object) => void | boolean): void;
    getData(id: string): any;
    getEntry(id: string): object;
    setEntry(id: string, entry: object): void;
    getError(id: string): object;
    setError(id: string, error: object): void;
    shouldStoreData(id: string): boolean;
    createData(id: string, resp: any): void;
    putData(url: string, data: string, callback?: TVXDataServiceActionCallback, options?: TVXAjaxOptions): void;
    postData(url: string, data: string, callback?: TVXDataServiceActionCallback, options?: TVXAjaxOptions): void;
    deleteData(url: string, callback?: TVXDataServiceActionCallback, options?: TVXAjaxOptions): void;
    loadData(id: string, url: string, callback?: TVXDataServiceEntryCallback, options?: TVXAjaxOptions): void;
    clearData(id: string): void;
    clear(): void;
}

declare interface TVXBlobServiceCallback {
    success?(entry: object): void;
    error?(message: string, status: number, reason: object): void;
    completed?(entry: object): void;
}

declare abstract class TVXBlobService {
    constructor();
    onReady(name: string, handler?: TVXBlobServiceCallback): void;
    onError(name: string, handler?: TVXBlobServiceCallback): void;
    onCompleted(name: string, handler?: TVXBlobServiceCallback): void;
    foreachEntry(callback: (entry: object) => void | boolean): void;
    foreachError(callback: (error: object) => void | boolean): void;
    getBlob(id: string): object;
    getUrl(id: string): string;
    getEntry(id: string): object;
    setEntry(id: string, entry: object): void;
    getError(id: string): object;
    setError(id: string, error: object): void;  
    loadBlob(id: string, url: string, callback?: TVXBlobServiceCallback, options?: TVXAjaxOptions): void;
    clearBlob(id: string): void;
    clear(): void;
}

declare interface TVXRequestServiceCallback {
    success?(data: any): void;
    error?(message: string, type: string): void;    
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

declare interface TVXPluginTools {
    createCanvas(canvasClass: string, width: number, height: number): string;
    createIFrame(frameClass: string, src: string): string;
    areSettingsValidated(): boolean;
    invalidateSettings(): void;
    validateSettings(data: object): void;
    onValidatedSettings(callback: () => void): void;
    handleSettingsEvent(data: object): void;
    getFrameworkInfo(data: object): string;
    getApplicationInfo(data: object): string;
    getContentInfo(data: object): string;
    checkFramework(data: object, minVersion: string, requiredName?: string): boolean;
    checkApplication(data: object, minVersion: string, requiredName?: string): boolean;
    checkContent(data: object, minVersion: string, requiredName?: string): boolean;
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
     * @param position
     */
    setPosition?(position: number): void;
    /**
     * Sets the volume (0 .. 100).
     * @param volume
     */
    setVolume?(volume: number): void;
    /** Gets the volume (0 .. 100). */
    getVolume?(): number;
    /**
     * Sets if the player is muted.
     * @param muted
     */
    setMuted?(muted: boolean): void;
    /** Indicates if the player is muted. */
    isMuted?(): boolean;
    /** Gets the speed (0.125 .. 8.0). */
    getSpeed?(): number;
    /**
     * Sets the speed (0.125 .. 8.0).
     * @param speed
     */
    setSpeed?(speed: number): void;
    /**
     * Sets the window size (in pixels).
     * @param width
     * @param height
     */
    setSize?(width: number, height: number): void;
    /** Gets the update data (this function will be called each second). */
    getUpdateData?(): TVXVideoUpdateData;
    /**
     * Handles any data. User-defined data is optionally available in the data.data property.
     * @param data
     */
    handleData?(data: object): void;
    /**
     * Handles a request. User-defined data is optionally available in the data.data property.
     * @param dataId
     * @param data
     * @param callback
     */
    handleRequest?(dataId: string, data: object, callback: (respData?: object) => void): void;
}

/** This is the interface for a video/audio plugin. */
declare interface TVXVideoPlugin {
    /**
     * Sets up a player object (see TVXVideoPluginPlayer interface).
     * @param player
     */
    setupPlayer(player: TVXVideoPluginPlayer): void;
    /**
     * Sets the seek delay (in milliseconds).
     * @param delay
     */
    setSeekDelay(delay: number): void;
    /** Gets the seek delay (in milliseconds). */
    getSeekDelay(): number;
    /**
     * Sets the loading delay (in milliseconds).
     * @param delay
     */
    setLoadingDelay(delay: number): void;
    /** Gets the loading delay (in milliseconds). */
    getLoadingDelay(): number;
    /**
     * Sets the state (see TVXVideoState interface).
     * @param state
     * @param commit
     */
    setState(state: number, commit?: boolean): void;
    /** Gets the state (see TVXVideoState interface). */
    getState(): number;
    /** Calls the play/pause/stop function on the player object. */
    applyState(): void;
    /**
     * Sets the position (in seconds) and stops the seek process.
     * @param position
     * @param commit
     */
    setPosition(position: number, commit?: boolean): void;
    /** Gets the position (in seconds). */
    getPosition(): number;
    /** Calls the setPosition function on the player object. */
    applyPosition(): void;
    /**
     * Sets the duration (in seconds).
     * @param duration
     * @param commit
     */
    setDuration(duration: number, commit?: boolean): void;
    /** Gets the duration (in seconds). */
    getDuration(): number;
    /**
     * Sets the speed (0.125 .. 8.0).
     * @param speed
     * @param commit
     */
    setSpeed(speed: number, commit?: boolean): void;
    /** Gets the speed (0.125 .. 8.0). */
    getSpeed(): number;
    /** Calls the setSpeed function on the player object. */
    applySpeed(): void;
    /**
     * Sets if the player has ended.
     * @param ended
     * @param commit
     */
    setEnded(ended: boolean, commit?: boolean): void;
    /** Indicates if the player has ended. */
    hasEnded(): boolean;
    /**
     * Sets the volume (0 .. 100).
     * @param volume
     * @param commit
     */
    setVolume(volume: number, commit?: boolean): void;
    /** Gets the volume (0 .. 100). */
    getVolume(): number;
    /**
     * Sets if the player is muted.
     * @param muted
     * @param commit
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
     * @param action
     * @param data
     */
    executeAction(action: string, data?: object): void;
    /**
     * Logs a debug message.
     * @param message
     * @param log
     */
    debug(message: string, log?: boolean): void;
    /**
     * Logs (and shows) a success message.
     * @param message
     * @param log
     * @param show
     */
    success(message: string, log?: boolean, show?: boolean): void;
    /**
     * Logs (and shows) an info message.
     * @param message
     * @param log
     * @param show
     */
    info(message: string, log?: boolean, show?: boolean): void;
    /**
     * Logs (and shows) a warning message.
     * @param message
     * @param log
     * @param show
     */
    warn(message: string, log?: boolean, show?: boolean): void;
    /**
     * Logs (and shows) an error message.
     * @param message
     * @param log
     * @param show
     */
    error(message: string, log?: boolean, show?: boolean): void;
    /**
     * Shows (or loads) a menu (the data parameter can be a JSON or URL).
     * @param data
     */
    showMenu(data: object | string): void;
    /**
     * Shows (or loads) a content page (the data parameter can be a JSON or URL).
     * @param data
     */
    showContent(data: object | string): void;
    /**
     * Shows (or loads) a panel (the data parameter can be a JSON or URL).
     * @param data
     */
    showPanel(data: object | string): void;
    /** Shows the player. */
    showPlayer(): void;
    /** Shows the player action. */
    showAction(): void;
    /** Hides the player. */
    hidePlayer(): void;
    /**
     * Sets up the player content label.
     * @param label
     */
    setupContentLabel(label?: string): void;
    /**
     * Sets up an additional player extension label.
     * @param label
     */
    setupExtensionLabel(label?: string): void;
    /**
     * Sets up the player position label.
     * @param label
     */
    setupPositionLabel(label?: string): void;
    /**
     * Sets up the player duration label.
     * @param label
     */
    setupDurationLabel(label?: string): void;
    /**
     * Sets up the player progress color.
     * @param color
     */
    setupProgressColor(color?: string): void;
    /**
     * Sets up the player progress type.
     * @param type
     */
    setupProgressType(type?: string): void;
    /** Enables the player progress marker. */
    enableProgressMarker(): void;
    /** Disables the player progress marker. */
    disableProgressMarker(): void;
    /** Invalidates the player progress marker (marker will be unfocused). */
    invalidateProgressMarker(): void;
    /**
     * Enables a player button (all buttons except the eject button are supported).
     * @param id
     */
    enableButton(id: string): void;
    /**
     * Disables a player button (all buttons except the eject button are supported).
     * @param id
     */
    disableButton(id: string): void;
    /**
     * Focuses a player button.
     * @param id
     */
    focusButton(id: string): void;
    /** Refreshes all player values. */
    refreshPlayer(): void;
    /** Resets custom player values that have been set at runtime. */
    resetPlayer(): void;
    /**
     * Sets up an audio background.
     * @param background
     */
    setupBackground(background?: string): void;
    /**
     * Sets up a video/audio trigger.
     * @param key
     * @param action
     * @param shot
     */
    setupTrigger(key: string, action: string, shot?: boolean): void;
    /**
     * Clears a video/audio trigger.
     * @param key
     */
    clearTrigger(key: string): void;
    /** Cancels an ongoing resume process. */
    cancelResume(): void;
    /**
     * Requests any data (e.g. "info", "video", "code", etc.).
     * @param dataId
     * @param callback
     * @param data
     */
    requestData(dataId: string, callback?: (data: object) => void, data?: object): void;
    /**
     * Requests a response from the interaction plugin.
     * @param dataId
     * @param callback
     * @param data
     */
    requestInteractionResponse(dataId: string, callback?: (data: object) => void, data?: object): void;
    /**
     * Validates (or revalidates) the settings (see TVXSettings interface).
     * @param callback
     */
    validateSettings(callback?: (data: object) => void): void;
    /**
     * Validates the settings if they are not validated (see TVXSettings interface).
     * @param callback
     */
    onValidatedSettings(callback: () => void): void;
    /**
     * Triggers a custom event (that can be handled by the interaction plugin).
     * @param eventId
     * @param data
     */
    triggerEvent(eventId: string, data?: object): void;
    /**
     * Sets up a local steam.
     * @param baseSteam
     */
    setupSteam(baseSteam: string): void;
    /**
     * Creates a steam.
     * @param scope
     */
    createSteam(scope?: string): void;
    /**
     * Resolves a token.
     * @param token
     * @param scope
     */
    resolveToken(token: string, scope?: string): void;
    /**
     * Transforms a string.
     * @param string
     * @param scope
     */
    transformString(string: string, scope?: string): void;
    /**
     * Normalizes a string.
     * @param string
     * @param scope
     */
    normalizeString(string: string, scope?: string): void;
    /**
     * Transforms a string asynchronously.
     * @param string
     * @param scope
     * @param callback
     */
    transformStringAsync(string: string, scope?: string, callback?: (data: object) => void): void;
    /**
     * Normalizes a string asynchronously.
     * @param string
     * @param scope
     * @param callback
     */
    normalizeStringAsync(string: string, scope?: string, callback?: (data: object) => void): void;
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
     * @param accelerate
     */
    startPlayback(accelerate?: boolean): void;
    /** Stops the playback. */
    stopPlayback(): void;
    /** Cancels the playback. */
    cancelPlayback(): void;
    /** Starts a loading process (shows a busy indicator after the loading delay). */
    startLoading(): void;
    /** Stops a loading process. */
    stopLoading(): void;
}

/** This interface defines the structure of an interaction handler. */
declare interface TVXInteractionPluginHander {
    /** Initializes the handler. */
    init?(): void;
    /** This function is called when the handler is ready. */
    ready?(): void;  
    /**
     * Handles an event. The data.event property can contain following values:
     * - "time" (data.offset and data.zoneOffset properties contain the new time and zone offset)
     * - "video:load" (data.info property contains the loaded video info)
     * - "video:play"
     * - "video:pause"
     * - "video:stop"
     * - "video:seek" (data.position property contains the seeked position in seconds)
     * - "video:restart"
     * - "video:speed" (data.speed property contains the new speed value)
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
     * @param data
     */
    handleEvent?(data: object): void;
    /**
     * Handles any data. User-defined data is optionally available in the data.data property.
     * @param data
     */
    handleData?(data: object): void;
    /**
     * Handles a request. User-defined data is optionally available in the data.data property.
     * @param dataId
     * @param data
     * @param callback
     */
    handleRequest?(dataId: string, data: object, callback: (respData?: object) => void): void;
}

/** This is the interface for an interaction plugin. */
declare interface TVXInteractionPlugin {
    /**
     * Sets up an interaction handler (see TVXInteractionPluginHander interface).
     * @param handler
     */
    setupHandler(handler: TVXInteractionPluginHander): void;
    /**
     * Sets the loading delay (in milliseconds).
     * @param delay
     */
    setLoadingDelay(delay: number): void;
    /** Gets the loading delay (in milliseconds). */
    getLoadingDelay(): number;
    /**
     * Executes any action.
     * @param action
     * @param data
     */
    executeAction(action: string, data?: object): void;
    /**
     * Logs a debug message.
     * @param message
     * @param log
     */
    debug(message: string, log?: boolean): void;
    /**
     * Logs (and shows) a success message.
     * @param message
     * @param log
     * @param show
     */
    success(message: string, log?: boolean, show?: boolean): void;
    /**
     * Logs (and shows) an info message.
     * @param message
     * @param log
     * @param show
     */
    info(message: string, log?: boolean, show?: boolean): void;
    /**
     * Logs (and shows) an warning message.
     * @param message
     * @param log
     * @param show
     */
    warn(message: string, log?: boolean, show?: boolean): void;
    /**
     * Logs (and shows) an error message.
     * @param message
     * @param log
     * @param show
     */
    error(message: string, log?: boolean, show?: boolean): void;
    /**
     * Shows (or loads) a menu (the data parameter can be a JSON or URL).
     * @param data
     */
    showMenu(data: object | string): void;
    /**
     * Shows (or loads) a content (the data parameter can be a JSON or URL).
     * @param data
     */
    showContent(data: object | string): void;   
    /**
     * Shows (or loads) a panel (the data parameter can be a JSON or URL).
     * @param data
     */
    showPanel(data: object | string): void;
    /**
     * Requests any data (e.g. "info", "video", "code", etc.).
     * @param dataId
     * @param callback
     * @param data
     */
    requestData(dataId: string, callback?: (data: object) => void, data?: object): void;
    /**
     * Requests a response from the player (handled by the video/audio plugin).
     * @param dataId
     * @param callback
     * @param data
     */
    requestPlayerResponse(dataId: string, callback?: (data: object) => void, data?: object): void;
    /**
     * Validates (or revalidates) the settings (see TVXSettings interface).
     * @param callback
     */
    validateSettings(callback?: (data: object) => void): void;
    /**
     * Validates the settings if they are not validated (see TVXSettings interface).
     * @param callback
     */
    onValidatedSettings(callback: () => void): void;
    /**
     * Sets up a local steam.
     * @param baseSteam
     */
    setupSteam(baseSteam: string): void;
    /**
     * Creates a steam.
     * @param scope
     */
    createSteam(scope?: string): void;
    /**
     * Resolves a token.
     * @param token
     * @param scope
     */
    resolveToken(token: string, scope?: string): void;
    /**
     * Transforms a string.
     * @param string
     * @param scope
     */
    transformString(string: string, scope?: string): void;
    /**
     * Normalizes a string.
     * @param string
     * @param scope
     */
    normalizeString(string: string, scope?: string): void;
    /**
     * Transforms a string asynchronously.
     * @param string
     * @param scope
     * @param callback
     */
    transformStringAsync(string: string, scope?: string, callback?: (data: object) => void): void;
    /**
     * Normalizes a string asynchronously.
     * @param string
     * @param scope
     * @param callback
     */
    normalizeStringAsync(string: string, scope?: string, callback?: (data: object) => void): void;
    /** Initializes the interaction plugin. */
    init(): void;
    /** Indicates if the interaction plugin is initialized. */
    isInitialized(): boolean;
    /** Indicates if the interaction plugin is ready. */
    isReady(): boolean;
    /** Starts a loading process (shows a busy indicator after the loading delay). */
    startLoading(): void;
    /** Stops a loading process. */
    stopLoading(): void;
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
export const Services: TVXServices;
export class DataLoader extends TVXDataLoader { }
export class DataService extends TVXDataService { }
export class BlobService extends TVXBlobService { }
export class RequestService extends TVXRequestService { }
export const PluginTools: TVXPluginTools;
export const VideoPlugin: TVXVideoPlugin;
export const InteractionPlugin: TVXInteractionPlugin;