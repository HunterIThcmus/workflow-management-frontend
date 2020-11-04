

import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import BoardDetailService from './Service'

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

export default function AddTag(props) {
    const classes = useStyles();
    const [content, setContent] = React.useState("My Tag");
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);

    };
    const handleContent = (value) => {
        setContent(value);
    }

    async function handleButton(e) {
        e.preventDefault();
        onClose(e);
        const response = await BoardDetailService.addTag(props.board_id,props.category,content);
        let body = response.data;
        props.change(!props.add);
        console.log(body);
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">THÊM THẺ</DialogTitle>
            <div className={classes.paper}>
                {/* <Typography component="h1" variant="h5"> THÊM BẢNG </Typography> */}
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} xm={6} >
                            <TextField
                                id="content"
                                autoComplete="content"
                                variant="outlined"
                                fullWidth
                                required
                                label="Nhập tag"
                                onChange={(e) => handleContent(e.target.value)}
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
