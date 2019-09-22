import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyButton from '../../util/MyButton';
import PostPost from '../post/PostPost';
import Notifications from './Notifications';
import NavProfile from '../profile/NavProfile';
import '../../App.css';
// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// Icons
import HomeIcon from '@material-ui/icons/Home';

class Navbar extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <AppBar>
        <Toolbar>
          {authenticated ? (
            <Fragment>
              <Link to="/" className="c1">
                <MyButton tip="Home">
                  <HomeIcon />
                </MyButton>
              </Link>
              <PostPost />
              <Notifications />
              <NavProfile />
            </Fragment>
          ) : (
            <Fragment>
              
              {/* <Button color="inherit" component={Link} to="/">
                Home
              </Button> */}
              <Link to="/" className="c2">
                <MyButton tip="Home">
                  <HomeIcon />
                </MyButton>
              </Link>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Signup
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(Navbar);
