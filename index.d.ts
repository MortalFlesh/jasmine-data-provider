// Type definitions for jasmine-data-provider 2.2.0
// Project: https://github.com/MortalFlesh/jasmine-data-provider
// Definitions by: Oleg Hoefling <https://github.com/hoefling>

declare interface DataDescProvider<T> {
  [key: string]: T;
}

declare function using<T>(data: T[], specDefinitions: (datum: T) => void): void;
declare function using<T>(dataProvider: () => T[], specDefinitions: (datum: T) => void): void;
declare function using<T, S extends DataDescProvider<T>>(dataDescProvider: S, specDefinitions: (datum: T, description: string) => void): void;

export = using;
