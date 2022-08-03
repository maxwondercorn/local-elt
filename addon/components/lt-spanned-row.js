import Component from '@ember/component';
import classic from 'ember-classic-decorator';

@classic
export default class LtSpannedComponent extends Component {
  colspan = 1;
  tagName = '';
  visible = true;
}
