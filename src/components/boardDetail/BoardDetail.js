import React, { useState } from 'react';
import {CssBaseline,Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Column from './Column'
// import ListTag from './ListTag'

export default function BoardDetail(props) {
    const [add, setAdd] = useState(true);
    const board_id=props.match.params.board_id;

    return (
        <Container component="main">
            <CssBaseline />
            <Typography component="h1" variant="h5">
            THÔNG TIN BẢNG
        </Typography>
            <Grid container spacing={2}>
            <Grid item xs={4}>
                    <Column add={add} category="1" board_id={board_id} title="WENT WELL"></Column>
                </Grid>
                <Grid item xs={4}>
                    <Column add={add} category="2" board_id={board_id} title="TO IMPROVE"></Column>
                </Grid>
                <Grid item xs={4}>
                    <Column add={add} category="3" board_id={board_id} title ="ACTION ITEMS"></Column>
                </Grid>
            </Grid>

        </Container>

    );
};
