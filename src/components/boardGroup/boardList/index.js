import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Grid,Typography,Container,makeStyles} from '@material-ui/core';
import {Card,CardActions,CardContent} from '@material-ui/core';
import axios from "axios";


    // import { useHistory } from 'react-router-dom';
// import authHeader from "../../../services/AuthHeader";
import Button from "@material-ui/core/Button";
import BoardGroupService from '../service';


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
let dafaultdata=[{_id:1223,name:"test"},{_id:123,name:"good"}]
export default function BoardList(props) {
    const classes = useStyles();
    const [data, setData] = useState(dafaultdata);
    const [isBusy, setBusy] = useState(false);

    
    useEffect(() => {
      async function getListBoard() {
        const response = await BoardGroupService.getAllBoards();
        let body = response.data;
        console.log(body.data);
        setData(body.data);
      }
      getListBoard();
    }, []);

    return (
        <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {data.map((board,index) => (
            <Grid item key={board.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {board.name}
                  </Typography>
                  <Typography>
                    this is your board
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
};
