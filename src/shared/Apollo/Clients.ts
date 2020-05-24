/**
 * @author admin
 */
import ApolloClient from 'apollo-boost';

export const githubClient = new ApolloClient({
    uri: `${process.env.REACT_APP_GITHUB_URI}`,
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_AUTH_TOKEN}`
    }
})
