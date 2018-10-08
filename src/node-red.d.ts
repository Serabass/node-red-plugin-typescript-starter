import {Node as INode, NodeId, NodeType} from 'node-red';

declare module 'node-red' {
    export interface IINode extends INode {
        id: NodeId;
        name: string;
        type: NodeType;
    }
}