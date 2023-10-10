import React, {Component} from 'react';
class Table extends Component {
    render() {
        console.log(this.props.data)
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">State</th>
                        <th scope="col">Input</th>
                        <th scope="col">Next</th>
                        <th scope="col">Output</th>
                        <th scope="col">Direction</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.data.map( (row,rowidx)=>{
                        return (
                            <tr  className={ rowidx===this.props.state && 'table-primary' }>
                                <th scope="row">{row[0]}</th>
                                <th>{row[1]}</th>
                                <td>{row[2]}</td>
                                <td>{row[3]}</td>
                                <td>{row[4]}</td>
                            </tr>
                        );
                    } )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;