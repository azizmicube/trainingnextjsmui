import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '../components/Card'
import CardSkeleton from '../components/CardSkeleton'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    container: {
      padding : 15,
      [theme.breakpoints.up(767)]: {
        background: 'white',
      },
      [theme.breakpoints.down(768)]: {
          background: 'black',
      }
    },
  }));

const FetchData = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    const classes = useStyles();

    useEffect(() => {
        setLoading(true)
        fetch('https://themealdb.com/api/json/v1/1/categories.php')
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            console.log(data)
            setLoading(false)
          })
    }, [])
    
    if (loading) return (
      <div className={classes.container}>
        <Grid container spacing={3}>
            {
                [1,2,3,4,5,6,7,8].map((item, key) => (
                    <Grid key={key} item xs={12} md={6} lg={3}>
                    <CardSkeleton ></CardSkeleton>
                    </Grid>
                ))
            }
        </Grid>
      </div>
    )

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Grid container spacing={3}>

          {
              data && data.categories.map((item, key) => (
                <Grid key={key} item xs={12} md={6} lg={3}>
                  <Card name={item.strCategory} image={item.strCategoryThumb} description={item.strCategoryDescription}></Card>
                </Grid>
              ))
          }
        </Grid>
      </div>
    </div>
  )
}

export default FetchData