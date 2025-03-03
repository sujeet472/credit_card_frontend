"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react"; // Import icons

export default function InfoCard(props: any) {
  const [showData, setShowData] = useState(false);

  return (
    <motion.div
      className="flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-[300px] shadow-xl rounded-2xl bg-white border border-gray-200">
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">{props.data}</CardTitle>
          <CardDescription className="text-gray-600">
            Data as per your selected card
          </CardDescription>
        </CardHeader>
        <CardContent>
          <motion.div
            className="mt-4 p-3 bg-gray-50 border rounded-lg shadow-sm flex items-center justify-between"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-700 text-lg">🚀 {showData ? "2000" : "xxxx"}</p>
            {showData ? (
              <EyeOff
                className="w-5 h-5 text-gray-600 cursor-pointer"
                onClick={() => setShowData(false)}
              />
            ) : (
              <Eye
                className="w-5 h-5 text-gray-600 cursor-pointer"
                onClick={() => setShowData(true)}
              />
            )}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
