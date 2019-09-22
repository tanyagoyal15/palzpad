import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import EditDetails from './EditDetails';
import MyButton from '../../util/MyButton';
import ProfileSkeleton from '../../util/ProfileSkeleton';
// MUI stuff
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
// Icons
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
//Redux
import { connect } from 'react-redux';
import { logoutUser, uploadImage } from '../../redux/actions/userActions';

const styles = (theme) => ({
  ...theme
});

class Profile extends Component {
  handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append('image', image, image.name);
    this.props.uploadImage(formData);
  };
  handleEditPicture = () => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  };
  handleLogout = () => {
    this.props.logoutUser();
  };
  render() {
    const {
      classes,
      user: {
        credentials: { handle, createdAt, imageUrl, bio, website, location },
        loading,
        authenticated
      }
    } = this.props;

    let profileMarkup = !loading ? (
      authenticated ? (
        <Paper className={classes.paper} style={{ 'boxShadow': 'none', 'borderBottom': '1px solid #ccc', 'backgroundColor': '#f5f5f5' }}>
          <div className={classes.profile} style={{ 'display': 'flex'}}>
            <div className="image-wrapper" style={{ 'marginBottom': '20px'}}>
              <img src={imageUrl} alt="profile" className="profile-image" style={{'height' : '140px' , 'width' : '200px' , 'borderRadius' : '0', 'marginTop' : '20px'}} />
              <input
                type="file"
                id="imageInput"
                hidden="hidden"
                onChange={this.handleImageChange}
              />
              <MyButton
                tip="Edit profile picture"
                onClick={this.handleEditPicture}
                btnClassName="button"
              >
                <EditIcon color="primary"/>
              </MyButton>
            </div>
            <hr />
            <div className="profile-details">
              <MuiLink
                component={Link}
                to={`/users/${handle}`}
                // color="#000"
                variant="h5"
                style={{'color': '#000' , 'fontWeight' : 'bold'}}
              >
                @{handle}
              </MuiLink>
              <hr />
              {bio && <Typography variant="body2" style={{'width' : '80% !important'}}>{bio}</Typography>}
              <hr />
              {location && (
                <Fragment>
                  <LocationOn style={{'color': '#5A0001'}} /> <span style={{ 'fontSize': '13px'}}>{location}</span>
                  <hr />
                </Fragment>
              )}
              {website && (
                <Fragment>
                  <LinkIcon style={{'color': '#5A0001'}} />
                  <a href={website} target="_blank" rel="noopener noreferrer" style={{ 'fontSize': '13px' }}>
                    {' '}
                    {website}
                  </a>
                  <hr />
                </Fragment>
              )}
              <CalendarToday style={{'color': '#5A0001'}} />{' '}
              <span style={{ 'fontSize': '13px' }}>Joined {dayjs(createdAt).format('MMM YYYY')}</span>
            </div>
            {/* <MyButton tip="Logout" onClick={this.handleLogout}>
              <KeyboardReturn color="primary" />
            </MyButton> */}
            <EditDetails />
          </div>
        </Paper>
      ) : ( null
        // <p>Hey</p>
        // <Paper className={classes.paper}>
        //   <Typography variant="body2" align="center">
        //     No profile found, please login again
        //   </Typography>
        //   <div className={classes.buttons}>
        //     <Button
        //       variant="contained"
        //       color="primary"
        //       component={Link}
        //       to="/login"
        //     >
        //       Login
        //     </Button>
        //     <Button
        //       variant="contained"
        //       color="secondary"
        //       component={Link}
        //       to="/signup"
        //     >
        //       Signup
        //     </Button>
        //   </div>
        // </Paper>
      )
    ) : (
      <ProfileSkeleton />
    );

    return profileMarkup;
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapActionsToProps = { logoutUser, uploadImage };

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Profile));
