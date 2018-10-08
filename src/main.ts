import {registerNodeType} from './decorators/register-node-type';
import {NodeBase} from './NodeBase';

export = function(RED: any) {
    'use strict';
    // require any external libraries we may need....
    //var foo = require("foo-library");

    @registerNodeType(RED)('lower-case')
    class Sa extends NodeBase {

        public topic: any;

        constructor(config: any) {
            super(config, RED);
        }

        protected init() {
            // Store local copies of the node configuration (as defined in the .html)
            this.topic = this.config.topic;

            // Do whatever you need to do in here - declare callbacks etc
            // Note: this sample doesn't do anything much - it will only send
            // this message once at startup...
            // Look at other real nodes for some better ideas of what to do....
            const msg: any = {
                topic: this.topic,
                payload: 'Hello world !'
            };

            // send out the message to the rest of the workspace.
            // ... this message will get sent at startup so you may not see it in a debug node.
            this.send(msg);
            this.attachEvents();
        }

        protected attachEvents() {
            // respond to inputs....
            this.on('input', (msg: any) => {
                this.warn(`I saw a payload1231323: ${msg.payload}`);
                // in this example just send it straight on... should process it here really
                this.send(msg);
            });

            this.on('close', () => {
                // Called when the node is shutdown - eg on redeploy.
                // Allows ports to be closed, connections dropped etc.
                // eg: node.client.disconnect();
            });
        }

    }

    exports.Sa = Sa;
};
