export function genDescribeName(filename: string) {
  return `Test ${filename.split('/').pop().replace(/(\.test|\.spec|\.e2e)/, '')}`;
}
