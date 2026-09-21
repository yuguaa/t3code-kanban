import { assert, describe, it } from "@effect/vitest";

import { AGENT_SYSTEM_PROMPT } from "../AgentSystemPrompt.ts";
import { T3_PI_EXTENSION_SOURCE, T3_PI_TASK_WORKFLOW_ENV } from "./piExtension.ts";

describe("piExtension task workflow", () => {
  it("appends the shared task workflow prompt on every turn", () => {
    assert.include(T3_PI_EXTENSION_SOURCE, 'pi.on("before_agent_start"');
    assert.include(T3_PI_EXTENSION_SOURCE, JSON.stringify(AGENT_SYSTEM_PROMPT));
    assert.include(
      T3_PI_EXTENSION_SOURCE,
      'return { systemPrompt: event.systemPrompt + "\\n\\n" + TASK_WORKFLOW_PROMPT };',
    );
  });

  it("gates the workflow prompt on the task toolkit env var", () => {
    assert.include(T3_PI_EXTENSION_SOURCE, `process.env[TASK_WORKFLOW_ENV] !== "1"`);
    assert.strictEqual(T3_PI_TASK_WORKFLOW_ENV, "T3_TASK_WORKFLOW");
  });
});
