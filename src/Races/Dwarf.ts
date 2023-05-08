import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _createdDwarfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._createdDwarfInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._createdDwarfInstances;
  }
}

export default Dwarf;
