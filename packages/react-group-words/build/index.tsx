import { ReactNode } from 'react';

export declare function parseAndWrap(text: string, openBracket?: string, closeBracket?: string, key?: number): (string | ReactNode)[];
export declare const ParseAndWrapComponent: React.FC<{
	text: string;
	brackets?: [
		string,
		string
	];
}>;

export {
	ParseAndWrapComponent as default,
};

export {};
