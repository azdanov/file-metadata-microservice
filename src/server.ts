import errorhandler from 'errorhandler';
import app from './app';

/**
 * Error Handler. Provides full stack - remove for production
 */
if (app.get('env') === 'development') {
  app.use(errorhandler());
}

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
  console.log('  App is running at port %d in %s mode', app.get('port'), app.get('env'));
  if (app.get('env') === 'development') {
    console.log('  Press CTRL-C to stop\n');
  }
});

export default server;
