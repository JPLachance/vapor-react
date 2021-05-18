import classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVaporState';
import {keyCode} from '../../utils/InputUtils';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {Svg} from '../svg/Svg';
import {NumericInputActions} from './NumericInputActions';
import {initialNumericInputState} from './NumericInputReducers';
import {NumericInputSelectors} from './NumericInputSelectors';

export interface NumericInputOwnProps {
    id: string;
    initialValue?: number;
    step?: number;
    min?: number;
    max?: number;
    invalidMessage?: string;
    maxLength?: number; // we use the attribute from the input https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text
}

export interface NumericInputStateProps {
    value: React.ReactText;
    hasError: boolean;
}

export interface NumericInputDispatchProps {
    mount: (value: number) => void;
    unmount: () => void;
    setValue: (value: number | string) => void;
}

export interface NumericInputProps
    extends NumericInputOwnProps,
        Partial<NumericInputStateProps>,
        Partial<NumericInputDispatchProps> {}

const mapStateToProps = (state: IReactVaporState, ownProps: NumericInputOwnProps): NumericInputStateProps => ({
    value: NumericInputSelectors.getValue(state, ownProps),
    hasError: NumericInputSelectors.getHasError(state, ownProps),
});

const mapDispatchToProps = (dispatch: IDispatch, ownProps: NumericInputOwnProps): NumericInputDispatchProps => ({
    mount: (value: number) => dispatch(NumericInputActions.mount(ownProps.id, value, ownProps.min, ownProps.max)),
    unmount: () => dispatch(NumericInputActions.unmount(ownProps.id)),
    setValue: (value: React.ReactText) =>
        dispatch(NumericInputActions.setValue(ownProps.id, value, ownProps.min, ownProps.max)),
});

const inputPropsToOmit = [
    'hasError',
    'id',
    'initialValue',
    'invalidMessage',
    'max',
    'maxLength',
    'min',
    'mount',
    'setValue',
    'step',
    'unmount',
    'value',
];

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class NumericInputConnected extends React.PureComponent<NumericInputProps & React.HTMLProps<HTMLInputElement>> {
    static defaultProps: Partial<NumericInputOwnProps> = {
        invalidMessage: 'Value is not valid',
    };

    componentDidMount() {
        const initialValue = _.isUndefined(this.props.initialValue)
            ? (initialNumericInputState.value as number)
            : this.props.initialValue;
        this.props.mount(initialValue);
    }

    componentWillUnmount() {
        this.props.unmount();
    }

    render() {
        const valueAsNumber = parseFloat('' + this.props.value);
        const incrementEnabled =
            _.isUndefined(this.props.max) || _.isNaN(valueAsNumber) || valueAsNumber < this.props.max;
        const decrementEnabled =
            _.isUndefined(this.props.min) || _.isNaN(valueAsNumber) || valueAsNumber > this.props.min;
        return (
            <div className="numeric-input flex flex-column">
                <div className="flex flex-row">
                    <button className="js-decrement mr1" disabled={!decrementEnabled} onClick={this.onDecrement}>
                        <Svg svgName="minus" svgClass="icon mod-12" />
                    </button>
                    <div className="flex flex-column">
                        <input
                            {..._.omit(this.props, inputPropsToOmit)}
                            className={classNames(
                                'js-numeric-input',
                                {
                                    [`mod-max-${this.props.maxLength}-digit`]:
                                        _.isNumber(this.props.maxLength) && this.props.maxLength > 0,
                                },
                                this.props.className
                            )}
                            value={this.props.value}
                            onChange={this.onChange}
                            onKeyDown={this.onKeyDown}
                        />
                    </div>
                    <button className="js-increment ml1" disabled={!incrementEnabled} onClick={this.onIncrement}>
                        <Svg svgName="plus" svgClass="icon mod-12" />
                    </button>
                </div>
                <div className="flex flex-row">
                    {this.props.hasError && <span className="generic-form-error my1">{this.props.invalidMessage}</span>}
                </div>
            </div>
        );
    }

    private onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const key = e.keyCode;
        if (key === keyCode.upArrow) {
            this.onIncrement();
        } else if (key === keyCode.downArrow) {
            this.onDecrement();
        }
    };

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value;
        this.props.setValue(value);
    };

    private getValueAsNumber() {
        let value = this.props.value;
        if (typeof value === 'string') {
            value = parseFloat(value);
        }
        return value as number;
    }

    private normalizeValue(value: number) {
        if (_.isNaN(value)) {
            return this.props.initialValue || initialNumericInputState.value;
        }
        return value;
    }

    private onDecrement = () => {
        let newValue = this.normalizeValue(this.getValueAsNumber() - (this.props.step || 1));

        if (!_.isUndefined(this.props.min)) {
            newValue = Math.max(newValue, this.props.min);
        }

        this.props.setValue(newValue);
    };

    private onIncrement = () => {
        let newValue = this.normalizeValue(this.getValueAsNumber() + (this.props.step || 1));

        if (!_.isUndefined(this.props.max)) {
            newValue = Math.min(newValue, this.props.max);
        }

        this.props.setValue(newValue);
    };
}
