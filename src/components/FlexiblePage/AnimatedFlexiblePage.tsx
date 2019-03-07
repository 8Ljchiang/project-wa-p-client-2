import React, {Component} from 'react';

import { getMatchingComponent, IComponentDisplayType } from '../../helpers/componentHelpers';
import { itemsListComponentMap, itemDetailComponentMap } from '../../helpers/componentMaps';
import { IBaseObject, getItems, IDataType, autoGenerateData } from '../../seed/data';
import { isValidArray } from '../../helpers/utils';
// import { RouteComponentProps } from 'react-router';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import { CSSTransition } from 'react-transition-group';

// import './AnimatedFlexiblePage.css';
import './FlexiblePage.css';
import FlexibleItemCreateForm from '../FlexibleItemCreateForm/FlexibleItemCreateForm';

// // from typings
// export interface RouteComponentProps<P> {
//   match: match<P>;
//   location: H.Location;
//   history: H.History;
//   staticContext?: any;
// }

// export interface match<P> {
//   params: P;
//   isExact: boolean;
//   path: string;
//   url: string;
// }

// interface MatchParams {
//     name: string;
// }

export interface IAnimatedFlexiblePageProps { // extends RouteComponentProps<MatchParams> {
	displayType: IComponentDisplayType;
	dataType: IDataType;
	routePath: string;
	title: string;
	match: any;
}

export interface IAnimatedFlexiblePageState<T> {
	selectedItemId: string | null;
	items: T[];
}

export default class AnimatedFlexiblePage<Type extends IBaseObject> extends Component<IAnimatedFlexiblePageProps, IAnimatedFlexiblePageState<Type>> {
	constructor(props: IAnimatedFlexiblePageProps) {
		super(props);

		this.state = {
			items: [],
			selectedItemId: null,
		};

		this.setSelectedItemId = this.setSelectedItemId.bind(this);
	}

	componentDidMount() {
		const { dataType } = this.props;
		// const items = getItems<Type>(dataType, 10);
		const items = autoGenerateData<Type>(dataType, 10);
		if (isValidArray(items)) {
			this.setState({
				items,
			});
		}
	}

	setSelectedItemId(itemId: string) {
		if (this.state.selectedItemId !== itemId) {
			this.setState({
				selectedItemId: itemId,
			});
		}
	}

	render() {
		const { routePath, displayType, dataType, title } = this.props;
		const componentType = displayType === 'default' ? displayType : dataType;
		const { selectedItemId, items } = this.state;
		const filteredItems = items.filter((item) => item.id === selectedItemId);
		const selectedItem = filteredItems.length > 0 ? filteredItems[0] : null;
		// const title = getMatchingComponent(titleMap, dataType);
		const ItemsListComponent = getMatchingComponent(itemsListComponentMap, 'default');
		const ItemDetailComponent = getMatchingComponent(itemDetailComponentMap, componentType);

		if (isValidArray(items)) {
			return (
				// <ReactCSSTransitionGroup
				// 	transitionAppear={true}
				// 	transitionAppearTimeout={600}
				// 	transitionEnterTimeout={600}
				// 	transitionLeaveTimeout={600}
				// 	transitionName={this.props.match.params === routePath ? 'loadComponent' : 'leaveComponent'}
            	// >
					<div className="flexible-page-container">
						<div className="flexible-page__header">
							<h2 className="flexible-page__header-title">{title}</h2>
						</div>
						<div className="flexible-page__body">
							<div className="flexible-page__body-left">
								<ItemsListComponent<Type> items={items} type={componentType} action={this.setSelectedItemId} />
							</div>
							<div className="flexible-page__body-right">
								<FlexibleItemCreateForm item={items[0]} itemType={dataType} />
								<ItemDetailComponent<Type> item={selectedItem} type={componentType} />
							</div>
						</div>
					</div>
				// </ReactCSSTransitionGroup>
			);
		} else {
			return (
				<div className="flexible-page-container">
					<div className="flexible-page__header">
						<h2>Unable to load data...</h2>
					</div>
				</div>
			);
		}
	}
}

{/* <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName={props.match.params === props.routePath ? 'loadComponent' : 'leaveComponent'}
            > */}