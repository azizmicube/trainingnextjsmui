import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import Skeleton from '@material-ui/lab/Skeleton';


export default function Index() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Skeleton variant="rect" animation="wave" width={"100%"} height={118} />
          <Typography gutterBottom variant="h5" component="h2">
            <Skeleton variant="rect" animation="wave" width={100} height={30.75} />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Skeleton variant="rect" animation="wave" width={64} height={30.75} />
        <Skeleton variant="rect" animation="wave" width={64} height={30.75} />
      </CardActions>
    </Card>
  );
}
