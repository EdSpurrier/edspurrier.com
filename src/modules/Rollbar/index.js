import React from 'react'
import { Provider, ErrorBoundary } from '@rollbar/react'; // Provider imports 'rollbar'

const rollbarConfig = {
    accessToken: 'cee20e59fa9048afb9ae2ab79a1eafb5',
    environment: 'testenv',
};

const Rollbar = ({children, active=true}) => {
    return (
        active?
        <Provider config={rollbarConfig}>
            <ErrorBoundary>
                {children}
            </ErrorBoundary>
        </Provider>:
        <>{children}</>
    )
}

export default Rollbar