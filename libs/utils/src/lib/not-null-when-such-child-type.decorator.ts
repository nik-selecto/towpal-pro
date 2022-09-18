import {Check} from 'typeorm';
import {toSnakeCaseFn} from './to-snake-case.fn';
import {entityToTypeName} from './entity-to-type.name.fn';

export function NotNullWhenSuchChildType() {
  return function (className, propName) {
    Check(`
      "${toSnakeCaseFn(propName)}" IS NOT NULL
      AND "type" = '${entityToTypeName(className.name)}'  
    `)(className, propName);
  };
}
