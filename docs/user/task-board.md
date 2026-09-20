# Task board

The task board turns threads into a task-first workspace. Every task is a
thread, so the goal, the agent run, the conversation, and the diffs stay
together. Tasks are created from the board; the conversation keeps working
exactly like any other thread.

## Board and list views

The task board is the home page. Tasks move across five columns:

- **Todo** — work that has not started.
- **In Progress** — the agent is working on it.
- **In Review** — the result is ready for you to check.
- **Blocked** — the agent needs input, access, or an external dependency.
- **Done** — finished and accepted.

Drag a card between columns to change its status, or drag inside a column to
reorder it. Right-click a card for a menu with the same status choices plus
edit, archive, and delete. Search filters by title and task content. The
board/list toggle switches between columns and a grouped table.

The board respects the sidebar's project scope: pick a project from the scope
menu to focus on one project, or choose all projects to see everything. Tasks
the scope hides stay on their threads and are reachable from the sidebar.

## Creating a task

Choose **New task** on the board, or the plus button on a column to start in
that status. Give the task a title and a Markdown description; both are
optional, but at least one is required. Paste or pick images to attach them.

Pick the project, the agent, and the model. A task with an agent assigned
starts running as soon as you create it; leaving the page does not stop the
work. Choose **Unassigned** to save the task without running it — open it from
the board later, pick an agent, and the first turn starts when you save.

## Task details in a thread

Open a task to get the full conversation. The Task details panel on the right
shows the goal: edit the title, switch the status, and edit the Markdown
content in place. Image attachments are shown below the content.

## Inbox

The Inbox collects the latest result for each task when an agent finishes,
fails, stops, asks a question, or waits for approval. One task keeps at most
one visible notification, so repeated runs do not flood the list. Clicking a
notification opens the task; reading happens automatically, and you can also
mark notifications read or unread and delete them. The unread count sits next
to the Inbox entry in the sidebar.

## Agent task tools

Agents see `get_current_task` and `update_task` tools. They read the current
task, then keep the title, content, and status in sync as they work — for
example, moving the task to **In Review** when it is ready for you. If you
edit the task outside the conversation, the agent is reminded to re-read it
before its next message.
