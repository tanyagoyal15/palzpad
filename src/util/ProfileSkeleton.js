import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import NoImg from '../images/no-img.png';
// MUI
import Paper from '@material-ui/core/Paper';
// Icons
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const styles = (theme) => ({
  ...theme,
  // handle: {
  //   height: 20,
  //   backgroundColor: theme.palette.primary.main,
  //   width: 60,
  //   margin: '0 auto 7px auto'
  // },
  // fullLine: {
  //   height: 15,
  //   backgroundColor: 'rgba(0,0,0,0.6)',
  //   width: '100%',
  //   marginBottom: 10
  // },
  // halfLine: {
  //   height: 15,
  //   backgroundColor: 'rgba(0,0,0,0.6)',
  //   width: '50%',
  //   marginBottom: 10
  // }
  card: {
    display: 'flex',
    marginBottom: 20,
    boxShadow : 'none',
    backgroundColor : '#f5f5f5'
  },
  cardContent: {
    width: '100%',
    flexDirection: 'column',
    padding: 25
  },
  cover: {
    minWidth: 200,
    objectFit: 'cover'
  },
  handle: {
    width: 60,
    height: 18,
    backgroundColor: theme.palette.primary.main,
    marginBottom: 7
  },
  date: {
    height: 14,
    width: 100,
    backgroundColor: 'rgba(0,0,0, 0.3)',
    marginBottom: 10
  },
  fullLine: {
    height: 15,
    width: '90%',
    backgroundColor: '#9E9E9E',
    marginBottom: 10
  },
  halfLine: {
    height: 15,
    width: '50%',
    backgroundColor: '#ADADAD',
    marginBottom: 10
  }
});

const ProfileSkeleton = (props) => {
  const { classes } = props;
  return (
    // <Paper className={classes.paper}>
    //   <div className={classes.profile}>
    //     <div className="image-wrapper">
    //       <img src={NoImg} alt="profile" className="profile-image" />
    //     </div>
    //     <hr />
    //     <div className="profile-details">
    //       <div className={classes.handle} />
    //       <hr />
    //       <div className={classes.fullLine} />
    //       <div className={classes.fullLine} />
    //       <hr />
    //       <LocationOn color="primary" /> <span>Location</span>
    //       <hr />
    //       <LinkIcon color="primary" /> https://website.com
    //       <hr />
    //       <CalendarToday color="primary" /> Joined date
    //     </div>
    //   </div>
    // </Paper>
    <Card className={classes.card}>
      <CardMedia className={classes.cover} image={NoImg} />
      <CardContent className={classes.cardContent}>
        <div className={classes.handle} />
        <div className={classes.date} />
        <div className={classes.fullLine} />
        <div className={classes.fullLine} />
        <div className={classes.halfLine} />
      </CardContent>
    </Card>
  );
};

ProfileSkeleton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileSkeleton);
