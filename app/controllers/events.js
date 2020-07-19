import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class EventsController extends Controller {
  @tracked count = this.model.listOfSessions.length;

  get numberOfSessions() {
    return this.count;
  }
}
