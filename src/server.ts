import createApp from './app';
import { config } from './config/env.config';
import { mailService } from './modules/mail/mail.service';

mailService.resetPassword(
  'test@example.com',
  'https://example.com/reset-password',
);

const { port, origin } = config.node;

const app = createApp();

app.listen(port, () => {
  console.log(`Server running on ${origin}.`);
});
