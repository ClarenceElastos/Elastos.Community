import {createContainer} from '@/util'
import Component from './Component'
import TaskService from '@/service/TaskService'
import CommunityService from '@/service/CommunityService'

import {TASK_CATEGORY, TASK_TYPE, TASK_STATUS, TASK_CANDIDATE_STATUS} from '@/constant'
import _ from 'lodash';

export default createContainer(Component, (state, ownProps) => {
    return {
        currentUserId: state.user.current_user_id
    }
}, () => {
    const taskService = new TaskService()
    const communityService = new CommunityService()
    return {
        async getSocialEvents () {
            return taskService.index({
                public: true,
                category: TASK_CATEGORY.DEVELOPER
            })
        },

        async getAllCommunities() {
            return new Promise((resolve, reject) => {
                communityService.getAll().then((data) => {
                    const cascaderItems = data.map((item) => {
                        return {
                            value: item._id,
                            label: item.name,
                            parentId: item.parentCommunityId
                        }
                    })

                    const rootCascaderItems = _.filter(cascaderItems, {
                        parentId: null
                    })

                    rootCascaderItems.forEach((rootCascaderItem) => {
                        const children = _.filter(cascaderItems, {
                            parentId: rootCascaderItem.value
                        })

                        if (children && children.length) {
                            rootCascaderItem.children = children
                        }
                    })

                    resolve(rootCascaderItems)
                }).catch((err) => {
                    reject(err)
                })
            })
        }
    }
})
