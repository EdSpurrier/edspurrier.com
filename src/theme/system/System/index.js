import React from 'react'
import AppName from '../AppName'
import Console from '../Console'



const System = ({ active, devMode, appName, testComponents=null }) => {
    return (
        active && <>
            {devMode && <>
                <Console testComponents={testComponents} />
                {appName && <AppName appName={appName} />}
            </>}
        </>
    )
}

export default System