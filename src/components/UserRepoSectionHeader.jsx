import { useState } from 'react'
import { Search, SortAsc, SortDesc } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function RepositorySectionHeader({ onSearch, onSort, totalCount }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOption, setSortOption] = useState('stars')
  const [sortDirection, setSortDirection] = useState('desc')

  const handleSearch = () => {
    onSearch(searchQuery)
  }

  const handleSort = (option) => {
    setSortOption(option)
    onSort(option, sortDirection)
  }

  const toggleSortDirection = () => {
    const newDirection = sortDirection === 'asc' ? 'desc' : 'asc'
    setSortDirection(newDirection)
    onSort(sortOption, newDirection)
  }

  return (
    <div className="w-full mx-auto max-w-3xl mb-4 space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 flex gap-2">
          <Input
            type="text"
            placeholder="Search repositories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="flex-1"
          />
          <Button onClick={handleSearch}>
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
        <div className="flex gap-2">
          <Select value={sortOption} onValueChange={handleSort}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="stars">Stars</SelectItem>
              <SelectItem value="forks">Forks</SelectItem>
              <SelectItem value="updated">Last updated</SelectItem>
              <SelectItem value="name">Name</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" onClick={toggleSortDirection}>
            {sortDirection === 'asc' ? (
              <SortAsc className="h-4 w-4" />
            ) : (
              <SortDesc className="h-4 w-4" />
            )}
            <span className="sr-only">
              Sort {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
            </span>
          </Button>
        </div>
      </div>
      <div className="text-sm text-muted-foreground">
        Total repositories: <span className="font-medium">{totalCount}</span>
      </div>
    </div>
  )
}

