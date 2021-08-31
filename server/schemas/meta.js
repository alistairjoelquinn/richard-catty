import { CgNametag as icon } from 'react-icons/cg';

export default {
    name: 'meta',
    title: 'Home Page Metadata',
    type: 'document',
    icon,
    fields: [
        {
            name: 'page',
            title: 'Page',
            type: 'string',
            description: 'What page is this the metadata for?'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'What should the metadata title value be?'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            description: 'What should the metadata description value be?'
        },

    ]
};