import { codeFormatter } from '../../formatter/inline.formatter';
import { FormatMatcher } from '../matcher/format.matcher';
import { InlineCommander } from '../commands/inline.commander';
import { Toolkit } from '../toolkit/toolkit';
import { PreTemplate } from '../../templates/pre.template';

export const codeTool = Toolkit.makeButtonTool({
  classes: ['tbus-icon-code'],
  tooltip: '代码',
  // keymap: {
  //   ctrlKey: true,
  //   key: ''
  // },
  matcher: new FormatMatcher(codeFormatter, [PreTemplate]),
  commanderFactory() {
    return new InlineCommander('code', codeFormatter);
  }
});
