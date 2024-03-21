import { Icon } from "./icons";

export default function searchIcons(
  icons: Icon[],
  prompt: string,
  page: number
) {
  const searchedIcons = icons.filter((icon) => {
    const name = icon.name.toLowerCase();
    const search = prompt.toLowerCase();

    return (
      name.startsWith(search) ||
      icon.keywords.some((keyword) => keyword.toLowerCase().startsWith(search))
    );
  });

  return searchedIcons;
}
