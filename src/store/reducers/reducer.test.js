import { LOGIN_USER, GET_POSTS } from '../action.js';
import dataReducer from './reducer.js';
/* reducers can be test for 2 scenerios,
    reducers are functions so we test fpor reducer functions
it returns a default state if we dont receive any
state it means we are working with empty array of
the action type does not match 

 */

describe('Datas Render', () => {
    it('Should return default state', () => {
        const userReceived = { user: {}, posts: [] };
        const newState = dataReducer(undefined, {});
        expect(newState).toEqual(userReceived);
    });




    // LOGIN_CHECKER action type is not yet implemented
    test('should return new state if receiving type', () => {
        const postN = [{ title: 'Test 1' }, { title: 'Test 2' }, { title: 'Test 3' }];
        const expectedUser = { "user": {}, "posts": postN };
        const newStateSent = Object.assign({}, expectedUser);
        const newState = dataReducer(undefined, {
            type: GET_POSTS,
            payload: postN
        });
        expect(newState).toEqual(newStateSent);
    });


    test('should return new state if receiving type', () => {
        const userN = { fullName: 'Test Full Name', password: 'Test Password', jobTitle: 'Test Job Title', email: 'Test Email' };
        const expectedUser = { "user": userN, "posts": [] };
        const newStateSent = Object.assign({}, expectedUser);
        const newState = dataReducer(undefined, { type: LOGIN_USER, resultEld: userN });
        expect(newState).toEqual(newStateSent);
    });

});