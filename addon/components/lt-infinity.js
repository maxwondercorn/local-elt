import classic from 'ember-classic-decorator';
import { classNames } from '@ember-decorators/component';
import { inject as service } from '@ember/service';
import Component from '@ember/component';

@classic
@classNames('lt-infinity')
export default class LtInfinity extends Component {
  @service
  inViewport;

  scrollableContent = null;
  scrollBuffer = 50;

  didInsertElement() {
    super.didInsertElement(...arguments);

    const options = {
      viewportSpy: true,

      viewportTolerance: {
        bottom: this.scrollBuffer,
      },

      scrollableArea: this.scrollableContent,
    };

    const { onEnter, onExit } = this.inViewport.watchElement(
      this.element,
      options
    );

    onEnter(this.didEnterViewport.bind(this));
    onExit(this.didExitViewport.bind(this));
  }

  willDestroyElement() {
    super.willDestroyElement(...arguments);
    this.inViewport.stopWatching(this.element);
  }

  didEnterViewport() {
    this.enterViewport();
  }

  didExitViewport() {
    this.exitViewport();
  }
}
