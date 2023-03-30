import React from 'react';
import { create } from 'zustand';
import { CodepenOutlined, ProfileOutlined, ShopOutlined } from 'slaydtheme';
import routePaths from '../Router/routePaths';
import produce from 'immer'

const useHostStore = create((set) => ({
    pageTitle: 'Ark',
    centerTitle: '',
    noticeTitle: '',

    currentProjectId: localStorage.getItem('currentProjectId'),
    currentLocation: '',
    
    mainNavigation: {
        links: [
            {
                label: 'Item 1',
                icon: <ProfileOutlined />,
                path: routePaths.portfolio + '/dashboard',
                allowed: true,
            },
            {
                label: 'Configurator',
                icon: <CodepenOutlined />,
                path: routePaths.configure,
                allowed: localStorage.getItem('currentProjectId'),
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

    setCurrentProjectId: (newCurrentProjectId) => {
        set({ currentProjectId: newCurrentProjectId });
        localStorage.setItem('currentProjectId',newCurrentProjectId);
    }
}))

export default useHostStore;