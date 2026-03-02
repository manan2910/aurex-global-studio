import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "How long does it take to deliver a pre-built application or website?",
        answer: "Delivery times vary depending on the complexity of the project, but pre-built applications generally take 1-2 weeks for customization and deployment, whereas custom development may take longer."
    },
    {
        question: "Do you provide the complete source code after development?",
        answer: "Yes, once the project is completed and final payments are made, we provide the complete source code and transfer all intellectual property rights to you."
    },
    {
        question: "What's the difference between a pre-built and a custom development project?",
        answer: "A pre-built project uses an existing high-quality template or codebase that we customize to fit your brand, which is faster and more cost-effective. Custom development is built entirely from scratch tailored to your exact unique requirements."
    },
    {
        question: "Do you provide maintenance and support after delivery?",
        answer: "Absolutely. We offer various maintenance and support packages to ensure your website or application stays updated, secure, and performs optimally post-launch."
    },
    {
        question: "What technologies do you use for development?",
        answer: "We use modern technologies like React JS, React Native, Node JS, and Next JS for frontend and backend, along with Figma for UI/UX design and Hostinger/AWS for hosting. This ensures high performance, scalability, and long-term reliability."
    }
];

const FAQSection = () => {
    return (
        <section id="faq" className="py-24 px-4 md:px-8 bg-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
                        Got Questions?
                    </span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                        Frequently Asked <span className="text-gradient-gold">Questions</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Everything you need to know about our services, process, and how we can help your business grow.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-card/50 border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
                            >
                                <AccordionTrigger className="text-left font-display text-lg hover:no-underline py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
