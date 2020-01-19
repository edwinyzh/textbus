import { ButtonConfig, HandlerType, Priority } from '../help';
import { InlineCommander } from '../../commands/inline-commander';

export const superscriptHandler: ButtonConfig = {
  type: HandlerType.Button,
  classes: ['tbus-icon-superscript'],
  priority: Priority.Inline,
  tooltip: '上标',
  editable: {
    tag: true
  },
  match: {
    tags: ['sup'],
    noInTags: ['pre']
  },
  execCommand: new InlineCommander('sup')
};
