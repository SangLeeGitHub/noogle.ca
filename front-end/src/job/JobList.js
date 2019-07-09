import React, { Component } from 'react';
import './JobList.css';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function handleClick(event) {
    event.preventDefault();
    // alert('Breadcrumb clicked.');
}

function handleChange(event) {
    /*
    setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value,
    }));
    */
}

function createData(no, job_id, c_id, description, position, u_id, url) {
    return { no, job_id, c_id, description, position, u_id, url };
}

  
const rows = [
    createData(1, 1, 1, 'Web Programmer', 'Beginner', 1, 'https://google.com'),
    createData(2, 2, 2, 'Front-end Developer', 'Senior', 1, 'https://apple.com'),
    createData(3, 3, 3, 'CEO', 'Beginner', 1, 'https://google.com'),
    createData(4, 4, 3, 'HR Manager', 'Beginner', 2, 'https://google.com'),
    createData(5, 5, 2, 'General Manager', 'Beginner', 2, 'https://apple.com'),
    createData(6, 6, 1, 'Salesman', 'Expert', 2, 'https://google.com'),

  ];

class JobList extends Component {

    constructor(props) {
        super(props);
    }

    /*
    // Search
    const [values, setValues] = React.useState({
        search_c_id: '2';
    });
    */

    render() {
        return (
            <div className="joblist-container">

                <Paper elevation={0} className="menu-navigator">                    
                    <Breadcrumbs separator=">" aria-label="Breadcrumb">                        
                        <Link color="inherit" href="/" onClick={handleClick}>                            
                            Noogle.ca
                        </Link>
                        <Link color="inherit" href="/job" onClick={handleClick}>
                            Job
                        </Link>
                        <Typography color="textPrimary">Job Lists</Typography>
                    </Breadcrumbs>
                </Paper>

                <div className="search-container">
                    <FormControl>
                        <InputLabel shrink htmlFor="search_c_id">
                            Company
                        </InputLabel>
                        <Select
                            value={2}
                            onChange={handleChange}
                            input={<Input name="search_c_id" id="search_c_id" />}
                            displayEmpty
                            name="Company"
                        >
                            <MenuItem value=""><em>--All--</em></MenuItem>
                            <MenuItem value={1}>Google</MenuItem>
                            <MenuItem value={2}>Apple</MenuItem>
                            <MenuItem value={3}>Amazon</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl>
                        <TextField
                            id="search_keyword"
                            label="Keyword"
                            value="search_keyword"
                            onChange={handleChange('name')}
                            margin="none"
                        />
                    </FormControl>
                        
                    <Button variant="contained">
                        Search
                    </Button>
                </div>

                <Paper className="search-result">
                    <Table className="data-table">
                        <TableHead>
                            <TableRow>
                                <TableCell>No.</TableCell>
                                <TableCell align="center">Company</TableCell>
                                <TableCell align="center">description</TableCell>
                                <TableCell align="center">position</TableCell>
                                <TableCell align="center">url</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.job_id}>
                                    <TableCell component="th" scope="row">
                                        {row.no}
                                    </TableCell>
                                    <TableCell align="center">{row.c_id}</TableCell>
                                    <TableCell align="left">{row.description}</TableCell>
                                    <TableCell align="left">{row.position}</TableCell>
                                    <TableCell align="left">{row.url}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                

            </div>
        );
    }
}

export default JobList;

/*

| job_id      | bigint(20)   | NO   | PRI | NULL    | auto_increment |
| c_id        | bigint(20)   | NO   |     | NULL    |                |
| description | varchar(255) | YES  |     | NULL    |                |
| position    | varchar(255) | NO   |     | NULL    |                |
| u_id        | bigint(20)   | NO   |     | NULL    |                |
| url         | varchar(255) | YES  |     | NULL    |                |

*/

