

import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import BoardGroupService from './Service'
// import authHeader from "../../../services/AuthHeader";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const value = [{ title: '10', value: 10 }, { title: '11', value: 11 }, { title: '12', value: 12 },];

export default function AddBoard(props) {
    const classes = useStyles();
    const [name, setName] = React.useState("My board");
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);

    };
    const handleName = (value) => {
        setName(value);
    }

    async function handleButton(e) {
        e.preventDefault();
        onClose(e);
        const response = await BoardGroupService.addBoard(name);
        let body = response.data;
        console.log(body);
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">THÊM BẢNG</DialogTitle>
            <div className={classes.paper}>
                {/* <Typography component="h1" variant="h5"> THÊM BẢNG </Typography> */}
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} xm={6} >
                            <TextField
                                id="name"
                                autoComplete="name"
                                variant="outlined"
                                fullWidth
                                required
                                label="Nhập tên bảng"
                                onChange={(e) => handleName(e.target.value)}
                            />
                        </Grid>


                    </Grid>
                    <Grid item xs={12} xm={6}>
                        <Button
                            type="submit"
                            width="120"
                            variant="contained"
                            color="primary"
                            onClick={(e) => handleButton(e)}
                            className={classes.submit}
                        >
                            Thêm mới
                     </Button>
                    </Grid>
                </form>
            </div>
        </Dialog>
    );
};
