const commitGroupsOrder = {
  features: 1,
  bugfixes: 2,
  docs: 3,
  styles: 4,
  refactor: 5,
  performances: 6,
  tests: 7,
  ci: 8,
  chore: 9,
};

export default {
  branches: ["main", "develop"],
  repositoryUrl: "git@github.com:antoinezanardi/dev-stamp.git",
  plugins: [
    [
      "@semantic-release/commit-analyzer", {
        preset: "conventionalcommits",
        releaseRules: [
          {
            type: "feat",
            release: "minor",
          },
          {
            type: "fix",
            release: "patch",
          },
          {
            type: "docs",
            release: "patch",
          },
          {
            type: "style",
            release: "patch",
          },
          {
            type: "refactor",
            release: "patch",
          },
          {
            type: "perf",
            release: "patch",
          },
          {
            type: "test",
            release: "patch",
          },
          {
            type: "ci",
            release: "patch",
          },
          {
            type: "chore",
            release: "patch",
          },
        ],
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            {
              type: "feat",
              section: "🚀 Features",
              hidden: false,
            },
            {
              type: "fix",
              section: "🐛 Bug Fixes",
              hidden: false,
            },
            {
              type: "docs",
              section: "📖 Docs",
              hidden: false,
            },
            {
              type: "style",
              section: "🎨 Styles",
              hidden: false,
            },
            {
              type: "refactor",
              section: "🔩 Refactor",
              hidden: false,
            },
            {
              type: "perf",
              section: "⚡️ Performances",
              hidden: false,
            },
            {
              type: "test",
              section: "✅ Tests",
              hidden: false,
            },
            {
              type: "ci",
              section: "🔁 CI",
              hidden: false,
            },
            {
              type: "chore",
              section: "🧹 Chore",
              hidden: false,
            },
          ],
        },
        writerOpts: {
          groupBy: "type",
          commitGroupsSort: (commitGroupA, commitGroupB) => {
            const commitGroupTitleA = commitGroupA.title.replace(/[^a-zA-Z]/gu, "").toLowerCase();
            const commitGroupTitleB = commitGroupB.title.replace(/[^a-zA-Z]/gu, "").toLowerCase();

            if (commitGroupsOrder[commitGroupTitleA] === undefined || commitGroupsOrder[commitGroupTitleB] === undefined) {
              return 0;
            }
            return commitGroupsOrder[commitGroupTitleA] - commitGroupsOrder[commitGroupTitleB];
          },
        },
      },
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
        changelogTitle: "# 💮 Dev Stamp Changelog",
      },
    ],
    [
      "@semantic-release/npm",
      { npmPublish: false },
    ],
    [
      "@semantic-release/git",
      {
        assets: [
          "CHANGELOG.md",
          "package.json",
        ],
      },
    ],
    "@semantic-release/github",
    "semantic-release-export-data",
  ],
};