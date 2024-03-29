/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { HTMLIonTabElement, RouteID, RouteWrite } from "./components/my-tabs/my-tabs";
export { HTMLIonTabElement, RouteID, RouteWrite } from "./components/my-tabs/my-tabs";
export namespace Components {
    interface MyComponent {
    }
    interface MyTabs {
        "getRouteId": () => Promise<RouteID | undefined>;
        /**
          * Get the currently selected tab. This method is only available for vanilla JavaScript projects. The Angular, React, and Vue implementations of tabs are coupled to each framework's router.
         */
        "getSelected": () => Promise<string | undefined>;
        /**
          * Get a specific tab by the value of its `tab` property or an element reference. This method is only available for vanilla JavaScript projects. The Angular, React, and Vue implementations of tabs are coupled to each framework's router.
          * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
         */
        "getTab": (tab: string | HTMLIonTabElement) => Promise<HTMLIonTabElement | undefined>;
        /**
          * Select a tab by the value of its `tab` property or an element reference. This method is only available for vanilla JavaScript projects. The Angular, React, and Vue implementations of tabs are coupled to each framework's router.
          * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
         */
        "select": (tab: string | HTMLIonTabElement) => Promise<boolean>;
        "setRouteId": (id: string) => Promise<RouteWrite>;
        "useRouter": boolean;
    }
}
export interface MyTabsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyTabsElement;
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyTabsElementEventMap {
        "ionNavWillLoad": void;
        "ionTabsWillChange": { tab: string };
        "ionTabsDidChange": { tab: string };
    }
    interface HTMLMyTabsElement extends Components.MyTabs, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMyTabsElementEventMap>(type: K, listener: (this: HTMLMyTabsElement, ev: MyTabsCustomEvent<HTMLMyTabsElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMyTabsElementEventMap>(type: K, listener: (this: HTMLMyTabsElement, ev: MyTabsCustomEvent<HTMLMyTabsElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMyTabsElement: {
        prototype: HTMLMyTabsElement;
        new (): HTMLMyTabsElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "my-tabs": HTMLMyTabsElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
    }
    interface MyTabs {
        /**
          * Emitted when the navigation will load a component.
         */
        "onIonNavWillLoad"?: (event: MyTabsCustomEvent<void>) => void;
        /**
          * Emitted when the navigation has finished transitioning to a new component.
         */
        "onIonTabsDidChange"?: (event: MyTabsCustomEvent<{ tab: string }>) => void;
        /**
          * Emitted when the navigation is about to transition to a new component.
         */
        "onIonTabsWillChange"?: (event: MyTabsCustomEvent<{ tab: string }>) => void;
        "useRouter"?: boolean;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "my-tabs": MyTabs;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-tabs": LocalJSX.MyTabs & JSXBase.HTMLAttributes<HTMLMyTabsElement>;
        }
    }
}
