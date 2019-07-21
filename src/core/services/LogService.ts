export enum LogType {
	Info = '[Info]',
	Error = '[Error]',
	Warn = '[Warning]',
}

export class LogService {
	static readonly appName: string = 'pair';
	static readonly env: string = 'dev';

	static info(subject: string, description?: string, context?: string) {
		const updatedSubject = `${LogType.Info}: ${subject}`;
		this.log(LogType.Info, updatedSubject, description, context);
	}

	static warning(subject: string, description?: string, context?: string) {
		this.log(LogType.Warn, subject, description, context);
	}

	static error(error: Error, context?: string) {
		const subject = `${error.message}`;
		const description = `${error.stack}`;
		this.log(LogType.Error, subject, description, context);
	}

	static log(type: LogType, subject: string, description?: string, context?: string): void {
		let metaInfo = type as string;
		if (this.appName) {
			metaInfo = this.append(metaInfo, this.appName);
		}
		if (this.env) {
			metaInfo = this.append(metaInfo, this.env);
		}
		if (context) {
			metaInfo = this.append(metaInfo, context);
		}
		let result = metaInfo;
		if (subject) {
			result = this.appendLine(result, subject);
		}
		if (description) {
			result = this.appendLine(result, description);
		}
		// tslint:disable-next-line: no-console
		console.log(result);
	}

	static appendLine(currentText: string, nextText: string): string {
		return `${currentText}\n${nextText}`;
	}

	static append(currentText: string, nextText: string): string {
		return `${currentText} - ${nextText}`;
	}
}
