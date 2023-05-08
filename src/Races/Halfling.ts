import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _createdHalfingInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._createdHalfingInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._createdHalfingInstances;
  }
}

export default Halfling;
