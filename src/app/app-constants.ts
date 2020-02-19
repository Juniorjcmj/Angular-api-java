export class AppConstants {
	
	public static get baseServidor(): string {return "http://localhost:82/"}

	public static get baseLogin(): string {return this.baseServidor +"cursospringrestapi/login"}

	public static get baseUrl(): string {return this.baseServidor+"cursospringrestapi/usuario/"}
}
