import {Mongo} from 'meteor/mongo'

const Buildings = new Mongo.Collection('buildings');
const Hours = new Mongo.Collection('hours');
const Templates = new Mongo.Collection('templates');

export {Buildings, Hours, Templates};
