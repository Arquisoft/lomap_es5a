import Environment from 'jest-environment-jsdom-global';

import util from 'util';

// module.exports = class CustomTestEnvironment extends Environment {
//     constructor({ globalConfig, projectConfig }, context) {
//         super({ globalConfig, projectConfig }, context);
//         if (typeof this.global.TextEncoder === 'undefined') {
//             const { TextEncoder } = util;
//             this.global.TextEncoder = TextEncoder;
//         }
//     }
// };