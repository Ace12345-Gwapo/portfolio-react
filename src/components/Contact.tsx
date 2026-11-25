// Contact section: original links plus a validated mailto form powered by React state.

import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import type { ContactLink } from '../data/portfolio'
import { portfolio } from '../data/portfolio'

interface FormValues {
  name: string
  email: string
  message: string
}

function ContactLinkItem({ link }: { link: ContactLink }) {
  return link.href ? <a href={link.href}>{link.label}</a> : <span>{link.label}</span>
}

function Contact() {
  const { contact } = portfolio
  const [values, setValues] = useState<FormValues>({ name: '', email: '', message: '' })
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // One handler updates any controlled field and clears stale validation messages.
  const updateField =
    (field: keyof FormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
      setError('')
      setSubmitted(false)
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const name = values.name.trim()
    const email = values.email.trim()
    const message = values.message.trim()

    if (!name || !email || !message) {
      setError(contact.form.requiredMessage)
      setSubmitted(false)
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(contact.form.invalidEmailMessage)
      setSubmitted(false)
      return
    }

    setError('')
    setSubmitted(true)
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact">
      <div className="wrap contact-grid">
        <div className="tile status-tile">
          <div>
            <span className="status-dot" />
            {contact.availability}
          </div>
          <h2>{contact.statusHeading}</h2>
          <p className="lede">{contact.statusText}</p>
        </div>

        <div className="tile contact-tile">
          <h2>{contact.heading}</h2>
          <p className="lede lede-flush">{contact.text}</p>

          <div className="contact-links">
            {contact.links.map((link) => (
              <ContactLinkItem key={link.label} link={link} />
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label>
              <span>{contact.form.nameLabel}</span>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={updateField('name')}
                autoComplete="name"
              />
            </label>
            <label>
              <span>{contact.form.emailLabel}</span>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={updateField('email')}
                autoComplete="email"
              />
            </label>
            <label>
              <span>{contact.form.messageLabel}</span>
              <textarea
                name="message"
                value={values.message}
                onChange={updateField('message')}
                rows={4}
              />
            </label>

            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}
            {submitted && (
              <p className="form-success" role="status">
                {contact.form.successMessage}
              </p>
            )}

            <button type="submit" className="btn btn-primary">
              {contact.form.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
