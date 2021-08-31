import { GiFilmProjector as icon } from 'react-icons/gi';

export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'What is the name of the project?'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'string',
            description: 'What is the project about?'
        },
        {
            name: 'position',
            title: 'Position',
            type: 'string',
            description: 'What is your role there?'
        },
        {
            name: 'since',
            title: 'Since',
            type: 'string',
            description: 'Since when have you been doing this?'
        },
        {
            name: 'responsibilities',
            title: 'Responsibilities',
            type: 'array',
            of: [
                { type: 'string' }
            ],
            description: 'What are you responsibilities on this project? One field per responsibility.'
        },
        {
            name: 'url',
            title: 'Item Url',
            type: 'string',
            description: 'What is the web link to the project?'
        },
        {
            name: 'imageUrl',
            title: 'Image Url',
            type: 'string',
            description: 'Ignore this - just the publishers logo'
        },
        {
            name: 'squareImage',
            title: 'Square Image',
            type: 'boolean',
            description: 'Ignore this - just for the image formatting'
        },
    ]
};