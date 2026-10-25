import { createComponentSchema } from '../createComponentSchema';

describe('createComponentSchema category validation', () => {
  const schema = createComponentSchema([], [], '', [], '');

  it('accepts dashes in a category name', () => {
    expect(
      schema.isValidSync({ displayName: 'Hero', category: 'shared-blocks', icon: 'star' })
    ).toBe(true);
  });

  it('continues rejecting category names that do not start with a letter', () => {
    expect(schema.isValidSync({ displayName: 'Hero', category: '2blocks', icon: 'star' })).toBe(
      false
    );
  });
});
