import { ListMatcher } from '../matcher/list.matcher';
import { ListCommander } from '../commands/list.commander';
import { Toolkit } from '../toolkit/toolkit';

export const ulTool = Toolkit.makeButtonTool({
  classes: ['tbus-icon-list'],
  tooltip: '无序列表',
  keymap: {
    shiftKey: true,
    ctrlKey: true,
    key: 'u'
  },
  match: new ListMatcher('ul'),
  execCommand: new ListCommander('ul')
});