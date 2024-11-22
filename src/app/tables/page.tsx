import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Tables Page | Admin  Dashboard Kit",
  description: "This is Tables page for Admin Dashboard Kit",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Direktori Sekolah" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
