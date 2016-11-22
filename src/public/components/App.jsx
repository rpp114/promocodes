import React from 'react';
import Deal from './Deal';
import dealData from '../../../sampleData/sampleData.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = { deals: [], merchant: '' };
  }

  componentWillMount() {
    // load and set our deals into state
    const { deals } = dealData;
    const merchant = deals[0].merchant;
    this.setState({ deals, merchant });
  }

  render() {
    const displayDeals = [];

    // add a deal to the page for each one in state
    this.state.deals.forEach((deal, i) => {
      if (this.state.merchant === deal.merchant) {
        displayDeals.push(
          <Deal
            merchant={deal.merchant}
            dealTitle={deal.title}
            targetUrl={deal.link}
            key={i.toString()}
          />
        );
      }
    });

    return (
      <div>
        <h1>Deals for: {this.state.merchant}</h1>
        <div className="DealsTable">
          {displayDeals}
        </div>
      </div>
    );
  }
}

export default App;
