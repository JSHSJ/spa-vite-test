import { registerApplication, start } from "single-spa";

const Apps = [
  {
    name: "@JSH/spa-test",
    // app: "@JSH/spa-test",
    app: "localhost:3000/src/microfrontend.tsx",
    path: "/",
  },
];

registerApplication({
  name: "@JSH/spa-test",
  app: () =>
    import(
      /* webpackIgnore: true */
      // @ts-ignore
      "//localhost:3000/src/microfrontend.tsx"
    ),
  // @ts-ignore
  // import("@JSH/spa-test"),
  activeWhen: ["/"],
});

// Apps.forEach((app) => {
//   registerApplication({
//     name: app.name,
//     /* webpackIgnore: true */
//     // @ts-ignore
//     app: () => import(app.app),
//     activeWhen: [app.path],
//   });
// });

start({
  urlRerouteOnly: true,
});
