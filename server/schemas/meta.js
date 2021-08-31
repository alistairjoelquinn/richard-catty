import { CgNametag as icon } from 'react-icons/cg';

export default {
    name: 'meta',
    title: 'Metadata',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Page',
            type: 'string',
            description: 'What page is this the metadata for?'
        },
        {
            name: 'id',
            title: 'Data ID',
            type: 'string',
            description: 'ignore this, id to identify correct metadata for each page when building the application'
        },
        {
            name: 'metaTitle',
            title: 'Title',
            type: 'string',
            description: 'What should the metadata title value be?'
        },
        {
            name: 'metaDescription',
            title: 'Description',
            type: 'string',
            description: 'What should the metadata description value be?'
        },

    ]
};