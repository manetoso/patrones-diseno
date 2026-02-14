/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from "../helpers/colors.ts";

class Computer {
  public cpu: string = "CPU - not defined";
  public ram: string = "RAM - not defined";
  public storage: string = "Storage - not defined";
  public gpu?: string = "GPU - not defined";

  displayConfiguration() {
    console.log(`Configuración de la computadora:
        CPU: ${this.cpu}
        RAM: ${this.ram}
        Storage: ${this.storage}
        GPU: ${this.gpu}
    `);
  }
}

class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;

    return this;
  }

  setRAM(ram: string): ComputerBuilder {
    this.computer.ram = ram;

    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;

    return this;
  }

  setGPU(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;

    return this;
  }

  build() {
    return this.computer;
  }
}

function main() {
  const basicComputer = new ComputerBuilder()
    .setCPU("Inter Core 2 duo")
    .setRAM("4 GB")
    .setStorage("256 GB")
    .build();

  console.log("%cComputadora básica", COLORS.pink);
  basicComputer.displayConfiguration();

  const gamingComputer = new ComputerBuilder()
    .setCPU("AMD Ryzen 7")
    .setRAM("64 GB")
    .setStorage("4 TB")
    .setGPU("Gforce RTX 5080")
    .build();

  console.log("%cComputadora gamer", COLORS.violet);
  gamingComputer.displayConfiguration();
}

main();
