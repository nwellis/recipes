export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f823c47f2fb3ecfa3d43193',
                  title: 'Sanity Studio',
                  name: 'recipes-studio',
                  apiId: '09b3069a-7705-42a3-9b08-a880f7e32cd4'
                },
                {
                  buildHookId: '5f823c479559f9cff11b59fe',
                  title: 'Blog Website',
                  name: 'recipes-web',
                  apiId: '3ccd7e11-2ee3-49d5-bfe7-cacaa839e1a2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nwellis/recipes',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://recipes-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
