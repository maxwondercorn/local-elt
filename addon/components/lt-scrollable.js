import Component from '@ember/component';
import classic from 'ember-classic-decorator';

@classic
export default class LtScrollableComponent extends Component {
  tagName = '';
  vertical = true;
  horizontal = false;
}
