import { pick } from 'lodash-unified';
import { c as buildProps } from './server.mjs';

const mutable = (val) => val;
const ariaProps = buildProps({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
});
const useAriaProps = (arias) => {
  return pick(ariaProps, arias);
};

export { mutable as m, useAriaProps as u };
//# sourceMappingURL=index-DUiHV-eU.mjs.map