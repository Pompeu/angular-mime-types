# angular-mime-types

simple service for take mine-type for files with angular 1

use mime-db with depency

# how user


in your module angular import ['mys.mimes];

```js
  angular.module('app', ['mys.mimes']);
```

```js
  angular.modele('app')
    .controller('MyCtrl', ['mimes', fuction (mimes) {
      const file = {name: 'foo', mineType: 'plain/text'};

      const ext = mimes.getExtension(file.mimeType);
      console.log(ext); // 'txt'
    });
```

#how contrib

add new extension in project https://github.com/jshttp/mime-db
after npm run build and make your pull request there.

