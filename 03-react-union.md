# iii. React-union 

## 03-01. Use react-union 

## 03-02. Gatsby and Wordpress
1. Open [sandbox](https://codesandbox.io/s/twilight-shape-5n2xj) and study the code.

2. Cookie bar is now incorrectly shown under the navigation because its z-index is relative to Content istead of whole document.

3. Create component `<Portal containerRef={domEl}>...</Portal>` that transfers its `children` to `domEl`. Use it to transfer cookie bar to div outside the `#root`.

4. For now Portal supports only one element shown at the time. Because all instances of Portal uses same `<div>`. Try to solve if by dynamically generating the divs - see Hints.


### Hints
- [Modal in React Docs](https://reactjs.org/docs/portals.html)
- [useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)
