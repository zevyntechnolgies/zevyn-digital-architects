import { createServerFn } from "@tanstack/react-start";
import { createContact } from "./contact.server";

export const submitContact = createServerFn({
  method: "POST",
})
  .validator((data: unknown) => data)
  .handler(async ({ data }) => {
    return await createContact(data);
  });
