// eslint-disable-next-line @typescript-eslint/ban-types
export function entityToTypeName(entity: Function) {
  const [typeName] = entity.name.split('Entity');

  return typeName;
}
