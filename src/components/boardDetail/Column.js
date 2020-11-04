import React, { useState } from 'react';
import { CssBaseline, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DialogAdd from "./DialogAdd";
import ListTag from "./ListTag";

export default function BoardGroup(props) {
    const [add, setAdd] = useState(true);

    return (
        <Container component="main">
            <CssBaseline />
            <Typography component="h1" variant="h5">
                {props.title}
        </Typography>
            <br></br>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <DialogAdd add={add} board_id={props.board_id} change={setAdd} category={props.category} ></DialogAdd>
                </Grid>
                <Grid item xs={12}>
                    <ListTag board_id={props.board_id} add={add} category={props.category}></ListTag>
                </Grid>
            </Grid>

        </Container>

    );
};
