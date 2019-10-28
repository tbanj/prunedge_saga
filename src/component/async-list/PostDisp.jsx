import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../../store/actions/index';
import * as actionTypes from '../../store/action';
import ListUser from '../listUser/ListUser';
import { ButtonList } from '../button-list/ButtonList';

class PostDisp extends Component {
    constructor(props) {
        super(props);
        this.fetch = this.fetch.bind(this);

    }
    fetch() {
        this.props.fetchPosts();
    }
    render() {
        const configButton = {
            buttonText: 'Get Post',
            // since we are passing this method to a component we need to bind it
            emitEvent: this.fetch
        };
        const { posts } = this.props;
        return (<React.Fragment >
            <div data-test="postDispComponent">
                <div><ButtonList  {...configButton} /></div>
                {posts.length > 0 &&
                    <div>{posts.map((post, index) => {
                        const { title, body } = post;
                        const configListItem = {
                            title,
                            desc: body
                        }
                        return (<ListUser key={index}{...configListItem} />)
                    })}</div>}
            </div>
        </React.Fragment>);
    }
}

const mapStateToProps = (state) => {
    return {
        storedUser: state.user,
        posts: state.posts
    }
}


export default connect(mapStateToProps, { fetchPosts })(PostDisp);