import React from 'react'
import AdminPage from '../BaseAdmin'
import moment from 'moment'

import '../admin.scss'
import './style.scss'

import Navigator from '../shared/Navigator/Component'

import { Checkbox, Breadcrumb, Col, Icon, Row, Input, Table, Popover, Popconfirm, message } from 'antd'
import { Link } from 'react-router-dom'
import _ from 'lodash'

export default class extends AdminPage {

    constructor(props) {
        super(props)

        this.state = {
            textFilter: '',
            showArchived: false
        }
    }

    async componentDidMount() {
        await super.componentDidMount()
        this.props.getSubmissions()
    }

    componentWillUnmount() {
        this.props.resetSubmissions()
    }

    handleSearch(value) {
        this.setState({textFilter: value})
    }

    ord_renderContent () {

        let submissionData = this.props.all_submissions

        // filter results
        if (this.state.textFilter) {
            submissionData = submissionData.filter((submission) => {
                let regExp = new RegExp(this.state.textFilter, 'i')
                return regExp.test(submission.title) || regExp.test(submission.description)
            })
        }

        const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            width: '20%',
            className: 'fontWeight500 allow-wrap',
            render: (name, record) => {
                return <a onClick={this.linkSubmissionDetail.bind(this, record._id)} className="tableLink">
                    {name}
                    {record.archived &&
                    <span className="no-info"> (archived)</span>
                    }
                </a>
            },
            sorter: (a, b) => {
                if (!a.title || !b.title) {
                    return 0
                }
                return a.title.localeCompare(b.title)
            }
        },
        {
            title: 'Description',
            dataIndex: 'description',
            width: '30%',
            className: 'fontWeight500 allow-wrap',
            render: (desc, record) => {
                return <a onClick={this.linkSubmissionDetail.bind(this, record._id)} className="tableLink">{_.truncate(desc, {length: 100})}</a>
            }
        }, {
            title: 'Owner',
            dataIndex: 'createdBy.username'
        }, {
            title: 'Type',
            dataIndex: 'type'
        }, {
            title: 'Created',
            dataIndex: 'createdAt',
            render: (createdAt) => moment(createdAt).format('MMM D'),
            sorter: (a, b) => {
                return moment(a.createdAt).valueOf() - moment(b.createdAt).valueOf()
            },
            defaultSortOrder: 'descend'
        }, {
            title: '',
            dataIndex: '_id',
            key: 'actions',
            className: 'col-actions',
            render: (id, record) => {
                return <div>
                    <Popover content="archive">
                        <Popconfirm title="Are you sure you want to archive this item?" placement="top" okText="Yes" onConfirm={this.archiveItem.bind(this, id)}>
                            <Icon type="inbox"/>
                        </Popconfirm>
                    </Popover>
                </div>
            }
        }]

        return (
            <div className="p_admin_index ebp-wrap">
                <div className="ebp-header-divider" />
                <div className="d_box">
                    <div className="p_admin_content">
                        <Row>
                            <Col span={4} className="admin-left-column wrap-box-navigator">
                                <Navigator selectedItem={'submissions'}/>
                            </Col>
                            <Col span={20} className="c_SubmissionTableContainer admin-right-column wrap-box-user">
                                <div className="pull-right">
                                    <Input.Search onSearch={this.handleSearch.bind(this)}
                                                  prefix={<Icon type="file-text" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                  placeholder="search"/>

                                </div>
                                <div className="showArchivedContainer pull-right">
                                    Show Archived
                                    &nbsp;
                                    <Checkbox onClick={this.toggleShowArchived.bind(this)} checked={this.state.showArchived}/>
                                </div>
                                <div className="clearfix vert-gap-sm"/>
                                <Table
                                    columns={columns}
                                    rowKey={(item) => item._id}
                                    dataSource={submissionData}
                                    loading={this.props.loading}
                               />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }

    // TODO: all UI should be moved from container to component
    async archiveItem(submissionId) {
        try {
            await this.props.archiveSubmission(submissionId)
            message.success('Item archived successfully')

        } catch (err) {
            console.error(err)
            message.error('There was a problem archiving this item')
        }
    }

    async toggleShowArchived() {

        await this.setState({
            showArchived: !this.state.showArchived
        })

        await this.props.showArchived(this.state.showArchived)
    }

    linkSubmissionDetail(submissionId) {
        this.props.history.push(`/admin/submission-detail/${submissionId}`)
    }
}
