import React from 'react';

import GenericPageComponent from './GenericPage';
import { getMatchingComponent, IComponentDisplayType } from '../../helpers/componentHelpers';
import { itemsListComponentMap, itemDetailComponentMap } from '../../helpers/componentMaps';
import { IBaseObject, getItems, IDataType } from '../../seed/data';
import { isValidArray } from '../../helpers/utils';

import './FlexiblePage.css';

export interface IFlexiblePageProps {
	displayType: IComponentDisplayType;
	dataType: IDataType;
	title: string;
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
		const { displayType, dataType, title } = this.props;
		const componentType = displayType === 'default' ? displayType : dataType;
		const { selectedItemId, items } = this.state;
		const filteredItems = items.filter((item) => item.id === selectedItemId);
		const selectedItem = filteredItems.length > 0 ? filteredItems[0] : null;
		// const title = getMatchingComponent(titleMap, dataType);
		const ItemsListComponent = getMatchingComponent(itemsListComponentMap, 'default');
		const ItemDetailComponent = getMatchingComponent(itemDetailComponentMap, 'default');

		if (isValidArray(items)) {
			return (
				<div className="flexible-page-container">
					<div className="flexible-page__header">
						<h2 className="flexible-page__header-title">{title}</h2>
					</div>
					<div className="flexible-page__body">
						<div className="flexible-page__body-left">
							<ItemsListComponent<Type> items={items} type={componentType} action={this.setSelectedItemId} />
						</div>
						<div className="flexible-page__body-right">
							<ItemDetailComponent<Type> item={selectedItem} type={componentType} />
						</div>
					</div>
				</div>
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
