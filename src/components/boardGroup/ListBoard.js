import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid, Typography, Container, makeStyles } from '@material-ui/core';
import { Card, CardActions, CardContent } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import BoardGroupService from './Service';
import UpdateBoard from './UpdateBoard';
import {
  Link
} from "react-router-dom";

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
let dafaultdata = [{ _id: "", name: "" }]
export default function BoardList(props) {
  const classes = useStyles();
  const [data, setData] = useState(dafaultdata);
  const [isBusy, setBusy] = useState(true);


  useEffect(() => {
    async function getListBoard() {
      const response = await BoardGroupService.getAllBoards();
      let body = response.data;
      console.log(body.data);
      setData(body.data);
      setBusy(false);
    }
    getListBoard();
  }, []);

  async function handleButtonDetele(index) {
    const response = await BoardGroupService.deleteBoard(data[index]._id);
    let newdata = [...data];
    newdata.splice(index, 1);
    setData(newdata);
  }

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {isBusy ? (<p>loading...</p>) : (
          data.map((board, index) => (
            <Grid item key={board.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <Link to={`/board_detail/${board._id}`} variant="inherit">
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {board.name}
                    </Typography>
                    <Typography>
                      this is your board content
                  </Typography>
                  </CardContent>
                </Link>
                <CardActions>
                  {/* <Button size="small" color="primary">
                  Sửa
                  </Button> */}
                  <UpdateBoard board_id={board._id}>Sửa</UpdateBoard>
                  <Button size="small" color="primary" onClick={() => handleButtonDetele(index)}>
                    Xóa
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )))}
      </Grid>
    </Container >
  );
};
