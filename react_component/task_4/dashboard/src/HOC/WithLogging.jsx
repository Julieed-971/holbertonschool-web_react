import React from "react"

const WithLogging = (WrappedComponent) => {
    class WithLoggingComponent extends React.Component {
        componentDidMount() {
            const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component'
            console.log(`Component ${wrappedComponentName} is mounted`)
        }

        componentWillUnmount() {
            const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component'
            console.log(`Component ${wrappedComponentName} is going to unmount`)
        }
        render() {
            return <WrappedComponent {...this.props} />
        }
    }
    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component'
    WithLoggingComponent.displayName = `WithLogging(${wrappedComponentName})`
    return WithLoggingComponent
}

export default WithLogging