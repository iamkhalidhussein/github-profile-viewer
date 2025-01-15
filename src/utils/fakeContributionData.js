export function generateFakeContributionData(years) {
    const data = [];
    const now = new Date();
    const startDate = new Date(now.getFullYear() - years + 1, 0, 1);
    
    for (let d = new Date(startDate); d <= now; d.setDate(d.getDate() + 1)) {
      const count = Math.floor(Math.random() * 10);
      data.push({ date: new Date(d), count });
    }
    
    return data;
};

export function getYearTotalContributions(data, year) {
    return data
      .filter(day => day.date.getFullYear() === year)
      .reduce((total, day) => total + day.count, 0);
};