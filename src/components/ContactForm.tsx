import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().trim().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }).max(100, {
    message: "O nome deve ter no máximo 100 caracteres.",
  }),
  email: z.string().trim().email({
    message: "Por favor, insira um email válido.",
  }).max(255, {
    message: "O email deve ter no máximo 255 caracteres.",
  }),
  message: z.string().trim().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres.",
  }).max(1000, {
    message: "A mensagem deve ter no máximo 1000 caracteres.",
  }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted:", values);
    toast.success("Mensagem enviada com sucesso!", {
      description: "Entraremos em contacto em breve.",
    });
    form.reset();
  }

  return (
    <section id="contacto" className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Entre em Contacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tem alguma questão sobre o projeto? Envie-nos uma mensagem e responderemos o mais breve possível.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-2xl shadow-elegant animate-scale-in">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-base">
                      <User className="w-4 h-4 text-primary" />
                      Nome
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="O seu nome completo" 
                        {...field}
                        className="bg-background/50 border-border/50 focus:border-primary transition-all"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-base">
                      <Mail className="w-4 h-4 text-primary" />
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="seuemail@exemplo.com" 
                        {...field}
                        className="bg-background/50 border-border/50 focus:border-primary transition-all"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-base">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      Mensagem
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Escreva aqui a sua mensagem..." 
                        className="min-h-[150px] bg-background/50 border-border/50 focus:border-primary transition-all resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full md:w-auto px-8 py-6 text-lg"
                variant="hero"
              >
                Enviar Mensagem
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
