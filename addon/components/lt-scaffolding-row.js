import classic from 'ember-classic-decorator';
import { classNames, tagName } from '@ember-decorators/component';
import Component from '@ember/component';

@classic
@classNames('lt-scaffolding-row')
@tagName('tr')
export default class LtScaffoldingRow extends Component {}
