import React, { Fragment } from "react";
import Header from "../../components/header";
import PresentationImage from '../../assets/images/presentation.png';
import { Column, Section, Title, Container } from "rbx";
import "../../styles/home.scss";

function HomeScreen() {
    return (
        <Fragment>
            <Header />
            <Section size="medium" className="home">
                <Container>
                    <Column.Group>
                        <Column size={5}>
                            <Title size={2} spaced className="has-text-white">
                                Create notes easily and access when you wants on the cloud
                            </Title>
                            <Title size={5} spaced className="has-text-light" subtitle>
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.<br /><br />
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.
                            </Title>
                            <a className="button is-outlined is-white is-large">
                                <strong>Register for free Now</strong>
                            </a>
                        </Column>
                        <Column size={6} offset={1}>
                            <img src={PresentationImage} />
                        </Column>
                    </Column.Group>
                </Container>
            </Section>
        </Fragment>
    )
}

export default HomeScreen;