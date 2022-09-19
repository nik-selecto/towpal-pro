import {Check} from 'typeorm';
import {toSnakeCaseFn} from './to-snake-case.fn';

export function NotNullWhenTypes(childTypes: string[]) {
  return function (className, propName) {
    const types = childTypes.map((child) => `'${child}'`).join(', ');
    const constraint = `
      "type" NOT IN (${types})
      OR
      "${toSnakeCaseFn(propName)}" IS NOT NULL
    `;

    Check(constraint)(className, propName);
  };
}
