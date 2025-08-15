import PatientsForm from "@/components/forms/PatientsForm";
import PasskeyModal from "@/components/PasskeyModal";
import Image from "next/image";

import Link from "next/link";

export default function Home({ searchParams }: SearchParamProps) {
  
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="patient"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />

          <PatientsForm />

          <div className="text-14-regular mt-20 justify-between flex">
            <p className="justify-items-end text-dark-600 xl:text-left">
              {" "}
              © CarePluse{" "}
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
