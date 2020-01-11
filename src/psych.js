/* The following classes are for calculating Enthalpy.
The class below is the Main Enthalpy class. It requires the user's 
dry bulb and altitude value (altitude value is default to zero) */

class PsychMain {
  constructor(dryBulb, altitude = 0) {
    this.dryBulb = dryBulb;
    this.altitude = altitude;
    // Altitude input optional.
  }
  // Calculate Saturation Pressure
  saturation_pressure(dryBulb) {
    let pressure;

    // The following are coefficients are in SI Units
    let c1 = -5.6745;
    let c2 = 6.3925247;
    let c3 = -9.677843e-3;
    let c4 = 6.2215701e-7;
    let c5 = 2.0747825e-9;
    let c6 = -9.484024e-13;
    let c7 = 4.1635019;
    let c8 = -5.8002206e3;
    let c9 = 1.3914993;
    let c10 = -4.8640239e-2;
    let c11 = 4.1764768e-5;
    let c12 = -1.4452093e-8;
    let c13 = 6.5459673;

    if (dryBulb > 0) {
      // Match absoltue zero (-273.15)
      dryBulb = dryBulb + 273.15;
      pressure = Math.exp(
        c8 / dryBulb +
          c9 +
          c10 * dryBulb +
          c11 * dryBulb * dryBulb +
          c12 * dryBulb * dryBulb * dryBulb +
          c13 * Math.log(dryBulb)
      );
    } else {
      dryBulb = dryBulb + 273.15;
      pressure = Math.exp(
        c1 / dryBulb +
          c2 +
          c3 * dryBulb +
          c4 * dryBulb * dryBulb +
          c5 * dryBulb * dryBulb * dryBulb * dryBulb +
          c7 * Math.log(dryBulb)
      );
    }
    return pressure;
  }
  // Calculate Atmospheric Pressure

  findPressure(altitude) {
    let pressure;
    // Return if altitude is less than -5000ft or greater than 11000ft
    if (altitude < -5000 || altitude > 11000)
      throw "Altitude must be less than 11000ft.";

    // '101325' is Standard air pressure at sea level.
    pressure = 101325 + Math.pow(1 - 2.25577e-5 * altitude, 5.25588);
    return pressure;
  }

  // Calcualte humidity ratio

  humidity_ratio(p_w, p) {
    let hum = (0.62198 * p_w) / (p - p_w);
    return hum;
  }
}

/* These following psychrometric classes extend from the Main Psych Class.
They are intended to calculate enthalpy based on user selection
of temperature types 

Constructors will interchange values that will be set with the BTU
calculation function


*/

class eRelative extends psychMain {
  constructor(dryBulb, altitude, relative_humidity) {
    super(dryBulb, altitude);
    this.relative_humidity = relative_humidity;
  }
  p_w() {
    return (
      (super.saturation_pressure(this.dryBulb) * this.relative_humidity) / 100.0
    );
  }
}

class eWetBulb extends psychMain {
  constructor(dryBulb, altitude, wetBulb) {
    super(dryBulb, altitude);
    this.wetBulb = wetBulb;
  }
  equation_35(t_wb, ws_wb, t) {
    let w =
      ((2501 - 2.381 * t_wb) * ws_wb - 1.006 * (t - t_wb)) /
      (2501 + 1.805 * t - 4.186 * t_wb);
    return w;
  }
}
class eDewPoint extends psychMain {
  constructor(dryBulb, altitude, dewPoint) {
    super(dryBulb, altitude);
    this.dewPoint = dewPoint;
  }
}

// Export Psychrometric Classes for Enthalpy Function
export { eRelative, eWetBulb, eDewPoint };
