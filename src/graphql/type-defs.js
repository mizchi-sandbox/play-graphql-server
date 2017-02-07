/* @flow */
import fs from 'fs';
const schema = fs.readFileSync(__dirname + "/schema.graphql").toString()
module.exports = [schema]
