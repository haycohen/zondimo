// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
};

export const firebase = {
  apiKey: "AIzaSyDZSxGZOUHHGmbC1hlktCfnQHgOLQKVSwE",
  authDomain: "zondimo-a4824.firebaseapp.com",
  databaseURL: "https://zondimo-a4824.firebaseio.com",
  storageBucket: "zondimo-a4824.appspot.com",
  messagingSenderId: "860859415679",
};

// set this to true to use static data from "data" folder
export const staticData = false;
