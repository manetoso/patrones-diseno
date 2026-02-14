/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 */

/**
 * 	!Descripción:
  1.	Completen las clases SalesReport e InventoryReport para implementar 
      la interfaz Report, generando el contenido de cada reporte en el método generate.
	  
  2.	Implementen las clases SalesReportFactory e InventoryReportFactory 
      para crear instancias de SalesReport y InventoryReport, respectivamente.

	3.	Prueben el programa generando diferentes tipos de reportes usando
      el prompt para seleccionar el tipo de reporte.
 */

// 1. Definir la interfaz Report
interface DeliveryPlan {
  generate(): void;
}

// 2. Clases concretas de Reportes
// Implementar SalesReport e InventoryReport

class RoadDeliveryPlan implements DeliveryPlan {
  generate(): void {
    console.log("This is your ROAD delivery plan 🚗");
  }
}

class SeaDeliveryPlan implements DeliveryPlan {
  generate(): void {
    console.log("This is your SEA delivery plan 🛥️");
  }
}

// 3. Clase Base ReportFactory con el Método Factory

abstract class LogisticsFactory {
  protected abstract createDeliveryPlan(): DeliveryPlan;

  generateDeliveryPlan(): void {
    const report = this.createDeliveryPlan();
    report.generate();
  }
}

// 4. Clases Concretas de Fábricas de Reportes

class RoadLogisticsFactory extends LogisticsFactory {
  createDeliveryPlan(): DeliveryPlan {
    return new RoadDeliveryPlan();
  }
}

class SeaLogisticsFactory extends LogisticsFactory {
  createDeliveryPlan(): DeliveryPlan {
    return new SeaDeliveryPlan();
  }
}

// 5. Código Cliente para Probar

function main() {
  let logisticFactory: LogisticsFactory;

  const reportType = prompt("What kind of delivery plan you need? (road/sea)");

  switch (reportType) {
    case "road":
      logisticFactory = new RoadLogisticsFactory();
      break;
    case "sea":
      logisticFactory = new SeaLogisticsFactory();
      break;

    default:
      throw new Error("Not valid option");
  }

  logisticFactory.generateDeliveryPlan();
}

main();
