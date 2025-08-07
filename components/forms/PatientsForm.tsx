"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SumbitButton from "../SumbitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"
import { createUser } from "@/lib/actions/patient.actions"

export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE = "date",
    SELECT = "select",
    SKELETON = "skeleton",
}
 
const PatientsForm = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    // 0. Define the form schema using Zod.
    // This schema will be used to validate the form inputs.

  // 1. Define your form.
    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    })

  // 2. Define a submit handler.
    async function onSubmit({ name, phone, email }: z.infer<typeof UserFormValidation>) {
        // ✅ This will be type-safe and validated.
        setIsLoading(true)

        try {
            const userData = { name, phone, email }

            const newUser = await createUser(userData);

        if (newUser) {
            router.push(`/patients/${newUser.$id}/register`);
        }
        } catch (error) {
            console.log(error);
        }

    setIsLoading(false);
        
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
                <section className="mb-12 space-y-4"> 
                    <h1 className="header">Hi there 👋</h1>
                    <p className="text-dark-700">Schedule your first appointment</p>
                </section>

                <CustomFormField 
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    name='name'
                    label='Full name'
                    placeholder='John Doe'
                    iconSrc='/assets/icons/user.svg'
                    iconAlt='user'
                />

                <CustomFormField 
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    name='email'
                    label='Email'
                    placeholder='johndoe@gmail.com'
                    iconSrc='/assets/icons/email.svg'
                    iconAlt='email'
                />

                <CustomFormField 
                    control={form.control}
                    fieldType={FormFieldType.PHONE_INPUT}
                    name='phone'
                    label='Phone number'
                    placeholder='+234 123 456 7890'
                />

                <SumbitButton isLoading={isLoading}> Get Started </SumbitButton>
            </form>
        </Form>
    )
}

export default PatientsForm

