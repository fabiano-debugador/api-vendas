import handlebars from 'handlebars';

interface ITemplateVariable {
  [key: string]: string | number;
}

interface IParseMailtemplate {
  template: string;
  variables: ITemplateVariable;
}
export default class handlebarsMailTemplate {
  public async parse({
    template,
    variables,
  }: IParseMailtemplate): Promise<string> {
    const parseTemplate = handlebars.compile(template);

    return parseTemplate(variables);
  }
}
