import React, { Component } from 'react';
import { Button, Icon, Table } from 'semantic-ui-react';
import TableHeader from './common/TableHeader';

class App extends Component {
  render() {
    return (
      <Table compact celled>
        <TableHeader />
        <Table.Body>
          <Table.Row>
            <Table.Cell>Iksan</Table.Cell>
            <Table.Cell>Pejaten</Table.Cell>
            <Table.Cell>09999</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Pejaten</Table.Cell>
            <Table.Cell>Iksan</Table.Cell>
            <Table.Cell>09999</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colspan='3'>
              <Button floated='right' size='small' primary labelPosition='left' icon>
                <Icon name='user' />Add user
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
}

export default App;
