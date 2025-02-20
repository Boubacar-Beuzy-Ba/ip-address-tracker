"use client"
import { ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { z } from "zod"
import {  useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";


export type IpInputProps = {
    onSearch: (ip: string) => void
}


const formSchema = z.object({
    ipInput: z.string().min(1, {
        message: "Please enter a valid IP address"
    }).max(100, {
        message: "Please enter a valid IP address"
    }),
})

export const SearchBar = ({ onSearch }: IpInputProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            ipInput: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        onSearch(values.ipInput)
    } 
        
    return (
      <>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex mt-5 w-full"
            >
              <FormField
                control={form.control}
                name="ipInput"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Search for any IP address or domain"
                        {...field}
                        className="rounded-r-none bg-white text-black"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" className="rounded-l-none">
                <ChevronRight />
              </Button>
            </form>
          </Form>
      </>
    );
}