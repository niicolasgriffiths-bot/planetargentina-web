type WelcomeLanguage = "es" | "en" | "pt";

type WelcomeEmailTemplateInput = {
  language: WelcomeLanguage;
  name?: string | null;
  siteUrl: string;
};

type WelcomeEmailTemplate = {
  subject: string;
  html: string;
  text: string;
};

function normalizeSiteUrl(siteUrl: string) {
  return siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
}

function getGreeting(language: WelcomeLanguage, name?: string | null) {
  const trimmedName = name?.trim();

  if (!trimmedName) {
    if (language === "en") return "Hello,";
    if (language === "pt") return "Olá,";
    return "Hola,";
  }

  if (language === "en") return `Hello, ${trimmedName}.`;
  if (language === "pt") return `Olá, ${trimmedName}.`;
  return `Hola, ${trimmedName}.`;
}

function getCopy(language: WelcomeLanguage) {
  if (language === "en") {
    return {
      subject: "Welcome to Planeta Argentina",
      preheader: "This is only the beginning.",
      paragraph1: "Thank you for making it this far. Because this is only the beginning.",
      paragraph2:
        "From the moment you completed your registration, you already became part of Planeta Argentina. And if you register your book with the code printed inside the back cover, even more so.",
      paragraph3:
        "So far, the first expedition was carried out in the Puna. The next four expeditions are already on their way. Through the book, you will be able to get closer to that territory and understand part of what is happening there.",
      paragraph4:
        "There will also be experiences that, later on, you will be able to live through the project. We want each one to be conceived at the level of the places themselves and of what you deserve. That is why many of them are still being built and refined in every detail. But they are not far away.",
      paragraph5:
        "The idea is to bring you closer to territories, stories and ways of life that help reveal the true dimension of Argentina.",
      paragraph6:
        "From now on, you will be able to follow the project’s development, register your books, access future launches and take part in the upcoming experiences built from the territory. We will keep you informed about everything that is still to come.",
      paragraph7: "Because, as we told you before, you are now also part of us.",
      cta: "ENTER MY JOURNEY"
    };
  }

  if (language === "pt") {
    return {
      subject: "Bem-vindo à Planeta Argentina",
      preheader: "Isto está apenas começando.",
      paragraph1: "Obrigado por chegar até aqui. Porque isto está apenas começando.",
      paragraph2:
        "Desde o momento em que concluíste o teu registo, já fazes parte da Planeta Argentina. E se registares o teu livro com o código que encontrarás no interior da contracapa, ainda mais.",
      paragraph3:
        "Até agora, a primeira expedição realizada foi na Puna. As próximas quatro expedições já estão a caminho. Através do livro, vais poder aproximar-te um pouco mais desse território e compreender parte do que acontece ali.",
      paragraph4:
        "Também haverá experiências que, mais adiante, vais poder viver através do projeto. Queremos que cada uma esteja pensada à altura dos lugares e do que mereces. Por isso, muitas delas ainda estão a ser construídas e afinadas em cada detalhe. Mas não estão longe.",
      paragraph5:
        "A ideia é aproximar-te de territórios, histórias e formas de vida que ajudam a compreender a verdadeira dimensão da Argentina.",
      paragraph6:
        "A partir de agora, vais poder acompanhar o desenvolvimento do projeto, registar os teus livros, aceder a futuros lançamentos e fazer parte das próximas experiências construídas a partir do território. Vamos manter-te a par de tudo o que vier.",
      paragraph7: "Porque, como já te dissemos antes, agora também fazes parte de nós.",
      cta: "ENTRAR NO MEU PERCURSO"
    };
  }

  return {
    subject: "Bienvenido a Planeta Argentina",
    preheader: "Esto recién empieza.",
    paragraph1: "Gracias por llegar hasta acá. Porque esto recién empieza.",
    paragraph2:
      "Desde el momento en que completaste tu registro, ya formas parte de Planeta Argentina. Y si registras tu libro con el código que encontrarás en el interior de la contratapa, todavía más.",
    paragraph3:
      "Hasta ahora, la primera expedición realizada fue en la Puna. Las próximas cuatro expediciones ya están en camino. A través del libro, vas a poder acercarte un poco más a ese territorio y entender parte de lo que sucede ahí.",
    paragraph4:
      "También habrá experiencias que, más adelante, vas a poder vivir a través del proyecto. Queremos que cada una esté pensada a la altura de los lugares y de lo que mereces. Por eso muchas de ellas todavía se están construyendo y puliendo en cada detalle. Pero no están lejos.",
    paragraph5:
      "La idea es acercarte a territorios, historias y formas de vida que ayudan a entender la verdadera dimensión de Argentina.",
    paragraph6:
      "A partir de ahora, vas a poder seguir el desarrollo del proyecto, registrar tus libros, acceder a futuros lanzamientos y formar parte de las próximas experiencias construidas desde el territorio. Vamos a mantenerte al tanto de todo lo que venga.",
    paragraph7: "Porque, como te dijimos antes, ahora también formas parte de nosotros.",
    cta: "ENTRAR EN MI RECORRIDO"
  };
}

