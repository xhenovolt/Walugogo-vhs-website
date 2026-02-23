import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const data = await request.json();

		// Format the email content
		const emailContent = `
New Admission Application Received

STUDENT INFORMATION:
- Student Name: ${data.studentName}
- Former School: ${data.formerSchool}
- Grade/Class Applying for: ${data.grade}

PARENT/GUARDIAN INFORMATION:
- Parent/Guardian Name: ${data.parentName}
- Phone Number: ${data.parentPhone}
- Email Address: ${data.parentEmail}

HOW THEY HEARD ABOUT US:
- Source: ${data.howHeard}

---
This application was submitted via the Walugogo VHS website.
Please contact the applicant within 48 hours to confirm receipt and proceed with the admission process.
		`;

		// For now, we'll log the data and return success
		// In production, you would integrate with your email service or Google GenAI
		console.log("Admission Form Data Received:", data);
		console.log("Email Content to send:", emailContent);

		// TODO: Integrate with your email service (SendGrid, Nodemailer, etc.)
		// or send this via Google GenAI API if configured for email notifications

		return NextResponse.json(
			{
				success: true,
				message: "Application submitted successfully!",
				data: {
					studentName: data.studentName,
					parentEmail: data.parentEmail,
				},
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error processing admission form:", error);
		return NextResponse.json(
			{
				success: false,
				message: "Failed to process application. Please try again later.",
			},
			{ status: 500 }
		);
	}
}
