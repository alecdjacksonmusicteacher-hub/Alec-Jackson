import { GoogleGenAI, Type } from "@google/genai";
import { NoteType, RhythmicNote } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const lyricMapping = `
- Taa-aa-aa-aa: SEMIBREVE
- Taa-aa-aa: DOTTED_MINIM
- Taa-aa: MINIM
- Taa-a-ti: DOTTED_CROTCHET_QUAVER
- Taa: CROTCHET
- te-ti: TWO_QUAVERS
- te-fi-ti-fi: FOUR_SEMIQUAVERS
- te-ti-fi: QUAVER_TWO_SEMIQUAVERS
- te-fi-ti: TWO_SEMIQUAVERS_QUAVER
- te-i-fi: DOTTED_QUAVER_SEMIQUAVER
- te-fi-i: SEMIQUAVER_DOTTED_QUAVER
- syn-co-pe: TRIPLET_QUAVERS

- Ssh-Taa-aa-aa-aa: SEMIBREVE_REST
- Ssh-Taa-aa-aa: DOTTED_MINIM_REST
- Ssh-Taa-aa: MINIM_REST
- Ssh-Taa-a-ti: DOTTED_CROTCHET_QUAVER_REST
- Ssh-Taa: CROTCHET_REST
- Ssh-te-ti: TWO_QUAVERS_REST
- Ssh-te-fi-ti-fi: FOUR_SEMIQUAVERS_REST
- Ssh-te-ti-fi: QUAVER_TWO_SEMIQUAVERS_REST
- Ssh-te-fi-ti: TWO_SEMIQUAVERS_QUAVER_REST
- Ssh-te-i-fi: DOTTED_QUAVER_SEMIQUAVER_REST
- Ssh-te-fi-i: SEMIQUAVER_DOTTED_QUAVER_REST
- Ssh-syn-co-pe: TRIPLET_QUAVERS_REST
`;

const systemInstruction = `You are a music theory expert specializing in rhythm. Your task is to analyze a user-provided string of rhythmic lyrics and convert it into a structured JSON array.

The user will provide a string of lyrics separated by spaces. You must parse this string and map each lyric word to its corresponding musical notation type based on the following list:
${lyricMapping}

- Process the input string from left to right.
- For each word or hyphenated phrase in the user's input, find the matching lyric in the list and use its corresponding note type.
- The user can request rests by prefixing a rhythm lyric with "Ssh-". When you see this prefix, you must map it to the corresponding REST note type. For example, "Ssh-Taa" should be mapped to "CROTCHET_REST". The 'lyric' property in the JSON object should contain the full "Ssh-..." string from the input.
- If a word or phrase from the input does not match any of the lyrics in the list, you MUST classify it with the note type 'UNKNOWN'.
- Your output must be a valid JSON array of objects. Each object must contain two properties: 'lyric' (the original word from the input) and 'note' (the corresponding note type from the list, or 'UNKNOWN').
`;


export const generateNotation = async (lyrics: string): Promise<RhythmicNote[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Parse the following rhythmic lyrics: "${lyrics}"`,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              lyric: {
                type: Type.STRING,
                description: "The original lyric word from the input string.",
              },
              note: {
                type: Type.STRING,
                enum: Object.values(NoteType),
                description: "The corresponding note type for the lyric.",
              },
            },
            required: ["lyric", "note"],
          },
        },
      },
    });

    const jsonString = response.text.trim();
    const result = JSON.parse(jsonString);
    return result as RhythmicNote[];
  } catch (error) {
    console.error("Error generating notation:", error);
    throw new Error("Failed to parse rhythm. Please check your input and try again.");
  }
};
