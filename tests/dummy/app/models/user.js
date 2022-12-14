import Model, { attr } from '@ember-data/model';

export default class User extends Model {
  @attr('string')
  firstName;

  @attr('string')
  lastName;

  @attr('string')
  company;

  @attr('string')
  address;

  @attr('string')
  country;

  @attr('string')
  state;

  @attr('string')
  email;

  @attr('string')
  username;

  @attr('string')
  avatar;

  @attr('string')
  bio;

  @attr('string')
  color;
}
