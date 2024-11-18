const Sentry = require("@sentry/node");
const { nodeProfilingIntegration } = require("@sentry/profiling-node");

Sentry.init({
  dsn: "https://d4cb3c0cf7bf76cdfb71fc5bb8b3c5e7@o4508236961415168.ingest.de.sentry.io/4508315823702096",
  integrations: [nodeProfilingIntegration()],
  tracesSampleRate: 1.0,
});

Sentry.profiler.startProfiler();

Sentry.startSpan(
  {
    name: "My First Transaction",
  },
  () => {}
);

Sentry.profiler.stopProfiler();
