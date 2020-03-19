import React from 'react';

const InfoBar = props => {
  
  const nfObject = new Intl.NumberFormat('en-US');
  return (
    <tr className="container">
      <div className="row pt-2 pb-2 border border-light">
        <td className="col-4">{props.name}</td>

        <div className="col-4">
          <td className="row ">
            ${nfObject.format(props.price)}
          </td>
          <td
            className="row"
            style={{
              color:
                props.change > 0
                  ? 'green'
                  : 'red',
            }}
          >
            <small>
              %{props.change}
            </small>
          </td>
        </div>
        <div className="col-4">
          <td className="row">
            ${nfObject.format(props.price * props.amount)}
          </td>
          <td className="row">
            <small>{props.amount}</small>
          </td>
        </div>
      </div>
    </tr>
  );
}

export default InfoBar;