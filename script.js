const promptGroups = [
    {
        id: 1,
        title: "Email Drafting & Polishing",
        description: "Professional email templates and communication strategies",
        prompts: [
            { id: 1, content: "Draft a polite follow-up email to a client who hasn't responded for a week." },
            { id: 2, content: "Write a professional thank-you email after a successful project delivery." },
            { id: 3, content: "Create an email template to request feedback from stakeholders." },
            { id: 4, content: "Rewrite this email to make it sound more concise and formal." },
            { id: 5, content: "Draft a reminder email for an upcoming deadline, keeping it firm but courteous." },
            { id: 6, content: "Create a short apology email for a delayed response to a customer." },
            { id: 7, content: "Write an email requesting approval for a budget increase." },
            { id: 8, content: "Draft a professional introduction email to a new client." },
            { id: 9, content: "Rewrite a casual internal email into a more formal one for senior leadership." },
            { id: 10, content: "Draft an email announcing a project kickoff meeting." },
            { id: 11, content: "Create a clear and polite escalation email for an unresolved issue." },
            { id: 12, content: "Write an email to request information from a colleague in another department." },
            { id: 13, content: "Draft an email confirming meeting details with an external vendor." },
            { id: 14, content: "Rewrite this email to improve tone and remove jargon." },
            { id: 15, content: "Draft an appreciation email to recognize a teammate's contribution." },
            { id: 16, content: "Create an email template for sending weekly status updates to stakeholders." },
            { id: 17, content: "Draft a polite email to request an extension for submitting deliverables." },
            { id: 18, content: "Write an email introducing yourself to a new team after a job change." },
            { id: 19, content: "Draft an announcement email for a new process rollout." },
            { id: 20, content: "Write a formal email requesting supporting documents for an audit." }
        ]
    },
    {
        id: 2,
        title: "Meeting Summaries & Notes",
        description: "Transform meetings into actionable insights and professional documentation",
        prompts: [
            { id: 21, content: "Summarize this meeting transcript into 5 key decisions and 3 action items." },
            { id: 22, content: "Create a bulleted list of follow-ups required from these meeting notes." },
            { id: 23, content: "Draft a one-paragraph summary of this meeting for executive leadership." },
            { id: 24, content: "Turn messy raw notes into a professional meeting minutes format." },
            { id: 25, content: "Extract and categorize risks, dependencies, and open questions from the notes." },
            { id: 26, content: "Create a recap email of the meeting highlights for absent participants." },
            { id: 27, content: "Identify action owners and due dates from the meeting transcript." },
            { id: 28, content: "Rewrite these notes into a professional client-facing summary." },
            { id: 29, content: "Generate a timeline of discussed milestones from the meeting content." },
            { id: 30, content: "Convert meeting notes into a structured agenda for the next call." },
            { id: 31, content: "Extract top 3 priorities discussed in the meeting." },
            { id: 32, content: "Summarize a brainstorming session into themes and next steps." },
            { id: 33, content: "Create a one-page summary of multiple meetings across a project week." },
            { id: 34, content: "Draft a \"decision log\" based on the discussions captured." },
            { id: 35, content: "Generate a list of key questions raised during the meeting." },
            { id: 36, content: "Turn meeting notes into a status report format for stakeholders." },
            { id: 37, content: "Extract who-said-what from the transcript for accountability." },
            { id: 38, content: "Rewrite informal meeting notes into a compliance-ready document." },
            { id: 39, content: "Highlight areas of disagreement and proposed resolutions from the meeting." },
            { id: 40, content: "Create a short LinkedIn-style update summarizing key meeting outcomes." }
        ]
    },
    {
        id: 3,
        title: "Project Management Support",
        description: "Essential tools and frameworks for successful project delivery",
        prompts: [
            { id: 41, content: "Create a simple 3-month project plan with key milestones and deliverables." },
            { id: 42, content: "Draft a weekly project status report template." },
            { id: 43, content: "Suggest a communication plan for stakeholders in a software project." },
            { id: 44, content: "Build a RAID log (Risks, Assumptions, Issues, Dependencies) for a new project." },
            { id: 45, content: "Generate a Gantt chart outline for a website redesign project." },
            { id: 46, content: "Create a checklist for project kickoff activities." },
            { id: 47, content: "Write a standard operating procedure for tracking project issues." },
            { id: 48, content: "Develop a project closure checklist." },
            { id: 49, content: "Suggest 5 methods to improve cross-functional collaboration in a project." },
            { id: 50, content: "Draft a risk mitigation plan for a tight deadline project." },
            { id: 51, content: "Write a project charter for a mobile app development initiative." },
            { id: 52, content: "Create a timeline for a phased software rollout across departments." },
            { id: 53, content: "Generate a stakeholder engagement plan with levels of involvement." },
            { id: 54, content: "Suggest 3 approaches to handle scope creep in an agile project." },
            { id: 55, content: "Draft an email template for escalating project delays to management." },
            { id: 56, content: "Create a sprint retrospective format with questions and sections." },
            { id: 57, content: "Provide a lessons-learned summary format for project postmortem." },
            { id: 58, content: "Outline the roles and responsibilities in a RACI matrix for a small project." },
            { id: 59, content: "Generate KPIs for measuring success of a digital transformation project." },
            { id: 60, content: "Write a 2-slide summary format for presenting project health in leadership meetings." }
        ]
    },
    {
        id: 4,
        title: "Github Copilot Prompts",
        description: "Advanced prompts for enhancing productivity with GitHub Copilot",
        prompts: [
            { id: 1, content: "Improve the user interface by designing a modern, responsive layout using CSS grid and container queries. Ensure accessibility (ARIA roles, keyboard navigation) and optimize for mobile-first performance. Provide scalable styling using a design token system integrated with Tailwind or CSS variables." },
            { id: 2, content: "Refactor this React component into a modular, production-ready component with props validation, TypeScript types, and default accessibility attributes. Ensure that it follows best practices in React 18, supports concurrent rendering, and is fully tree-shakable. Add storybook documentation for testing in isolation." },
            { id: 3, content: "Redesign this dashboard interface to display complex data using React virtualization for high-performance rendering of large datasets. Apply lazy-loading strategies to minimize bundle size and improve interaction latency. Ensure the visuals are adaptive for dark mode and large screen resolutions." },
            { id: 4, content: "Improve error handling in React components by implementing an Error Boundary with structured logging. Provide user-friendly fallback UIs that progressively degrade instead of failing silently. Ensure all errors propagate telemetry to an observability system for analysis." },
            { id: 5, content: "Build a dynamic form generator that takes a JSON schema and automatically produces React forms with validation, conditional rendering, and accessibility baked in. Support extensibility through pluggable field components. Ensure validation errors are clear and consistent across all form inputs." },
            { id: 6, content: "Redesign navigation with a focus on progressive disclosure. Implement a sidebar with collapsible menus, smooth transitions, and ARIA-compliant focus management. Optimize for accessibility and performance on mobile devices." },
            { id: 7, content: "Enhance the user experience by adding predictive prefetching of routes with React Router and React.lazy. Ensure the preloading is optimized for user interaction likelihood, avoiding unnecessary bandwidth usage. Add skeleton loaders for perceived responsiveness." },
            { id: 8, content: "Create a React-based design system component library that supports theming, accessibility, and full unit test coverage. Include interactive documentation via Storybook and ensure it integrates smoothly into CI/CD pipelines. All components should be exportable as ES modules for tree-shaking." },
            { id: 9, content: "Refactor this React table into a high-performance component supporting pagination, infinite scroll, and column virtualization. Add features like column reordering, sticky headers, and contextual filtering. Ensure it handles tens of thousands of rows efficiently at 60fps." },
            { id: 10, content: "Improve the accessibility of this React app by implementing ARIA roles, proper focus management, and keyboard shortcuts. Add automated tests to validate compliance against WCAG 2.1 AA standards. Ensure screen reader compatibility across Chrome, Firefox, and Safari." },
            { id: 11, content: "Re-architect the styling approach to use a design-token-driven theme system. Ensure support for multiple brand themes, light/dark mode toggling, and runtime theme switching. Optimize build output to eliminate unused styles." },
            { id: 12, content: "Add a global state management layer using React Context or Zustand with selective re-rendering optimizations. Ensure that component reactivity remains fine-grained, avoiding unnecessary updates across the tree. Provide performance profiling benchmarks before and after integration." },
            { id: 13, content: "Build an interactive data visualization dashboard using D3.js or Recharts with React. Ensure graphs are responsive, support tooltips, zoom/pan interactions, and accessibility for users with visual impairments. Optimize re-renders using memoization techniques." },
            { id: 14, content: "Refactor legacy class components into modern functional components with hooks. Ensure parity in business logic, introduce TypeScript typing, and add unit tests for reliability. Confirm that the refactor reduces code complexity and improves readability." },
            { id: 15, content: "Design a React component that supports collaborative real-time editing of text or diagrams using CRDTs or OT. Ensure minimal conflict resolution overhead and low-latency rendering. Add optimistic UI updates with rollback strategies for conflicts." },
            { id: 16, content: "Create a wizard-based multi-step form with validation, progress tracking, and save/resume functionality. Ensure accessibility with screen reader support and keyboard navigation. Integrate backend API hooks for partial saves and resumptions." },
            { id: 17, content: "Implement a global error notification system using React portals. Ensure notifications can be stacked, dismissed, or auto-timed out while remaining accessible. Add support for different severities (info, warning, error, success)." },
            { id: 18, content: "Optimize React hydration by applying selective hydration for critical above-the-fold content. Defer non-critical components until idle time using requestIdleCallback or React suspense. Add performance monitoring hooks to track hydration time." },
            { id: 19, content: "Improve the login page by adding passwordless authentication UI with WebAuthn support. Ensure smooth fallback to email OTP or SMS-based flows. Provide progressive loading animations and strong accessibility compliance." },
            { id: 20, content: "Implement drag-and-drop file upload functionality with progress indicators. Integrate with backend file scanning APIs and support resumable uploads. Provide clear error handling for size limits, unsupported file types, and network interruptions." },
            { id: 21, content: "Refactor this Node.js service to follow a 12-factor app architecture, ensuring strict separation of config from code, statelessness, and horizontal scalability. Add structured logging and integrate observability hooks. Ensure code runs consistently across dev, staging, and production environments." },
            { id: 22, content: "Build a Node.js middleware that enforces rate limiting and request shaping based on user roles. Include exponential backoff for repeated offenders and maintain metrics for requests per user. Ensure compatibility with distributed deployments using Redis or DynamoDB as a shared store." },
            { id: 23, content: "Optimize the performance of this API by introducing connection pooling and query batching. Implement caching for frequently requested data using Redis or in-memory LRU strategies. Ensure that cache invalidation rules are clear, atomic, and resilient to race conditions." },
            { id: 24, content: "Implement a CQRS + Event Sourcing architecture for this Node.js microservice. Ensure write and read operations are decoupled, with events persisted immutably. Add replay logic to rebuild state and integrate metrics to monitor lag between projections." },
            { id: 25, content: "Add multi-region failover support to this Node.js service. Implement health checks, circuit breakers, and DNS-level routing to ensure zero downtime. Ensure consistent logging across regions and provide automated rollback strategies." },
            { id: 26, content: "Secure this Node.js authentication flow by adding passwordless login with WebAuthn. Support fallback to TOTP or hardware security keys. Add token rotation strategies and revoke compromised tokens immediately." },
            { id: 27, content: "Build a distributed job queue with Node.js using Kafka or RabbitMQ. Ensure support for retries, dead-letter queues, and delayed execution. Add monitoring for job lag and expose observability metrics via Prometheus endpoints." },
            { id: 28, content: "Implement a GraphQL federation gateway in Node.js that stitches schemas from multiple services. Ensure strong query validation, query depth limiting, and request tracing across federated calls. Add caching for repeated queries to minimize latency." },
            { id: 29, content: "Create a secure file upload pipeline in Node.js with virus scanning and deduplication. Store metadata in PostgreSQL or MongoDB and large files in object storage like S3. Add signed URLs for controlled client access." },
            { id: 30, content: "Add real-time streaming support for high-throughput ingestion pipelines in Node.js. Implement backpressure handling, streaming transformations, and integration with message brokers. Ensure the system gracefully handles partial failures without data loss." },
            { id: 31, content: "Harden this Node.js service against injection attacks by introducing strict input validation, parameterized queries, and sanitization. Add automated security tests in CI to catch regressions. Ensure compliance with OWASP recommendations." },
            { id: 32, content: "Refactor the codebase to use async/await consistently, replacing callback-based APIs. Ensure proper error propagation and add centralized error handling. Add linting rules to enforce modern async patterns going forward." },
            { id: 33, content: "Implement role-based + attribute-based access control (RBAC + ABAC) for sensitive APIs. Ensure policies are evaluated dynamically per request. Add unit tests for permission enforcement across different roles and attributes." },
            { id: 34, content: "Add observability hooks to this Node.js app using OpenTelemetry. Ensure traces propagate through async calls, metrics track latency, and logs include correlation IDs. Provide dashboards in Grafana for live monitoring." },
            { id: 35, content: "Build a multi-tenant data isolation strategy in Node.js. Ensure each tenant’s data is cryptographically isolated in storage and queries are scoped to tenant IDs. Add enforcement at both API and ORM levels." },
            { id: 36, content: "Create a service health endpoint that reports readiness and liveness checks. Integrate with Kubernetes probes to ensure failed instances are auto-restarted. Add diagnostic logging for debugging startup failures." },
            { id: 37, content: "Refactor this monolithic Node.js service into modular microservices. Define clear service boundaries, shared schemas, and inter-service communication protocols (REST or gRPC). Ensure APIs remain backwards-compatible during the transition." },
            { id: 38, content: "Build a real-time notification delivery system in Node.js using WebSockets or Server-Sent Events. Ensure scalable fan-out delivery for thousands of clients. Add message buffering and retries for disconnected clients." },
            { id: 39, content: "Implement a secure secrets management integration with HashiCorp Vault or AWS KMS. Ensure secrets are never stored in plaintext on disk or logs. Rotate secrets automatically and audit all access attempts." },
            { id: 40, content: "Optimize this Node.js API for low-latency, high-throughput scenarios. Use clustering, worker threads, and zero-copy buffers for efficiency. Add stress tests and profiling to validate improvements at 99th percentile latencies." },
            { id: 41, content: "Architect a multi-region high-availability system for a Node.js + React application. Ensure CAP tradeoffs are explicitly considered, with strong consistency for financial transactions and eventual consistency for less critical operations. Add disaster recovery strategies and automated failover tests." },
            { id: 42, content: "Build an API gateway service that enforces authentication, rate limiting, and request caching. Ensure the gateway supports observability hooks for tracing requests across distributed services. Add extensibility so new microservices can register without redeployment." },
            { id: 43, content: "Implement a circuit breaker pattern in Node.js services to gracefully degrade during dependency failures. Ensure fallback responses are cached, with exponential backoff retries. Add metrics to track open/closed states of the breakers for monitoring." },
            { id: 44, content: "Create a distributed job orchestration system in Node.js using Kafka or NATS. Support job retries, dead-letter queues, and priority scheduling. Ensure monitoring dashboards show job success rates, failure causes, and retry counts." },
            { id: 45, content: "Design a blue-green + canary deployment system for React + Node.js services. Ensure traffic splitting is progressive and automated rollbacks are triggered on error spikes. Integrate with observability pipelines for live feedback loops." },
            { id: 46, content: "Implement multi-environment configuration management for a Node.js system. Use encrypted secrets and config maps to prevent leakage of sensitive values. Ensure configs can be overridden per environment while maintaining consistency across dev, staging, and production." },
            { id: 47, content: "Profile this React application using the React Profiler and Chrome DevTools. Optimize re-renders by applying memoization and selective hydration. Ensure hydration costs are minimized for above-the-fold content and test improvements against Lighthouse metrics." },
            { id: 48, content: "Refactor Node.js APIs to support request batching and coalescing under high load. Ensure duplicated queries are merged to minimize DB round-trips. Add request tracing to validate reduced latency at scale." },
            { id: 49, content: "Add a global caching strategy using Redis + CDN for React + Node.js applications. Ensure cache invalidation rules are atomic, tenant-aware, and resilient. Provide metrics on cache hit/miss ratios to optimize further." },
            { id: 50, content: "Optimize this React dashboard for 60fps rendering of large data tables. Apply virtualization (windowing) techniques, memoize row components, and throttle scroll event handling. Validate improvements with real user monitoring." },
            { id: 51, content: "Profile Node.js event loop performance and identify bottlenecks. Add backpressure handling for async pipelines to prevent queue overload. Ensure stress tests confirm improvements at the 99th percentile." },
            { id: 52, content: "Implement predictive prefetching of React routes and data based on user behavior. Use heuristics to preload only the most likely navigation paths. Ensure prefetching is canceled when user behavior diverges." },
            { id: 53, content: "Refactor database interactions in Node.js to minimize N+1 queries. Implement data loaders or batching techniques. Confirm latency reduction with A/B testing under simulated production loads." },
            { id: 54, content: "Add a client-side performance monitoring system for React apps. Capture metrics like FCP, LCP, TTFB, and CLS in real-time. Integrate with an observability backend to aggregate user performance data." },
            { id: 55, content: "Build a real-time distributed cache invalidation system for Node.js services. Ensure updates propagate instantly across clusters. Validate with load tests to confirm consistency under concurrent writes." },
            { id: 56, content: "Optimize image handling in React by applying responsive image techniques, lazy loading, and modern formats like WebP/AVIF. Ensure progressive enhancement for browsers lacking support. Measure improvements in Core Web Vitals." },
            { id: 57, content: "Write a Node.js script to identify slow queries in PostgreSQL and recommend indexes. Automate index suggestion reports while validating against query plans. Ensure results are version-controlled for audit." },
            { id: 58, content: "Refactor React hydration to use selective partial hydration with suspense boundaries. Ensure non-critical components load after interaction or idle time. Measure TTI improvements in real-world tests." },
            { id: 59, content: "Build a telemetry-driven auto-scaling policy for Node.js services. Ensure scaling decisions are based on latency, request throughput, and error rate rather than just CPU usage. Validate with load-testing scenarios." },
            { id: 60, content: "Implement an end-to-end CDN caching pipeline for a React + Node.js app. Ensure fine-grained cache keys account for tenant, locale, and authentication state. Add observability to track cache performance over time." },
            { id: 61, content: "Implement contract testing between React frontend and Node.js backend using Pact. Ensure contracts are validated in CI/CD pipelines so breaking changes are caught before deployment. Provide automated rollback strategies if mismatches are detected in production." },
            { id: 62, content: "Add property-based testing for a complex Node.js algorithm using tools like fast-check. Ensure the test explores thousands of random edge cases beyond typical unit tests. Validate correctness by confirming outputs remain within specified invariants." },
            { id: 63, content: "Create a cross-browser test harness for React components using Playwright. Ensure tests run against Chrome, Firefox, and Safari with visual snapshots for consistency. Automate execution in CI/CD with artifacts saved for debugging failures." },
            { id: 64, content: "Implement a fuzzing pipeline for Node.js APIs to catch injection and overflow vulnerabilities. Automate random input generation and run fuzz tests nightly. Report anomalies to a central dashboard for triage." },
            { id: 65, content: "Build an end-to-end test strategy that validates React hydration, Node.js APIs, and database consistency. Ensure tests simulate real-world traffic with concurrent users. Automate reporting of performance regressions alongside functional results." },
            { id: 66, content: "Introduce synthetic monitoring bots that mimic user flows in React applications. Run them continuously in production to detect outages before real users are impacted. Integrate alerts with Slack or PagerDuty for immediate response." },
            { id: 67, content: "Implement mutation testing in Node.js services to measure the effectiveness of the current unit test suite. Ensure mutation scores are tracked over time in CI/CD pipelines. Provide developers with actionable insights on weak test coverage." },
            { id: 68, content: "Add visual regression testing for the React design system using tools like Chromatic or Percy. Ensure component changes are reviewed with semantic diffs, not just pixel comparisons. Automate approvals for minor changes while flagging major shifts." },
            { id: 69, content: "Build a chaos testing framework for Node.js services to simulate partial outages and network failures. Validate that circuit breakers, retries, and failover strategies behave as expected. Run experiments periodically to confirm resilience." },
            { id: 70, content: "Ensure backwards compatibility testing across React + Node.js releases. Automate comparison of API responses and UI states between old and new builds. Fail builds if regressions are detected in legacy support." },
            { id: 71, content: "Build a CI/CD pipeline with GitHub Actions for React + Node.js apps. Ensure deployments are zero-downtime, with automated rollback if error rates spike. Add security scanning and unit test gates before deploy." },
            { id: 72, content: "Implement a progressive deployment system with staged rollouts across environments. Ensure deployments gradually ramp traffic from canary to full rollout. Automate rollback if latency or error budgets are violated." },
            { id: 73, content: "Create an infrastructure-as-code setup with Terraform for a React + Node.js platform. Ensure parity across dev, staging, and production environments. Enforce security baselines with automated compliance checks." },
            { id: 74, content: "Refactor the Node.js Docker build process into a multi-stage build. Ensure final images are minimal, reproducible, and free from unnecessary dependencies. Automate vulnerability scans against the build artifacts." },
            { id: 75, content: "Implement a self-healing system for Node.js microservices in Kubernetes. Ensure liveness and readiness probes detect failures quickly. Add auto-restart and traffic draining strategies to minimize user impact." },
            { id: 76, content: "Introduce a GitOps pipeline using ArgoCD for React + Node.js apps. Ensure all deployment manifests are declarative and version-controlled. Add policy enforcement to prevent unsafe configuration changes." },
            { id: 77, content: "Build an observability stack for full-stack apps with centralized logs, metrics, and traces. Ensure React source maps are uploaded for debugging client errors. Integrate dashboards in Grafana for unified monitoring." },
            { id: 78, content: "Implement policy-as-code with OPA/Rego to enforce deployment security rules. Prevent services from being deployed with misconfigured security groups or open ports. Automate checks inside the CI/CD pipeline." },
            { id: 79, content: "Refactor the build pipeline to enforce immutable build artifacts. Ensure every deployment references a cryptographic hash of the build. Add traceability to link builds back to source commits and test results." },
            { id: 80, content: "Create a multi-cloud deployment strategy for Node.js services across AWS and GCP. Ensure traffic failover occurs automatically when one cloud provider has an outage. Validate performance parity across regions with benchmarks." },
            { id: 81, content: "Build a React hook that integrates with an LLM API to provide contextual in-app AI assistance. Ensure the hook supports streaming responses, cancellation, and offline fallbacks. Add safeguards to prevent prompt injection vulnerabilities." },
            { id: 82, content: "Implement a Node.js service that performs semantic search using embeddings and a vector database. Ensure queries scale across millions of documents with low latency. Add monitoring for embedding drift and query accuracy." },
            { id: 83, content: "Create a React-based interface for prompt engineering workflows. Allow developers to modify prompts, view live model responses, and store successful configurations. Ensure outputs are versioned and auditable for consistency." },
            { id: 84, content: "Build a Node.js pipeline that automates data labeling with AI-assisted annotation. Ensure a human-in-the-loop review system exists to validate edge cases. Add a feedback loop to improve future auto-labeling accuracy." },
            { id: 85, content: "Implement AI-driven unit test generation for React components. Ensure generated tests cover edge cases and common interaction patterns. Integrate into CI/CD so that missing coverage is automatically flagged." },
            { id: 86, content: "Build a semantic code search engine for a monorepo using embeddings. Allow developers to search by intent rather than keywords. Ensure results highlight code context, dependencies, and related documentation." },
            { id: 87, content: "Create a React component for speech-to-text and text-to-speech features. Optimize for accessibility, supporting multiple languages and real-time transcription. Add fallbacks for browsers without native speech APIs." },
            { id: 88, content: "Implement a Node.js tool that applies automated refactoring suggestions using static analysis and LLM recommendations. Ensure changes are reviewed with unit tests before merging. Provide a rollback mechanism for unsafe transformations." },
            { id: 89, content: "Build an AI-powered code review assistant for pull requests. Enforce style, security, and performance standards. Ensure suggestions are actionable and automatically flagged when severity is high." },
            { id: 90, content: "Add a React component for real-time AI translation in collaborative applications. Support bidirectional translation across multiple languages. Ensure latency remains low enough for conversational experiences." },
            { id: 91, content: "Implement isomorphic rendering between React frontend and Node.js backend. Ensure shared business logic runs on both sides for faster development. Add hydration strategies to minimize bundle duplication." },
            { id: 92, content: "Build a self-optimizing Node.js service that dynamically adjusts resource usage. Use telemetry to scale worker pools and optimize event loop handling. Validate improvements with live stress tests." },
            { id: 93, content: "Create a high-fidelity React whiteboard with support for real-time drawing, undo/redo, and offline synchronization. Ensure collaboration is conflict-free using CRDTs. Optimize rendering to maintain smooth interactions." },
            { id: 94, content: "Implement a workflow orchestration engine in Node.js similar to Temporal. Ensure long-running jobs can pause, resume, and recover after failures. Add a dashboard for job status and debugging." },
            { id: 95, content: "Build a pluggable plugin system for a React + Node.js app. Ensure plugins can extend functionality in isolation without breaking core logic. Provide a sandbox environment for safe execution." },
            { id: 96, content: "Create a collaborative Kanban board in React with real-time syncing. Support optimistic UI updates and rollback for conflicting edits. Ensure scalability for thousands of concurrent users." },
            { id: 97, content: "Implement a Node.js data lake ingestion pipeline with schema validation. Support automatic partitioning and metadata indexing for fast queries. Ensure corrupt data is quarantined with audit logs." },
            { id: 98, content: "Build a real-time fraud detection system in Node.js using streaming ML models. Ensure latency is under 200ms for transaction approvals. Add anomaly detection metrics and auto-escalation rules." },
            { id: 99, content: "Create a fully type-safe stack using React, Node.js, and TypeScript end-to-end. Ensure API contracts are enforced across client and server with shared schemas. Add CI checks to guarantee no runtime type mismatches." },
            { id: 100, content: "Build a multi-tenant SaaS observability dashboard with React frontend and Node.js backend. Support per-tenant dashboards, anomaly detection, and custom metrics ingestion. Ensure strong isolation and role-based access to data." }
        ],
    },
    {
        id: 5,
        title: "Daily Scrum / Standup Updates",
        description: "How to explain standup updates naturally as a senior or lead developer",
        prompts: [
            {
                id: 1,
                response: "Yesterday I completed task ____ related to the ____ feature. This cleared one of our sprint objectives and sets up the team to move forward without blockers."
            },
            {
                id: 2,
                response: "Today I’ll be focusing on task ____ which covers ____ functionality. My goal is to progress this enough to get it ready for review by the end of the day."
            },
            {
                id: 3,
                response: "I’m currently blocked because ____ is pending from Team ____. This impacts our ability to finish feature ____ on time, and resolving it quickly will help us stay aligned with sprint goals."
            },
            {
                id: 4,
                response: "The work I completed yesterday improves ____ for the end-user. Simply put, this means users will notice ____ once the feature is live."
            },
            {
                id: 5,
                response: "Quick update: Yesterday I wrapped up ____. Today I’ll be working on ____. I have a blocker on ____ that needs resolution before I can proceed further."
            },
            {
                id: 6,
                response: "My progress on task ____ depends on ____ completing their part. Once that’s done, I can immediately continue without delays."
            },
            {
                id: 7,
                response: "I’m blocked because ____ hasn’t been completed. This directly impacts feature ____ and could delay our sprint goal if not addressed soon."
            },
            {
                id: 8,
                response: "I want to flag a potential risk: task ____ may take longer due to ____. I’ll monitor this closely and keep the team updated on progress."
            },
            {
                id: 9,
                response: "Yesterday – finished ____. Today – working on ____. Blocker – waiting for review on ____ before I can proceed."
            },
            {
                id: 10,
                response: "In addition to my main tasks, I supported the team by reviewing ____ and pairing with ____ on their story. This should help speed up their progress."
            },
            {
                id: 11,
                response: "We closed task ____ which reduces load times for ____. This should improve the customer experience significantly once deployed."
            },
            {
                id: 12,
                response: "I’ll need some input from ____ on how to approach ____. If we can connect today, I’ll be unblocked and able to continue."
            },
            {
                id: 13,
                response: "I won’t go into deep technical details here, but I’ve documented the approach in ____. Happy to explain it further after standup if needed."
            },
            {
                id: 14,
                response: "I faced some challenges yesterday but still managed to close task ____. Today I’ll continue with ____ and expect smoother progress."
            },
            {
                id: 15,
                response: "Yesterday’s work on ____ contributes directly to completing feature ____ in this sprint. We’re still aligned with our sprint goal."
            },
            {
                id: 16,
                response: "Yesterday I worked on ____ and wrapped up ____. Today I’ll be focusing on ____ and expect no blockers so far."
            },
            {
                id: 17,
                response: "The blocker I mentioned yesterday on ____ has been resolved. I can now continue with the next step on ____ without issues."
            },
            {
                id: 18,
                response: "I paired with ____ yesterday to help with their task on ____. This collaboration should speed things up and reduce rework later."
            },
            {
                id: 19,
                response: "One dependency to flag: Feature ____ relies on Team ____ finishing task ____. Once that’s done, I’ll pick it up immediately."
            },
            {
                id: 20,
                response: "To wrap up: Yesterday completed ____, today focusing on ____, no major blockers. All of this is aligned with our sprint priorities."
            }
        ]
    }
    ,
    {
        id: 6,
        title: "Task & Work Prioritization",
        description: "How to explain task planning, prioritization, and dependencies as a senior or lead developer",
        prompts: [
            {
                id: 21,
                response: "I’ve broken down the large feature ____ into smaller deliverables. This way, each part can be completed in a day or two and assigned to different team members for faster progress."
            },
            {
                id: 22,
                response: "I’m prioritizing task ____ first because it delivers higher business value. Once that’s done, we can shift focus to ____ which has lower urgency."
            },
            {
                id: 23,
                response: "Before starting work on ____, I checked its dependencies. It relies on ____ being finished, so I’ll monitor that closely to avoid delays."
            },
            {
                id: 24,
                response: "I’ve reordered the backlog so that we focus on ____ first. This keeps us aligned with the sprint goal while ensuring critical items are delivered on time."
            },
            {
                id: 25,
                response: "For task ____, I clarified the acceptance criteria with ____. This will help avoid rework and make sure the definition of done is clear to everyone."
            },
            {
                id: 26,
                response: "The effort for task ____ looks higher than expected, so I’ve shared an updated estimate. This helps set realistic expectations for sprint planning."
            },
            {
                id: 27,
                response: "I’ve balanced work between fixing bugs like ____ and building new features like ____. This ensures stability without slowing innovation."
            },
            {
                id: 28,
                response: "Based on new business input, I’ve reprioritized ____ to a higher level. This means some lower-impact items like ____ will move to the next sprint."
            },
            {
                id: 29,
                response: "Task ____ was too big, so I split it into sub-tasks: ____, ____, and ____. Each is now small enough to complete in a day or two."
            },
            {
                id: 30,
                response: "I’ve noticed that task ____ is consuming a lot of effort but has low impact. I recommend we de-prioritize it in favor of ____ which adds more value."
            },
            {
                id: 31,
                response: "Before starting task ____, I confirmed that it aligns with the sprint goal ____. This keeps us focused on what really matters."
            },
            {
                id: 32,
                response: "I’ve updated the task board to reflect progress on ____. This makes sure everyone can see the latest status without waiting for a sync."
            },
            {
                id: 33,
                response: "I feel the estimate for task ____ is unrealistic. I recommend revisiting it with the team before we commit too heavily."
            },
            {
                id: 34,
                response: "Task ____ is blocked by an external dependency on ____. While waiting, I’ll work on ____ so we don’t lose time."
            },
            {
                id: 35,
                response: "I’ve identified a quick win: task ____ can be completed quickly and delivers immediate value. This keeps momentum high while we wait on bigger items."
            },
            {
                id: 36,
                response: "Workload seems uneven, so I suggest rebalancing. For example, I can take on ____ so that ____ isn’t overloaded."
            },
            {
                id: 37,
                response: "Since priorities shifted, I’ve informed stakeholders about moving ____ to the next sprint. This keeps expectations realistic and transparent."
            },
            {
                id: 38,
                response: "I recommend we avoid overcommitting. For example, instead of taking both ____ and ____, we should focus on the higher-impact one first."
            },
            {
                id: 39,
                response: "During retrospectives, I’ll propose we improve how we prioritize tasks. For example, task ____ could have been caught earlier as non-essential."
            },
            {
                id: 40,
                response: "Before committing to task ____, I checked if it directly contributes to the project’s success. If it doesn’t, I’ll suggest parking it for later."
            }
        ]
    }, {
        id: 7,
        title: "Code Reviews & Technical Guidance",
        description: "How to explain code review feedback, technical decisions, and guidance as a senior or lead developer",
        prompts: [
            {
                id: 41,
                response: "In reviewing the code for ____, I noticed that we can simplify the logic by using ____. This reduces complexity and makes it easier to maintain."
            },
            {
                id: 42,
                response: "The naming convention in ____ isn’t consistent with our standard. I suggest renaming it to ____ so the code is more readable for everyone."
            },
            {
                id: 43,
                response: "I observed that function ____ has duplicate logic already present in ____. We should refactor it to reuse the existing code instead of duplicating."
            },
            {
                id: 44,
                response: "For performance, the loop in ____ can be optimized. Switching to ____ will cut down unnecessary iterations and speed things up."
            },
            {
                id: 45,
                response: "I recommend adding unit tests for ____ since it’s a core part of the system. This will help catch regressions early and increase confidence in changes."
            },
            {
                id: 46,
                response: "I suggest we use dependency injection for ____ instead of hardcoding. This makes the code more flexible and easier to test."
            },
            {
                id: 47,
                response: "Error handling in ____ isn’t complete. We should add proper handling for cases like ____ to avoid failures in production."
            },
            {
                id: 48,
                response: "The current PR for ____ lacks documentation. Adding inline comments and updating the README will help future developers understand the changes."
            },
            {
                id: 49,
                response: "I noticed security concerns in ____ where input isn’t validated. We should sanitize user input to prevent issues like ____."
            },
            {
                id: 50,
                response: "The code style in ____ doesn’t match our linting rules. Please run the formatter to make sure it’s consistent with the rest of the codebase."
            },
            {
                id: 51,
                response: "The logic for ____ could be extracted into a utility function. This avoids repetition and improves clarity."
            },
            {
                id: 52,
                response: "Instead of using hardcoded values in ____, we should move them into configuration files. That way, they can be updated without code changes."
            },
            {
                id: 53,
                response: "The commit message for ____ isn’t descriptive. Writing clear commit messages helps others understand the purpose of the change."
            },
            {
                id: 54,
                response: "I recommend breaking down this PR into smaller chunks. For example, separate the feature addition ____ from the bug fix ____, so reviews are more effective."
            },
            {
                id: 55,
                response: "We should add logging in ____ for better observability. This will help us debug faster if issues occur in production."
            },
            {
                id: 56,
                response: "Instead of using nested if-else in ____, consider using a switch statement or strategy pattern. This makes the flow easier to follow."
            },
            {
                id: 57,
                response: "I noticed the function ____ has grown too large. Splitting it into smaller, focused methods will improve readability and testing."
            },
            {
                id: 58,
                response: "The API response handling in ____ should include edge cases. For instance, handle timeouts and invalid responses gracefully."
            },
            {
                id: 59,
                response: "I recommend aligning the data model for ____ with the existing schema in ____. This ensures consistency across the application."
            },
            {
                id: 60,
                response: "The approach in ____ works, but using a library like ____ would be more efficient and maintainable in the long run."
            }
        ]
    },
    {
        id: 8,
        title: "Demo Preparation & Presentation",
        description: "How to prepare and explain features, progress, and outcomes during demos as a senior or lead developer",
        prompts: [
            {
                id: 61,
                response: "For today’s demo, I’ll walk you through feature ____. The goal was to improve ____ for the end-user, and I’ll show how it now works end-to-end."
            },
            {
                id: 62,
                response: "This sprint, we focused on building ____. In the demo, you’ll see how the changes enhance ____ and simplify the overall workflow."
            },
            {
                id: 63,
                response: "Before I show the functionality, let me explain the context. We built ____ to solve the problem of ____, which was causing delays earlier."
            },
            {
                id: 64,
                response: "I’ll first present the user perspective of ____, then highlight some of the behind-the-scenes technical improvements we made in ____."
            },
            {
                id: 65,
                response: "The flow starts with ____ where users can now ____. I’ll demonstrate step by step how this improves the process compared to before."
            },
            {
                id: 66,
                response: "Here you can see the updated UI for ____. We simplified the layout to make it clearer and ensure that users can complete ____ faster."
            },
            {
                id: 67,
                response: "We added validations in ____ to prevent errors. For example, if users enter ____, they’ll now see a proper message instead of system failure."
            },
            {
                id: 68,
                response: "On the backend, we optimized ____ to handle more requests. In the demo, notice how the response time is now ____ compared to earlier."
            },
            {
                id: 69,
                response: "We’ve integrated ____ with ____ system. This allows data to flow automatically, and I’ll show a live example of how this works in practice."
            },
            {
                id: 70,
                response: "We also focused on fixing issues in ____. During the demo, I’ll highlight the bug before and after the fix so you can see the improvement clearly."
            },
            {
                id: 71,
                response: "In this demo, you’ll see a new workflow for ____. It reduces manual steps and ensures users can complete ____ with fewer clicks."
            },
            {
                id: 72,
                response: "We prioritized accessibility in this feature. For instance, in ____, users with ____ will now be able to interact more effectively."
            },
            {
                id: 73,
                response: "One of the major outcomes is that ____ is now fully automated. I’ll demonstrate how the automation works and the time it saves."
            },
            {
                id: 74,
                response: "We created dashboards in ____ to visualize key metrics. In the demo, you’ll see how stakeholders can quickly track ____."
            },
            {
                id: 75,
                response: "Here’s an error scenario we accounted for in ____. I’ll show what happens if users input ____, and how the system handles it gracefully."
            },
            {
                id: 76,
                response: "Security was a focus area this sprint. In ____, we’ve implemented ____ to ensure that only authorized users can access it."
            },
            {
                id: 77,
                response: "Scalability improvements were made in ____. I’ll demonstrate with a scenario where multiple users access it simultaneously and show the stable performance."
            },
            {
                id: 78,
                response: "We’ve streamlined the integration between ____ and ____. In the demo, you’ll see how the data syncs seamlessly without manual intervention."
            },
            {
                id: 79,
                response: "We added logging and monitoring in ____. I’ll show how errors and key events are captured, making it easier for us to track system health."
            },
            {
                id: 80,
                response: "To conclude the demo, I’ll summarize the business impact: with ____, users now experience ____ and the team benefits by ____."
            }
        ]
    }
    ,
    {
        id: 9,
        title: "Stakeholder Communication & Status Reporting",
        description: "How to explain project status, risks, and progress updates effectively to stakeholders as a senior or lead developer",
        prompts: [
            {
                id: 81,
                response: "Currently, the team has completed ____% of the sprint backlog. The key feature ____ is on track, while ____ requires additional review."
            },
            {
                id: 82,
                response: "This week, we made significant progress on ____. The feature is now ready for testing, which will allow stakeholders to validate it earlier."
            },
            {
                id: 83,
                response: "The risk we’ve identified is ____. To mitigate it, we’ve planned ____ and are monitoring closely to avoid delays."
            },
            {
                id: 84,
                response: "From a timeline perspective, ____ is progressing ahead of schedule, while ____ might require additional effort to close on time."
            },
            {
                id: 85,
                response: "User feedback on ____ has been positive, especially regarding ____. We’ll continue refining based on these insights."
            },
            {
                id: 86,
                response: "The current blocker is ____, which is outside our immediate team’s control. We’ve escalated it to ____ and are awaiting resolution."
            },
            {
                id: 87,
                response: "We’ve reduced technical debt in ____ by refactoring and improving code quality. This ensures stability for upcoming releases."
            },
            {
                id: 88,
                response: "In terms of deliverables, ____ has been completed, and ____ is in progress. We are confident about meeting the sprint goals."
            },
            {
                id: 89,
                response: "The dependency on ____ is a concern since delays there could affect ____. We’re coordinating closely with that team to minimize impact."
            },
            {
                id: 90,
                response: "For upcoming milestones, we are targeting completion of ____ by ____. This aligns with the broader roadmap for ____."
            },
            {
                id: 91,
                response: "The demo of ____ received valuable feedback. We’ve already addressed ____ and will update the next version accordingly."
            },
            {
                id: 92,
                response: "Our focus this sprint has been improving ____ which directly benefits ____. Stakeholders should start seeing measurable impact soon."
            },
            {
                id: 93,
                response: "To ensure transparency, we’ve set up regular reporting on ____. This will help stakeholders track progress without waiting until sprint reviews."
            },
            {
                id: 94,
                response: "One challenge we faced was ____ which slowed progress. However, with the fix in place, the team is back on track."
            },
            {
                id: 95,
                response: "Cross-team collaboration has improved for ____. By aligning priorities with ____, we’ve reduced delays in delivery."
            },
            {
                id: 96,
                response: "The testing phase for ____ is nearly complete, with only a few issues in ____. We expect closure before the next sprint planning."
            },
            {
                id: 97,
                response: "We’re continuously monitoring performance in ____. Initial metrics show that ____ has improved by ____% since deployment."
            },
            {
                id: 98,
                response: "Looking ahead, the next priority is ____. We’ll be allocating more resources to ensure timely completion without compromising quality."
            },
            {
                id: 99,
                response: "Stakeholder concerns about ____ have been noted. We’re addressing them by adjusting the approach in ____ to balance scope and deadlines."
            },
            {
                id: 100,
                response: "To summarize: completed ____, in progress ____, blocked ____. No major risks beyond ____, and we remain aligned with overall project goals."
            }
        ]
    },
    {
        id: 10,
        title: "Technical Decision Making & Design Discussions",
        description: "How to explain and justify technical choices, architectural decisions, and design trade-offs as a senior or lead developer",
        prompts: [
            {
                id: 101,
                response: "We chose ____ over ____ because it provides better scalability and aligns with the long-term needs of the project."
            },
            {
                id: 102,
                response: "The architecture for ____ has been designed to handle high concurrency. By using ____, we ensure performance and stability."
            },
            {
                id: 103,
                response: "While both options were considered, we prioritized ____ since it reduces complexity and offers faster time-to-market."
            },
            {
                id: 104,
                response: "Our decision to implement ____ was based on its proven reliability in similar projects and ease of integration with ____."
            },
            {
                id: 105,
                response: "We’ve introduced ____ as part of the design to improve maintainability. This way, future changes will be less disruptive."
            },
            {
                id: 106,
                response: "The trade-off here is between performance and flexibility. By selecting ____, we gain scalability while still keeping the system modular."
            },
            {
                id: 107,
                response: "To minimize risks, we opted for a gradual rollout of ____. This allows us to validate assumptions without impacting all users."
            },
            {
                id: 108,
                response: "The reason we avoided ____ is due to its long-term support concerns. Instead, ____ provides a stable path forward."
            },
            {
                id: 109,
                response: "We’ve aligned our design with industry best practices for ____. This ensures that the system remains future-proof and secure."
            },
            {
                id: 110,
                response: "To handle expected growth, the design incorporates ____. This ensures the system scales smoothly as usage increases."
            },
            {
                id: 111,
                response: "We introduced caching for ____ since repeated lookups were slowing response times. This reduces latency significantly."
            },
            {
                id: 112,
                response: "In terms of security, we’ve implemented ____ to safeguard sensitive data. This balances compliance with usability."
            },
            {
                id: 113,
                response: "We’ve chosen a microservices approach for ____ so teams can work independently and deployments remain flexible."
            },
            {
                id: 114,
                response: "While monolithic architecture could have simplified initial setup, we went with ____ to avoid future scaling challenges."
            },
            {
                id: 115,
                response: "The design ensures backward compatibility with ____. This reduces risk for users who haven’t migrated yet."
            },
            {
                id: 116,
                response: "We opted to build ____ in-house because customization is critical, whereas adopting ____ off-the-shelf would limit flexibility."
            },
            {
                id: 117,
                response: "The cost-benefit analysis showed that investing in ____ now will save significant rework and infrastructure costs later."
            },
            {
                id: 118,
                response: "We’ve structured the database schema for ____ with normalization in mind, but selectively denormalized to optimize query performance."
            },
            {
                id: 119,
                response: "Our logging and monitoring design around ____ ensures issues can be detected and resolved before they affect end users."
            },
            {
                id: 120,
                response: "We selected ____ as the standard across the project, ensuring consistency in code, maintainability, and developer onboarding."
            }
        ]
    }



];

