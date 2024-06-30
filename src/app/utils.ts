// src/app/utils.ts
export function generateCyclingText(finalText: string, stepDuration: number): string[] {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const result: string[] = [];
  
    for (let i = 0; i < finalText.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        result.push(finalText.substring(0, i) + alphabet[j] + finalText.substring(i + 1));
      }
      result.push(finalText.substring(0, i + 1) + finalText.substring(i + 1));
    }
  
    return result;
  }
  