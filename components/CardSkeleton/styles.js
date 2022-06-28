import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    root: {
      maxWidth: 345,
      '& .MuiCardActions-root' : {
        paddingLeft : 16,
        paddingRight : 16,
      },
      '& .MuiSkeleton-root' : {
        marginTop : 10,
      }
    },
    media: {
      height: 140,
    },
  });