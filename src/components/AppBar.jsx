import { RiSearch2Line } from "react-icons/ri"; 

const AppBar = () => {
  return (
    <div className="flex justify-between items-center mt-11 px-5">
        <div>Digitize</div>
        <div className="text-2xl font-bold text-slate-900">ساعت هوشمند</div>
        <RiSearch2Line className="rounded bg-slate-100 w-4 h-4 shadow-md" />
    </div>
  )
}

export default AppBar