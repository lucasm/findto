// normalize titles as ID format (to match with path of SVG logos filenames and Browser Storage)
export function normalizeId(value: string): string {
  let id = value
    .toLowerCase()
    .replace('í', 'i')
    .replace('ã', 'a')
    .replace('á', 'a')
    .replace('ê', 'e')
    .replace('é', 'e')
    .replace('ú', 'u')
    .replace('ó', 'o')
    .replace('ç', 'c')
    .replace(/\s/g, '-')
    .replace(/\./g, '')
  return id
}
