import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FeaturedProduct } from "@/types/data"

export function FeaturedProductCard({data}:{data:FeaturedProduct}) {
    const {image,name,rating,price_was,price_now,status}=data;
    console.log(image,name,rating,price_was,price_now,status)
  return (
    <Card className="w-[278px] bg-transparent">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
