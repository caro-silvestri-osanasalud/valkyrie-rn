export default ({ config }) => ({
  ...config,
   stories: ["../components/**/*.stories.?(ts|tsx|js|jsx)"],
  name: "Storybook Tutorial Template",
  slug: "storybook-tutorial-template",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
});
