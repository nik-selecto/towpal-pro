/**
 * This is special commit.
 * Only for checking will gitHub actions
 * decline pull request if eslint linting failed.
 */
export interface IBase {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};
// here should be error and merge should be canceled
// eslint error above for experimental purposes only

