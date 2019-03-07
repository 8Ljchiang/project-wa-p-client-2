import React from 'react';

import styled, { keyframes } from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//https://stackoverflow.com/questions/33426539/react-animate-transition-between-components

import './AnimationComponent.css';
import { CSSTransition } from 'react-transition-group';

// animation to slide in the home page from left
const slideInLeft = keyframes`
	from {
		-webkit-transform: translateX(-100%, 0, 0);
		transform: translateX(-100%, 0, 0);
		visibility: visible;
	}

	to {
		-webkit-transform: translateX(0, 0, 0);
		transform: translateX(0, 0, 0);
	}
`;

// animation to slide out the home page to the left
const slideOutRight = keyframes`
	from {
		-webkit-transform: translateX(0, 0, 0);
		transform: translateX(0, 0, 0);
	}

	to {
		visibility: hidden;
		-webkit-transform: translateX(100%, 0, 0);
		transform: translateX(100%, 0, 0);
	}
`;

const Page = styled.div``;

// apply the correct animation based on the transition state class name.
const AnimatedPage = styled(Page)`
	&.page-enter {
	animation: ${slideInLeft} 0.4s forwards;
	}
	&.page-exit {
	animation: ${slideOutRight} 0.4s reverse;
	}
`;


interface ITransitionProps {
	handleTransitionEnd: any;
}

class Off extends React.Component<ITransitionProps, {}> {
	componentWillUnmount () {
        this.props.handleTransitionEnd();
    }
    render()  {
        return (
            <div className="off button">OFF</div>
        )
    }
}

class On extends React.Component<ITransitionProps, {}> {
	componentWillUnmount () {
        this.props.handleTransitionEnd();
    }
    render()  {
        return (
            <div className="on button">On</div>
        )
    }
}

interface ISwitchState {
	on: boolean;
	transitionEnd: boolean;
}

class Switch extends React.Component<{}, ISwitchState> {
	constructor(props: any) {
		super(props);
		this.state = {
			on: false,
			transitionEnd: true
		}

		this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
		this.toggle = this.toggle.bind(this);
	}

    toggle(e: any) {
        this.setState({
            on: !this.state.on,
            transitionEnd: false
        });
    }

    handleTransitionEnd() {
        this.setState({transitionEnd: true});
    }

    renderOff() {
        if (! this.state.on && this.state.transitionEnd) {
            return (
                <Off key="off" handleTransitionEnd={this.handleTransitionEnd} />
            )
        }
    }

    renderOn() {
        if (this.state.on && this.state.transitionEnd) {
            return (
                <On key="on" handleTransitionEnd={this.handleTransitionEnd} />
            )
        }
    }

    render() {
        return (
            <div>
              <button onClick={this.toggle}>Toggle</button>
              <ReactCSSTransitionGroup transitionName="switch">
                {this.renderOff()}
                {this.renderOn()}
              </ReactCSSTransitionGroup>
            </div>
        );         
    }
}

const AnimatedPageHoc = (WrappedComponent: any, props: any) => {
	return (
		// <AnimatedPage>
			// <ReactCSSTransitionGroup
            //     transitionAppear={true}
            //     transitionAppearTimeout={600}
            //     transitionEnterTimeout={600}
            //     transitionLeaveTimeout={200}
            //     transitionName={props.match.params === props.routePath ? 'loadComponent' : 'leaveComponent'}
			// >
			<CSSTransition key={props.dataType} timeout={500} classNames="move">
		 		<WrappedComponent {...props } />
			</CSSTransition>
		 	// </ReactCSSTransitionGroup>
		// </AnimatedPage>
		// <Switch/>
	);
}

export default AnimatedPageHoc;