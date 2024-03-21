export function responsive(breakpoint, classes) {
  return classes
    .split(" ")
    .map((cls) => {
      return `${breakpoint}:${cls}`;
    })
    .join(" ");
}
