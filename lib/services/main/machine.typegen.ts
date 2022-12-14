
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "": { type: "" };
"done.invoke.main.idle:invocation[0]": { type: "done.invoke.main.idle:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.main.work.search.active.loading:invocation[0]": { type: "done.invoke.main.work.search.active.loading:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          "fetchNews": "done.invoke.main.idle:invocation[0]" | "done.invoke.main.work.search.active.loading:invocation[0]";
        };
        missingImplementations: {
          actions: "'setNews'" | "setInput";
          delays: never;
          guards: "isInputIsEmpty";
          services: never;
        };
        eventsCausingActions: {
          "'setNews'": "done.invoke.main.idle:invocation[0]" | "done.invoke.main.work.search.active.loading:invocation[0]";
"setInput": "INPUT";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          "isInputIsEmpty": "";
        };
        eventsCausingServices: {
          "fetchNews": "SEARCH" | "xstate.init";
        };
        matchesStates: "idle" | "work" | "work.search" | "work.search.active" | "work.search.active.idle" | "work.search.active.loading" | "work.search.checking" | "work.search.inactive" | { "work"?: "search" | { "search"?: "active" | "checking" | "inactive" | { "active"?: "idle" | "loading"; }; }; };
        tags: never;
      }
  