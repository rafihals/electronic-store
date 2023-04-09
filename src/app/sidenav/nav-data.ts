import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'products',
        icon: 'fal fa-box-open',
        label: 'Products',
        items: [
            {
                routeLink: 'products/level1.1',
                label: 'Device',
                items: [
                    {
                        routeLink: 'products/apple',
                        label: 'Apple',
                    },
                    {
                        routeLink: 'products/android',
                        label: 'Android',
                    },
                    {
                        routeLink: 'products/windows',
                        label: 'Windows',
                    },
                    {
                        routeLink: 'products/level2.2',
                        label: 'EarPhone',
                        items: [
                            {
                                routeLink: 'products/bluetooth',
                                label: 'Blueetoth'
                            },
                            {
                                routeLink: 'products/cable',
                                label: 'Cable'
                            }
                        ]
                    }
                ]
            },
            {
                routeLink: 'products/others',
                label: 'Others',
            }
        ]
    },
    {
        routeLink: 'statistics',
        icon: 'fal fa-chart-bar',
        label: 'Statistics'
    },
    {
        routeLink: 'coupens',
        icon: 'fal fa-tags',
        label: 'Coupens',
        items: [
            {
                routeLink: 'coupens/list',
                label: 'List Coupens'
            },
            {
                routeLink: 'coupens/create',
                label: 'Create Coupens'
            }
        ]
    },
    {
        routeLink: 'pages',
        icon: 'fal fa-file',
        label: 'Pages'
    },
    {
        routeLink: 'media',
        icon: 'fal fa-camera',
        label: 'Media'
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings',
        expanded: true,
        items: [
            {
                routeLink: 'settings/profile',
                label: 'Profile'
            },
            {
                routeLink: 'settings/customize',
                label: 'Customize'
            }
        ]
    },
];