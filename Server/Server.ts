import { WebServer } from "./WebServer.js";

/**
 * Represents the Server
 */
class Server
{
  webServer: WebServer;

  /**
   * Creates a Server
   */
  constructor()
  {
      this.webServer = new WebServer();
  }
}

let server = new Server();
