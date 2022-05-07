import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button'
import TablePagination from '@mui/material/TablePagination';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useNavigate} from "react-router";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function CustomizedTables({arr, onClick}) {
    const key = Object.keys(arr[0]);
    function createData(id, description, photo, posts) {
        return {id, description, photo, posts};
    }
    const rows = arr.map(item => createData(item.id, item.description, item.photo, item.posts));
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 700}} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {key.map(item => <StyledTableCell align="left">{item}</StyledTableCell>)}
                        <StyledTableCell align="left">Edit</StyledTableCell>
                        <StyledTableCell align="left">Delete</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component="th" scope="row">
                                {row.id}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                {row.description.length > 10 ? row.description.slice(0, 10) + '...' : row.description}
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.photo}</StyledTableCell>
                            <StyledTableCell
                                align="left">{row.posts.length > 10 ? row.posts.slice(0, 10) + '...' : row.posts}
                            </StyledTableCell>

                            <StyledTableCell align="left">
                                <Button variant="contained" color="success" onClick={onClick}><EditIcon/>Edit</Button>
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <Button color="error"
                                ><DeleteOutlineIcon/>Delete</Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    );
}
