export default {
    name: 'portfolio',
    title: 'Portfolio',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'What is the title of the piece'
        },
        {
            name: 'publisher',
            title: 'Publisher',
            type: 'string',
            description: 'Where is the piece published'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'string',
            description: 'What is the text for the preview content'
        },
        {
            name: 'url',
            title: 'Item Url',
            type: 'string',
            description: 'What is the web link to the piece'
        },
    ]
}