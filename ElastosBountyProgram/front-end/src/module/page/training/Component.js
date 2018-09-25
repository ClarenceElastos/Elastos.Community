import React from 'react'
import StandardPage from '../StandardPage'
import Footer from '@/module/layout/Footer/Container'
import I18N from '@/I18N'
import './style.scss'
import { Col, Row, Spin, message } from 'antd'
import _ from 'lodash'

export default class extends StandardPage {

    constructor(props) {
        super(props)

        this.state = {
            loading: false,
        }
    }

    async componentDidMount() {
        this.setState({ loading: false })
    }

    componentWillUnmount() {

    }

    checkForLoading(followup) {
        return this.state.loading
            ? <Spin size="large"/>
            : _.isFunction(followup) && followup()
    }

    // Use this to record users' emails
    subscribe() {

    }

    ord_states() {
        return {
            showDetailId: null,
            loading: false
        }
    }

    ord_renderContent () {
        return (
            <div className="p_training">
                <div className="ebp-header-divider" />
                <div className="p_admin_index ebp-wrap">
                    <div className="d_box">
                        <div className="p_admin_content">
                            {this.buildHeader()}
                            {this.buildTraining()}
                            {this.buildItinerary()}
                            {this.buildDisclaimer()}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

    buildHeader() {
        return (
            <div className="training-header">
                <div className="circle-container">
                    <img className="circle" src="assets/images/training_circle.png"></img>
                    <img className="circle" src="assets/images/training_circle.png"></img>
                </div>
                <div className="right-box-container">
                    <div className="small-box"></div>
                    <div className="box"></div>
                    <img src="assets/images/training_white_slashed_box.png"/>
                </div>
                <div className="bottom-box-container">
                    <div className="box"></div>
                </div>
                <div className="connector-container">
                    <img src="assets/images/training_mini_connector.png"/>
                </div>
                <div className="container">
                    <div className="rect-container">
                        <div className="rect"></div>
                    </div>
                    <div className="title">
                        {I18N.get('training.header.title')}
                    </div>
                    <div className="content">
                        <div class="center">
                            <div className="strike-text">
                                <div className="strike-line"/>
                                <p>{I18N.get('training.header.content.1')}</p>
                            </div>
                            <div className="strike-text">
                                <div className="strike-line"/>
                                <p>{I18N.get('training.header.content.2')}</p>
                            </div>
                            <div className="strike-text">
                                <div className="strike-line"/>
                                <p>{I18N.get('training.header.content.3')}</p>
                            </div>
                            <div className="strike-text">
                                <div className="strike-line"/>
                                <p>{I18N.get('training.header.content.4')}</p>
                            </div>
                            <div className="strike-text">
                                <div className="strike-line"/>
                                <p>{I18N.get('training.header.content.5')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    buildTraining() {
        return (
            <div className="evangelist">
                <div className="container">
                    <div className="left-box-container">
                        <img className="evangelist_logo" src="assets/images/training_evangelist_logo.png"/>
                    </div>
                    <div className="right-box-container">
                        <img src="assets/images/training_green_slashed_box.png"/>
                    </div>
                    <div className="title">
                        {I18N.get('training.evangelist.title')}
                    </div>
                    <div className="content">
                        {I18N.get('training.evangelist.content')}
                    </div>
                </div>
            </div>
        )
    }

    buildItinerary() {
        return (
            <div className="itinerary">
                <div>
                    <img className="connector" src="assets/images/training_connector.png"/>
                </div>
                <div className="container">
                    <div className="title">
                        {I18N.get('training.itinerary.title')}
                    </div>
                    <div className="content">
                        <Row className="d_Row">
                            <Col xs={24} sm={24} md={12} className="left-col">
                                <img src="assets/images/training_itinerary.jpg"/>
                            </Col>
                            <Col xs={24} sm={24} md={12} className="right-col">
                                <div>
                                    <span className="label">{I18N.get('training.itinerary.content.venueLabel')}: </span>
                                    <span>{I18N.get('training.itinerary.content.venue')}</span>
                                </div>
                                <div>
                                    <span className="label">{I18N.get('training.itinerary.content.day13Label')}: </span>
                                    <span>{I18N.get('training.itinerary.content.day13')}</span>
                                </div>
                                <div>
                                    <span className="label">{I18N.get('training.itinerary.content.day4Label')}: </span>
                                    <span>{I18N.get('training.itinerary.content.day4')}</span>
                                </div>
                                <div>
                                    <span className="label">{I18N.get('training.itinerary.content.day5Label')}: </span>
                                    <span>{I18N.get('training.itinerary.content.day5')}</span>
                                </div>
                                <div>
                                    <span className="label">{I18N.get('training.itinerary.content.day6Label')}: </span>
                                    <span>{I18N.get('training.itinerary.content.day6')}</span>
                                </div>
                                {/*
                                <div>
                                    <span className="label">{I18N.get('training.itinerary.content.day7Label')}: </span>
                                    <span>{I18N.get('training.itinerary.content.day7')}</span>
                                </div>
                                */}
                            </Col>
                        </Row>
                        <Row className="d_Row subscribe" justify="center">
                            <div className="form-wrap">
                                <p>Stay updated by subscribing below with your E-Mail</p>
                                <iframe width="0" height="0" border="0" name="dummyframe" id="dummyframe"/>
                                <form id="footer-form" className="signup-form" name="mailing-list" action="https://cyberrepublic.us19.list-manage.com/subscribe/post-json?u=acb5b0ce41bfe293d881da424&id=e6afbb4dba"
                                      method="post" target="dummyframe" onSubmit={this.evangelistSubmit}>
                                    <div className="email-wrap">
                                        <input type="email" name="EMAIL" data-type="req" placeholder="Enter Email"/>
                                        <button type="submit" className="arrow-submit">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 34">
                                                <polygon points="0 0 0 33.487 16.744 16.744 0 0" style={{fill: '#1de9b6'}}/>
                                                <polygon points="0 24.579 7.835 16.744 0 8.91 0 24.579" className="small-tri"/>
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }

    buildDisclaimer() {
        return (
            <div className="disclaimer-box">
                <div className="welcomeBox">
                    <div className="title">
                        {I18N.get('developer.cr100.disclaimer.title')}
                    </div>
                    <div className="content">
                        {I18N.get('training.disclaimer')}
                    </div>
                </div>
            </div>
        )
    }

    evangelistSubmit(ev) {

        message.success('Email subscription received successfully')

    }
}
