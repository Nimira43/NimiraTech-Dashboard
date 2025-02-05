import DashboardCard from '@/components/dashboard/DashboardCard'
import TicketsTable from '@/components/tickets/TicketsTable'
import { Ticket, Folder, UserRound, TriangleAlert } from 'lucide-react'

export default function Home() {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between gap-5 mb-5'>
        <DashboardCard
          title='Tickets'
          count={27}
          icon={<Ticket className='text-[#111]' size={72} />}
         />
        <DashboardCard
          title='Categories'
          count={15}
          icon={<Folder className='text-[#111]' size={72} />}
         />
        <DashboardCard
          title='Users'
          count={76}
          icon={<UserRound className='text-[#111]' size={72} />}
         />
        <DashboardCard
          title='Alerts'
          count={38}
          icon={<TriangleAlert className='text-[#111]' size={72} />}
         />
      </div>
      <TicketsTable title='Latest Tickets'/>
    </>
  )
}
