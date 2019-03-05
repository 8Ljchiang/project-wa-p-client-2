const executeIfFunction =
(f: any, context: any) =>
f instanceof Function ? f(context) : f;

export const switchcase =
(cases: any) =>
(defaultCase: any) =>
(type: any) => cases.hasOwnProperty(type) ? cases[type] : defaultCase;

export const switchcaseF =
(cases: any) =>
(defaultCase: any) =>
(type: any) =>
(context: any) =>
executeIfFunction(switchcase(cases)(defaultCase)(type), context);

export const isValidArray = (array: any[]): boolean => {
	return (array && Array.isArray(array) && array.length > 0);
}