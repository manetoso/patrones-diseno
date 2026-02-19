/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

import { COLORS } from "../helpers/colors.ts";

class DragonBalls {
  static instance: DragonBalls;
  private ballsCollected: number;

  private constructor() {
    this.ballsCollected = 0;
  }

  public static getInstace(): DragonBalls {
    if (!DragonBalls.instance) {
      DragonBalls.instance = new DragonBalls();
      console.log("%cDragonBalls created", COLORS.green);
    }

    return DragonBalls.instance;
  }

  collectBall(): void {
    if (this.ballsCollected < 7) {
      this.ballsCollected++;
      console.log(`Ball colected, total of balls: ${this.ballsCollected}`);
      return;
    }

    console.log("Already collected the 7 balls, invoke Shenlong");
  }

  summonShenlong(): void {
    if (this.ballsCollected === 7) {
      console.log("%cShenlong summoned, make your wish", COLORS.green);
      this.ballsCollected = 0;
      return;
    }
    console.log(
      `%cYou need ${7 - this.ballsCollected} more ball/s to summon ShenLong`,
      COLORS.red,
    );
  }
}

function main() {
  const gokuDragonBalls = DragonBalls.getInstace();

  gokuDragonBalls.collectBall();
  gokuDragonBalls.collectBall();
  gokuDragonBalls.collectBall();

  gokuDragonBalls.summonShenlong();

  const vegetaDragonBalls = DragonBalls.getInstace();
  vegetaDragonBalls.collectBall();
  vegetaDragonBalls.collectBall();
  vegetaDragonBalls.collectBall();
  vegetaDragonBalls.collectBall();

  gokuDragonBalls.summonShenlong();
}

main();
