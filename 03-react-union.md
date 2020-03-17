# iii. React-union 

## 03-01. Use react-union 
1. Clone the repo and checkout the branch `parcel-spa` and study code in the `src` folder.

```sh
git clone https://github.com/tommmyy/vodafone-uk-liferay.git
git checkout parcel-spa
```

2. According to instuctions on the slides or at [React-union.org](https://react-union.org/) integrate React-union such as:
- `WidgetContent` and `WidgetHero` are loaded through RU
- Mock the widget descriptors in the `index.html` file for each widget
- Create `routes.js` file where you define your [routes](https://react-union.org/union-component-union#route).
- Edit `src/components/Root.js` to use [`Union`](https://react-union.org/union-component-union) component
- Edit `src/index.js` to use [`justRender`](https://react-union.org/union-component-utilities#code-classlanguage-textjustrendercode) utility function 

### Hints	
* [Parcel-bundler v2](https://github.com/parcel-bundler/parcel)
* [React-union.org](https://react-union.org/)

## 03-02. Gatsby and Wordpress
1. Open [sandbox](https://codesandbox.io/s/twilight-shape-5n2xj) and study the code.

2. Cookie bar is now incorrectly shown under the navigation because its z-index is relative to Content istead of whole document.

3. Create component `<Portal containerRef={domEl}>...</Portal>` that transfers its `children` to `domEl`. Use it to transfer cookie bar to div outside the `#root`.

4. For now Portal supports only one element shown at the time. Because all instances of Portal uses same `<div>`. Try to solve if by dynamically generating the divs - see Hints.


### Hints
- [Modal in React Docs](https://reactjs.org/docs/portals.html)
- [useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)

## 03-03. - Configuration
1. Clone the repo and checkout the branch `configuration-intl` and study code.

```sh
git checkout configuration-intl 
```

2. Add [`common-data descriptor`](https://react-union.org/union-component-common-data-descriptors) to pass `defaultLocale` to our app.

3. Adding language switcher 

Use `onScanEnd` callback on `Union` component. The callback will pass result of scanning the HTML. Read the `defaultLocale` from it and set the locale of the app.

Next create set of buttons that dynamically sets the locale and translated messages.

4. Bonus: Practice [`withWidgetContext`](https://react-union.org/union-component-withwidgetcontext) -  Pass the cata (e.t. API endpoint) thgrough widget-descriptor. Create nested compnent in widget-content and print out the URL.
