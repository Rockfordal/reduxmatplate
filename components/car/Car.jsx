import React from 'react';
import Db from '../common/Db';
import {Link} from 'react-router';
// import {Button, Icon} from 'react-materialize';

class Car extends React.Component {
    constructor() {
        super();
        const t = "Laddar";
        this.state = { car: {name: t, year: t} };
    }
    render() {
        return (
          <div>
              <table>
                <thead>
                    <tr>
                        <th>Kluster</th>
                        <th>Id</th>
                        <th>Namn</th>
                        <th>Årtal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>12</td>
                        <td>{this.props.params.id}</td>
                        <td>{this.state.car.name}</td>
                        <td>{this.state.car.year}</td>
                    </tr>
                </tbody>
              </table>
            <br/>
          </div>
)}
    componentDidMount() {
        let db = new Db;
        db.getdocument('bilar', '12:' + this.props.params.id, (car) => {
            this.setState({car: car});
        });
    }
}
// <Button node='a' href='#/cars' waves='light'>Tillbaka</Button>
// &nbsp; &nbsp;
// <Button node='a' waves='light'><Icon right>save</Icon>Spara</Button>

export default Car
