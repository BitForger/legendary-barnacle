import React, {Component} from 'react';
import {Column, Grid, ListItem, Row, UnorderedList} from 'carbon-components-react';
import {Link as RRLink} from 'react-router-dom';
import './Footer.scss';

export class Footer extends Component<any, any> {

    getYear() {
        return new Date().getFullYear();
    }

    render() {
        return <Grid id={'footer'} className={'bx--spacing-padding-bottom-06'}>
            <Row className={'bx--spacing-margin-bottom-06 bx--spacing-padding-top-06'}>
                <Column>
                    <h5 className="bx--type-productive-heading-03 bx--spacing-margin-bottom-06 footer__section-header">Noah Kovacs</h5>
                    <UnorderedList>
                        <ListItem>
                            <RRLink className={'bx--link'} to={'/'}>Home</RRLink>
                        </ListItem>
                        <ListItem>
                            <RRLink className={'bx--link'} to={'/projects'}>Projects</RRLink>
                        </ListItem>
                    </UnorderedList>
                </Column>
            </Row>
            <Row>
                <Column>
                    <span>&copy; Noah Kovacs, {this.getYear()} - All Rights Reserved.</span>
                </Column>
            </Row>
        </Grid>
    }
}
