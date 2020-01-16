(window.webpackJsonp=window.webpackJsonp||[]).push([[727],{1815:function(r,e,s){"use strict";s.r(e),e.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {range, uniqueId} from 'underscore';\r\nimport {IClassName} from '../../utils/ClassNameUtils';\r\n\r\nexport interface IStepProgressBarProps {\r\n    /**\r\n     * A positive integer above zero\r\n     */\r\n    numberOfSteps: number;\r\n    /**\r\n     * The 0-based index of the step currently in completion by the user\r\n     */\r\n    currentStep: number;\r\n    className?: IClassName;\r\n}\r\n\r\nexport const StepProgressBar = (props: IStepProgressBarProps) => {\r\n    const {numberOfSteps, currentStep} = props;\r\n    const stepProgressBarSteps = range(numberOfSteps).map((stepNumber: number) => (\r\n        <div\r\n            key={`step-progress-bar-${uniqueId()}`}\r\n            className={classNames('step-progress-bar', {\r\n                'step-progress-bar-done': stepNumber < currentStep,\r\n                'step-progress-bar-doing': stepNumber === currentStep,\r\n                'step-progress-bar-to-do': stepNumber > currentStep,\r\n            })}\r\n        ></div>\r\n    ));\r\n\r\n    return <div className={classNames('step-progress-bar-container', props.className)}>{stepProgressBarSteps}</div>;\r\n};\r\n"}}]);
//# sourceMappingURL=727.bundle.js.map