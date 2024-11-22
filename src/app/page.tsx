import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";

export const metadata: Metadata = {
  title:
    "Managemen Sekolah Dashboard Page | Admin - Dashboard Kit",
  description: "This is Home page for Admin Dashboard Kit",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
