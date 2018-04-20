import * as classNames from 'classnames';
import * as React from 'react';
import {IClassName} from '../../utils/ClassNameUtils';

export interface IModalOwnProps {
    id?: string;
    classes?: IClassName;
    closeCallback?: () => void;
}

export interface IModalStateProps {
    isOpened?: boolean;
}

export interface IModalDispatchProps {
    onDestroy?: () => void;
    onRender?: () => void;
}

export interface IModalProps extends IModalOwnProps, IModalStateProps, IModalDispatchProps {}

export class Modal extends React.Component<IModalProps, {}> {

    componentWillMount() {
        if (this.props.onRender) {
            this.props.onRender();
        }
    }

    componentWillUnmount() {
        if (this.props.closeCallback && this.props.isOpened) {
            this.props.closeCallback();
        }
        if (this.props.onDestroy) {
            this.props.onDestroy();
        }
    }

    componentWillReceiveProps(nextProps: IModalProps) {
        if (this.props.isOpened && !nextProps.isOpened && this.props.closeCallback) {
            this.props.closeCallback();
        }
    }

    render() {
        const classes = classNames('modal-container', this.props.classes, {
            'opened': this.props.isOpened,
        });

        return (
            <div className={classes}>
                <div className='modal-content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
