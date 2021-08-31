import { FaPenFancy as icon } from 'react-icons/fa'

export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    icon,
    fields: [
        {
            name: 'services',
            title: 'Services',
            type: 'array',
            of: [
                { type: 'string' }
            ],
            description: 'One field for each service provided, add as many as you wish (within reason)'
        },
        {
            name: 'metaTitle',
            title: 'Services Page Meta Title',
            type: 'string',
            description: 'What should the metadata title be for the services page?'
        },
        {
            name: 'metaDescription',
            title: 'Services Page Meta Description',
            type: 'string',
            description: 'What should the metadata description be for the services page?'
        },
    ]
};