import React from 'react'
import {Helmet} from "react-helmet"
import StandardPage from '../../StandardPage'
import Footer from '@/module/layout/Footer/Container'
import I18N from '@/I18N'
import './style.scss'
import { Col, Row, Card, Button, Breadcrumb, Icon, List, Spin, Avatar, Modal } from 'antd'
import _ from 'lodash'

export default class extends StandardPage {
    componentDidMount() {
        this.setState({ loading: true })
        this.props.getTasks().then(() => {
            this.setState({ loading: false })
        })
    }

    componentWillUnmount() {
        this.props.resetTasks()
    }

    checkForLoading(followup) {
        return this.state.loading
            ? <Spin className="spinner" size="large"/>
            : _.isFunction(followup) && followup()
    }

    ord_states() {
        return {
            loading: false
        }
    }

    linkRegister() {
        this.props.history.push('/login')
    }

    // TODO: what's up with these admin CSS classes?
    ord_renderContent () {
        return (
            <div className="p_crVideo">
                <div id="fb-root"></div>
                <Helmet>
                    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                    <script>
                        {`window.fbAsyncInit = function() {
                            FB.init({
                                appId            : '2317676415144125',
                                autoLogAppEvents : true,
                                xfbml            : true,
                                version          : 'v3.2'
                            });
                        }`}
                    </script>
                    <script>{`(function(d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) return;
                        js = d.createElement(s); js.id = id;
                        js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
                        fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'))`}</script>
                </Helmet>
                <div className="ebp-header-divider" />
                <div className="p_admin_index ebp-wrap">
                    <div className="d_box">
                        <div className="p_admin_content">
                            {this.buildHeader()}
                            {this.buildContent()}
                            {this.buildTasks()}
                            <div className="share-icons">
                                <span>SHARE</span>
                                <div id="twitter_share" className="share-container">
                                    <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false">Tweet</a>
                                </div>
                                <div id="facebook_share" className="share-container">
                                    <div className="fb-share-button" data-href="https://www.facebook.com/ElastosCyberRepublic/" data-layout="button_count" data-size="small" data-mobile-iframe="true">
                                        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2FElastosCyberRepublic%2F&amp;src=sdkpreparse"
                                           className="fb-xfbml-parse-ignore">Share</a></div>
                                </div>
                                <div className="share-container">
                                    <a href="https://t.me/elastosgroup" target="_blank">
                                        <i className="fab fa-telegram fa-2x"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

    buildHeader() {
        return (
            <div className="header">
                <div className="header-container">
                    <div className="title komu-a">
                        {I18N.get('cr-video.header.1')}
                    </div>
                    <div className="videoWrapper">
                        <iframe src="https://www.youtube.com/embed/vaPdh35elYc"
                            frameBorder="0"
                            allow="autoplay; encrypted-media;"
                            allowFullScreen></iframe>
                    </div>
                    <div className="title sub-title">
                        {I18N.get('cr-video.header.2')}
                    </div>
                    <div>
                        <Button className="earn-ela-btn" onClick={this.linkRegister.bind(this)}>{I18N.get('cr-video.join')}</Button>
                    </div>
                    <div className="background-visuals">
                        <img className="upper-right" src="/assets/images/quarter-circle-connected.svg"/>
                        <img className="mid-right" src="/assets/images/training_circle.png"/>
                        <img className="mid-left" src="/assets/images/training_green_slashed_box.png"/>
                        <img className="upper-left" src="/assets/images/training_mini_connector.png"/>
                    </div>
                </div>
            </div>
        )
    }

    buildContent() {
        return (
            <div>
                <div className="content">
                    <div className="title">{I18N.get('cr-video.q6')}</div>
                    <span>{I18N.get('cr-video.q6.title.1')}</span>
                    <p>{I18N.get('cr-video.q6.paragraph.1')}
                        <a target="_blank" onClick={this.linkRegister.bind(this)}> {I18N.get('cr-video.here')}</a>.
                    </p>
                    <span>{I18N.get('cr-video.q6.title.2')}</span>
                    <p>{I18N.get('cr-video.q6.paragraph.2')}</p>
                    <span>{I18N.get('cr-video.q6.title.3')}</span>
                    <p>
                        {I18N.get('cr-video.q6.paragraph.3_2')}
                        <a target="_blank" href="https://discord.gg/UG9j6kh">{I18N.get('cr-video.q6.paragraph.3.link')}</a>
                        {I18N.get('cr-video.q6.paragraph.3_3')}
                    </p>
                    <span>{I18N.get('cr-video.q6.title.4')}</span>
                    <p>
                        {I18N.get('cr-video.q6.paragraph.4')}
                        <a target="_blank" href='https://www.youtube.com/watch?v=D6lz889WyXQ'> {I18N.get('cr-video.q6.paragraph.4.link')}</a>.
                    </p>
                    <span>{I18N.get('cr-video.q6.title.5')}</span>
                    <p>{I18N.get('cr-video.q6.paragraph.5')}</p>
                </div>
                <div className="content">
                    <div className="title">{I18N.get('cr-video.q1')}</div>
                    <span>{I18N.get('cr-video.q1.title.1')}</span>
                    <p>{I18N.get('cr-video.q1.paragraph.1')}</p>
                    <span>{I18N.get('cr-video.q1.title.2')}</span>
                    <p>{I18N.get('cr-video.q1.paragraph.2')}</p>
                    <span>{I18N.get('cr-video.q1.title.3')}</span>
                    <p>{I18N.get('cr-video.q1.paragraph.3')}</p>
                </div>
                <div className="content">
                    <div className="title">{I18N.get('cr-video.q2')}</div>
                    <p>{I18N.get('cr-video.q2.paragraph.1')}</p>
                </div>
                <div className="content">
                    <div className="title">{I18N.get('cr-video.q3')}</div>
                    <p>{I18N.get('cr-video.q3.paragraph.1')}</p>
                    <div className="subtitle">{I18N.get('cr-video.q3.subtitle.1')}</div>
                    <div className="links">
                        <a target="_blank" href="https://www.elastos.org/wp-content/uploads/2018/White%20Papers/elastos_whitepaper_en.pdf?_t=1526235330">{I18N.get('cr-video.q3.link.1')}</a> |
                        <a target="_blank" href="https://github.com/elastos/Elastos/wiki/A-Developer-Guide-to-Elastos"> {I18N.get('cr-video.q3.link.2')}</a> |
                        <a target="_blank" href="https://github.com/elastos/Elastos/wiki/A-Non-Developer-Guide-to-Elastos"> {I18N.get('cr-video.q3.link.3')}</a> |
                        <a target="_blank" href="http://Elastos.org/en"> {I18N.get('cr-video.q3.link.4')}</a>
                    </div>
                </div>
                <div>
                    <Button className="earn-ela-btn" onClick={this.linkRegister.bind(this)}>{I18N.get('cr-video.join')}</Button>
                </div>
                <div className="content">
                    <div className="title">{I18N.get('cr-video.q4')}</div>
                    <p>{I18N.get('cr-video.q4.paragraph.1')}</p>
                    <p>{I18N.get('cr-video.q4.paragraph.2')}</p>
                    <p>{I18N.get('cr-video.q4.paragraph.3')}</p>
                    <p>{I18N.get('cr-video.q4.paragraph.4')}</p>
                    <p>{I18N.get('cr-video.q4.paragraph.5')}</p>
                </div>
                <div className="content">
                    <div className="title">{I18N.get('cr-video.q5')}</div>
                    <p>{I18N.get('cr-video.q5.paragraph.1')}</p>

                    {/* Learn more about CR with these resources */}
                    <div className="subtitle">{I18N.get('cr-video.q6.subtitle.1')}</div>
                    <div className="links">
                        <a target="_blank" href="https://www.youtube.com/watch?v=AXtElROGXzA">{I18N.get('cr-video.q6.link.1')}</a> |
                        <a target="_blank" href="https://www.youtube.com/watch?v=-90B2qzwOc8"> {I18N.get('cr-video.q6.link.2')}</a>
                    </div>
                </div>
                <div className="content email-contact">
                    <div className="title">{I18N.get('cr-video.q7.title')}</div>
                    <p>
                        Enter your email and we will personally email you: <input id="email_mailer" type="text" size="32"/>
                        <Button className="earn-ela-btn" onClick={this.submitEmail.bind(this)}>{I18N.get('cr-video.q7.button_text')}</Button>
                    </p>
                </div>
            </div>
        )
    }

    buildTasks() {
        return (
            <div className="tasks">
            </div>
        )
    }

    submitEmail(email) {
        debugger
    }
}