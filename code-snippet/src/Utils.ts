import { toPng, toSvg } from "html-to-image";

export async function exportAsPng(
  element: HTMLElement,
  fileName: string = "snippet.png",
  isTransparent: boolean = false
) {
  const dataUrl = await toPng(element, {
    backgroundColor: isTransparent ? "transparent" : undefined,
  });
  const link = document.createElement("a");
  link.download = fileName;
  link.href = dataUrl;
  link.click();
}

export async function exportAsSvg(
  element: HTMLElement,
  fileName: string = "snippet.svg",
  isTransparent: boolean = false
) {
  const dataUrl = await toSvg(element, {
    backgroundColor: isTransparent ? "transparent" : undefined,
  });
  const link = document.createElement("a");
  link.download = fileName;
  link.href = dataUrl;
  link.click();
}
