import React, {Component} from "react";
import {Grid, Row, Column, Tile, SkeletonPlaceholder, SkeletonText} from "carbon-components-react";
import {githubClient} from "../../shared/Apollo/Clients";
import {gql} from "apollo-boost";

interface State {
    loading: boolean;
}

export class Projects extends Component<any, State> {

    state: State = {
        loading: false,
    }

    async componentDidMount() {
        try {
            this.setState({loading: true});
            const data = await githubClient.query({
                query: gql`
                    query GetProjects {
                        user(login: "Bitforger") {
                            id
                            pinnedItems(types: REPOSITORY, first: 10) {
                                nodes {
                                    ... on Repository {
                                        id
                                        name
                                        description
                                        isPrivate
                                        isArchived
                                        isFork
                                        owner {
                                            login
                                            id
                                        }
                                        url
                                        languages(orderBy: {field: SIZE, direction: ASC}, first: 10) {
                                            nodes {
                                                name
                                                color
                                            }
                                        }
                                    }
                                }
                            }
                            repositories(first: 12, isFork: false, orderBy: {field: UPDATED_AT, direction: DESC}, privacy: PUBLIC, affiliations: OWNER) {
                                nodes {
                                    id
                                    isLocked
                                    isArchived
                                    isFork
                                    isTemplate
                                    name
                                    description
                                    owner {
                                        login
                                        id
                                    }
                                    url
                                    languages(orderBy: {field: SIZE, direction: ASC}, first: 10) {
                                        nodes {
                                            name
                                            color
                                        }
                                    }
                                }
                            }
                        }
                    }
                `,
            });
            this.setState({loading: false});
            console.log('data', data);
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return <Grid>
            {this.state.loading &&
            <>
                <Row className={'bx--spacing-margin-bottom-06'} id={'loading-row-1'}>
                <Column>
                    <Tile>
                        <SkeletonPlaceholder className={'bx--spacing-margin-bottom-02'} />
                        <SkeletonText style={{width: '75%'}} className={'bx--spacing-margin-bottom-02'} />
                        <SkeletonText style={{width: '50%'}} className={'bx--spacing-margin-bottom-02'} />
                        <SkeletonText style={{width: '90%'}} className={'bx--spacing-margin-bottom-02'} />
                    </Tile>
                </Column>
                <Column>
                    <Tile>
                        <SkeletonPlaceholder className={'bx--spacing-margin-bottom-02'} />
                        <SkeletonText style={{width: '75%'}} className={'bx--spacing-margin-bottom-02'} />
                        <SkeletonText style={{width: '50%'}} className={'bx--spacing-margin-bottom-02'} />
                        <SkeletonText style={{width: '90%'}} className={'bx--spacing-margin-bottom-02'} />
                    </Tile>
                </Column>
                <Column>
                    <Tile>
                        <SkeletonPlaceholder className={'bx--spacing-margin-bottom-02'} />
                        <SkeletonText style={{width: '75%'}} className={'bx--spacing-margin-bottom-02'} />
                        <SkeletonText style={{width: '50%'}} className={'bx--spacing-margin-bottom-02'} />
                        <SkeletonText style={{width: '90%'}} className={'bx--spacing-margin-bottom-02'} />
                    </Tile>
                </Column>
            </Row>
                <Row id={'loading-row-2'}>
                <Column>
                    <Tile>
                        <SkeletonPlaceholder className={'bx--spacing-margin-bottom-02'} />
                        <SkeletonText style={{width: '75%'}} className={'bx--spacing-margin-bottom-02'} />
                        <SkeletonText style={{width: '50%'}} className={'bx--spacing-margin-bottom-02'} />
                        <SkeletonText style={{width: '90%'}} className={'bx--spacing-margin-bottom-02'} />
                    </Tile>
                </Column>
                <Column>
                    <Tile>
                        <SkeletonPlaceholder className={'bx--spacing-margin-bottom-02'} />
                        <SkeletonText style={{width: '75%'}} className={'bx--spacing-margin-bottom-02'} />
                        <SkeletonText style={{width: '50%'}} className={'bx--spacing-margin-bottom-02'} />
                        <SkeletonText style={{width: '90%'}} className={'bx--spacing-margin-bottom-02'} />
                    </Tile>
                </Column>
                <Column>
                    <Tile>
                        <SkeletonPlaceholder className={'bx--spacing-margin-bottom-02'} />
                        <SkeletonText style={{width: '75%'}} className={'bx--spacing-margin-bottom-02'} />
                        <SkeletonText style={{width: '50%'}} className={'bx--spacing-margin-bottom-02'} />
                        <SkeletonText style={{width: '90%'}} className={'bx--spacing-margin-bottom-02'} />
                    </Tile>
                </Column>
            </Row>
            </>}
        </Grid>
    }
}
