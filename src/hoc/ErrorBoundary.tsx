import React from 'react';

interface ErrorBoundaryProps {

}

interface ErrorBoundaryState {
	hasError: boolean;
	error: any;
	errorInfo: any;
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
	  super(props);
	  this.state = { hasError: false, error: null, errorInfo: null };
	}
  
	static getDerivedStateFromError(error: any) {
	  // Update state so the next render will show the fallback UI.
	  return { hasError: true, error };
	}
  
	componentDidCatch(error: any, info: any) {
	  // You can also log the error to an error reporting service
	   this.logErrorToMyService(error, info);
	}

	logErrorToMyService(error: any, info: any) {
		console.log(error)
		console.log(info);
	}
  
	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <h1>Something went wrong. {this.state.error}</h1>;
		}
  
	  	return (
			<div>
				{this.props.children}
			</div>
		);
	}
}