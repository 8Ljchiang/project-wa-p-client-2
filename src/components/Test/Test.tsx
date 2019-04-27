import React, { Component } from 'react';

// class Test extends Component {
// 	render() {
// 		return(
// 			.list-container>ul>li*5
// 		);
// 	}
// }

// import { shallow } from 'enzyme';

// interface IWalletTransactionsCardProps {
// 	transactions: ITransaction[];
// }

// interface ITransaction {
// 	id: string;
// 	title: string;
// 	description: string;
// 	type: string;
// }

// interface ITransactionComponentProps {
// 	transaction: ITransaction;
// }

// const TransactionComponent = (props: ITransactionComponentProps) => {
// 	const { title, description, type } = props.transaction;
// 	return (
// 		<li>
// 			<div>{title}</div>
// 			<div>{description}</div>
// 			<div>{type}</div>
// 		</li>
// 	);
// }

// TransactionComponent.propTypes = {
// 	transaction: PropTypes.instanceOf().isRequired,
// }

// export default class WalletTransactionsCard extends Component<IWalletTransactionsCardProps, {}> {
// 	renderTransactions() {
// 		return this.props.transactions.map((t: ITransaction) => {
// 			return <TransactionComponent transaction={t} />;
// 		});
// 	}

// 	render() {
// 		return (
// 			<div className="card">
// 				<div className="card-header">
// 					<h1>Wallet Transactions</h1>
// 				</div>
// 				<div className="card-category-row">
// 					<h3>{"field1"}</h3>
// 					<h3>{"field2"}</h3>
// 					<h3>{"field3"}</h3>
// 					<h3>{"field4"}</h3>
// 				</div>
// 				<div className="card-body">
// 					<ul>
// 						{this.renderTransactions()}
// 					</ul>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// WalletTransactionsCard.propTypes = {
// 	transactions: PropTypes Array of Transactions,
// }

// describe("TransactionComponent", () => {
// 	describe("show the fields of the transaction", () => {
// 		const transaction: ITransaction = {
// 			id: '1', 
// 			title: "title-1",
// 			description: "description-1",
// 			type: "type-1",
// 		};
// 		const props: ITransactionComponentProps = { transaction };
// 		function renderTransactionComponent() {
// 			return shallow(<TransactionComponent {...props} />);
// 		}

// 		// Should this event be a test
// 		it("should receive a transaction as props", () => {
// 			// how to test for props being passed. 
// 		})

// 		it("should show title", () => {
// 			const wrapper = renderTransactionComponent();

// 			expect(wrapper).toIncludeText("title");
// 		});

// 		it("should show description", () => {
// 			const wrapper = renderTransactionComponent();

// 			expect(wrapper).toIncludeText("description");
// 		});

// 		it("should show type", () => {
// 			const wrapper = renderTransactionComponent();

// 			expect(wrapper).toIncludeText("type");
// 		});
// 	});
// });

// describe("WalletTransactions", () => {
// 	const props = {
// 		transactions: [{
// 			id: '1', 
// 			title: "title-1",
// 			description: "description-1",
// 			type: "type-1",
// 		}, {
// 			id: '2',
// 			title: "title-2",
// 			description: "description-2",
// 			type: "type-2",
// 		}, {
// 			id: '3', 
// 			title: "title-3",
// 			description: "description-3",
// 			type: "type-3",
// 		}]
// 	}

// 	function renderWalletTransactionsComponent() {
// 		return mount(<WalletTransactionsCard {...props} />);
// 	}

	// Consider any other tests that are missing.
	// Should we consider testing to make sure that the transactions are passed through. 
	// That might need to be done through react Props.

// 	describe("component renders all transactions", () => {
// 		const wrapper = renderWalletTransactionsComponent();

// 		const listItemElements = wrapper.find("li");

// 		expect(listItemElements.length).toEqual(props.transactions.length);
// 	});

// 	describe("should show header row with headers", () => {
// 		const wrapper = renderWalletTransactionsComponent();

// 		const headerRow = wrapper.find("card-category-row")

// 		expect(headerRow).toIncludeText("field1");
// 		expect(headerRow).toIncludeText("field2");
// 		expect(headerRow).toIncludeText("field3");
// 		expect(headerRow).toIncludeText("field4");
// 	});

// 	describe("should show header", () => {
// 		const wrapper = renderWalletTransactionsComponent();

// 		expect(wrapper.find("h1").text()).toEqual("Wallet Transactions");
// 	});
// });

// interface IWalletSettingsProps {
// 	accountName: string;
// 	accountNumber: string;
// 	payDateString: string;
// 	selectAccountFunction: any;
// }




// const WalletSettings = (props: IWalletSettingsProps) => {
// 	const { accountNumber, payDateString, selectAccountFunction } = props;
// 	return (
// 		<div className="card">
// 			<h1>Wallet Settings</h1>
// 			<div className="card-section">
// 				<h2>Primary Account</h2>
// 				<p>Account information {accountNumber}</p>
// 				<button onClick={selectAccountFunction}></button>
// 			</div>
// 			<div className="card-section">
// 				<h2>Payment Date Information</h2>
// 				<p>{payDateString}</p>
// 				<button onClick={selectAccountFunction}></button>
// 			</div>
// 		</div>
// 	);
// }

// export default WalletSettings;


// describe("WalletSettings", () => {
// 	describe("view", () => {
// 		it("should render the account number information", () => {
// 			const props = { 
// 				accountNumber: '****1234',
// 				payDateString: 'Jan 1st, 2019',
// 				selectAccountFunction: null,
// 			};
// 			const wrapper = mount(<WalletSettings {...props} />);

// 			expect(wrapper.find().text).toEqual("");
// 		});

// 		it("should render the pay date information", () => {
// 			const props = { 
// 				accountNumber: '****1234',
// 				payDateString: 'Jan 1st, 2019',
// 				selectAccountFunction: null,
// 			};
// 			const wrapper = mount(<WalletSettings  {...props}  />);

// 			expect(wrapper.find().text).toEqual("");
// 		});

// 		it("button should call the selectAccountInfo function when clicked", () => {
// 			const props = { 
// 				accountNumber: '****1234',
// 				payDateString: 'Jan 1st, 2019',
// 				selectAccountFunction: jest.fn(),
// 			};
// 			const wrapper = mount(<WalletSettings  {...props}  />);

// 			wrapper.find('button').simulate('click');
// 			expect(props.selectAccountFunction.mock.calls[0][0]).toBe("");
// 			expect(props.selectAccountFunction.mock.calls.length).toEqual(9);
// 		});
// 	});
// });
