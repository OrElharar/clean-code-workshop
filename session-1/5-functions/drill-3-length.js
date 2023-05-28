//Drill: Refactoring a Long Function
//
// Instructions:
//
// Review the implementation of a long function called processData.
// Analyze the logic within the processData function and identify opportunities to divide the logic into smaller,
// more focused functions.
// Determine which parts of the code can be extracted into separate functions to improve readability, maintainability,
// and adherence to the Single Responsibility Principle (SRP).
// Refactor the processData function by extracting the identified parts into separate functions.
// Discuss the benefits of the refactored code, such as improved readability, modularity, and testability.

class Employee {
    constructor(name, baseSalary, yearsOfService, performanceRating) {
        this.name = name;
        this.baseSalary = baseSalary;
        this.yearsOfService = yearsOfService;
        this.performanceRating = performanceRating;
    }
}

function getBonusByPerformanceRate(baseSalary, performanceRating) {
    let bonus = 0;
    if (performanceRating === "Excellent") {
        bonus = baseSalary * 0.2;
    } else if (performanceRating === "Good") {
        bonus = baseSalary * 0.1;
    } else {
        bonus = baseSalary * 0.05;
    }
    return bonus;
}

function getAdditionalBonusBySeniority(baseSalary, yearsOfService) {
    const yearsThreshold = 5;
    const additionalBonusMultiplier = 0.1;
    return yearsOfService > yearsThreshold ? baseSalary * additionalBonusMultiplier : 0;
}

function getCalculatedNetSalary({ baseSalary, bonus }) {
    const taxRate = 0.2;

    const totalSalary = baseSalary + bonus;
    const taxAmount = totalSalary * taxRate;
    const netSalary = totalSalary - taxAmount;

    return netSalary;
}
function getSalary(employee) {
    const bonus = getBonusByPerformanceRate(employee.baseSalary, employee.performanceRating);
    const additionalBonus = getAdditionalBonusBySeniority(employee.baseSalary, employee.yearsOfService);
    return getCalculatedNetSalary({ baseSalary: employee.baseSalary, bonus: bonus + additionalBonus });
}
