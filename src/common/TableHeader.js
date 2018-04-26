import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class TableHeader extends Component{
  constructor(props){
    super(props);
    this.state = {
      headers : ['Name', 'Address', 'Phone. No']
    };
  }

  render(){
    const headers = this.state.headers;
    const headersItem = headers.map((header) => {
      return (
        <Table.HeaderCell>{header}</Table.HeaderCell>              
      )
    });
    return(
      <Table.Header>
        <Table.Row>
          {headersItem}
        </Table.Row>
      </Table.Header>

    );
  }
}

export default TableHeader;