export function buildWelcomeEmail({
  language,
  name,
  siteUrl
}: WelcomeEmailTemplateInput): WelcomeEmailTemplate {
  const copy = getCopy(language);
  const journeyUrl = `${normalizeSiteUrl(siteUrl)}/mi-recorrido`;
  const greeting = getGreeting(language, name);

  const html = `<!DOCTYPE html>
<html lang="${language}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${copy.subject}</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4efe8; color:#171717; font-family:Georgia, 'Times New Roman', serif;">
    <div style="display:none; max-height:0; overflow:hidden; opacity:0; visibility:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f4efe8;">
      ${copy.preheader}
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; border-collapse:collapse; background-color:#f4efe8;">
      <tr>
        <td style="padding:48px 20px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:680px; margin:0 auto; border-collapse:collapse;">
            <tr>
              <td style="padding-top:20px; border-top:1px solid rgba(23,23,23,0.10); font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:1.4; letter-spacing:0.24em; text-transform:uppercase; color:rgba(23,23,23,0.45);">
                Planeta Argentina
              </td>
            </tr>
            <tr>
              <td style="padding-top:28px; font-size:18px; line-height:1.9; color:rgba(23,23,23,0.84);">
                ${greeting}
              </td>
            </tr>
            <tr>
              <td style="padding-top:16px; font-size:18px; line-height:1.9; color:rgba(23,23,23,0.84);">
                ${copy.paragraph1}
              </td>
            </tr>
            <tr>
              <td style="padding-top:16px; font-size:18px; line-height:1.9; color:rgba(23,23,23,0.84);">
                ${copy.paragraph2}
              </td>
            </tr>
            <tr>
              <td style="padding-top:16px; font-size:18px; line-height:1.9; color:rgba(23,23,23,0.84);">
                ${copy.paragraph3}
              </td>
            </tr>
            <tr>
              <td style="padding-top:16px; font-size:18px; line-height:1.9; color:rgba(23,23,23,0.84);">
                ${copy.paragraph4}
              </td>
            </tr>
            <tr>
              <td style="padding-top:16px; font-size:18px; line-height:1.9; color:rgba(23,23,23,0.84);">
                ${copy.paragraph5}
              </td>
            </tr>
            <tr>
              <td style="padding-top:16px; font-size:18px; line-height:1.9; color:rgba(23,23,23,0.84);">
                ${copy.paragraph6}
              </td>
            </tr>
            <tr>
              <td style="padding-top:32px;">
                <a href="${journeyUrl}" style="display:inline-block; border:1px solid rgba(23,23,23,0.14); padding:14px 22px; color:#171717; text-decoration:none; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:1; letter-spacing:0.24em; text-transform:uppercase;">
                  ${copy.cta}
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding-top:36px; font-size:18px; line-height:1.9; color:rgba(23,23,23,0.84);">
                ${copy.paragraph7}
              </td>
            </tr>
            <tr>
              <td style="padding-top:36px; font-size:18px; line-height:1.9; color:rgba(23,23,23,0.84);">
                Planeta Argentina
              </td>
            </tr>
            <tr>
              <td style="padding-top:14px; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:1.4; letter-spacing:0.18em; text-transform:uppercase; color:rgba(23,23,23,0.42);">
                <a href="mailto:hola@planetargentina.com" style="color:rgba(23,23,23,0.42); text-decoration:none;">
                  hola@planetargentina.com
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = [
    greeting,
    "",
    copy.paragraph1,
    "",
    copy.paragraph2,
    "",
    copy.paragraph3,
    "",
    copy.paragraph4,
    "",
    copy.paragraph5,
    "",
    copy.paragraph6,
    "",
    copy.paragraph7,
    "",
    journeyUrl,
    "",
    "Planeta Argentina"
  ].join("\n");

  return {
    subject: copy.subject,
    html,
    text
  };
}
