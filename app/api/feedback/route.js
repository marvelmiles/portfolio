import { NextResponse } from "next/server";
import { sendMail } from "../utils";

export const POST = async (req) => {
  try {
    const body = await req.json();

    await sendMail({
      text: `
          <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Feedback Message</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
     
  </style>
</head>
<body>
  <div >  
      <h3>User Name: ${body.name}</h3>
      <h3>User Email: ${body.email}</h3>
      <p style="font-size:20px; letter-spacing:1.8;" >  
      ${body.message}
      </p>  
  </div>
</body>
</html>
          `,
    });

    return NextResponse.json({
      message:
        "Thank you for reaching out. I'll get back to you as soon as possible!",
      success: true,
    });
  } catch (err) {
    return NextResponse.json(
      {
        message: err.message,
        code: err.code || err.name || "BAD_REQUEST",
        success: false,
        status: 400,
        statusCode: 400,
      },
      { status: 400 }
    );
  }
};
