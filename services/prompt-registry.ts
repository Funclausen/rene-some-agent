import { PromptTemplate } from '../lib/prompt-types';

const registry: PromptTemplate[] = [];

export function registerPromptTemplate(
  template: PromptTemplate
) {
  registry.push(template);

  return template;
}

export function getPromptTemplates(
  tenantId: string
): PromptTemplate[] {
  return registry.filter((template) => {
    return (
      !template.tenantId ||
      template.tenantId === tenantId
    );
  });
}
