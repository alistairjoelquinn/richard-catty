import { CgNametag as icon } from 'react-icons/cg';

export default {
    name: 'meta',
    title: 'Home Page Metadata',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'What should the metadata title be?'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            description: 'What should the metadata description be?'
        },

    ]
};