// Application state
let currentView = 'homepage';
let currentGroup = null;
let copiedPrompts = new Set();

// DOM elements
const homepage = document.getElementById('homepage');
const dashboard = document.getElementById('dashboard');
const promptDetail = document.getElementById('prompt-detail');
const toast = document.getElementById('toast');

// Navigation event listeners
document.getElementById('nav-dashboard-btn').addEventListener('click', () => showDashboard());
document.getElementById('hero-dashboard-btn').addEventListener('click', () => showDashboard());
document.getElementById('back-home-btn').addEventListener('click', () => showHomepage());
document.getElementById('back-dashboard-btn').addEventListener('click', () => showDashboard());

// Utility functions
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    currentView = pageId;
}

function showHomepage() {
    showPage('homepage');
}

function showDashboard() {
    showPage('dashboard');
    renderCategories();
}

function showPromptDetail(group) {
    currentGroup = group;
    showPage('prompt-detail');
    renderPromptDetail();
}

function renderCategories() {
    const grid = document.getElementById('categories-grid');
    grid.innerHTML = '';

    promptGroups.forEach(group => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.addEventListener('click', () => showPromptDetail(group));

        card.innerHTML = `
            <div class="category-header">
                <div class="category-badge">${group.prompts.length} prompts</div>
                <div class="category-decoration"></div>
            </div>
            <h3>${group.title}</h3>
            <p>${group.description}</p>
            <button class="btn btn-outline">Explore Prompts</button>
        `;

        grid.appendChild(card);
    });
}

