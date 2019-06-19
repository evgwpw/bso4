/// <reference path="bso.ts" />
interface HTMLBlockElement extends HTMLElement {
    /**
      * Sets or retrieves reference information about the object.
      */
    cite: string;
    clear: string;
    /**
      * Sets or retrieves the width of the object.
      */
    width: number;
}

declare var HTMLBlockElement: {
    prototype: HTMLBlockElement;
    new(): HTMLBlockElement;
}
interface HTMLPhraseElement extends HTMLElement {
    /**
      * Sets or retrieves reference information about the object. 
      */
    cite: string;
    /**
      * Sets or retrieves the date and time of a modification to the object.  
      */
    dateTime: string;
}

declare var HTMLPhraseElement: {
    prototype: HTMLPhraseElement;
    new(): HTMLPhraseElement;
}
interface HTMLDDElement extends HTMLElement {
    /**
      * Sets or retrieves whether the browser automatically performs wordwrap.
      */
    noWrap: boolean;
}

declare var HTMLDDElement: {
    prototype: HTMLDDElement;
    new(): HTMLDDElement;
}

interface HTMLDTElement extends HTMLElement {
    /**
      * Sets or retrieves whether the browser automatically performs wordwrap.
      */
    noWrap: boolean;
}

declare var HTMLDTElement: {
    prototype: HTMLDTElement;
    new(): HTMLDTElement;
}

interface HTMLIsIndexElement extends HTMLElement {
    /**
      * Sets or retrieves the URL to which the form content is sent for processing.
      */
    action: string;
    /**
      * Retrieves a reference to the form that the object is embedded in. 
      */
    form: HTMLFormElement;
    prompt: string;
}

declare var HTMLIsIndexElement: {
    prototype: HTMLIsIndexElement;
    new(): HTMLIsIndexElement;
}
interface HTMLNextIdElement extends HTMLElement {
    n: string;
}

declare var HTMLNextIdElement: {
    prototype: HTMLNextIdElement;
    new(): HTMLNextIdElement;
}
interface MSWebViewAsyncOperationEventMap {
    "complete": Event;
    "error": Event;
}

