import type { Step as StepData } from "@/content/types";
import { Blocks } from "./BlockRenderer";
import { StepAnchor } from "./StepAnchor";

export function Step({ step }: { step: StepData }) {
  return (
    <section
      id={`step-${step.n}`}
      className="group scroll-mt-24 border-b border-border/60 py-5 last:border-0"
    >
      <h3 className="mb-2 text-lg font-medium text-fg">
        <span className="mr-2 font-mono text-muted">{step.n}</span>
        {step.title}
        <StepAnchor n={step.n} />
      </h3>
      <div className="space-y-3">
        <Blocks blocks={step.body} />
      </div>
    </section>
  );
}
