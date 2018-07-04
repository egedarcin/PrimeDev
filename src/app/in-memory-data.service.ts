import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', ability: 'Nicest guy on earth, with body of Hercules.' },
      { id: 12, name: 'Narco' , ability: 'Catches criminals via overdosing' },
      { id: 13, name: 'Bombasto' , ability: 'Explosive mucus' },
      { id: 14, name: 'Celeritas' , ability: 'Swiftness +100'},
      { id: 15, name: 'Magneta' , ability: 'Can manipulate magnetic fields, has magenta armor.'},
      { id: 16, name: 'RubberMan' , ability: 'A Pirate with rubber body.'},
      { id: 17, name: 'Dynama' , ability: 'Generate electricity from armpits.'},
      { id: 18, name: 'Dr IQ' , ability: 'Alakazam'},
      { id: 19, name: 'Magma' , ability: 'Lava Bending'},
      { id: 20, name: 'Tornado' , ability: 'Air bending' }
    ];
    return {heroes};
  }
}