interface MSWebViewAsyncOperation extends EventTarget {
    readonly error: DOMError;
    oncomplete: (this: MSWebViewAsyncOperation, ev: Event) => any;
    onerror: (this: MSWebViewAsyncOperation, ev: Event) => any;
    readonly readyState: number;
    readonly result: any;
    readonly target: MSHTMLWebViewElement;
    readonly type: number;
    start(): void;
    readonly COMPLETED: number;
    readonly ERROR: number;
    readonly STARTED: number;
    readonly TYPE_CAPTURE_PREVIEW_TO_RANDOM_ACCESS_STREAM: number;
    readonly TYPE_CREATE_DATA_PACKAGE_FROM_SELECTION: number;
    readonly TYPE_INVOKE_SCRIPT: number;
    addEventListener<K extends keyof MSWebViewAsyncOperationEventMap>(type: K, listener: (this: MSWebViewAsyncOperation, ev: MSWebViewAsyncOperationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MSWebViewAsyncOperationEventMap>(type: K, listener: (this: MSWebViewAsyncOperation, ev: MSWebViewAsyncOperationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var MSWebViewAsyncOperation: {
    prototype: MSWebViewAsyncOperation;
    new(): MSWebViewAsyncOperation;
    readonly COMPLETED: number;
    readonly ERROR: number;
    readonly STARTED: number;
    readonly TYPE_CAPTURE_PREVIEW_TO_RANDOM_ACCESS_STREAM: number;
    readonly TYPE_CREATE_DATA_PACKAGE_FROM_SELECTION: number;
    readonly TYPE_INVOKE_SCRIPT: number;
};

interface MSWebViewSettings {
    isIndexedDBEnabled: boolean;
    isJavaScriptEnabled: boolean;
}

declare var MSWebViewSettings: {
    prototype: MSWebViewSettings;
    new(): MSWebViewSettings;
};

interface MSHTMLWebViewElement extends HTMLElement {
    readonly canGoBack: boolean;
    readonly canGoForward: boolean;
    readonly containsFullScreenElement: boolean;
    readonly documentTitle: string;
    height: number;
    readonly settings: MSWebViewSettings;
    src: string;
    width: number;
    addWebAllowedObject(name: string, applicationObject: any): void;
    buildLocalStreamUri(contentIdentifier: string, relativePath: string): string;
    capturePreviewToBlobAsync(): MSWebViewAsyncOperation;
    captureSelectedContentToDataPackageAsync(): MSWebViewAsyncOperation;
    getDeferredPermissionRequestById(id: number): DeferredPermissionRequest;
    getDeferredPermissionRequests(): DeferredPermissionRequest[];
    goBack(): void;
    goForward(): void;
    invokeScriptAsync(scriptName: string, ...args: any[]): MSWebViewAsyncOperation;
    navigate(uri: string): void;
    navigateFocus(navigationReason: NavigationReason, origin: FocusNavigationOrigin): void;
    navigateToLocalStreamUri(source: string, streamResolver: any): void;
    navigateToString(contents: string): void;
    navigateWithHttpRequestMessage(requestMessage: any): void;
    refresh(): void;
    stop(): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: MSHTMLWebViewElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: MSHTMLWebViewElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var MSHTMLWebViewElement: {
    prototype: MSHTMLWebViewElement;
    new(): MSHTMLWebViewElement;
};
function address(act?: (t: HTMLBlockElement) => any, ...content: ElementCreator[]): HTMLBlockElement {
    return Tmp<HTMLBlockElement>('address', act, ...content);
}
function blockquote(act?: (t: HTMLBlockElement) => any, ...content: ElementCreator[]): HTMLBlockElement {
    return Tmp<HTMLBlockElement>('blockquote', act, ...content);
}
function center(act?: (t: HTMLBlockElement) => any, ...content: ElementCreator[]): HTMLBlockElement {
    return Tmp<HTMLBlockElement>('center', act, ...content);
}
function keygen(act?: (t: HTMLBlockElement) => any, ...content: ElementCreator[]): HTMLBlockElement {
    return Tmp<HTMLBlockElement>('keygen', act, ...content);
}
function listing(act?: (t: HTMLBlockElement) => any, ...content: ElementCreator[]): HTMLBlockElement {
    return Tmp<HTMLBlockElement>('listing', act, ...content);
}
function plaintext(act?: (t: HTMLBlockElement) => any, ...content: ElementCreator[]): HTMLBlockElement {
    return Tmp<HTMLBlockElement>('plaintext', act, ...content);
}
function xmp(act?: (t: HTMLBlockElement) => any, ...content: ElementCreator[]): HTMLBlockElement {
    return Tmp<HTMLBlockElement>('xmp', act, ...content);
}
function abbr(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('abbr', act, ...content);
}
function acronym(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('acronym', act, ...content);
}
function b(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('b', act, ...content);
}
function bdo(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('bdo', act, ...content);
}
function big(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('big', act, ...content);
}
function cite(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('cite', act, ...content);
}
function code(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('code', act, ...content);
}
function dfn(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('dfn', act, ...content);
}
function em(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('em', act, ...content);
}
function i(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('i', act, ...content);
}
function kbd(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('kbd', act, ...content);
}
function nobr(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('nobr', act, ...content);
}
function rt(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('rt', act, ...content);
}
function ruby(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('ruby', act, ...content);
}
function s(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('s', act, ...content);
}
function samp(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('samp', act, ...content);
}
function small(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('small', act, ...content);
}
function strike(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('strike', act, ...content);
}
function strong(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('strong', act, ...content);
}
function sub(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('sub', act, ...content);
}
function sup(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('sup', act, ...content);
}
function tt(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('tt', act, ...content);
}
function u(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('u', act, ...content);
}
function dd(act?: (t: HTMLDDElement) => any, ...content: ElementCreator[]): HTMLDDElement {
    return Tmp<HTMLDDElement>('dd', act, ...content);
}
function dt(act?: (t: HTMLDTElement) => any, ...content: ElementCreator[]): HTMLDTElement {
    return Tmp<HTMLDTElement>('dt', act, ...content);
}
function isindex(act?: (t: HTMLIsIndexElement) => any, ...content: ElementCreator[]): HTMLIsIndexElement {
    return Tmp<HTMLIsIndexElement>('isindex', act, ...content);
}
function nextid(act?: (t: HTMLNextIdElement) => any, ...content: ElementCreator[]): HTMLNextIdElement {
    return Tmp<HTMLNextIdElement>('nextid', act, ...content);
}
/**
 * конфликт с ключевым словом var
 * @param act
 * @param content
 */
function Var(act?: (t: HTMLPhraseElement) => any, ...content: ElementCreator[]): HTMLPhraseElement {
    return Tmp<HTMLPhraseElement>('var', act, ...content);
}
function xMsWebview(act?: (t: MSHTMLWebViewElement) => any, ...content: ElementCreator[]): MSHTMLWebViewElement {
    return Tmp<MSHTMLWebViewElement>('x-ms-webview', act, ...content);
}