import {ClearNodeStatus, Node, NodeId, NodeStatus, NodeType} from 'node-red';

export abstract class NodeBase implements Node {
    public id: NodeId;
    public name: string;
    public type: NodeType;
    public addListener: (event: string | symbol, listener: (...args: any[]) => void) => this;
    public close: (removed: any) => void;
    public context: () => any;
    public debug: (msg: any) => void;
    public emit: (event: string | symbol, ...args: any[]) => boolean;
    public error: (logMessage: any, msg?: any) => void;
    public eventNames: () => (string | symbol)[];
    public getMaxListeners: () => number;
    public listenerCount: (type: string | symbol) => number;
    public listeners: (event: string | symbol) => Function[];
    public log: (msg: any) => void;
    public metric: (eventname?: any, msg?: any, metricValue?: any) => void;
    public on: (event: string | symbol, listener: (...args: any[]) => void) => this;
    public once: (event: string | symbol, listener: (...args: any[]) => void) => this;
    public prependListener: (event: string | symbol, listener: (...args: any[]) => void) => this;
    public prependOnceListener: (event: string | symbol, listener: (...args: any[]) => void) => this;
    public receive: (msg: any) => void;
    public removeAllListeners: (event?: string | symbol) => this;
    public removeListener: (event: string | symbol, listener: (...args: any[]) => void) => this;
    public send: (msg?: any[] | any) => void;
    public setMaxListeners: (n: number) => this;
    public status: (status: NodeStatus | ClearNodeStatus) => void;
    public trace: (msg: any) => void;
    public updateWires: (wires: any) => void;
    public warn: (msg: any) => void;

    protected constructor(public config: any, RED: any) {
        RED.nodes.createNode(this, config);

        this.init();
    }

    protected abstract init();
}
