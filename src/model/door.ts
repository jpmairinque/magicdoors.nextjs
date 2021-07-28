class DoorModel {

  #number: number;
  #gotGift: boolean;
  #selected: boolean;
  #open: boolean;

  constructor(number: number, gotGift = false, selected = false, open = false) {
    this.#number = number;
    this.#gotGift = gotGift;
    this.#selected = selected;
    this.#open = open;
  }

  get number() {
    return this.#number;
  }
  get gotGift() {
    return this.#gotGift;
  }
  get selected() {
    return this.#selected;
  }
  get open() {
    return this.#open;
  }

  toggleSelect() {
    const selected = !this.selected;
    return new DoorModel(this.number, this.#gotGift, selected, this.open);
  }
  openDoor() {
    const open = true;
    return new DoorModel(this.number, this.#gotGift, this.selected, open);
  }
}

export default DoorModel
