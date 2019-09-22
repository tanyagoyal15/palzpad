import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
// MUI
import MuiLink from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// Icons
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';

const styles = (theme) => ({
  ...theme
});

const StaticProfile = (props) => {
  const {
    classes,
    profile: { handle, createdAt, imageUrl, bio, website, location }
  } = props;

  return (
    <Paper className={classes.paper} style={{ 'boxShadow': 'none', 'borderBottom': '1px solid #ccc' , 'backgroundColor': '#f5f5f5'}}>
      <div className={classes.profile} style={{ 'display': 'flex' }}>
        <div className="image-wrapper">
          <img src={imageUrl} alt="profile" className="profile-image" style={{ 'height': '140px', 'width': '200px', 'borderRadius': '0', 'marginTop': '15px' }} />
        </div>
        <hr />
        <div className="profile-details">
          <MuiLink
            component={Link}
            to={`/users/${handle}`}
            color="primary"
            variant="h5"
            style={{ 'color': '#000', 'fontWeight': 'bold' }}
          >
            @{handle}
          </MuiLink>
          <hr />
          {bio && <Typography variant="body2" style={{ 'width': '80% !important' }}>{bio}</Typography>}
          <hr />
          {location && (
            <Fragment>
              <LocationOn style={{ 'color': '#5A0001' }} /> <span style={{ 'fontSize': '13px' }}>{location}</span>
              <hr />
            </Fragment>
          )}
          {website && (
            <Fragment>
              <LinkIcon style={{ 'color': '#5A0001' }} />
              <a href={website} target="_blank" rel="noopener noreferrer" style={{ 'fontSize': '13px' }}>
                {' '}
                {website}
              </a>
              <hr />
            </Fragment>
          )}
          <CalendarToday style={{ 'color': '#5A0001' }} />{' '}
          <span style={{ 'fontSize': '13px' }}>Joined {dayjs(createdAt).format('MMM YYYY')}</span>
        </div>
      </div>
      {/* <hr /> */}
    </Paper>
  );
};

StaticProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StaticProfile);
