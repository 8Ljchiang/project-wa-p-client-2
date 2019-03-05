import React, { Component } from 'react';
import { IBaseObject, getItems, IDataType } from '../../seed/data';
import { IComponentType, getMatchingComponent, IComponentDisplayType } from '../../helpers/componentHelpers';
import { titleMap } from '../../helpers/componentTitleMap';
// import FlexibleItemDetail from '../FlexibleItemDetail/FlexibleItemDetail';
// import ClickableFlexibleItemsList from '../FlexibleItemsList/ClickableFlexibleItemsList';
import { itemsListComponentMap, itemDetailComponentMap } from '../../helpers/componentMaps';
import { isValidArray } from '../../helpers/utils';
import GenericPageComponent from './GenericPage';

export interface IFlexiblePageProps {
	displayType: IComponentDisplayType;
	dataType: IDataType;
}

export interface IFlexiblePageState<T> {
	selectedItemId: string | null;
	items: T[];
}

export default class FlexiblePage<Type extends IBaseObject> extends GenericPageComponent<Type> {
	constructor(props: IFlexiblePageProps) {
		super(props);

		this.state = {
			items: [],
			selectedItemId: null,
		};

		this.setSelectedItemId = this.setSelectedItemId.bind(this);
	}

	componentDidMount() {
		const { dataType } = this.props;
		const items = getItems<Type>(dataType, 10);
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
		const { displayType, dataType } = this.props;
		const componentType = displayType === 'default' ? displayType : dataType;
		const { selectedItemId, items } = this.state;
		// const { selectedItemId } = this.state;
		const filteredItems = items.filter((item) => item.id === selectedItemId);
		const selectedItem = filteredItems.length > 0 ? filteredItems[0] : null;
		const title = getMatchingComponent(titleMap, dataType);
		const ItemsListComponent = getMatchingComponent(itemsListComponentMap, 'default');
		const ItemDetailComponent = getMatchingComponent(itemDetailComponentMap, 'default');

		if (isValidArray(items)) {
			return (
				<div style={styles.container} className="flexible-page-container">
					<h3 className="flexible-page-container__title">{title}</h3>
					<div style={styles.bottom}>
						<div style={styles.left}>
							<ItemsListComponent items={items} type={componentType} action={this.setSelectedItemId} />
						</div>
						<div style={styles.right}>
							<ItemDetailComponent item={selectedItem} type={componentType} />
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div style={styles.container} className="flexible-page-container">Unable to load data...</div>
			);
		}
	}
}

// export default class FlexiblePage<Type extends IBaseObject>
// 	extends Component<IFlexiblePageProps<Type>, IFlexiblePageState<Type>> {
// 	constructor(props: IFlexiblePageProps<Type>) {
// 		super(props);

// 		this.state = {
// 			items: [],
// 			selectedItemId: null,
// 		};

// 		this.setSelectedItemId = this.setSelectedItemId.bind(this);
// 	}

// 	componentDidMount() {
// 		const { dataType } = this.props;
// 		const items = getItems<Type>(dataType, 10);
// 		if (isValidArray(items)) {
// 			this.setState({
// 				items,
// 			});
// 		}
// 	}

// 	setSelectedItemId(itemId: string) {
// 		if (this.state.selectedItemId !== itemId) {
// 			this.setState({
// 				selectedItemId: itemId,
// 			});
// 		}
// 	}

// 	render() {
// 		const { displayType, dataType } = this.props;
// 		const componentType = displayType === 'default' ? displayType : dataType;
// 		const { selectedItemId, items } = this.state;
// 		const filteredItems = items.filter((item: Type) => item.id === selectedItemId);
// 		const selectedItem = filteredItems.length > 0 ? filteredItems[0] : null;
// 		const title = getMatchingComponent(titleMap, dataType);
// 		const ItemsListComponent = getMatchingComponent(itemsListComponentMap, 'default');
// 		const ItemDetailComponent = getMatchingComponent(itemDetailComponentMap, 'default');

// 		if (isValidArray(items)) {
// 			return (
// 				<div className="flexible-page-container">
// 					<h3 className="flexible-page-container__title">{title}</h3>
// 					<div style={styles.bottom}>
// 						<div style={styles.left}>
// 							<ItemsListComponent<Type> items={items} type={componentType} action={this.setSelectedItemId} />
// 						</div>
// 						<div style={styles.right}>
// 							<ItemDetailComponent<Type> item={selectedItem} type={componentType} />
// 						</div>
// 					</div>
// 				</div>
// 			);
// 		} else {
// 			return (
// 				<div className="flexible-page-container">Unable to load data...</div>
// 			);
// 		}
// 	}
// }

const styles = {
	bottom: {
		display: 'flex',
	},
	container: {
		border: '1px solid blue',
		display: 'flex',
		flexFlow: 'column',
	},
	left: {
		flex: 1,
	},
	right: {
		flex: 1,
	},
};
