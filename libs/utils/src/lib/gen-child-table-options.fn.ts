import {ColumnOptions} from 'typeorm';
import {ChildType} from '@towpal-pro/types';

export function genParentTableOptions<T extends ChildType>(fullEnum: T): {
  pattern: 'STI',
  column: ColumnOptions,
} {
  return {
    pattern: 'STI',
    column: {
      name: 'type',
      type: 'enum',
      enum: fullEnum,
    },
  };
}
