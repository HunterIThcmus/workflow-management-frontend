import React ,{useState} from 'react';
import {CssBaseline,Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Dialog from "./Dialog";
import ListBoard from "./ListBoard";

export default function BoardGroup() {
    const[add,setAdd]=useState(true);

    return (
        <Container component="main">
            <CssBaseline />
            <Typography component="h1" variant="h5">
            DANH SÁCH CÁC BẢNG 
        </Typography>
        <br></br>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Dialog add={add} change={setAdd}></Dialog>
                </Grid> 
                <Grid item xs={8}>
                    <ListBoard add={add}></ListBoard>
                </Grid>
            </Grid>

        </Container>

    );
};
