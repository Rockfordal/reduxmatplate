import React from 'react';
import Db from '../common/Db';
import {Link} from 'react-router';
import FontIcon from 'material-ui/lib/font-icon';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import IconButton from 'material-ui/lib/icon-button';

class Cars extends React.Component {
    render() {
        return (
          <div>
            <CarIndex />
            <br /> <br />
          </div>
)}}


class CarIndex extends React.Component {
    constructor() {
        super();
        this.state = { cars: [{id: "12:666", name: "", year: ""}] };
        this.klick = (data) =>
          console.log('klick: ', data);
    }
    render() {
        return (
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>ID</TableHeaderColumn>
                  <TableHeaderColumn>Bilmärke</TableHeaderColumn>
                  <TableHeaderColumn>År</TableHeaderColumn>
                  <TableHeaderColumn></TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                { this.state.cars.map((car) => {
                   return <CarRow key={car.id} car={car} />
                 })}
              </TableBody>
            </Table>
           <br/>
          </div>
        )
    }
    componentDidMount() {
        let db = new Db;
        db.query('bilar', 'SELECT name, year, @rid as id FROM Cars', (cars) => {
            this.setState({cars: cars.result});
            } ); }
}

const CarRow = (props) => {
  const id = rid2id(props.car.id);
  return (
      <TableRow>
        <TableRowColumn>{id}</TableRowColumn>
        <TableRowColumn>{props.car.name}</TableRowColumn>
        <TableRowColumn>{props.car.year}</TableRowColumn>
        <TableRowColumn>
           <IconButton tooltip="Font Icon">
      <FontIcon className="muidocs-icon-action-home" />
    </IconButton>
          <IconButton
            iconClassName="material-icons"
            tooltip="Ligature" >
            home
          </IconButton>
        </TableRowColumn>
      </TableRow>
    )
}

const rid2id = (rid) => {
    if (rid) {
        let i = rid.indexOf(':') + 1;
        let l = rid.length + 1;
        let id = rid.substring(i, l);
        return id;
    }
    else return "";
}

// <Link to={`/cars/${id}`}>
// { this.state.cars.map((car) => <CarRow key={car.id} car={car} /> )}
/* let id = rid.replace('#', '00').replace(':', '00'); */

// Cars.propTypes = {
//     cars: React.PropTypes.string
// }

export default Cars
