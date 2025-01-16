import { Star, GitFork, Eye, AlertCircle, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { toast, ToastContainer } from 'react-toastify';

export function GitHubRepoSection({
  name,
  description,
  stargazers_count,
  forks,
  watchers,
  open_issues,
  language,
  updated_at
}) {

    const extractDate = updated_at?.match(/^(\d{4})-(\d{2})-(\d{2})/);
    const [_, year, month, day] = extractDate;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const new_updated_at = `${parseInt(day)} ${months[parseInt(month) - 1]}, ${year}`;

  return (
    <Card className="w-full mx-auto mb-3 max-w-3xl">
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle className="text-2xl">{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className="flex items-center space-x-1">
          <Button variant="secondary" className="px-3 shadow-none" disabled={true}>
            <Star className="mr-1 h-4 w-4"/>
            Star
          </Button>
          <Separator orientation="vertical" className="h-[20px]" />
          <DropdownMenu disabled={true} >
            <DropdownMenuTrigger asChild>
              <Button disabled={true} variant="secondary" size="icon" className="px-0 shadow-none h-8 w-8">
                <ChevronDown className="h-4 w-4" />
                
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" alignOffset={-5} className="w-[200px]">
              <DropdownMenuLabel>Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Watch</DropdownMenuItem>
              <DropdownMenuItem>Fork</DropdownMenuItem>
              <DropdownMenuItem>Copy URL</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <div className="mr-1 h-3 w-3 rounded-full bg-yellow-400"></div>
            {language}
          </div>
          <div className="flex items-center">
            <Star className="mr-1 h-4 w-4" />
            {stargazers_count?.toLocaleString()}
          </div>
          <div className="flex items-center">
            <GitFork className="mr-1 h-4 w-4" />
            {forks?.toLocaleString()}
          </div>
          <div className="flex items-center">
            <Eye className="mr-1 h-4 w-4" />
            {watchers?.toLocaleString()}
          </div>
          <div className="flex items-center">
            <AlertCircle className="mr-1 h-4 w-4" />
            {open_issues?.toLocaleString()}
          </div>
          <div className="flex items-center">
            <span className="font-medium mr-1">Updated:</span>
            {new_updated_at}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

