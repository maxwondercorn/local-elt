import { helper } from '@ember/component/helper';
import { htmlSafe as _htmlSafe, isHTMLSafe } from '@ember/template';

export default helper(function htmlSafe(string /*, hash*/) {
  const safeString = _htmlSafe(string);
  return isHTMLSafe(safeString);
});
