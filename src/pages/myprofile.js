import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Post from '../components/post/Post';
import Profile from '../components/profile/Profile';
// import StaticProfile from '../components/profile/StaticProfile';
import Grid from '@material-ui/core/Grid';

import PostSkeleton from '../util/PostSkeleton';
import ProfileSkeleton from '../util/ProfileSkeleton';

import { connect } from 'react-redux';
import { getUserData } from '../redux/actions/dataActions';

class myprofile extends Component {
    state = {
        profile: null,
        postIdParam: null
    };
    componentDidMount() {
        const handle = this.props.match.params.handle;
        const postId = this.props.match.params.postId;

        if (postId) this.setState({ postIdParam: postId });

        this.props.getUserData(handle);
        axios
            .get(`/user/${handle}`)
            .then((res) => {
                this.setState({
                    profile: res.data.user
                });
            })
            .catch((err) => console.log(err));
    }
    render() {
        const { posts, loading } = this.props.data;
        const { postIdParam } = this.state;

        const postsMarkup = loading ? (
            <PostSkeleton />
        ) : posts === null ? (
            <p>0 Posts</p>
        ) : !postIdParam ? (
            posts.map((post) => <Post key={post.postId} post={post} />)
        ) : (
                        posts.map((post) => {
                            if (post.postId !== postIdParam)
                                return <Post key={post.postId} post={post} />;
                            else return <Post key={post.postId} post={post} openDialog />;
                        })
                    );

        return (
            <Grid container spacing={16}>
                <Grid item sm={12} xs={12}>
                    {this.state.profile === null ? (
                        <ProfileSkeleton />
                    ) : (
                            <Profile />
                        )}
                </Grid>
                <Grid item sm={12} xs={12}>
                    <h2>Posts</h2>
                    {postsMarkup}
                </Grid>
            </Grid>
        );
    }
}

myprofile.propTypes = {
    getUserData: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    data: state.data
});

export default connect(
    mapStateToProps,
    { getUserData }
)(myprofile);
