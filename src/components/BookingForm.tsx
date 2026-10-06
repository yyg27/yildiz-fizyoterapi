"use client";

import content from "@/data/content.json";

// The only interactive part of the page. Browser validation (required/pattern) blocks empty requests;
// the clicked button (submitter) decides between WhatsApp and email.
export default function BookingForm() {
  const { form } = content.ui;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "").trim() || "-";

    const name = value("name");
    const rows: [string, string][] = [
      [form.name, name],
      [form.phone, value("phone")],
      [form.service, value("service")],
      [form.note, value("note")],
    ];
    const via = (e.nativeEvent as SubmitEvent).submitter?.getAttribute("value");

    if (via === "whatsapp") {
      const text = `${form.messageIntro}\n\n` + rows.map(([label, v]) => `*${label}:* ${v}`).join("\n");
      window.open(`https://wa.me/${content.contact.whatsappPhone}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    } else {
      const subject = `${form.emailSubject} - ${name}`;
      const body = rows.map(([label, v]) => `${label}: ${v}`).join("\n");
      window.location.href = `mailto:${content.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">{form.name}</label>
          <input id="name" name="name" type="text" placeholder={form.namePlaceholder} autoComplete="name" required minLength={2} />
        </div>
        <div className="field">
          <label htmlFor="phone">{form.phone}</label>
          <input id="phone" name="phone" type="tel" placeholder={form.phonePlaceholder} autoComplete="tel" required pattern="[0-9 +()\-]{10,}" />
        </div>
      </div>
      <div className="form-row">
        <div className="field full">
          <label htmlFor="service">{form.service}</label>
          <select id="service" name="service">
            {content.services.items.map((item) => (
              <option key={item.id}>{item.title}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="field full">
          <label htmlFor="note">{form.note} {form.optional}</label>
          <textarea id="note" name="note" rows={3} placeholder={form.notePlaceholder}></textarea>
        </div>
      </div>
      <div className="form-actions">
        <button type="submit" name="via" value="whatsapp" className="btn btn-whatsapp">{form.sendWhatsApp}</button>
        <button type="submit" name="via" value="email" className="btn btn-primary">{form.sendEmail}</button>
      </div>
      <p className="form-note">{form.hint}</p>
    </form>
  );
}
