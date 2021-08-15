import Express from "express";
import Colors from "colors";
import Path from "path";

const __dirname = Path.resolve();

/**
 * Hosts and Represents a Web Server
 */
export class WebServer
{
  app: Express.Express;
  port: number;

  /**
   * Creates a Web Server
   * @param port - Port to listen to
   */
  constructor(port = 8080)
  {
    this.port = port;

    // Express
    this.app = Express();
    this.app.use("/JS", Express.static(
      Path.resolve(__dirname + "\\Build\\Client")
    ));
    this.app.use("/", Express.static(
      Path.resolve(__dirname + "\\Static")
    ));
    this.app.listen(process.env.PORT || port, this.onStart.bind(this));
  }

  /**
   * Executes on the start of the web server
   */
  onStart(): void
  {
    console.log(Colors.green("Started Web Server at 127.0.0.1:" + this.port));
  }
}
