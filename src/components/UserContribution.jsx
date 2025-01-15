import React, { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { generateFakeContributionData, getYearTotalContributions } from '@/utils/fakeContributionData'

const colorLevels = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function getColorLevel(count) {
  if (count === 0) return colorLevels[0]
  if (count < 5) return colorLevels[1]
  if (count < 10) return colorLevels[2]
  if (count < 15) return colorLevels[3]
  return colorLevels[4]
}

export function GitHubContributions() {
  const [contributionData] = useState(() => generateFakeContributionData(3))
  const [hoveredDay, setHoveredDay] = useState(null)
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(contributionData.map(d => d.date.getFullYear())))
    return uniqueYears.sort((a, b) => b - a)
  }, [contributionData])

  const filteredData = useMemo(() => {
    const startDate = new Date(selectedYear, 0, 1)
    const endDate = new Date(selectedYear, 11, 31)
    const days = []

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const existingDay = contributionData.find(
        day => day.date.toDateString() === d.toDateString()
      )
      days.push(existingDay || { date: new Date(d), count: 0 })
    }

    return days
  }, [contributionData, selectedYear])

  const weeks = useMemo(() => {
    const result = []
    for (let i = 0; i < filteredData.length; i += 7) {
      result.push(filteredData.slice(i, i + 7))
    }
    return result
  }, [filteredData])

  const totalContributions = useMemo(() => {
    return getYearTotalContributions(contributionData, selectedYear)
  }, [contributionData, selectedYear])

  return (
    <Card className="w-full mt-10 mx-auto max-w-4xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Contributions</CardTitle>
        <Select value={selectedYear.toString()} onValueChange={(value) => setSelectedYear(Number(value))}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select year" />
          </SelectTrigger>
          <SelectContent>
            {years.map(year => (
              <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <svg width={weeks.length * 14 + 30} height={(7 * 13) + 30} className="text-xs">
            {/* Month names */}
            {monthNames.map((month, index) => (
              <text
                key={month}
                x={index * 4.3 * 14 + 30}
                y="10"
                fontSize="12"
                fill="currentColor"
              >
                {month}
              </text>
            ))}
            {/* Contribution squares */}
            {weeks.map((week, weekIndex) => (
              <g key={weekIndex} transform={`translate(${weekIndex * 14 + 30}, 30)`}>
                {week.map((day, dayIndex) => (
                  <TooltipProvider key={dayIndex}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <rect
                          width="10"
                          height="10"
                          x="0"
                          y={dayIndex * 13}
                          rx="2"
                          ry="2"
                          fill={getColorLevel(day.count)}
                          onMouseEnter={() => setHoveredDay(day)}
                          onMouseLeave={() => setHoveredDay(null)}
                          className="transition-colors duration-300"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{day.count} contributions on {day.date.toDateString()}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </g>
            ))}
          </svg>
        </div>
        <div className="mt-4 flex justify-between items-center text-sm">
          <div>
            <strong>{totalContributions} contributions</strong> in {selectedYear}
          </div>
          {hoveredDay && (
            <div>
              <strong>{hoveredDay.count} contributions</strong> on {hoveredDay.date.toDateString()}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

