
const prefix = "key:"

export function keys(): Array<string> {
  return Object.keys(window.localStorage)
    .filter(key => key.startsWith(prefix))
    .map(key => key.substr(prefix.length));
}

export function get(key: string): string {
  const value = window.localStorage.getItem(prefix + key);
  return value || "";
}

export function set(key: string, value: string): void {
  window.localStorage.setItem(prefix + key, value);
}

export function current(value?: string): string {
  if(value === undefined)
    return window.localStorage.getItem("current") || "";

  window.localStorage.setItem("current", value);
  return window.localStorage.getItem("current") || "";
}
