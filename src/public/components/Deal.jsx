import React from 'react';

const Deal = props => (
  <a href={props.targetUrl} target="_blank" rel="noopener noreferrer">
    <div className="Deal">
      <h2>{props.dealTitle}</h2>
      <h3>{props.merchant}</h3>
    </div>
  </a>
);

Deal.propTypes = {
  targetUrl: React.PropTypes.string.isRequired,
  dealTitle: React.PropTypes.string.isRequired,
  merchant: React.PropTypes.string.isRequired,
};

export default Deal;
