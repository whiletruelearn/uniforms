---
id: tutorials-creating-custom-theme
title: Creating a custom theme
---

We've made hundreds of custom components across dozens of projects, including complete custom themes.
Most of them began as source forks of `uniforms-unstyled` - one simply copies the source
and imports `./some/project/path/uniforms-custom-theme-with-a-cool-name`.

For the purposes of this tutorial we will be using `uniforms-custom-theme` as our custom theme name.

### Copy theme source

Copy source from `node_modules/uniforms-unstyled` or other provided theme template
that you would like to extend, and put it inside `./uniforms-custom-theme`.
Now you can start making changes to your own custom theme!

### Problems with class extension

```
Class constructor _class cannot be invoked without 'new'
```

You may encounter an error like this one.
Problem here is that you're trying to extend compiled class (ES5 style) instead of ES6.
Fortunately, `uniforms` also ship their ES6 compiled version.
We couldn't make it default due to backward compatibility issues,
although we'll conisder doing this in upcoming `uniforms@3.x.x` release.

So, all you have to do is to use named imports. Change them from:

```js
import AutoForm from 'uniforms/AutoForm';
```

to

```js
import { AutoForm } from 'uniforms';
```

or

```js
import AutoForm from 'uniforms/es6/AutoForm';
```

All set! there should be no more problems from here.

### Referenced issues and pull requests

[#433](https://github.com/vazco/uniforms/issues/433)
[#609](https://github.com/vazco/uniforms/issues/609#issuecomment-545079686)
[#612](https://github.com/vazco/uniforms/pull/612#issuecomment-545643935)

### Setup by cloning ES6 branch

- Clone [added-es6-targets](https://github.com/vazco/uniforms/tree/added-es6-targets)
- ```
  git checkout added-es6-targets
  npm run build
  ```

  This will build `uniforms` locally, and you will be able to link it to your custom theme to import ES6 classes.

- Clone [refactorized/uniforms-skel](https://github.com/refactorized/uniforms-skel/tree/working-with-special-uniforms-branch) repository. [@refactorized](https://github.com/refactorized) made template ready for creating custom uniforms themes in typescript.
- `git checkout working-with-special-uniforms-branch`
- Follow instructions provided in README.
