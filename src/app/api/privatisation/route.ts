import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const mail = process.env.MAIL_ADDRESS;
  const pass = process.env.MAIL_PASS;

  try {
    const {
      nom,
      email,
      telephone,
      date,
      nombrePersonnes,
      typeEvenement,
      message,
    } = await req.json();

    if (
      !nom ||
      !email ||
      !telephone ||
      !date ||
      !nombrePersonnes ||
      !typeEvenement
    ) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: mail,
        pass: pass,
      },
    });

    const mailOptions = {
      from: mail,
      to: mail,
    };

    const emailContent = `
      <h1>Nouvelle demande de privatisation</h1>
      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${telephone}</p>
      <p><strong>Date de l'événement :</strong> ${date}</p>
      <p><strong>Nombre de personnes :</strong> ${nombrePersonnes}</p>
      <p><strong>Type d'événement :</strong> ${typeEvenement}</p>
      <p><strong>Message :</strong> ${message || "Aucun message"}</p>
    `;
    await transporter.sendMail({
      ...mailOptions,
      subject: "Nouvelle demande de privatisation",
      text: message,
      html: emailContent,
    });

    return NextResponse.json(
      { message: "Email envoyé avec succès" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(
      "Erreur lors de l'envoi de l'email :",
      error.response?.body || error
    );
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email" },
      { status: 500 }
    );
  }
}
