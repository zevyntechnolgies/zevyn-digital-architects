import Contact from "@/models/Contact";
import { connectDB } from "@/lib/db";
import { contactSchema } from "@/lib/validation";
import { sendAutoReply, sendContactEmail } from "@/lib/mail";

export async function createContact(data: unknown) {
  // Validate request
  const validated = contactSchema.parse(data);

  // Connect to MongoDB
  await connectDB();

  // Save to database
  const contact = await Contact.create({
    name: validated.name,
    email: validated.email,
    company: validated.company,
    // website: validated.website,
    projectType: validated.projectType,
    message: validated.message,
  });

  // Send notification email to ZEVYN
  await sendContactEmail(validated);

  // Send confirmation email to customer
  await sendAutoReply(validated);

  return {
    success: true,
    message: "Your message has been sent successfully.",
    id: contact._id.toString(),
  };
}