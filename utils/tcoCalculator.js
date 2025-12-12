// ============================================================================
// FILE: utils/tcoCalculator.js
// ============================================================================

// Default values for form inputs
export const DEFAULT_VALUES = {
    dailyRunningKm: 150,
    runningDays: 25,
    electricityRate: 2,
    fuelRate: 10,
    iceMaintenanceCost: 4.2,
    evMaintenanceCost: 1.5,
    iceDepreciationCost: 4,
    evDepreciationCost: 6,
  };
  
  // Calculate monthly costs
  export const calculateMonthlyCosts = (tcoData) => {
    const {
      dailyRunningKm,
      runningDays,
      fuelRate,
      electricityRate,
      iceMaintenanceCost,
      evMaintenanceCost,
      iceDepreciationCost,
      evDepreciationCost,
    } = tcoData;
  
    const monthlyKm = dailyRunningKm * runningDays;
  
    return {
      monthlyRunningCost: {
        text: "Monthly Energy Cost",
        ice: monthlyKm * fuelRate,
        ev: monthlyKm * electricityRate,
      },
      monthlyMaintenanceCost: {
        text: "Monthly Maintenance Cost",
        ice: monthlyKm * iceMaintenanceCost,
        ev: monthlyKm * evMaintenanceCost,
      },
      monthlyDepreciationCost: {
        text: "Monthly Depreciation Cost",
        ice: monthlyKm * iceDepreciationCost,
        ev: monthlyKm * evDepreciationCost,
      },
      monthlyOperatingCost: {
        text: "Monthly Operating Cost",
        ice: monthlyKm * (fuelRate + iceMaintenanceCost),
        ev: monthlyKm * (electricityRate + evMaintenanceCost),
      },
      totalMonthlyCost: {
        text: "Total Monthly Cost",
        ice: monthlyKm * (fuelRate + iceMaintenanceCost + iceDepreciationCost),
        ev: monthlyKm * (electricityRate + evMaintenanceCost + evDepreciationCost),
      },
    };
  };
  
  // Calculate yearly breakdown for table
  export const calculateYearlyBreakdown = (tcoData, years = 5) => {
    const {
      dailyRunningKm,
      runningDays,
      fuelRate,
      electricityRate,
      iceMaintenanceCost,
      evMaintenanceCost,
      iceDepreciationCost,
      evDepreciationCost,
    } = tcoData;
  
    const monthlyKm = dailyRunningKm * runningDays;
    const yearlyKm = monthlyKm * 12;
  
    const evData = [];
    const iceData = [];
  
    for (let year = 1; year <= years; year++) {
      const totalKm = yearlyKm * year;
  
      // EV costs
      const evEnergyCost = totalKm * electricityRate;
      const evMaintenance = totalKm * evMaintenanceCost;
      const evDepreciation = totalKm * evDepreciationCost;
      const evYearlyTotal = evEnergyCost + evMaintenance + evDepreciation;
  
      evData.push({
        year,
        energyCost: evEnergyCost,
        maintenance: evMaintenance,
        depreciation: evDepreciation,
        yearlyTotal: evYearlyTotal,
      });
  
      // ICE costs
      const iceEnergyCost = totalKm * fuelRate;
      const iceMaintenance = totalKm * iceMaintenanceCost;
      const iceDepreciation = totalKm * iceDepreciationCost;
      const iceYearlyTotal = iceEnergyCost + iceMaintenance + iceDepreciation;
  
      iceData.push({
        year,
        energyCost: iceEnergyCost,
        maintenance: iceMaintenance,
        depreciation: iceDepreciation,
        yearlyTotal: iceYearlyTotal,
      });
    }
  
    return { evData, iceData };
  };
  
  // Calculate savings
  export const calculateSavings = (tcoData) => {
    const monthlyCosts = calculateMonthlyCosts(tcoData);
    const { evData, iceData } = calculateYearlyBreakdown(tcoData, 5);
  
    const monthlySavings = monthlyCosts.totalMonthlyCost.ice - monthlyCosts.totalMonthlyCost.ev;
    const oneYearSavings = iceData[0].yearlyTotal - evData[0].yearlyTotal;
    const fiveYearSavings = iceData[4].yearlyTotal - evData[4].yearlyTotal;
  
    return {
      monthly: monthlySavings,
      oneYear: oneYearSavings,
      fiveYear: fiveYearSavings,
    };
  };
  
  // Main function to get all results
  export const getResultData = (tcoData) => {
    const monthlyCosts = calculateMonthlyCosts(tcoData);
    const { evData, iceData } = calculateYearlyBreakdown(tcoData, 5);
    const savings = calculateSavings(tcoData);
  
    return {
      monthlyCosts,
      yearlyBreakdown: { evData, iceData },
      savings,
    };
  };