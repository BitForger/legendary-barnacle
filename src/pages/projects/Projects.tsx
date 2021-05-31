import React, {Component} from "react";
import {Grid, Row, Column, Tile, SkeletonPlaceholder, SkeletonText} from "carbon-components-react";
import {githubClient} from "../../shared/Apollo/Clients";
import {gql, ApolloQueryResult} from "apollo-boost";
import {ProjectTile} from "./components/ProjectTile";
import {GetProjects, GetProjects_user_repositories_nodes} from "./__generated__/GetProjects";

interface State {
    loading: boolean;
    userData?: any;
}

export class Projects extends Component<any, State> {
    state: State = {
        loading: false,
    }

    excludedRepos = [
        'BitForger',
        'flarum-ext-jwt'
    ]

    async componentDidMount() {
        try {
            this.setState({loading: true});
            const {data, errors}: ApolloQueryResult<GetProjects> = await githubClient.query({
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
                            repositories(first: 17, isFork: false, orderBy: {field: UPDATED_AT, direction: DESC}, privacy: PUBLIC, affiliations: OWNER) {
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

            this.setState({
                userData: data,
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        let content = (
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
            </>
        );

        if (!this.state.loading) {
            const {user} = this.state.userData ?? {user: ''};
            const pinnedItems = user?.pinnedItems?.nodes;
            const repos = user?.repositories?.nodes?.filter((value: GetProjects_user_repositories_nodes) => !this.excludedRepos.includes(value.name));
            let pinnedItemTiles: any = [];
            let repoTiles: any = [];

            if (pinnedItems) {
                for (const pinnedItem of pinnedItems) {
                    const col = (<Column lg={4} md={4} sm={12} key={pinnedItem.id} className={'bx--spacing-margin-bottom-06'}>
                        <ProjectTile project={pinnedItem} />
                    </Column>);
                    pinnedItemTiles.push(col)
                }
            }

            if (repos) {
                for (const repo of repos) {
                    const col = (<Column lg={4} md={4} sm={12} key={repo.id} className={'bx--spacing-margin-bottom-06'}>
                        <ProjectTile project={repo} />
                    </Column>);
                    repoTiles.push(col);
                }
            }

            content = <>
                <Row id={'pinned-items-row'}>
                    <Column sm={12} md={12} lg={12} className={'bx--spacing-margin-bottom-06'}>
                        <h2 className={'bx--spacing-margin-bottom-02'}>Pinned Items</h2>
                        <p className={'bx--type-helper-text-01'}>The repositories I'm most proud of (or are most active)</p>
                    </Column>
                    {pinnedItemTiles}
                </Row>
                <hr/>
                <Row id={'repos-row'}>
                    <Column sm={12} md={12} lg={12} className={'bx--spacing-margin-bottom-06 bx--spacing-margin-top-04'}>
                        <h2 className={'bx--spacing-margin-bottom-02'}>Repositories</h2>
                        <p className={'bx--type-helper-text-01'}>A sampling of some of my other projects</p>
                    </Column>
                    {repoTiles}
                </Row>
            </>;
        }

        return <Grid>
            {content}
        </Grid>;
    }
}
