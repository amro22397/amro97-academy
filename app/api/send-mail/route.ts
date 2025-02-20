import sgMail from "@sendgrid/mail";

export async function POST(req: Request) {

    const msg = {
        to: "amroelmutasim@gmail.com",
        from: "amroalmutasim.ps4@gmail.com",
        subject: "Email Verification",
        html: "Hello",
      };
  
      sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");
  
      sgMail
        .send(msg)
        .then(() => {
          return Response.json({
            success: true,
            message: "sent!",
          });
        })
        .catch(async (error) => {
          console.log(error);
  
          return Response.json({
            success: false,
            message: "Failed sending email. Try again",
          });
        });

}