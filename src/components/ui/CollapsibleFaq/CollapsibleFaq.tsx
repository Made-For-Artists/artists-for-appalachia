import { Collapsible } from "@kobalte/core/collapsible";
import { FaSolidPlus } from 'solid-icons/fa'
import "./CollapsibleFaq.css";

interface Props {
    content: string;
    question: string;
}

export function CollapsibleFaq({ content, question } : Props) {
  return (
    <Collapsible class="collapsible">
        <Collapsible.Trigger class="collapsible__trigger">
            <span>{question}</span>
            <FaSolidPlus class="collapsible__trigger-icon" />
        </Collapsible.Trigger>
        <Collapsible.Content class="collapsible__content">
            <p class="collapsible__content-text">
            {content}
            </p>
        </Collapsible.Content>
    </Collapsible>
  );
}