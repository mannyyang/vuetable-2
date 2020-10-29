# Vuetable-3 - data table simplify!

### Documentation and Tutorial

WIP: [Storybook Pages](https://github.com/mannyynag/vuetable-3/storybook)

Meanwhile, check out
- the [Tutorial](https://github.com/ratiw/vuetable-2-tutorial/wiki)
with follow-along project [here](https://github.com/ratiw/vuetable-2-tutorial). It should be enough to get you started.

- [Sample project](https://github.com/ratiw/vuetable-2-with-laravel-5.4) using Vuetable-2 with Laravel 5.4 and Laravel-Mix

If you've been using Vuetable for Vue 1.x before, checkout [what's changed](https://github.com/ratiw/vuetable-2/blob/master/changes.md) for info on changes from Vuetable for Vue 1.x and the [upgrade guide](https://github.com/ratiw/vuetable-2/blob/master/upgrade-guide.md) on how you could upgrade from Vuetable for Vue 1.x.

You can now make use of Vue's scoped slot using the new `__slot` special field, thanks to @sjmarve. That means you are able to define action buttons per instance of a data table without depending on a globally defined component.

Use scoped slot in parent when defining the actions [Vue Doc for scopped Slots](https://vuejs.org/v2/guide/components.html#Scoped-Slots)

e.g.
```html
<template slot="actions" scope="props">
    <div class="table-button-container">
        <button class="btn btn-default" @click="onClick('edit-item', props.rowData)"><i class="fa fa-edit"></i> View</button>&nbsp;&nbsp;
        <button class="btn btn-danger" @click="onClick('delete-item', props.rowData)"><i class="fa fa-remove"></i> Edit</button>&nbsp;&nbsp;
    </div>
</template>
```

the onClick function can now be defined in the parent and the parent has Access to rowData and rowIndex via props. :)

The original functionality still works

# Example Code
- Clone the project
- Go into the cloned directory
- `npm install`
- `npm run dev`
- Open browser to `http://localhost:8080`

# Usage
## NPM

```shell
npm install vuetable-3 --save
```


# Contributions
Any contribution to the code (via pull request would be nice) or any part of the documentation and any idea and/or suggestion are very welcome.

> __Note__    
> For any bug fix, the PR should be forked from the `master` branch. And for any suggestion or additional feature, the PR should be forked from the `develop` branch, where it can be integrated and rolled out in the next release.  
>
> If you are not sure, please ask by openning a new issue. 

However, please do not feel bad if your pull requests or contributions do not get merged or implemented into Vuetable.

Your contributions can, not only help make Vuetable better, but also push it away from what I intend to use it for. I just hope that you find it useful for your use or learn something useful from its source code. But remember, you can always fork it to make it work the way you want.

# License
Vuetable is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
