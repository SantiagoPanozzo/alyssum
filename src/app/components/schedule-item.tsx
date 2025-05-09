import { Clock, MapPin, User } from "lucide-react"

interface ScheduleItemProps {
  time: string
  title: string
  speaker: string
  location: string
}

export default function ScheduleItem({ time, title, speaker, location }: ScheduleItemProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 rounded-lg border border-slate-300 bg-background hover:bg-muted/50 shadow-lg transition duration-300 hover:shadow-lg hover:shadow-indigo-300 ">
      <div className="md:w-1/4 font-medium flex items-center">
        <Clock className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
        {time}
      </div>
      <div className="md:w-3/4">
        <h4 className="font-bold text-lg">{title}</h4>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1 flex-shrink-0" />
            {speaker}
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            {location}
          </div>
        </div>
      </div>
    </div>
  )
}

