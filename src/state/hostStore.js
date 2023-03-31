import React from 'react';
import { create } from 'zustand';
import routePaths from 'Router/routes';
import produce from 'immer'

const useHostStore = create((set) => ({
    pageTitle: 'Ed Spurrier',
    centerTitle: '',
    noticeTitle: '',

    currentLocation: '',
    
    mainNavigation: {
        links: [
            {
                label: 'Item 1',
                icon: <></>,
                path: routePaths.welcome,
                allowed: true,
            },
            {
                label: 'Item 2',
                icon: <></>,
                path: routePaths.welcome,
                allowed: true,
            }
            
        ]
    },

    verticalNavigation: {
        routeRoot: null,
        links: []
    },

    /*
    Example verticalNav route
        {
            label: 'Control Tower',
            icon: <ShopOutlined />,
            path: routePaths.comingSoon,
            allowed: true,
            replacementParameters: {projectId: 'ca2a1914-a420-4851-80d5-5198e33e22bb'},
        },
    */



    setVerticalNavigation: (routeRoot, links) => {
        produce((state) => {
            state.verticalNavigation.routeRoot = routeRoot,
            state.verticalNavigation.links = links
        })
        set({ verticalNavigation: {
            routeRoot: routeRoot,
            links: links
        }})
    },

    // Clears other nav bar details when new page title is set or use clearAll=false to keep
    setPageTitle: (newPageTitle, clearAll=true) => {
        set({ pageTitle: newPageTitle })
        if (clearAll) {
            set({ centerTitle: '' });
            set({ noticeTitle: '' });
        }
    },

    setCenterTitle: (newCenterTitle) => {
        set({ centerTitle: newCenterTitle })
    },

    setNoticeTitle: (newNoticeTitle) => {
        set({ noticeTitle: newNoticeTitle })
    },


}))

export default useHostStore;