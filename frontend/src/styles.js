import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 10,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'black',
  },
  image: {
    marginLeft: '15px',
    paddingBottom: '7px',
    paddingTop:'7px',
    paddingRight:'7px',
  },

  [theme.breakpoints.down('sm')]:{
  mainContainer :{
    flexDirection :'column-reverse'
  },
}
}));