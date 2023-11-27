export {};

declare global {
  interface String {
    PascalCase(): string;
  }
}

if (!String.prototype.PascalCase) {
  String.prototype.PascalCase = function (
    this: string,
    seperator: string = " "
  ): string {
    const parts = this.split(seperator);
    return parts
      .map((part) => `${part[0].toUpperCase()}${part.slice(1)}`)
      .join("");
  };
}
