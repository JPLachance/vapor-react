(window.webpackJsonp=window.webpackJsonp||[]).push([[906],{1986:function(o,n,e){"use strict";e.r(n),n.default="import {shallow, ShallowWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {ModalComposite} from '../../../components/modal/ModalComposite';\r\n\r\nimport {PreventNavigationPrompt, PreventNavigationPromptProps} from '../PreventNavigationPrompt';\r\n\r\ndescribe('Modal with Prevent Navigation', () => {\r\n    let component: ShallowWrapper<any, any>;\r\n\r\n    const defaultProps: PreventNavigationPromptProps = {\r\n        id: 'hello',\r\n        title: 'Unsaved Changes',\r\n        content: 'Are you sure you want to leave this page without saving? All unsaved changes will be lost.',\r\n        exit: 'Exit without applying changes',\r\n        stay: 'Cancel',\r\n        onStay: _.noop,\r\n        onClose: _.noop,\r\n        isOpen: true,\r\n    };\r\n\r\n    const shallowWithProps = (props: Partial<PreventNavigationPromptProps> = {}) => {\r\n        component = shallow(<PreventNavigationPrompt {...defaultProps} {...props} />);\r\n    };\r\n\r\n    it('should mount and unmount without error', () => {\r\n        expect(() => {\r\n            shallowWithProps();\r\n            component.unmount();\r\n        }).not.toThrow();\r\n    });\r\n\r\n    it('should call onStay when the user close the modal', () => {\r\n        const spy = jasmine.createSpy('onStay');\r\n        shallowWithProps({onStay: spy});\r\n\r\n        component.find(ModalComposite).prop('onClose')();\r\n        expect(spy).toHaveBeenCalledTimes(1);\r\n    });\r\n\r\n    it('should call onStay when the user click on the stay button of the footer', () => {\r\n        const spy = jasmine.createSpy('onStay');\r\n        shallowWithProps({onStay: spy});\r\n\r\n        const footer = shallow(\r\n            <div>{component.find(ModalComposite).prop<React.ReactElement>('modalFooterChildren')}</div>\r\n        );\r\n        footer.find('.js-stay').simulate('click');\r\n        expect(spy).toHaveBeenCalledTimes(1);\r\n    });\r\n\r\n    it('should call onClose when the user click on the exit button of the footer', () => {\r\n        const spy = jasmine.createSpy('onClose');\r\n        shallowWithProps({onClose: spy});\r\n\r\n        const footer = shallow(\r\n            <div>{component.find(ModalComposite).prop<React.ReactElement>('modalFooterChildren')}</div>\r\n        );\r\n        footer.find('.js-exit').simulate('click');\r\n        expect(spy).toHaveBeenCalledTimes(1);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=906.bundle.js.map