function renderPromptDetail() {
    if (!currentGroup) return;

    document.getElementById('detail-category-title').textContent = currentGroup.title;
    document.getElementById('detail-category-description').textContent = currentGroup.description;

    const promptsList = document.getElementById('prompts-list');
    promptsList.innerHTML = '';

    currentGroup.prompts.forEach((prompt, index) => {
        const card = document.createElement('div');
        card.className = 'prompt-card';

        const copyBtnId = `copy-btn-${prompt.id}`;
        const isCopied = copiedPrompts.has(prompt.id);

        card.innerHTML = `
            <div class="prompt-content">
                <div class="prompt-body">
                    <div class="prompt-meta">
                        <div class="prompt-number">${index + 1}</div>
                        <span class="prompt-label">Prompt</span>
                    </div>
                    <p class="prompt-text">${prompt.content}</p>
                </div>
                <button id="${copyBtnId}" class="btn btn-outline btn-sm copy-btn ${isCopied ? 'copied' : ''}">
                    ${isCopied ? `
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Copied
                    ` : `
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                        </svg>
                        Copy
                    `}
                </button>
            </div>
        `;

        promptsList.appendChild(card);

        // Add click event listener to copy button
        document.getElementById(copyBtnId).addEventListener('click', () => {
            copyToClipboard(prompt.content, prompt.id, copyBtnId);
        });
    });
}

async function copyToClipboard(text, promptId, buttonId) {
    try {
        await navigator.clipboard.writeText(text);

        // Update button state
        copiedPrompts.add(promptId);
        const button = document.getElementById(buttonId);
        button.classList.add('copied');
        button.innerHTML = `
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Copied
        `;

        // Show toast
        showToast();

        // Reset button after 2 seconds
        setTimeout(() => {
            copiedPrompts.delete(promptId);
            button.classList.remove('copied');
            button.innerHTML = `
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
                Copy
            `;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
        showToast('Failed to copy text', true);
    }
}

function showToast(message = 'Prompt copied to clipboard!', isError = false) {
    toast.classList.add('show');

    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    showHomepage();
});