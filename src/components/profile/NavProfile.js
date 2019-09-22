import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import EditDetails from './EditDetails';
import MyButton from '../../util/MyButton';
import Profile from './Profile';
import HomeIcon from '@material-ui/icons/Home';

// import ProfileSkeleton from '../../util/ProfileSkeleton';
// MUI stuff
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import BootstrapTooltip from '@material-ui/core/Tooltip';

// Icons
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';
import EditIcon from '@material-ui/icons/Edit';
import ExitToApp from '@material-ui/icons/ExitToApp';
//Redux
import { connect } from 'react-redux';
import { logoutUser, uploadImage } from '../../redux/actions/userActions';

const styles = (theme) => ({
    ...theme
});

class NavProfile extends Component {
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
    handleClick = () => {
        console.log('kk')
    }
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
                <Paper style={{ 'backgroundColor': '#9B59B6' , 'boxShadow' : 'none'}}>
                    <div className={classes.profile} style={{'display':'flex', 'justifyContent' : 'space-around' , 'alignItems' : 'center', 'maxWidth' : '100%' , 'objectFit' : 'cover'}}>
                        <div className="image-wrapper">
                            <img src={imageUrl} alt="profile" className="profile-image" style={{'height' : '30px' , 'width' : '30px' , 'margin' : '0 10px'}}/>
                            {/* <input
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
                                <EditIcon color="primary" />
                            </MyButton> */}
                        </div>
                        <hr />
                        <div className="profile-details">
                            {/* <Router>
                                <Route component={Profile} path={`/users/${handle}`}>
                                    @{handle}
                                </Route>
                            </Router> */}
                            {/* <Link to={`/users/${handle}`} component={Profile} className="home-icon">
                                <MyButton tip="Go to Profile"
                                    color="primary"
                                    variant="h5"
                                    style={{ 'color': '#000', 'fontSize': '20px', 'fontWeight': '500' }}
                                    >
                                    @{handle}
                                </MyButton>
                            </Link> */}
                            {/* <p onClick={this.handleClick}>
                                @{handle}
                            </p> */}
                            {/* <MuiLink
                                tip="View Profile"
                                component={Link}
                                to={`/users/profile/${handle}`}
                                color="primary"
                                variant="h5"
                                style={{ 'color': '#000', 'fontSize' : '20px' , 'fontWeight' : '500'}}
                            >
                                @{handle}
                            </MuiLink> */}
                            <BootstrapTooltip title="Go To Profile">
                                <Button 
                                    component={Link}
                                    to={`/users/profile/${handle}`}
                                    color="primary"
                                    variant="h5"
                                    style={{ 'color': '#000', 'fontSize': '17px', 'fontWeight': '500' , 'textTransform' : 'lowercase' }}
                                >
                                    @{handle}
                                </Button>
                            </BootstrapTooltip>
                            {/* <hr />
                            {bio && <Typography variant="body2">{bio}</Typography>}
                            <hr />
                            {location && (
                                <Fragment>
                                    <LocationOn color="primary" /> <span>{location}</span>
                                    <hr />
                                </Fragment>
                            )}
                            {website && (
                                <Fragment>
                                    <LinkIcon color="primary" />
                                    <a href={website} target="_blank" rel="noopener noreferrer">
                                        {' '}
                                        {website}
                                    </a>
                                    <hr />
                                </Fragment>
                            )}
                            <CalendarToday color="primary" />{' '}
                            <span>Joined {dayjs(createdAt).format('MMM YYYY')}</span> */}
                        </div>
                        <MyButton tip="Logout" onClick={this.handleLogout}>
                            <ExitToApp color="#000" />
                        </MyButton>
                        {/* <EditDetails /> */}
                    </div>
                </Paper>
            ) : (
                    <Paper className={classes.paper}>
                        <Typography variant="body2" align="center">
                            No profile found, please login again
                        </Typography>
                        <div className={classes.buttons}>
                            <Button
                                variant="contained"
                                color="primary"
                                component={Link}
                                to="/login"
                            >
                                Login
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                component={Link}
                                to="/signup"
                            >
                                Signup
                        </Button>
                        </div>
                    </Paper>
                )
        ) : null
                // <ProfileSkeleton />

        return profileMarkup;
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

const mapActionsToProps = { logoutUser, uploadImage };

NavProfile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    uploadImage: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};

export default connect(
    mapStateToProps,
    mapActionsToProps
)(withStyles(styles)(NavProfile));
