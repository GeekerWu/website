export class AppConfig {

  static session_token : string ="";
  static JWT_token : string ="";

  public static getHostUrl() {
    let host = localStorage['hostname'];
    // let host = '10.120.21.224';
    console.log("host is :"+host);
    return "https://"+host;

  }

  public static getApiUrl() {
    let host = localStorage['hostname'];
    console.log("host is :"+host);
    return "https://"+host+"/api";
  }

  public static getToken(){
    return this.session_token;
  }
  public static getTimeout(){
    return 15000;
  }

  public static setToken(token:string){
    this.session_token = token;
  }

  public static set_JWT_token(token:string){
    this.JWT_token = token;
  }
  public static get_JWT_token(){
    return this.JWT_token;
  }
}
