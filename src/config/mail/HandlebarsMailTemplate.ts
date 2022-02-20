import handlebars from 'handlebars';
import fs from 'fs';
interface ITemplateVariable {
  [key: string]: string | number;
}

interface IParseMailtemplate {
  file: string;
  variables: ITemplateVariable;
}

export default class handlebarsMailTemplate {
  public async parse({ file, variables }: IParseMailtemplate): Promise<string> {
    const templateFileCOntent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });
    const parseTemplate = handlebars.compile(templateFileCOntent);

    return parseTemplate(variables);
  }
}
