export const switchcase =
(cases: any) =>
(defaultCase: any) =>
(key: string) => cases.hasOwnProperty(key) ? cases[key] : defaultCase;
