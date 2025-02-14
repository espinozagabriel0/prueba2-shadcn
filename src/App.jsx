import './App.css'
import { Button } from './components/ui/button'
import { Calendar } from './components/ui/calendar'
import { Checkbox } from './components/ui/checkbox'
import { Switch } from './components/ui/switch'
import { Table, TableCaption, TableHead, TableHeader, TableRow, TableBody, TableCell} from './components/ui/table'


function App() {
  return (
    <>
    <div className="container border mx-auto">
      <h1 className='text-4xl text-center'>Proyecto</h1>
      <div className='flex justify-center p-5'>
        <Calendar/>
        <Button className="">Hola</Button>
        <Checkbox/>
      </div>

      <div>
      <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Switch/>
      </div>

    </div>
    </>
  )
}

export default App
