import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import KegiatanOne from "@/components/kegiatan/KegiatanOne";

export const metadata: Metadata = {
  title: "Kegiatan Page | Admin  Dashboard Kit",
  description: "This is Kegiatan page for Admin Dashboard Kit",
};

const KegiatanPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Agenda Sekolah" />

      <div className="flex flex-col gap-10">
        <KegiatanOne />
      </div>
    </DefaultLayout>
  );
};

export default KegiatanPage;
