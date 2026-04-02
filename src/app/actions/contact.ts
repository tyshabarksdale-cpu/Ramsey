
'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { success: false, error: 'All fields are required.' };
  }

  try {
    // 1. Send Email Notification
    const { error } = await resend.emails.send({
      from: 'noreply@nexark.ai',
      to: 'Ramsey.empowerment@gmail.com',
      subject: `New Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(error.message);
    }

    return { success: true };
  } catch (err: any) {
    console.error('Contact form submission error:', err);
    return { success: false, error: 'We encountered an error. Please try again or email us directly.' };
  }
}
