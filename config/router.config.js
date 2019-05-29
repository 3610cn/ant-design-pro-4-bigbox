export default [
  // user
  {
    path: '/pro/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/pro/user', redirect: '/pro/user/login' },
      { path: '/pro/user/login', name: 'login', component: './User/Login' },
      { path: '/pro/user/register', name: 'register', component: './User/Register' },
      {
        path: '/pro/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/pro/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      { path: '/pro/', redirect: '/pro/dashboard/analysis', authority: ['admin', 'user'] },
      {
        path: '/pro/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          {
            path: '/pro/dashboard/analysis',
            name: 'analysis',
            component: './Dashboard/Analysis',
          },
          {
            path: '/pro/dashboard/monitor',
            name: 'monitor',
            component: './Dashboard/Monitor',
          },
          {
            path: '/pro/dashboard/workplace',
            name: 'workplace',
            component: './Dashboard/Workplace',
          },
        ],
      },
      // forms
      {
        path: '/pro/form',
        icon: 'form',
        name: 'form',
        routes: [
          {
            path: '/pro/form/basic-form',
            name: 'basicform',
            component: './Forms/BasicForm',
          },
          {
            path: '/pro/form/step-form',
            name: 'stepform',
            component: './Forms/StepForm',
            hideChildrenInMenu: true,
            routes: [
              {
                path: '/pro/form/step-form',
                redirect: '/pro/form/step-form/info',
              },
              {
                path: '/pro/form/step-form/info',
                name: 'info',
                component: './Forms/StepForm/Step1',
              },
              {
                path: '/pro/form/step-form/confirm',
                name: 'confirm',
                component: './Forms/StepForm/Step2',
              },
              {
                path: '/pro/form/step-form/result',
                name: 'result',
                component: './Forms/StepForm/Step3',
              },
            ],
          },
          {
            path: '/pro/form/advanced-form',
            name: 'advancedform',
            authority: ['admin'],
            component: './Forms/AdvancedForm',
          },
        ],
      },
      // list
      {
        path: '/pro/list',
        icon: 'table',
        name: 'list',
        routes: [
          {
            path: '/pro/list/table-list',
            name: 'searchtable',
            component: './List/TableList',
          },
          {
            path: '/pro/list/basic-list',
            name: 'basiclist',
            component: './List/BasicList',
          },
          {
            path: '/pro/list/card-list',
            name: 'cardlist',
            component: './List/CardList',
          },
          {
            path: '/pro/list/search',
            name: 'searchlist',
            component: './List/List',
            routes: [
              {
                path: '/pro/list/search',
                redirect: '/pro/list/search/articles',
              },
              {
                path: '/pro/list/search/articles',
                name: 'articles',
                component: './List/Articles',
              },
              {
                path: '/pro/list/search/projects',
                name: 'projects',
                component: './List/Projects',
              },
              {
                path: '/pro/list/search/applications',
                name: 'applications',
                component: './List/Applications',
              },
            ],
          },
        ],
      },
      {
        path: '/pro/profile',
        name: 'profile',
        icon: 'profile',
        routes: [
          // profile
          {
            path: '/pro/profile/basic',
            name: 'basic',
            component: './Profile/BasicProfile',
          },
          {
            path: '/pro/profile/basic/:id',
            hideInMenu: true,
            component: './Profile/BasicProfile',
          },
          {
            path: '/pro/profile/advanced',
            name: 'advanced',
            authority: ['admin'],
            component: './Profile/AdvancedProfile',
          },
        ],
      },
      {
        name: 'result',
        icon: 'check-circle-o',
        path: '/pro/result',
        routes: [
          // result
          {
            path: '/pro/result/success',
            name: 'success',
            component: './Result/Success',
          },
          { path: '/pro/result/fail', name: 'fail', component: './Result/Error' },
        ],
      },
      {
        name: 'exception',
        icon: 'warning',
        path: '/pro/exception',
        routes: [
          // exception
          {
            path: '/pro/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/pro/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/pro/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/pro/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
        ],
      },
      {
        name: 'account',
        icon: 'user',
        path: '/pro/account',
        routes: [
          {
            path: '/pro/account/center',
            name: 'center',
            component: './Account/Center/Center',
            routes: [
              {
                path: '/pro/account/center',
                redirect: '/pro/account/center/articles',
              },
              {
                path: '/pro/account/center/articles',
                component: './Account/Center/Articles',
              },
              {
                path: '/pro/account/center/applications',
                component: './Account/Center/Applications',
              },
              {
                path: '/pro/account/center/projects',
                component: './Account/Center/Projects',
              },
            ],
          },
          {
            path: '/pro/account/settings',
            name: 'settings',
            component: './Account/Settings/Info',
            routes: [
              {
                path: '/pro/account/settings',
                redirect: '/pro/account/settings/base',
              },
              {
                path: '/pro/account/settings/base',
                component: './Account/Settings/BaseView',
              },
              {
                path: '/pro/account/settings/security',
                component: './Account/Settings/SecurityView',
              },
              {
                path: '/pro/account/settings/binding',
                component: './Account/Settings/BindingView',
              },
              {
                path: '/pro/account/settings/notification',
                component: './Account/Settings/NotificationView',
              },
            ],
          },
        ],
      },
      //  editor
      {
        name: 'editor',
        icon: 'highlight',
        path: '/pro/editor',
        routes: [
          {
            path: '/pro/editor/flow',
            name: 'flow',
            component: './Editor/GGEditor/Flow',
          },
          {
            path: '/pro/editor/mind',
            name: 'mind',
            component: './Editor/GGEditor/Mind',
          },
          {
            path: '/pro/editor/koni',
            name: 'koni',
            component: './Editor/GGEditor/Koni',
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
