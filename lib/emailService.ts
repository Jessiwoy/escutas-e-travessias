import emailjs from "@emailjs/browser"
import { MATERIALS_CATALOG, WELCOME_MESSAGE } from "@/constants/materialsCatalog"

export interface LeadData {
  name: string
  email: string
  materialId: string
}

export const sendLeadEmails = async (leadData: LeadData): Promise<{ success: boolean; message: string }> => {
  const { name, email, materialId } = leadData

  const material = MATERIALS_CATALOG[materialId]
  if (!material) {
    return {
      success: false,
      message: "Material não encontrado.",
    }
  }

  if (!material.materialLink || material.materialLink === "") {
    return {
      success: false,
      message: "unavailable", // código especial para tratar diferente
    }
  }

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateClientId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CLIENT_ID
  const templateUserId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_USER_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateClientId || !templateUserId || !publicKey) {
    return {
      success: false,
      message: "Configuração de e-mail incompleta.",
    }
  }

  try {
    const clientTemplateParams = {
      source: "Download de material",
      lead_name: name,
      lead_email: email,
      lead_whatsapp: "-",
      lead_topic: "-",
      lead_message: "-",
      section_title: material.sectionTitle,
      material_title: material.materialTitle,
      material_id: material.id,
      timestamp: new Date().toLocaleString("pt-BR"),
      subject: material.clientEmailSubject,
    }

    await emailjs.send(serviceId, templateClientId, clientTemplateParams, publicKey)

    const userTemplateParams = {
      lead_name: name,
      lead_email: email,
      material_title: material.materialTitle,
      material_link: material.materialLink,
      subject: material.userEmailSubject,
      welcome_message: WELCOME_MESSAGE,
    }

    await emailjs.send(serviceId, templateUserId, userTemplateParams, publicKey)

    return {
      success: true,
      message: "E-mails enviados com sucesso!",
    }
  } catch (error) {
    console.error("[v0] Erro ao enviar e-mails:", error)
    return {
      success: false,
      message: "Algo não saiu como esperado. Pode tentar de novo? Se preferir, me chama no WhatsApp.",
    }
  }
}

export const sendContactEmail = async (contactData: {
  name: string
  email: string
  whatsapp: string
  topic: string
  message: string
}): Promise<{ success: boolean; message: string }> => {
  const { name, email, whatsapp, topic, message } = contactData

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateContactId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateContactId || !publicKey) {
    return {
      success: false,
      message: "Configuração de e-mail incompleta.",
    }
  }

  try {
    const templateParams = {
      source: "Contato (formulário do site)",
      lead_name: name,
      lead_email: email,
      lead_whatsapp: whatsapp,
      lead_topic: topic,
      lead_message: message,
      timestamp: new Date().toLocaleString("pt-BR"),
      section_title: "-",
      material_title: "-",
      material_id: "-",
    }

    await emailjs.send(serviceId, templateContactId, templateParams, publicKey)

    return {
      success: true,
      message: "E-mail enviado com sucesso!",
    }
  } catch (error) {
    console.error("[v0] Erro ao enviar e-mail de contato:", error)
    return {
      success: false,
      message: "Algo não saiu como esperado. Pode tentar de novo? Se preferir, me chama no WhatsApp.",
    }
  }
}
