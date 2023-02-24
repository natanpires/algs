export class Vector {
  #value: number[];

  constructor(components: number[]) {
    this.#value = components;
  }
  
  get value() { return this.#value }
  
  #validateLength = (array: number[]) => {
    if (this.value.length !== array.length)
      throw new Error('');
  }
  
  add = (vector: Vector): Vector => {
    const value: number[] = [];
    this.#validateLength(vector.value);
    this.value.map((e, i) => value.push(e + vector.value[i]));
    return new Vector(value);
  }
  
  subtract = (vector: Vector): Vector => {
    const value: number[] = [];
    this.#validateLength(vector.value);
    this.value.map((e, i) => value.push(e - vector.value[i]));
    return new Vector(value);
  }
  
  dot = (vector: Vector): number => {
    this.#validateLength(vector.value);
    return vector.value.reduce((acc, cur, i) => acc + cur * this.value[i], 0);
  }
  
  norm = (): number => Math.sqrt(this.value.reduce((acc, cur) => acc + Math.pow(cur, 2), 0));
  
  toString = () => `(${this.value.join(',')})`;
  
  equals = (vector: Vector): boolean => this.value.some((e, i) => vector.value[i] === e);
}
