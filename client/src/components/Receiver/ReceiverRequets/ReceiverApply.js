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
import { blue, green, yellow } from '@mui/material/colors';
import { ApiBaseUrl } from '../../../apiConfig';
import SidebarLayout from '../../../SidebarLayout';


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
    { id: 'bloodgroup', label: 'Blood Group', minWidth: 100 },
    {
        id: 'units',
        label: 'Units',
        minWidth: 50,
        // align: 'right',
        // format: (value) => value.toLocaleString('en-US'),
    },
    
    {
        id: 'Status',
        label: 'Status',
        minWidth: 100,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'details',
        label: 'Details',
        minWidth: 100,
        // align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    
];




export default function ReceiverApply() {
    const navigate = useNavigate()
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [receiverRequests, setReceiverRequests] = React.useState([]);
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
        axios.post( ApiBaseUrl + "/requests_for_receiver",{
          email:localStorage.getItem("email")
        }).then((res) => {
            console.log(res.data)
            if (res.data.success) {
                setReceiverRequests(res.data.data)
                setLoadingData(false)
            }
        }).catch((er) => console.log(er))
    }, [])


    const handleStatus = (row) => {
        navigate(`${row._id}`)
    }

    return (
      <SidebarLayout>
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
                        {!loadingData && receiverRequests?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    //   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    //     {columns.map((column) => {
                                    //       const value = row[column.id];
                                    //       return (
                                    //         <TableCell key={column.id} align={column.align}>
                                    //           {column.format && typeof value === 'number'
                                    //             ? column.format(value)
                                    //             : value}
                                    //         </TableCell>
                                    //       );
                                    //     })}
                                    //   </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            {row.name}
                                        </TableCell>
                                        <TableCell>
                                            {row.bloodgroup}
                                        </TableCell>
                                        <TableCell>
                                            {row.units}
                                        </TableCell>
                                        <TableCell sx={{color:row.status === "Pending" ? yellow[700] : green[400]}}>
                                          {row.status}
                                        </TableCell>
                                        <TableCell>
                                            <Button variant='contained' size='small' onClick={() => handleStatus(row)}>
                                                View
                                            </Button>
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
                count={receiverRequests?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
        </SidebarLayout>
    );
}
