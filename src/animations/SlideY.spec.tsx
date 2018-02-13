import * as React from 'react';
import {mount, ReactWrapper, shallow} from 'enzyme';
import {SlideY} from './SlideY';
import {IDropdownProps} from '../components/dropdown/Dropdown';
import {TransitionProps} from 'react-transition-group/Transition';

describe('SlideY', () => {
  const dummyTimeout = 400;
  const testElementId = 'testId';

  let testElement: JSX.Element;

  beforeEach(() => {
    testElement = <div id={testElementId}>testing</div>
  });

  it('should not throw when rendered with in prop to true', () => {
    expect(() => shallow(<SlideY in timeout={dummyTimeout}>{testElement}</SlideY>)).not.toThrow();
  });

  it('should not throw when rendered with in prop to false', () => {
    expect(() => shallow(<SlideY in={false} timeout={dummyTimeout}>{testElement}</SlideY>)).not.toThrow();
  });

  it('should not throw when updating props', () => {
    const wrapper = mount(<SlideY in={false} timeout={dummyTimeout}>{testElement}</SlideY>, {attachTo: document.getElementById('App')});
    const component = wrapper.find(SlideY).first();

    expect(() => wrapper.setProps({in: true})).not.toThrow();
    expect(component.props().in).toBe(true);
  });

  it('should stay opened when updating props but still in', () => {
    const wrapper = mount(<SlideY in={true} timeout={dummyTimeout}>{testElement}</SlideY>, {attachTo: document.getElementById('App')});
    const component = wrapper.find(SlideY).first();

    expect(() => wrapper.setProps({timeout: dummyTimeout + 1})).not.toThrow();
    expect(component.props().in).toBe(true);
  });

  it('should stay closed when updating props but still not in', () => {
    const wrapper = mount(<SlideY in={false} timeout={dummyTimeout}>{testElement}</SlideY>, {attachTo: document.getElementById('App')});
    const component = wrapper.find(SlideY).first();

    expect(() => wrapper.setProps({timeout: dummyTimeout + 1})).not.toThrow();
    expect(component.props().in).toBe(false);
  });

  describe('when transition ends', () => {
    const timeout = 5;
    let wrapper: ReactWrapper<any, any>;
    let component: ReactWrapper<TransitionProps, any>;

    beforeEach(() => {
      jasmine.clock().install();
    });

    afterEach(() => {
      jasmine.clock().uninstall();
    });

    const mountAndWrap = (isIn: boolean) => {
      wrapper = mount(<SlideY in={isIn} timeout={timeout}>{testElement}</SlideY>, {attachTo: document.getElementById('App')});
      component = wrapper.find(SlideY).first();
    };

    const transitionToEnd = (el: HTMLElement) => {
      jasmine.clock().tick(timeout + 1);
      el.dispatchEvent(new TransitionEvent('transitionend', {
        bubbles: true,
        cancelable: true,
      }));
    };

    it('should set the height to auto when the SlideY opens', () => {
      mountAndWrap(false);
      expect(() => wrapper.setProps({in: true})).not.toThrow();

      const el = component.find('.slide-y').first().getDOMNode() as HTMLElement;
      expect(el.style.height).toBe('auto');
    });

    it('should set the height to 0px when the SlideY is closes', () => {
      mountAndWrap(true);
      expect(() => wrapper.setProps({in: false})).not.toThrow();

      const el = component.find('.slide-y').first().getDOMNode() as HTMLElement;
      expect(el.style.height).toBe('0px');
    });

    it('should remove the class slide-y-transition', () => {
      mountAndWrap(false);
      expect(() => wrapper.setProps({in: true})).not.toThrow();

      let el = component.find('.slide-y').first().getDOMNode() as HTMLElement;
      transitionToEnd(el);

      el = component.find('.slide-y').first().getDOMNode() as HTMLElement;
      expect(el.classList.contains('slide-y-transition')).toBe(false);
    });

    it('should remove the class slide-y-closed when the SlideY opens', () => {
      mountAndWrap(false);

      let el = component.find('.slide-y').first().getDOMNode() as HTMLElement;
      expect(el.classList.contains('slide-y-closed')).toBe(true);

      expect(() => wrapper.setProps({in: true})).not.toThrow();
      transitionToEnd(el);

      el = component.find('.slide-y').first().getDOMNode() as HTMLElement;
      expect(el.classList.contains('slide-y-closed')).toBe(false);
    });

    it('should add the class slide-y-closed when the SlideY closes', () => {
      mountAndWrap(true);

      let el = component.find('.slide-y').first().getDOMNode() as HTMLElement;
      expect(el.classList.contains('slide-y-closed')).toBe(false);

      expect(() => wrapper.setProps({in: false})).not.toThrow();
      transitionToEnd(el);

      el = component.find('.slide-y').first().getDOMNode() as HTMLElement;
      expect(el.classList.contains('slide-y-closed')).toBe(true);
    });
  });
});
