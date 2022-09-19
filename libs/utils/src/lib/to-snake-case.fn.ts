import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const { columnName } = new SnakeNamingStrategy();

/**
 * We use function from already used by our typeorm plugin for
 * renaming class's prop names to postgres 'snake' style.
 */
export function toSnakeCaseFn(camelCaseName: string): string {
  return columnName(camelCaseName, '', []);
}
