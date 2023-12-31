import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _createdElfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._createdElfInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._createdElfInstances;
  }
}

export default Elf;
