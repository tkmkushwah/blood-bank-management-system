import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { useEffect } from 'react';
import { Box, Button, CircularProgress, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router';
import { blue, green, lightGreen, yellow } from '@mui/material/colors';
import { ApiBaseUrl } from '../../apiConfig';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: blue[500],
      color: "#fff",
      fontWeight:600,
      fontSize:15
    },
  }));


const columns = [
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'email', label: 'Email', minWidth: 100 },
    { id: 'message', label: 'Message', minWidth: 100 },
    
    
];




export default function DonarRequests() {
    const navigate = useNavigate()
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [donarRequests, setDonarRequests] = React.useState([]);
    const [loadingData, setLoadingData] = React.useState(false)
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        setLoadingData(true)
        axios.get( "/api/v1/user/message_requests").then((res) => {
            console.log(res.data)
            if (res.data.success) {
                setDonarRequests(res.data.data)
                setLoadingData(false)
            }
        }).catch((er) => console.log(er))
    }, [])

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <StyledTableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {!loadingData && donarRequests?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow>
                                        <TableCell>
                                            {row.name}
                                        </TableCell>
                                        <TableCell>
                                            {row.email}
                                        </TableCell>
                                        <TableCell>
                                            {row.message}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        
                    </TableBody>
               </Table>
                {loadingData && <CircularProgress/>}
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={donarRequests?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
