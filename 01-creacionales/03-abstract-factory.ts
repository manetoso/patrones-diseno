/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

interface Burger {
  prepare(): void;
}

interface Drink {
  pour(): void;
}

class ChickenBurger implements Burger {
  prepare(): void {
    console.log("Preparing chicken burger");
  }
}

class BeefBurger implements Burger {
  prepare(): void {
    console.log("Preparing beef burger");
  }
}

class Water implements Drink {
  pour(): void {
    console.log("Preparing glass of water");
  }
}

class Soda implements Drink {
  pour(): void {
    console.log("Preparing refreshing soda");
  }
}

interface RestaurantFactory {
  createBurguer(): Burger;
  createDrink(): Drink;
}

class FastFoodRestaurantFactory implements RestaurantFactory {
  createBurguer(): Burger {
    return new BeefBurger();
  }
  createDrink(): Drink {
    return new Soda();
  }
}

class HealthyRestaurantFactory implements RestaurantFactory {
  createBurguer(): Burger {
    return new ChickenBurger();
  }
  createDrink(): Drink {
    return new Water();
  }
}

function main(factory: RestaurantFactory) {
  const burguer = factory.createBurguer();
  const drink = factory.createDrink();

  burguer.prepare();
  drink.pour();
}

console.log("Restaurant menu: ");
main(new HealthyRestaurantFactory());
