import {AppointmentDataTable} from '@/components/AppointmentDataTable'
import StatCard from '@/components/StatCard'
import{ columns, Payment }from '@/components/tables/Columns'
import { getrecentAppointment } from '@/lib/actions/appointment.actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Admin = async () => {
    
    const appointments = await getrecentAppointment()

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            width={162}
            height={32}
            className="w-fit h-8"
          />
        </Link>

        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments.
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled Appiontment"
            icon="/assets/icons/appointments.svg"
          />

          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending Appiontment"
            icon="/assets/icons/pending.svg"
          />

          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled Appiontment"
            icon="/assets/icons/cancelled.svg"
          />
        </section>

        <AppointmentDataTable
         columns={columns}
         data={appointments.document}
        />
      </main>
    </div>
  );
}

export default Admin