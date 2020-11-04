import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Grid,Typography,Container,makeStyles} from '@material-ui/core';
import {Card,CardActions,CardContent} from '@material-ui/core';
import Button from "@material-ui/core/Button";
import BoardDetailService from './Service';


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
let dafaultdata=[{_id:"1111",name:"test aaaa aaaa dddd ccc "},{_id:"2323",name:"first time"}]
export default function TagList(props) {
    const classes = useStyles();
    const [data, setData] = useState(dafaultdata);
    const [isBusy, setBusy] = useState(false);


    useEffect(() => {
      async function getListTag() {
        const response = await BoardDetailService.getTagByCategory(props.board_id,props.category);
        let body = response.data;
        console.log(body.data);
        setData(body.data);
        setBusy(false);
      }
      getListTag();
    }, [props.add]);

    async function handleButtonDetele(index){
        console.log("test first");
      const response =await BoardDetailService.deleteTag(data[index]._id);
      let newdata = [...data];
      newdata.splice(index, 1);
      setData(newdata);
    }

    return (
        <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={1}>
        {/* <Typography gutterBottom variant="h4" component="h2">
                   TO DO
                  </Typography> */}
        {isBusy ? (<p>loading...</p>) : (
          data.map((tag,index) => (
            <Grid item key={tag._id} xs={12}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" component="h5">
                    {tag.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                  Sửa
                  </Button>
                  <Button size="small" color="primary" onClick={() => handleButtonDetele(index)}>
                  Xóa
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )))}
        </Grid>
      </Container>
    );
};
