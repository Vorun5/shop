export function isImageUrl(url: string): boolean {
  const imageUrlPattern: RegExp = /\b(?:https?:\/\/\S*\.(?:jpg|jpeg|gif|png|webp))\b/i

  return imageUrlPattern.test(url)
}
