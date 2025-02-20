import { ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"


export const SearchBar = () => {
    return (
        <>
            <div className="flex shadow-lg mt-5">
                <Input placeholder="Search for any IP address or domain" className="rounded-r-none bg-white text-black" />
                <Button type="button" className="rounded-l-none"><ChevronRight /></Button>
            </div>
        </>
    )
}