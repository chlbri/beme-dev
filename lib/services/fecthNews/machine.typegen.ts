
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "": { type: "" };
"done.invoke.fetch": { type: "done.invoke.fetch"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.json": { type: "done.invoke.json"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.zod": { type: "done.invoke.zod"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"error.platform.fetch": { type: "error.platform.fetch"; data: unknown };
"error.platform.json": { type: "error.platform.json"; data: unknown };
"error.platform.zod": { type: "error.platform.zod"; data: unknown };
"xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          "fetch": "done.invoke.fetch";
"json": "done.invoke.json";
"zod": "done.invoke.zod";
        };
        missingImplementations: {
          actions: "escaladeFecthError" | "escaladeJsonError" | "escaladeZodError";
          delays: never;
          guards: never;
          services: "fetch" | "json" | "zod";
        };
        eventsCausingActions: {
          "escaladeFecthError": "error.platform.fetch";
"escaladeJsonError": "error.platform.json";
"escaladeZodError": "error.platform.zod";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          "fetch": "";
"json": "done.invoke.fetch";
"zod": "done.invoke.json";
        };
        matchesStates: "buildingURL" | "error" | "fetch" | "idle" | "json" | "success" | "zod";
        tags: never;
      }
  