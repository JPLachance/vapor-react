import { shallow, mount, ReactWrapper } from 'enzyme';
import { OptionsCycle, IOptionsCycleProps } from '../OptionsCycle';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('Options cycle', () => {
  const OPTIONS = ['option 1', 'option 2', 'option 3', 'option 4'];

  describe('<OptionsCycle />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <OptionsCycle options={OPTIONS} />
        );
      }).not.toThrow();
    });
  });

  describe('<OptionsCycle />', () => {
    let optionsCycle: ReactWrapper<IOptionsCycleProps, any>;
    let optionsCycleInstance: OptionsCycle;

    beforeEach(() => {
      optionsCycle = mount(
        <OptionsCycle options={OPTIONS} />,
        { attachTo: document.getElementById('App') }
      );
      optionsCycleInstance = optionsCycle.instance() as OptionsCycle;
    });

    afterEach(() => {
      optionsCycle.unmount();
      optionsCycle.detach();
    });

    it('should get the options as a prop', () => {
      let optionsProp = optionsCycle.props().options;

      expect(optionsProp).toBeDefined();
      expect(optionsProp).toEqual(OPTIONS);
    });

    it('should call prop onRender on mounting if set', () => {
      let renderSpy = jasmine.createSpy('onRender');

      expect(() => optionsCycleInstance.componentWillMount()).not.toThrow();

      optionsCycle.setProps({ options: OPTIONS, onRender: renderSpy });
      optionsCycle.unmount();
      optionsCycle.mount();
      expect(renderSpy.calls.count()).toBe(1);
    });

    it('should call prop onDestroy on unmounting if set', () => {
      let destroySpy = jasmine.createSpy('onDestroy');

      expect(() => optionsCycleInstance.componentWillUnmount()).not.toThrow();

      optionsCycle.setProps({ options: OPTIONS, onDestroy: destroySpy });
      optionsCycle.mount();
      optionsCycle.unmount();
      expect(destroySpy.calls.count()).toBe(1);
    });

    it('should display the selected option', () => {
      expect(optionsCycle.html()).toContain(OPTIONS[0]);

      optionsCycle.setProps({ options: OPTIONS, currentOption: 2 });

      expect(optionsCycle.html()).toContain(OPTIONS[2]);
    });

    it('should not throw on goToPreviousOption or goToNextOption when onChange prop is not defined', () => {
      expect(() => {
        optionsCycleInstance['goToPreviousOption'].call(optionsCycleInstance);
      }).not.toThrow();

      expect(() => {
        optionsCycleInstance['goToNextOption'].call(optionsCycleInstance);
      }).not.toThrow();
    });

    it('should call goToPreviousOption when clicking the previous arrow', () => {
      let goToPreviousOptionSpy = spyOn(optionsCycleInstance, 'goToPreviousOption');

      optionsCycle.find('.previous-option').simulate('click');
      expect(goToPreviousOptionSpy.calls.count()).toBe(1);
    });

    it('should call goToNextOption when clicking the previous arrow', () => {
      let goToNextOptionSpy = spyOn(optionsCycleInstance, 'goToNextOption');

      optionsCycle.find('.next-option').simulate('click');
      expect(goToNextOptionSpy.calls.count()).toBe(1);
    });

    it('should call onChange when clicking the previous or next arrow if the prop is defined', () => {
      let onChangeSpy = jasmine.createSpy('onChange');

      optionsCycle.setProps({ options: OPTIONS, onChange: onChangeSpy });

      optionsCycle.find('.previous-option').simulate('click');

      expect(onChangeSpy.calls.count()).toBe(1);

      optionsCycle.find('.next-option').simulate('click');

      expect(onChangeSpy.calls.count()).toBe(2);
    });

    it('should call onChange with the last option when clicking on the previous arrow if the current option is the first one', () => {
      let onChangeSpy = jasmine.createSpy('onChange');

      optionsCycle.setProps({ options: OPTIONS, onChange: onChangeSpy, currentOption: 0 });
      optionsCycle.find('.previous-option').simulate('click');

      expect(onChangeSpy).toHaveBeenCalledWith((OPTIONS.length - 1));
    });

    it('should call onChange with the previous option when clicking on the previous arrow if the current option is not the first one', () => {
      let onChangeSpy = jasmine.createSpy('onChange');

      optionsCycle.setProps({ options: OPTIONS, onChange: onChangeSpy, currentOption: 2 });
      optionsCycle.find('.previous-option').simulate('click');

      expect(onChangeSpy).toHaveBeenCalledWith(1);
    });

    it('should call onChange with the first option when clicking on the next arrow if the current option is the last one', () => {
      let onChangeSpy = jasmine.createSpy('onChange');

      optionsCycle.setProps({ options: OPTIONS, onChange: onChangeSpy, currentOption: (OPTIONS.length - 1) });
      optionsCycle.find('.next-option').simulate('click');

      expect(onChangeSpy).toHaveBeenCalledWith(0);
    });

    it('should call onChange with the previous option when clicking on the next arrow if the current option is not the last one', () => {
      let onChangeSpy = jasmine.createSpy('onChange');

      optionsCycle.setProps({ options: OPTIONS, onChange: onChangeSpy, currentOption: 2 });
      optionsCycle.find('.next-option').simulate('click');

      expect(onChangeSpy).toHaveBeenCalledWith(3);
    });
  });
});
