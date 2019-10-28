import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../../store/actions/index';
import * as actionTypes from '../../store/action';
import ListUser from '../listUser/ListUser';
import ButtonList from '../button-list/ButtonList';


const initialState = {
    hidden: false,
}

class PostDisp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }
        this.fetch = this.fetch.bind(this);

    }

    fetch() {
        this.props.fetchPosts();
        this.updateButtonState();
    }

    returnNumber(number) {
        return number + 1;
    }

    updateButtonState() {
        const { hideBtn } = this.state;
        this.setState({ hideBtn: !hideBtn });
    }
    render() {
        const configButton = {
            buttonText: 'Get Post',
            // since we are passing this method to a component we need to bind it
            emitEvent: this.fetch
        };
        const { hideBtn } = this.state;
        const { posts } = this.props;
        return (<div className="postDisp" data-test="postDispComponent">
            <div>
                {posts.length === 0 && <ButtonList  {...configButton} />}
            </div>
            {!hideBtn &&
                <div>{posts.map((post, index) => {
                    const { title, body } = post;
                    const configListItem = {
                        title,
                        desc: body,
                    }
                    return (<ListUser key={index}{...configListItem} />)
                })}</div>}
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        storedUser: state.user,
        posts: state.posts
    }
}


export default connect(mapStateToProps, { fetchPosts })(PostDisp);