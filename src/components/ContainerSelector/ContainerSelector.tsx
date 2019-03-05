import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IDataType, getItems } from '../../seed/data';
import { getMatchingComponent } from '../../helpers/componentHelpers';
import { containerComponentMap, ISectionMapType, sectionMaps } from '../../helpers/componentMaps';
import GenericPageComponent, { IGenericPageComponent } from '../FlexiblePage/GenericPage';
import FlexiblePage from '../FlexiblePage/FlexiblePage';

export interface IContainerSelectorProps {
	// selectionMap: ISectionMapType;
	// componentRenderType: 'flexPage' | 'default';
}

export interface IContainerSelectorState {
	// selectedDataType: IDataType | null;
	// selectedDataType: string | null;
}

export default class ContainerSelector
	extends Component<IContainerSelectorProps, IContainerSelectorState> {
	constructor(props: IContainerSelectorProps) {
		super(props);

		this.state = {
			selectedDataType: null,
		};

		this.setSelectedDataType = this.setSelectedDataType.bind(this);
	}

	setSelectedDataType(type: string) {
		this.setState({
			selectedDataType: type,
		});
	}
	renderMenuItems() {
		// const { selectionMap } = this.props;
		const selectionMap = sectionMaps;
		return Object.keys(selectionMap).map((key) => {
			// return <Link to="/about" style={styles.menuItem} onClick={() => this.setSelectedDataType(key)} key={key}>{selectionMap[key]}</Link>;
			return <Link to={`/flex-${key}`} style={styles.menuItem} key={key}>{selectionMap[key]}</Link>;
		});
	}
	// renderViewComponent() {
	// 	if (this.state.selectedDataType) {
	// 		const type = this.state.selectedDataType as IDataType;
	// 		const items = getItems(type, 10);
	// 		// const { componentRenderType } = this.props;
	// 		// const SelectedViewComponent = getMatchingComponent(containerComponentMap, componentRenderType);
	// 		return (
	// 			<div style={styles.viewContainer}>
	// 				<FlexiblePage items={items} dataType={type} displayType={'default'} />
	// 			</div>
	// 		);
	// 	} else {
	// 		return <div style={styles.viewContainer}></div>
	// 	}
	// }
	render() {
		return (
			<div style={styles.container} className="container-selector">
				<div style={styles.menu} className="container-selector__menu">
					<Link to={'/'}>Home</Link>
					{this.renderMenuItems()}
				</div>
			</div>
		);
	}
}

const styles = {
	container: {
		height: '100vh',
		width: '100%',
	},
	viewContainer: {
		height: "100%",
		width: "100%",
		border: "1px solid blue",
	},
	menu: {
		display: 'flex',
	},
	menuItem: {
		marginLeft: "10px",
	},
};
