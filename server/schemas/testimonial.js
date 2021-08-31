import { GiPublicSpeaker as icon } from 'react-icons/gi';

export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Which organisation gave the testimonial'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'string',
            description: 'What did they say'
        },
        {
            name: 'imageUrl',
            title: 'Image Url',
            type: 'string',
            description: 'Ignore this - URL for the company logo'
        },
        {
            name: 'squareImage',
            title: 'Square Image',
            type: 'boolean',
            description: 'Ignore this as well'
        },
        {
            name: 'url',
            title: 'Website URL',
            type: 'string',
            description: 'What is the website of the organisation'
        },
        {
            name: 'who',
            title: 'Who',
            type: 'string',
            description: 'Who gave the testimonial'
        },
        {
            name: 'metaTitle',
            title: 'Testimonial Page Meta Title',
            type: 'string',
            description: 'What should the metadata title be for the testimonial page?'
        },
        {
            name: 'metaDescription',
            title: 'Testimonial Page Meta Description',
            type: 'string',
            description: 'What should the metadata description be for the testimonial page?'
        },
    ]
};