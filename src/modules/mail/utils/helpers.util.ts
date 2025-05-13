import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';

export const compileTemplate = (templateName: string, data: object) => {
  const templatePath = path.join(
    __dirname,
    '..',
    'templates',
    `${templateName}.hbs`,
  );
  const source = fs.readFileSync(templatePath, 'utf-8');
  const template = handlebars.compile(source);
  return template(data);
};
