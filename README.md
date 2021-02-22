## style guide

- every feature is developed inside /features/[name] folder
- no deep diging inside folders to get exports; all should be exported in module root index.ts

### Redux

- all actions start with **trigger** eg: `triggerCallAuthApi` or `tiggerSetuserData`
- all selectors start with **[module name]** eg: `authCurrentUser` and export on `select()` action
- redux index should export
  - default --> slice
  - named: actions
  - named: select() function that return selectors
