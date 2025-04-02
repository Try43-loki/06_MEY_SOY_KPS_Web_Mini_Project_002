// "use client";
// import * as React from "react";
// import { useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Clock4Icon, Ellipsis } from "lucide-react";

// function CardTaskComponent() {
//   const [selectedValue, setSelectedValue] = useState("not_started");
//   return (
//     <Card className="">
//       <CardHeader>
//         <article className="flex justify-between">
//           <CardTitle>Create project</CardTitle>
//           <Ellipsis className="cursor-pointer items-start" />
//         </article>
//         <CardDescription className="text-gray-500 font-normal">
//           Deploy your new project in one-click.
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         {/* type */}
//         <div className="w-full flex justify-between items-center">
//           <span className="text-sm text-purple-600 bg-purple-200 rounded-md px-2 py-1">
//             Development
//           </span>
//           {/* status */}
//           <span
//             className={`h-8 w-8 rounded-full ${
//               selectedValue === "not_started"
//                 ? "bg-watermelon-red "
//                 : selectedValue === "In_progress"
//                 ? "bg-persian-green "
//                 : "bg-royal-blue"
//             } `}
//           ></span>
//         </div>
//       </CardContent>
//       <hr />
//       <CardFooter className=" w-full flex justify-between">
//         <form className="w-full">
//           <div className="w-full items-center gap-4">
//             <div className="w-full flex justify-between items-center">
//               <Select value={selectedValue} onValueChange={setSelectedValue}>
//                 <SelectTrigger
//                   id="framework"
//                   className={
//                     "w-36 truncate" + selectedValue === "not_started"
//                       ? "text-watermelon-red border-watermelon-red"
//                       : selectedValue === "In_progress"
//                       ? "text-persian-green border-persian-green"
//                       : "text-royal-blue border-royal-blue"
//                   }
//                 >
//                   <SelectValue placeholder="Select" />
//                 </SelectTrigger>
//                 <SelectContent position="popper">
//                   <SelectItem
//                     value="not_started"
//                     className="text-watermelon-red"
//                   >
//                     Not Startd
//                   </SelectItem>
//                   <SelectItem value="In_progress" className="text-royal-blue">
//                     In Progress
//                   </SelectItem>
//                   <SelectItem value="finished" className="text-persian-green">
//                     Finished
//                   </SelectItem>
//                 </SelectContent>
//               </Select>
//               <div className="w-full text-sm text-gray-400 flex justify-end items-center gap-x-2">
//                 <Clock4Icon className="size-4" />
//                 <span>Tomorrow</span>
//               </div>
//             </div>
//           </div>
//         </form>
//       </CardFooter>
//     </Card>
//   );
// }

// export default CardTaskComponent;
