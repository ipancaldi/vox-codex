import { collection, config, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: { name: 'VOX Holloway CMS' },
  },
  collections: {
    events: collection({
      label: 'Events',
      slugField: 'title',
      path: 'src/content/events/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date' }),
        time: fields.text({ label: 'Time' }),
        venue: fields.text({ label: 'Venue' }),
        image: fields.image({
          label: 'Image',
          directory: 'public/images/events',
          publicPath: '/images/events/',
        }),
        summary: fields.text({ label: 'Short summary', multiline: true }),
        ticketUrl: fields.url({ label: 'Ticket link' }),
        featured: fields.checkbox({ label: 'Feature on homepage' }),
        status: fields.select({
          label: 'Status',
          options: [
            { label: 'Upcoming', value: 'upcoming' },
            { label: 'Past', value: 'past' },
          ],
          defaultValue: 'upcoming',
        }),
        body: fields.markdoc({ label: 'Full event description' }),
      },
    }),
    merch: collection({
      label: 'Merch',
      slugField: 'title',
      path: 'src/content/merch/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Product name' } }),
        price: fields.text({ label: 'Price' }),
        image: fields.image({
          label: 'Product image',
          directory: 'public/images/merch',
          publicPath: '/images/merch/',
        }),
        summary: fields.text({ label: 'Short summary', multiline: true }),
        stripeUrl: fields.url({ label: 'Stripe payment link' }),
        available: fields.checkbox({ label: 'Available', defaultValue: true }),
        body: fields.markdoc({ label: 'Product details' }),
      },
    }),
    stories: collection({
      label: 'Choir stories',
      slugField: 'name',
      path: 'src/content/stories/*',
      format: { contentField: 'body' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        role: fields.text({ label: 'Choir role or voice part' }),
        quote: fields.text({ label: 'Quote', multiline: true }),
        image: fields.image({
          label: 'Image',
          directory: 'public/images/stories',
          publicPath: '/images/stories/',
        }),
        body: fields.markdoc({ label: 'Story' }),
      },
    }),
  },
});
