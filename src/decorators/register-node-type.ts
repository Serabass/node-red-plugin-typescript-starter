export function registerNodeType(RED: any) {
    return (name: string, ...args: any[]) => {
        return (obj: any) => {
            RED.nodes.registerType(name, obj, ...args);
        }
    }
}
