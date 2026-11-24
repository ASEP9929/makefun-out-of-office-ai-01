import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I'm on vacation until my context window stops screaming. 4,096 tabs muted, one human blocked — if the servers miss me, they can file a ticket.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
