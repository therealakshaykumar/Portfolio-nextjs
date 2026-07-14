"use client"
import React, { useState, useRef } from 'react'
import SectionHeading from './Heading'
import { useSectionInView } from '@/lib/hooks'
import { motion } from "framer-motion";
import { sendMail } from '@/actions/sendEmail';
import SubmitBtn from './Submit-Btn';
import toast from 'react-hot-toast';
import { EMAIL } from '@/lib/constants';
import DownloadSuccess from './DownloadSuccess';

const Contact = () => {
    const {ref} = useSectionInView('Contact')
    const [showSuccess, setShowSuccess] = useState(false)
    const formRef = useRef<HTMLFormElement>(null)

  return (
    <motion.section id="contact"
    initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    ref={ref}
    className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center">
        <SectionHeading>Contact Me</SectionHeading>
        <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href={`mailto:${EMAIL}`}>
        {EMAIL}
        </a>{" "}
        or through this form.
      </p>
      <form ref={formRef} action={async (formdata)=>{
        const {error} = await sendMail(formdata)
        if(error){
          toast.error(error)
          return;
        }
        // Reset the form
        formRef.current?.reset()

        // Show the success animation
        setShowSuccess(true)
        setTimeout(() => {
          setShowSuccess(false)
        }, 3000)
      }} className="mt-10 flex flex-col dark:text-black">
        {/* Honeypot field */}
        <input type="checkbox" name="_honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
        
        <input 
        className="h-14 px-4 rounded-lg borderBlack dark:bg-white/80 dark:focus:bg-white/90 transition-all dark:outline-none"
        name="senderEmail"
        type="email"
        required
        maxLength={100}
        autoComplete='off'
        placeholder="Your email" />
        <textarea 
        className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white/80 dark:focus:bg-white/90 transition-all dark:outline-none"
        name="message"
        autoComplete='off'
        placeholder="Your message"
        required
        maxLength={5000}></textarea>
        <SubmitBtn />
      </form>

      <DownloadSuccess
        show={showSuccess}
        onComplete={() => setShowSuccess(false)}
      />
    </motion.section>
  )
}

export default Contact