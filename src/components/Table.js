import React, { memo, useState, useEffect } from "react";
import axios from "axios";

export const Table = memo(props => {
  const [tableData, setTableData] = useState(null);
  useEffect(() => {
    if (!tableData)
      axios
        .get(props.url)
        .then(result => {
          return result.data.results;
        })
        .then(fetchedTableData => setTableData(fetchedTableData))
        .catch(e => console.log("could not fetch data ", e));
  });

  const onMoreInfoHandler = spaceshipData => {
    props.setSpaceshipData(spaceshipData);
    props.history.push(props.moreInfoUrl);
  };

  const renderTableRows = () => {
    return tableData
      ? tableData.map((rowData, dataIndex) => (
          <tr key={rowData + "-" + dataIndex}>
            {props.tableHead.map(rowDataKey => (
              <td key={rowDataKey}>{rowData[rowDataKey]}</td>
            ))}
            <td>
              <button onClick={() => onMoreInfoHandler(rowData)}>
                More details
              </button>
            </td>
          </tr>
        ))
      : null;
  };

  return (
    <table>
      <thead>
        <tr>
          {props.tableHead.map(col => (
            <th key={col}>{col + ""}</th>
          ))}
        </tr>
      </thead>

      <tbody>{renderTableRows()}</tbody>
    </table>
  );
});
