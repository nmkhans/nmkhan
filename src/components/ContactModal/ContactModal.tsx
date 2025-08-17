import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";
import type { ContactType } from "@/types/contact";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function ContactModal() {
  const [data, setData] = useState<ContactType>({
    user_name: "",
    user_email: "",
    message: "",
  });

  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!data.user_name || !data.user_email || !data.message) {
      alert("Please fill all the field.");
      return;
    }

    const emailResponse = await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_KEY,
      import.meta.env.VITE_EMAILJS_TEMPLATE_KEY,
      e.currentTarget,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    );

    if (emailResponse.status === 200) {
      toast.success("Message sent successfully.");
      closeButtonRef.current!.click();
    }
  };

  return (
    <Dialog>
      <div>
        <DialogTrigger asChild>
          <Button className="font-semibold bg-gray-900 text-white px-6 h-12 rounded-xl dark:hover:text-gray-900">
            Contact Me{" "}
            <span>
              <ArrowUpRight size={4} />
            </span>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[425px] lg:w-full">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Contact Me</DialogTitle>
              <DialogDescription>
                I'm always open to new opportunities and
                collaborations. Feel free to reach out!
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 mt-5">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  onChange={handleInputChange}
                  id="name"
                  name="user_name"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={handleInputChange}
                  id="email"
                  name="user_email"
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  onChange={handleInputChange}
                  id="message"
                  name="message"
                  className="h-[150px]"
                  placeholder="Type your message here."
                />
              </div>
            </div>
            <DialogFooter>
              <Button className="w-full mt-5">Send Message</Button>
              <DialogClose asChild>
                <Button
                  ref={closeButtonRef}
                  className="hidden"
                  variant="outline"
                >
                  Cancel
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </div>
    </Dialog>
  );
}
