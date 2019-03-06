'use strict'

import logger from './use.js';
let data = {
    name : 'alireza',
    family : 'shahabi'
}
logger.success(data);
logger.warning('just a text')
logger.error([1,2,'s']);
logger.info(2/3);
// logger.success()