import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";


const Faq = () => {
    return (
        <>
            <div className="bg-[#7DB9B6] my-10 text-[#F5E9CF]">
                <Accordion>
                    <AccordionItem className="bg-[#E96479]">
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            How do I create a survey?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            To create a survey, log in to your account and click on the Create Survey button. Follow the step-by-step instructions to customize your questions and settings.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem className="bg-[#E96479]">
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            Is my data secure?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Yes, we take the security of your data seriously. We use encryption protocols to protect your information, and we do not share your data with third parties.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem className="bg-[#E96479]">
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            Can I customize the look of my surveys?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Absolutely! You can personalize the appearance of your surveys by choosing different themes, colors, and fonts to match your brand.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem className="bg-[#E96479]">
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            How do I collect payments for surveys?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            We offer seamless payment integration options. Simply connect your preferred payment gateway, and respondents can pay securely before taking the survey.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    );
};

export default Faq;